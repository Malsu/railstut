class User < ApplicationRecord
  
  has_secure_password
  
  # Accessors
  attr_accessor :remember_token, :activation_token, :reset_token

  # Constants
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  # Callbacks
  before_save :downcase_email
  before_create :create_activation_digest 

  # Validations
	validates :name,                  presence: true, length: { maximum: 50 }		
  validates :email,                 presence: true, 
                                    length: { maximum: 255 }, 
                                    format: { with: VALID_EMAIL_REGEX },
  									                uniqueness: { case_sensitive: false }
  validates :password,              presence: true, length: { minimum: 6 }, allow_nil: true
  #validates :password_confirmation, presence: true, length: { minimum: 6 }

  # Class methods

  # Returns the hash digest of the given string
  def User.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST : BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end

  # Returns a random token
  def User.new_token
    SecureRandom.urlsafe_base64
  end

  def remember
    self.remember_token = User.new_token
    update_attribute( :remember_digest, User.digest( remember_token ) )
  end

  def forget
    update_attribute( :remember_digest, nil )
  end

  # Returns true if the given token matches the digest.
  def authenticated?( attribute, token )
    digest = self.send( "#{attribute}_digest" )
    return false if digest.nil?
    BCrypt::Password.new( digest ).is_password?( token )
  end

  # Converts email to all lower-case
  def downcase_email
    self.email = self.email.downcase
  end

  # Creates and assigns the activation token and digest
  def create_activation_digest
    self.activation_token = User.new_token
    self.activation_digest = User.digest( self.activation_token )
  end

  def activate
    update_columns( activated: true, activated_at: Time.zone.now )
  end

  def send_activation_email
    UserMailer.account_activation( self ).deliver_now
  end

  def create_reset_digest
    self.reset_token = User.new_token
    #update_columns( :reset_digest User.digest(reset_token), :reset_sent_at Time.zone.now )
    update_columns(reset_digest: User.digest(reset_token), reset_sent_at: Time.zone.now)
    #update_attribute(:reset_digest,  )
    #update_attribute(:reset_sent_at, )
  end

  def send_password_reset_email
    UserMailer.password_reset( self ).deliver_now
  end

  def password_reset_expired?
    reset_sent_at < 24.hours.ago
  end
end

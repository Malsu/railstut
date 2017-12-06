#u = User.create(name: 'Manuel Suarez', email: 'ma.are.sua@gmail.com', password: 'foobar', password_confirmation: 'foobar', remember_digest: nil)

100.times do
	name = Faker::Name.first_name
	surname = Faker::Name.last_name
	pwd = Faker::Internet.password(10)
	user_list << [ name + ' ' + surname, Faker::Internet.email(name+'.'+surname), pwd ]
end

user_list = []

user_list.each do | name, email, pwd |
	User.create( name: name, email: email, password: pwd, password_confirmation: pwd)
end
class CreateDemos < ActiveRecord::Migration[5.1]
  def change
    create_table :demos do |t|
      t.string :activity
      t.string :concept
      t.string :provider
      t.datetime :last_done_dt_tm
      t.string :result
      t.string :notes
      t.datetime :next_due_dt_tm
      t.string :period
      t.string :program
      t.decimal :cost

      t.timestamps
    end
  end
end

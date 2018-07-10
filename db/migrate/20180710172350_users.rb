class Users < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
     t.string :username, null: false, unique: true
     t.string :email, null: false, unique: true
     t.integer :age
     t.string :password_digest, null: false
     t.string :session_token, null: false

     t.timestamps
   end
   add_index :users, :username, unique: true
   add_index :users, :session_token, unique: true
  end
end
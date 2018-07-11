class ChangeAgeDataTypeAddAboutMe < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :age, :string
    add_column :users, :about_me, :string
  end
end

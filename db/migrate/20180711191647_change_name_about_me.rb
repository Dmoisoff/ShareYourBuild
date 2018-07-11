class ChangeNameAboutMe < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :about_me, :about
  end
end

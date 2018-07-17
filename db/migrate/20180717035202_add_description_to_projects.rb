class AddDescriptionToProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :description, :text
  end
end

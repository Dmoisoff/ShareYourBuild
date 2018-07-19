class UpdateTitleForProjects < ActiveRecord::Migration[5.2]
  def change
    remove_index :projects, :title
  end
end

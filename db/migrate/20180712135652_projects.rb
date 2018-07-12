class Projects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
    t.string :title, null: false, unique: true
    t.integer :author_id, null: false
    t.integer :view_count
    t.boolean :featured
    t.string :picture_url

    t.timestamps
   end
   add_index :projects, :title, unique: true
  end
end

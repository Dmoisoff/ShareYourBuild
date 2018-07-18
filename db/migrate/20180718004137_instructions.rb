class Instructions < ActiveRecord::Migration[5.2]
  def change
    create_table :instructions do |t|
      t.integer :project_id, null: false
      t.integer :instruction_step, null: false
      t.text :body, null: false
      t.string :media_url
    end
    add_index :instructions, :project_id, unique: true
    add_index :instructions, :instruction_step, unique: true
  end
end

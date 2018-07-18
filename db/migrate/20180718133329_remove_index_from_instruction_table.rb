class RemoveIndexFromInstructionTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :instructions, :instruction_step
    remove_index :instructions, :project_id
  end
end

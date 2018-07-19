class UpdateAddStepTitlesToInstruction < ActiveRecord::Migration[5.2]
  def change
    add_column :instructions, :title, :string
  end
end

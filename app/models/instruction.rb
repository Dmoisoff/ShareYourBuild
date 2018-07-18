# == Schema Information
#
# Table name: instructions
#
#  id               :bigint(8)        not null, primary key
#  project_id       :integer          not null
#  instruction_step :integer          not null
#  body             :text             not null
#  media_url        :string
#

class Instruction < ApplicationRecord
  validates :project_id, :instruction_step, :body

  belongs_to :project,
    foreign_key: :project_id,
    class_name: 'Project'

  def project_instructions(project_id)
    self
  end

end

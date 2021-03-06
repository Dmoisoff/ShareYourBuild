# == Schema Information
#
# Table name: instructions
#
#  id               :bigint(8)        not null, primary key
#  project_id       :integer          not null
#  instruction_step :integer          not null
#  body             :text             not null
#  media_url        :string
#  title            :string
#

class Instruction < ApplicationRecord
  # validates :project_id, :instruction_step, :title, :body, presence: true

  belongs_to :project,
    foreign_key: :project_id,
    class_name: 'Project'

  has_one_attached :media
  has_many_attached :images
  scope :with_eager_loaded_images, -> {
  eager_load(images_attachments: :blob)
}

end

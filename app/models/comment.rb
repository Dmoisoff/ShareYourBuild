# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  author_id  :integer
#  project_id :integer
#  body       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord

  validates :body, :project_id, :author_id, presence: true

  belongs_to :project,
  foreign_key: :project_id,
  class_name: 'Project'

end

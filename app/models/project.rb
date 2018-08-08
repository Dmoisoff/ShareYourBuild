# == Schema Information
#
# Table name: projects
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  author_id   :integer          not null
#  view_count  :integer
#  featured    :boolean
#  picture_url :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#

class Project < ApplicationRecord

  validates :title, :description, :author_id, presence: true

  validate :ensure_picture

  belongs_to :user,
		foreign_key: :author_id,
    class_name: "User"

  has_many :instructions,
    foreign_key: :project_id,
    class_name: 'Instruction'

  has_many :comments,
    foreign_key: :project_id,
    class_name: 'Comment'

  has_one_attached :picture

  def ensure_picture
    unless self.picture.attached?
      errors[:picture] << 'is needed for display'
    end
  end





end

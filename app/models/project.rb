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
#

class Project < ApplicationRecord

  validates :title, :author_id, presence: true

  belongs_to :user,
		foreign_key: :author_id,
    class_name: "User"

  has_one_attached :picture


end

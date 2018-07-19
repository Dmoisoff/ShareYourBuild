@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :author_id, :view_count, :featured, :description
    json.pictureUrl project.picture_url
    json.authorUsername project.user.username
    if project.picture.attached?
      json.picture url_for(project.picture)
    end
  end
end

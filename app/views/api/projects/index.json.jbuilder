@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :author_id, :view_count, :featured
    json.pictureUrl project.picture_url
    json.authorUsername project.user.username
    json.picture url_for(project.picture)
  end
end

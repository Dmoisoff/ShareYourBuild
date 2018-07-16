@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :author_id, :view_count, :featured, :picture_url
    json.authorUsername project.user.username
    json.photoUrl url_for(project.picture)
  end
end

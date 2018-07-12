json.set! :project do
	json.id @project.id
	json.title @project.title
	json.authorId @project.author_id
  json.picture @project.picture_url
	json.username @project.user.username
end

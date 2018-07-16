
json.id @project.id
json.title @project.title
json.authorId @project.author_id
json.picture @project.picture_url
json.authorUsername @project.user.username
json.photoUrl url_for(@project.picture)

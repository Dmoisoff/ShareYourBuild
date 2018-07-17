json.id @project.id
json.title @project.title
json.authorId @project.author_id
json.pictureUrl @project.picture_url
json.description @project.description
json.authorUsername @project.user.username
json.picture url_for(@project.picture)

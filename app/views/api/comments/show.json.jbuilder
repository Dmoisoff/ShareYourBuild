json.set! @comment.id do
  json.id @comment.id
  json.projectId @comment.project_id
  json.authorId @comment.author_id
  json.body @comment.body
  json.username @comment.user.username
end

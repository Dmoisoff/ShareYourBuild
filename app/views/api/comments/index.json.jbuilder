@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.projectId comment.project_id
    json.authorId comment.author_id
    json.body comment.body
    json.createdAt comment.created_at
  end
end

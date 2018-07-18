json.project do
  json.id @project.id
  json.title @project.title
  json.authorId @project.author_id
  json.pictureUrl @project.picture_url
  json.description @project.description
  json.authorUsername @project.user.username
  json.picture url_for(@project.picture)
end

json.instructions do
  @project.instructions.each do |instruction|
    json.set! instruction.id do
      json.projectId instruction.project_id
      json.instructionStep instruction.instruction_step
      json.body instruction.body
    end
  end
end

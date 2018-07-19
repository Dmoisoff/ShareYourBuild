json.project do
  json.id @project.id
  json.title @project.title
  json.authorId @project.author_id
  json.pictureUrl @project.picture_url
  json.description @project.description
  json.authorUsername @project.user.username
  if @project.picture.attached?
    json.picture url_for(@project.picture)
  end
end

json.instructions do
  debugger
  @project.instructions.each do |instruction|
    json.set! instruction.id do
      json.projectId instruction.project_id
      json.instructionStep instruction.instruction_step
      json.body instruction.body
      json.title instruction.title
      if instruction.media.attached?
        json.media url_for(instruction.media)
      end
    end
  end
end

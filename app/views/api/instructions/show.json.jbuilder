json.id @instruction.id
json.projectId @instruction.project_id
json.instructionStep @instruction.instruction_step
json.body @instruction.body
if @instruction.media.attached?
  json.media url_for(@instruction.media)
end

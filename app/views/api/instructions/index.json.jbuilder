@instructions.each do |instruction|
  json.set! instruction.id do
    json.projectId instruction.project_id
    json.instructionStep instruction.instruction_step
    json.body instruction.body
    # json.media url_for(@instruction.media)
  end
end

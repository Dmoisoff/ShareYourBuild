json.id @instruction.id
json.projectId @instruction.project_id
json.instructionStep @instruction.instruction_step
json.body @instruction.body
json.title @instruction.title
if @instruction.media.attached?
  json.media url_for(@instruction.media)
end
json.images do
  image_arr = []
  @instruction.images.each do |image|
    image_arr << url_for(image)
  end
  json.array! image_arr
end

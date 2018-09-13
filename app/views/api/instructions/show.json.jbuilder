# debugger
json.id @instruction.id
json.projectId @instruction.project_id
json.instructionStep @instruction.instruction_step
json.body @instruction.body
json.title @instruction.title
if @instruction.media.attached?
  json.media url_for(@instruction.media)
end
# debugger
json.images do
  image_arr = []
  if @instruction.images.attached?
    @instruction.images.each do |image|
      image_arr << url_for(image)
    end
  end
  json.array! image_arr
end
# debugger
json.imagesStorageId do
  images_id = []
  if @instruction.images.attached?
    # debugger
    @instruction.images.attachments.each do |image|
      # debugger
      images_id << image.id
    end
  end
  json.array! images_id
end

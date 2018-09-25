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


  if
    !@project.instructions[0]
    json.instructions ({})
  else
    json.instructions do
    @project.instructions.order('instructions.instruction_step ASC').each do |instruction|
      json.set! instruction.id do
        json.id instruction.id
        json.projectId instruction.project_id
        json.instructionStep instruction.instruction_step
        json.body instruction.body
        json.title instruction.title
        if instruction.media.attached?
          json.media url_for(instruction.media)
        end
        json.images do
          image_arr = []
          instruction.images.each do |image|
            image_arr << url_for(image)
          end
          json.array! image_arr
        end
        json.imagesStorageId do
          images_id = []
          instruction.images.each do |image|
            images_id << image.id
          end
          json.array! images_id
        end
      end
    end
  end
end


if !@project.comments[0]
  json.comments ({})
else
  json.comments do
      @project.comments.order('comments.id ASC').each do |comment|
        json.set! comment.id do
          json.id comment.id
          json.projectId comment.project_id
          json.authorId comment.author_id
          json.body comment.body
          json.username comment.user.username
        end
      end
  end
end

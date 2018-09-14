require 'open-uri'

class Api::InstructionsController < ApplicationController

  def create
    debugger
    @instruction = Instruction.new(instruction_params)
    images = params[:instruction][:images].values
    if images
      @instruction.images.attach(images)
    end
    if @instruction.save
      render "api/instructions/show"
    else
      render json: @instruction.errors.full_messages, status: 422
    end
  end

  # def create
      # instructions = params[:instruction][]
  #   @instruction = Instruction.new(instruction_params)
  #   images = params[:instruction][:images].values
  #   if images
  #     @instruction.images.attach(images)
  #   end
  #   if @instruction.save
  #     render "api/instructions/show"
  #   else
  #     render json: @instruction.errors.full_messages, status: 422
  #   end
  # end

  def index
    @instructions = Instruction.where(project_id: params[:project_id])
    render "api/instructions/index"
  end

  def show
    @instruction = Instruction.find(params[:id])
  end

  def update
    debugger
    saved_images_id = []
    updated_images = []
    @instruction = Instruction.find(params[:id])

    if params[:instruction][:images]
      updated_images = params[:instruction][:images].values
    end
    if params[:instruction][:imagesStorageId]
      saved_images_id = params[:instruction][:imagesStorageId].values
    end

    @instruction.images.attachments.each do |image|

      unless(saved_images_id.include?(image.id.to_s))
        @instruction.images.find_by_id(image.id).destroy
      end
    end

    updated_images.each do |image|
      unless image.class === "String"
        @instruction.images.attach(image)
      end
    end
    if @instruction.update_attributes(instruction_params)
      @instruction.save
      render "api/instructions/show"
    else
      render json: @instruction.errors.full_messages, status: 422
    end
  end

  def destroy
    ids = params[:id].split(',')
      ids.each do |id|
        @instruction = Instruction.find(id)
        @instruction.destroy
    end
  end


  private
  def instruction_params
    params.require(:instruction).permit(:project_id, :instruction_step, :title, :body)

  end

end

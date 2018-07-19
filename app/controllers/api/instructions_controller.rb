class Api::InstructionsController < ApplicationController

  def create
    @instruction = Instruction.new(instruction_params)
    if @instruction.save
      render "api/instructions/show"
    else
      render json: @instruction.errors.full_messages, status: 422
    end
  end

  def index
    @instructions = Instruction.where(project_id: params[:project_id])
    render "api/instructions/index"
  end

  def show
    @instruction = Instruction.find(params[:id])
  end

  def update
    @instruction = Instruction.find(params[:id])
    if @instruction.update_attributes(instruction_params)
      render "api/instructions/show"
    else
      render json: @instruction.errors.full_messages, status: 422
    end
  end

  def destroy
    @instruction = Instruction.find(params[:id])
    @instruction.destroy
  end


  private
  def instruction_params
    params.require(:instruction).permit(:project_id, :instruction_step, :body, :media)

  end

end
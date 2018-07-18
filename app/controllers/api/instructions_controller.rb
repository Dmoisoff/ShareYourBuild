class Api::InstructionsController < ApplicationController

  def create
    debugger
    @instruction = Instruction.new(instruction_params)
    if @instruction.save
      render "api/instructions/show"
    else
      render json: @instruction.errors.full_messages, status: 422
    end
  end

  def index
    debugger
    @instructions = Instruction.where(params[:project_id] === :project_id)
    render "api/instructions/index"
  end

  def update
    debugger
    @instruction = Instruction.find(params[:id])
    if @instruction.update_attributes(instruction_params)
      render "api/instructions/show"
    else
      render json: @instruction.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = Instruction.find(params[:id])
    @project.destroy
  end


  private
  def instruction_params
    debugger
    params.require(:instruction).permit(:project_id, :instruction_step, :body, :media)

  end

end

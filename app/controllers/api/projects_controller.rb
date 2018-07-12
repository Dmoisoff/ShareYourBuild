class Api::ProjectsController < ApplicationController

  def create
    @project = Project.new(project_params)
    @project.author_id = current_user.id
    if @project.save
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def index
    @projects = Projects.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
  end

  private

  def project_params
    params.require(:project).permit(:title, :password, :picture_url)



end

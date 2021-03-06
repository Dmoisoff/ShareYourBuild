class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def index
    @comments = Comment.where(project_id: params[:project_id])
    render "api/comments/index"
  end


  def update
    @comment = Comment.find(params[:id])
    if @comment.update_attributes(comment_params)
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    ids = params[:id].split(',')
      ids.each do |id|
        @comment = Comment.find(id)
        @comment.destroy
    end
  end


  private
  def comment_params
    params.require(:comment).permit(:body, :project_id, :author_id)

  end

end

class CommentLikesController < ApplicationController
  before_action :set_post, except: [:get_by_user, :index, :show]
  before_action :authorize_request

  def index
    @likes = CommentLike.all 
    render json: @likes
  end

  def show
    @likes = Comment.find(params[:comment_id])
    render json: @likes.comment_likes
  end

  def get_by_user
    @likes = User.find(params[:user_id])
    render json: @likes.comment_likes, include: :comment
  end

  def create
    @like = CommentLike.new(like_params)
    @like.user = @current_user
    @comment = Comment.find(params[:comment_id])
    @like.comment = @comment

    if @like.save
      render json: @like, status: :created
    else
      render json: @like.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @like = CommentLike.find(params[:like_id])
    @like.destroy
  end

  private

  def set_post
    @comment = Comment.find(params[:comment_id])
  end

  def like_params
    params.require(:comment_like).permit(:user_id, :comment_id, :content)
  end
end

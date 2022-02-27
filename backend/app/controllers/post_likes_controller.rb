class PostLikesController < ApplicationController
  before_action :set_post

  def show
    @likes = Post.find(params[:post_id])
    render json: @likes.post_likes
  end

  def create
    @like = PostLike.new(like_params)
    @like.user = @current_user
    @post = Post.find(params[:post_id])
    @like.post = @post

    if @like.save
      render json: @like, status: :created
    else
      render json: @like.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @like = PostLike.find(params[:like_id])
    @like.destroy
  end

  private

  def set_post
    @post = Post.find(params[:post_id])
  end

  def like_params
    params.require(:post_like).permit(:user_id, :post_id)
  end
end

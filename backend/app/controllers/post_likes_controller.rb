class PostLikesController < ApplicationController
  before_action :set_post, except: [:get_by_user, :index]
  before_action :authorize_request

  def index
    @likes = PostLike.all 
    render json: @likes
  end

  def show
    @likes = Post.find(params[:post_id])
    render json: @likes.post_likes
  end

  def get_by_user
    @likes = User.find(params[:user_id])
    render json: @likes.post_likes, include: :post
  end

  def create
    @like = PostLike.new(like_params)
    @like.user = @current_user
    @post = Post.find(params[:post_id])
    @like.post = @post
    # @user = User.find(params[:user_id])
    # @like.user = @user

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
    params.require(:post_like).permit(:user_id, :post_id, :content)
  end
end

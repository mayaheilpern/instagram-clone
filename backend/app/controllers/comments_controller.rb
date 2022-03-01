class CommentsController < ApplicationController
  before_action :set_comment, only: %i[ show update destroy ]
  before_action :authorize_request, only: [:create, :update, :destroy]

  #GET /commments
  def all_comments
    @comments = Comment.all

    render json: @comments, include: [:user, :comment_likes]
  end
  
  # GET /posts/:post_id/comments
  def index
    @post = Post.find(params[:post_id])
    @comments = @post.comments

    render json: @comments, include: :user
  end

  # GET /posts/:post_id/comments/1
  def show
    render json: @comment
  end

  # POST /posts/:post_id/comments
  def create
    @comment = Comment.new(comment_params)
    @comment.user = @current_user
    @comment.post = Post.find(params[:post_id])

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/:post_id/comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/:post_id/comments/1
  def destroy
    @comment.destroy
    render json: @comment
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:content, :user_id, :post_id)
    end
end

class DraftsController < ApplicationController
  before_action :set_draft, only: %i[ show update destroy ]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /drafts
  def index
    @drafts = Draft.all

    render json: @drafts, include: :user
  end

  #GET /users/:user_id/drafts
  def get_user_drafts
    @user = User.find(params[:user_id])
    render json: @user.drafts
  end

  # GET /drafts/1
  def show
    render json: @draft
  end

  # POST /drafts
  def create
    @draft = Draft.new(draft_params)
    @draft.user = @current_user

    if @draft.save
      render json: @draft, status: :createds
    else
      render json: @draft.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /drafts/1
  def update
    if @draft.update(draft_params)
      render json: @draft
    else
      render json: @draft.errors, status: :unprocessable_entity
    end
  end

  # DELETE /drafts/1
  def destroy
    @draft.destroy
    render json: @draft
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_draft
      @draft = Draft.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def draft_params
      params.require(:draft).permit(:image_url, :content, :user_id)
    end
end

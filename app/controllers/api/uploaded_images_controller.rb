class Api::UploadedImagesController < ApplicationController
  before_action :require_logged_in, only: [:index, :show, :create, :destroy, :update]
  # before_action :require_logged_in, only: [:index, :show, :create, :destroy]

  def index
    @current_user = current_user
    @uploaded_images = UploadedImage.where(uploader_id: current_user.id)

    render :index
  end

  def show
    @uploaded_image = Design.find_by(id: params[:id])

    if @uploaded_image
      render :show
    else
      render json: ["uploaded image not found"], status: 404
    end
  end

  def create
    @uploaded_image = UploadedImage.new(uploaded_image_params)
    @uploaded_image.uploader_id = current_user.id

    if @uploaded_image.save
      render :show
    else
      render json: @uploaded_image.errors.full_messages, status: 422
    end
  end

  def update
    @uploaded_image = UploadedImage.find_by(id: params[:id])

    if @uploaded_image.update(uploaded_image_params)
      render :show
    else
      render json: @uploaded_image.errors.full_messages, status: 422
    end
  end

  def destroy
    @uploaded_image = UploadedImage.find_by(id: params[:id])
    @uploaded_image.destroy

    render :show
  end

  def uploaded_image_params
    params.require(:uploaded_image).permit(:title, :width, :height, :image)
  end
end

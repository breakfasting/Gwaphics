class Api::FoldersController < ApplicationController
  before_action :require_logged_in, only: [:index, :show, :create, :update, :destroy]

  def index
    @folders = Folder.where(owner_id: current_user.id)

    render :index
  end

  def show
    @folder = Folder.find_by(id: params[:id])

    if @folder.owner_id != current_user.id
      render json: ["Not owner of this folder"], status: 401
    else
      render :show
    end
  end

  def create
    @folder = Folder.new(folder_params)
    @folder.owner_id = current_user.id

    if @folder.save
      render :show
    else
      render json: @folder.errors.full_messages, status: 422
    end
  end

  def update
    @folder = Folder.find_by(id: params[:id])

    if @folder.update(folder_params)
      render :show
    else
      render json: @folder.errors.full_messages, status: 422
    end
  end

  def destroy
    @folder = Folder.find_by(id: params[:id])
    @folder.destroy
    render :show
  end

  private
  def folder_params
    params.require(:folder).permit(:name)
  end
end

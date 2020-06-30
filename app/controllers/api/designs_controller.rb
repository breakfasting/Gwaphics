class Api::DesignsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  # def index
  #   if params[:query] == 'current'
  #     @designs = Design.find_by(user_id: current_user.id)
  #     # elsif params[:query] == 'public'
  #     #   @designs = Design.find_by(public: true)
  #   end
  #   render :index
  # end

  def owned
    @designs = Design.where(user_id: current_user.id)

    render :index
  end

  def templates
    @designs = Design.where(public: true).limit(10).order("updated_at desc")

    render :index
  end

  def show
    @design = Design.find_by(id: params[:id])

    if @design
      render :show
    else
      render json: ["design not found"], status: 404
    end
  end

  def create
    @design = Design.new(create_design_params)
    @design.user_id = current_user.id

    if @design.save
      render :show
    else
      render json: @design.errors.full_messages, status: 422
    end
  end

  def update
    @design = Design.find_by(id: params[:id])

    if @design.update(update_design_params)
      render :show
    else
      render json: @design.errors.full_messages, status: 422
    end
  end

  def destroy
    @design = Design.find_by(id: params[:id])
    @design.destroy
    render :show
  end

  private
  def create_design_params
    params.require(:design).permit(
        :creator_id,
        :folder_id,
        :title,
        :description,
        :public,
        :width,
        :height,
        elements_attributes: [
          :elementable_id,
          :elementable_type,
          :pos_x,
          :pos_y,
          :rotate,
          :z_index,
          :transparency,
          elementable_attributes: [
            :url,
            :width,
            :height,
            :color,
            :shape,
            :font_family,
            :font_size,
            :font_weight,
            :text,
          ]
        ],
      )
  end

  def update_design_params
    params.require(:design).permit(
        :id,
        :title,
        :folder_id,
        :description,
        :public,
        :width,
        :height,
        :thumbnail,
        :trash,
        elements_attributes: [
          :id,
          :elementable_id,
          :elementable_type,
          :pos_x,
          :pos_y,
          :rotate,
          :z_index,
          :transparency,
          :_destroy,
          elementable_attributes: [
            :id,
            :url,
            :width,
            :height,
            :color,
            :shape,
            :font_family,
            :font_size,
            :font_weight,
            :text,
            :_destroy
          ]
        ],
      )
  end
end

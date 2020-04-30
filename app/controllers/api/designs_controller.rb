class Api::DesignsController < ApplicationController
  before_action :require_logged_in, only: [:show, :create]

  # def index
  #   if params[:query] == 'current'
  #     @designs = Design.find_by(user_id: current_user.id)
  #     # elsif params[:query] == 'public'
  #     #   @designs = Design.find_by(public: true)
  #   end
  #   render :index
  # end

  def show
    @design = Design.find_by(id: params[:id])
    render :show
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
      p "design updated"
      if params[:shapes]
        p "found shapes"
        params[:shapes].each do |key, shape|
          p shape
          if shape[:edited] == "true"
            p "found shape to update"
            edit_shape = Shape.find_by(id: shape[:id])
            p edit_shape
            if edit_shape.update(width: shape[:width], height: shape[:height], color: shape[:color], shape: shape[:shape])
              p "shape updated"
              render :show
            else
              render json: edit_shape.errors.full_messages, status: 422
            end
          end
        end
      end
    else
      render json: @design.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private
  def create_design_params
    params.require(:design).permit(
        :creator_id,
        :title,
        :description,
        :public,
        :width,
        :height,
        elements_attributes: [
          :id,
          :elementable_id,
          :elementable_type,
          :pos_x,
          :pos_y,
          :z_index,
          :transparency,
          :_destroy,
          elementable_attributes: [
            :id,
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

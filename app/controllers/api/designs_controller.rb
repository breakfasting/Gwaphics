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
      have_errors = false
      if params[:shapes]
        params[:shapes].each do |key, shape|
          new_shape = Shape.new(width: shape[:width], height: shape[:height], shape: shape[:shape])
          new_shape.color = shape[:color] if shape[:color]

          if new_shape.save
            unless new_element(@design.id, 'Shape', new_shape.id, shape)
              have_errors = true
              break
            end
          else
            render json: new_shape.errors.full_messages
            have_errors = true
            break
          end
        end
      end
    else
      render json: @design.errors.full_messages
      have_errors = true
    end

    render :show unless have_errors
  end

  def update
  end

  def destroy
  end

  private
  def new_element(design_id, type, item_id, item)
    new_element = Element.new(
      design_id: design_id,
      elementable_id: item_id,
      elementable_type: type,
    )
    new_element.pos_x = item[:pos_x] if item[:pos_x]
    new_element.pos_y = item[:pos_y] if item[:pos_y]
    new_element.z_index = item[:z_index] if item[:z_index]
    new_element.transparency = item[:transparency] if item[:transparency]

    if new_element.save
      return true
    else
      render json: new_element.errors.full_messages
      return false
    end
  end

  def new_item()

  def create_design_params
    params.require(:design).permit(:creator_id, :title, :description, :public, :width, :height)
  end
end

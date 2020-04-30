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
      return unless create_item(params[:shapes], "Shape") if params[:shapes]
      return unless create_item(params[:text], "Text") if params[:text]
    else
      render json: @design.errors.full_messages, status: 422
      return
    end

    render :show
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
      return new_element
    else
      render json: new_element.errors.full_messages, status: 422
      return false
    end
  end

  def new_shape(shape)
    new_shape = Shape.new(width: shape[:width], height: shape[:height], shape: shape[:shape])
    new_shape.color = shape[:color] if shape[:color]

    if new_shape.save
      return new_shape
    else
      render json: new_shape.errors.full_messages, status: 422
      return false
    end
  end

  def new_text(text)
    new_text = Text.new(font_size: text[:font_size] ,font_weight: text[:font_weight],text: text[:text])
    new_text.font_family = text[:font_family] if text[:font_family]
    new_text.color = text[:color] if text[:color]

    if new_text.save
      return new_text
    else
      render json: new_text.errors.full_messages, status: 422
      return false
    end
  end

  def create_item(items, class_name)
    items.each do |key, item|
      new_item = self.send("new_#{class_name.downcase}", item)
      if new_item
        return unless new_element(@design.id, class_name, new_item.id, item)
      else
        return false
      end
    end
  end

  def create_design_params
    params.require(:design).permit(:creator_id, :title, :description, :public, :width, :height)
  end

  def update_design_params
    params.require(:design).permit(:title, :description, :public, :width, :height)
  end
end

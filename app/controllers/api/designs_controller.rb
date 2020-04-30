class Api::DesignsController < ApplicationController
  before_action :require_logged_in, only: [:show]

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
  end

  def update
  end

  def destroy
  end
end

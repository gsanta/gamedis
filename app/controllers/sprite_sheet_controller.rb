class SpriteSheetController < ApplicationController
  def index
    spriteSheets = SpriteSheet.order("created_at DESC")
    render json: spriteSheets
  end

  def show
    @spriteSheet = SpriteSheet.find(params[:id])
    render json: @spriteSheet
  end

  def create
  end

  def update
  end

  def destroy
  end
end

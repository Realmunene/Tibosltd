# backend/app/controllers/api/v1/estimates_controller.rb
class Api::V1::EstimatesController < ApplicationController
  # Remove this line - it doesn't exist in API mode
  # skip_before_action :verify_authenticity_token
  
  def create
    @estimate = EstimateRequest.new(estimate_params)
    if @estimate.save
      render json: @estimate, status: :created
    else
      render json: { errors: @estimate.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  private
  
  def estimate_params
    params.require(:estimate).permit(:name, :email, :phone, :project_type, :project_size, :budget, :message, :status)
  end
end
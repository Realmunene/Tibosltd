# backend/app/controllers/api/v1/admin/estimates_controller.rb
class Api::V1::Admin::EstimatesController < Api::V1::Admin::BaseController
  
  def index
    @estimates = EstimateRequest.order(created_at: :desc)
    render json: @estimates, status: :ok
  end
  
  def show
    @estimate = EstimateRequest.find_by(id: params[:id])
    if @estimate
      render json: @estimate, status: :ok
    else
      render json: { error: "Estimate not found" }, status: :not_found
    end
  end
  
  def mark_as_read
    @estimate = EstimateRequest.find_by(id: params[:id])
    if @estimate
      @estimate.update(status: "read")
      render json: { message: "Marked as read" }, status: :ok
    else
      render json: { error: "Estimate not found" }, status: :not_found
    end
  end
  
  def destroy
    @estimate = EstimateRequest.find_by(id: params[:id])
    if @estimate
      @estimate.destroy
      render json: { message: "Deleted successfully" }, status: :ok
    else
      render json: { error: "Estimate not found" }, status: :not_found
    end
  end
end


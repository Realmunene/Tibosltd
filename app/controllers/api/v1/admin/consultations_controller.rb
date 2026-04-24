# backend/app/controllers/api/v1/admin/consultations_controller.rb
class Api::V1::Admin::ConsultationsController < Api::V1::Admin::BaseController
  
  def index
    @consultations = Consultation.order(created_at: :desc)
    render json: @consultations, status: :ok
  end
  
  def show
    @consultation = Consultation.find_by(id: params[:id])
    if @consultation
      render json: @consultation, status: :ok
    else
      render json: { error: "Consultation not found" }, status: :not_found
    end
  end
  
  def confirm
    @consultation = Consultation.find_by(id: params[:id])
    if @consultation
      @consultation.update(status: "confirmed")
      render json: { message: "Consultation confirmed" }, status: :ok
    else
      render json: { error: "Consultation not found" }, status: :not_found
    end
  end
  
  def cancel
    @consultation = Consultation.find_by(id: params[:id])
    if @consultation
      @consultation.update(status: "cancelled")
      render json: { message: "Consultation cancelled" }, status: :ok
    else
      render json: { error: "Consultation not found" }, status: :not_found
    end
  end
  
  def complete
    @consultation = Consultation.find_by(id: params[:id])
    if @consultation
      @consultation.update(status: "completed")
      render json: { message: "Consultation marked as completed" }, status: :ok
    else
      render json: { error: "Consultation not found" }, status: :not_found
    end
  end
  
  def destroy
    @consultation = Consultation.find_by(id: params[:id])
    if @consultation
      @consultation.destroy
      render json: { message: "Deleted successfully" }, status: :ok
    else
      render json: { error: "Consultation not found" }, status: :not_found
    end
  end
end


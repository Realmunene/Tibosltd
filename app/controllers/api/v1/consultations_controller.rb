# backend/app/controllers/api/v1/consultations_controller.rb
class Api::V1::ConsultationsController < ApplicationController
  # Remove this line
  # skip_before_action :verify_authenticity_token
  
  def create
    @consultation = Consultation.new(consultation_params)
    if @consultation.save
      render json: @consultation, status: :created
    else
      render json: { errors: @consultation.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  private
  
  def consultation_params
    params.require(:consultation).permit(:name, :email, :phone, :preferred_date, :preferred_time, :consultation_type, :message, :status)
  end
end
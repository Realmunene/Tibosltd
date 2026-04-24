# backend/app/controllers/api/v1/partners_controller.rb
class Api::V1::PartnersController < ApplicationController
  # Remove this line
  # skip_before_action :verify_authenticity_token
  
  def create
    @partner = Partner.new(partner_params)
    if @partner.save
      render json: { message: "Registration successful", partner: @partner }, status: :created
    else
      render json: { errors: @partner.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  private
  
  def partner_params
    params.require(:partner).permit(:supplier_type, :supplier_name, :mobile, :email, :contact_person, :password, :description, :city, :address)
  end
end
# backend/app/controllers/api/v1/contact_messages_controller.rb
class Api::V1::ContactMessagesController < ApplicationController
  # Remove this line
  # skip_before_action :verify_authenticity_token
  
  def create
    @message = ContactMessage.new(contact_message_params)
    if @message.save
      render json: { message: "Message sent successfully" }, status: :created
    else
      render json: { errors: @message.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  private
  
  def contact_message_params
    params.require(:contact_message).permit(:name, :email, :phone, :message, :status)
  end
end
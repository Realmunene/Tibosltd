# backend/app/controllers/api/v1/admin/contact_messages_controller.rb
class Api::V1::Admin::ContactMessagesController < Api::V1::Admin::BaseController
  
  def index
    @messages = ContactMessage.order(created_at: :desc)
    render json: @messages, status: :ok
  end
  
  def unread
    @messages = ContactMessage.where(status: "unread").order(created_at: :desc)
    render json: @messages, status: :ok
  end
  
  def show
    @message = ContactMessage.find_by(id: params[:id])
    if @message
      render json: @message, status: :ok
    else
      render json: { error: "Message not found" }, status: :not_found
    end
  end
  
  def mark_as_read
    @message = ContactMessage.find_by(id: params[:id])
    if @message
      @message.update(status: "read", read_at: Time.current)
      render json: { message: "Marked as read" }, status: :ok
    else
      render json: { error: "Message not found" }, status: :not_found
    end
  end
  
  def mark_as_replied
    @message = ContactMessage.find_by(id: params[:id])
    if @message
      @message.update(status: "replied", replied_at: Time.current)
      render json: { message: "Marked as replied" }, status: :ok
    else
      render json: { error: "Message not found" }, status: :not_found
    end
  end
  
  def destroy
    @message = ContactMessage.find_by(id: params[:id])
    if @message
      @message.destroy
      render json: { message: "Deleted successfully" }, status: :ok
    else
      render json: { error: "Message not found" }, status: :not_found
    end
  end
end
# backend/app/controllers/api/v1/admin/newsletters_controller.rb
class Api::V1::Admin::NewslettersController < Api::V1::Admin::BaseController
  
  def index
    @subscribers = NewsletterSubscriber.order(created_at: :desc)
    render json: @subscribers, status: :ok
  end
  
  def create
    @subscriber = NewsletterSubscriber.new(email: params[:email], status: "active")
    if @subscriber.save
      render json: @subscriber, status: :created
    else
      render json: { errors: @subscriber.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  def unsubscribe
    @subscriber = NewsletterSubscriber.find_by(id: params[:id])
    if @subscriber
      @subscriber.update(status: "unsubscribed")
      render json: { message: "Unsubscribed successfully" }, status: :ok
    else
      render json: { error: "Subscriber not found" }, status: :not_found
    end
  end
  
  def resubscribe
    @subscriber = NewsletterSubscriber.find_by(id: params[:id])
    if @subscriber
      @subscriber.update(status: "active")
      render json: { message: "Resubscribed successfully" }, status: :ok
    else
      render json: { error: "Subscriber not found" }, status: :not_found
    end
  end
  
  def destroy
    @subscriber = NewsletterSubscriber.find_by(id: params[:id])
    if @subscriber
      @subscriber.destroy
      render json: { message: "Deleted successfully" }, status: :ok
    else
      render json: { error: "Subscriber not found" }, status: :not_found
    end
  end
  
  def export
    @subscribers = NewsletterSubscriber.where(status: "active")
    csv_data = CSV.generate(headers: true) do |csv|
      csv << ["Email", "Subscribed At", "Status"]
      @subscribers.each do |sub|
        csv << [sub.email, sub.created_at, sub.status]
      end
    end
    
    send_data csv_data, filename: "newsletter_subscribers_#{Date.today}.csv", type: "text/csv"
  end
end
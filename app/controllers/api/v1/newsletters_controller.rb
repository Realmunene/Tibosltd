# backend/app/controllers/api/v1/newsletters_controller.rb
class Api::V1::NewslettersController < ApplicationController
  
  def create
    email = params[:email] || params.dig(:newsletter, :email)
    
    # Find or initialize subscriber
    @subscriber = NewsletterSubscriber.find_or_initialize_by(email: email.downcase)
    
    if @subscriber.persisted?
      # If already subscribed and active, return success
      if @subscriber.active?
        render json: { 
          message: "Email is already subscribed", 
          email: @subscriber.email,
          status: "already_subscribed"
        }, status: :ok
      else
        # Reactivate if previously unsubscribed
        @subscriber.update(status: "active")
        render json: { 
          message: "Successfully re-subscribed", 
          email: @subscriber.email,
          status: "resubscribed"
        }, status: :ok
      end
    else
      # New subscription
      @subscriber.status = "active"
      if @subscriber.save
        render json: { 
          message: "Subscribed successfully", 
          email: @subscriber.email,
          status: "created"
        }, status: :created
      else
        render json: { 
          errors: @subscriber.errors.full_messages,
          message: "Subscription failed"
        }, status: :unprocessable_entity
      end
    end
  end
end
# backend/app/controllers/api/v1/admin/password_resets_controller.rb
class Api::V1::Admin::PasswordResetsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def create
    admin = Admin.find_by(email: params[:email])
    
    if admin
      admin.generate_password_reset_token!
      # Send email here (implement later)
      render json: { message: "Password reset instructions sent to your email" }, status: :ok
    else
      render json: { error: "Email not found" }, status: :not_found
    end
  end
  
  def update
    admin = Admin.find_by(reset_password_token: params[:token])
    
    if admin && admin.reset_password_token_valid?
      if admin.reset_password(params[:password], params[:password_confirmation])
        render json: { message: "Password reset successfully" }, status: :ok
      else
        render json: { errors: admin.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Invalid or expired token" }, status: :unprocessable_entity
    end
  end
end
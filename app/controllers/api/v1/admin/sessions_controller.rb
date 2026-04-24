# backend/app/controllers/api/v1/admin/sessions_controller.rb
class Api::V1::Admin::SessionsController < ApplicationController
  # Remove this line
  # skip_before_action :verify_authenticity_token
  
  def create
    admin = Admin.find_by(email: params[:email])
    
    if admin&.authenticate(params[:password])
      token = generate_jwt_token(admin)
      render json: {
        message: "Login successful",
        token: token,
        admin: {
          id: admin.id,
          email: admin.email,
          role: admin.role
        }
      }, status: :ok
    else
      render json: { error: "Invalid email or password" }, status: :unauthorized
    end
  end
  
  def destroy
    render json: { message: "Logged out successfully" }, status: :ok
  end
  
  def profile
    token = request.headers["Authorization"]&.split(" ")&.last
    
    if token
      begin
        decoded = JWT.decode(token, Rails.application.secret_key_base, true, algorithm: 'HS256')
        admin = Admin.find_by(id: decoded.first['admin_id'])
        
        if admin
          render json: {
            id: admin.id,
            email: admin.email,
            role: admin.role,
            name: admin.email.split('@').first
          }, status: :ok
        else
          render json: { error: "Admin not found" }, status: :not_found
        end
      rescue JWT::DecodeError
        render json: { error: "Invalid token" }, status: :unauthorized
      end
    else
      render json: { error: "No token provided" }, status: :unauthorized
    end
  end
  
  private
  
  def generate_jwt_token(admin)
    payload = {
      admin_id: admin.id,
      email: admin.email,
      role: admin.role,
      exp: 24.hours.from_now.to_i
    }
    JWT.encode(payload, Rails.application.secret_key_base, 'HS256')
  end
end
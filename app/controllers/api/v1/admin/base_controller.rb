# backend/app/controllers/api/v1/admin/base_controller.rb
class Api::V1::Admin::BaseController < ApplicationController
  before_action :authenticate_admin!
  
  private
  
  def authenticate_admin!
    token = request.headers["Authorization"]&.split(" ")&.last
    
    unless token
      render json: { error: "Unauthorized - No token provided" }, status: :unauthorized and return
    end
    
    begin
      decoded = JWT.decode(token, Rails.application.secret_key_base, true, algorithm: 'HS256')
      @current_admin = Admin.find_by(id: decoded.first['admin_id'])
      
      unless @current_admin
        render json: { error: "Unauthorized - Invalid admin" }, status: :unauthorized and return
      end
    rescue JWT::DecodeError => e
      render json: { error: "Unauthorized - Invalid token: #{e.message}" }, status: :unauthorized and return
    end
  end
  
  def current_admin
    @current_admin
  end
end
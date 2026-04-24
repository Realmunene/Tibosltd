# backend/app/controllers/health_controller.rb
class HealthController < ApplicationController
  def check
    render json: { status: 'ok', timestamp: Time.current }, status: :ok
  end
end
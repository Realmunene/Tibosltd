# backend/app/controllers/api/v1/admin/dashboard_controller.rb
class Api::V1::Admin::DashboardController < Api::V1::Admin::BaseController
  
  def stats
    stats = {
      estimates: EstimateRequest.count,
      consultations: Consultation.count,
      newsletters: NewsletterSubscriber.where(status: "active").count,
      partners: Partner.where(status: "pending").count,
      messages: ContactMessage.where(status: "unread").count
    }
    
    render json: stats, status: :ok
  end
end
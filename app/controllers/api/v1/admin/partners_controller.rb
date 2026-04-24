# backend/app/controllers/api/v1/admin/partners_controller.rb
class Api::V1::Admin::PartnersController < Api::V1::Admin::BaseController
  
  def index
    @partners = Partner.order(created_at: :desc)
    render json: @partners, status: :ok
  end
  
  def pending
    @partners = Partner.where(status: "pending").order(created_at: :desc)
    render json: @partners, status: :ok
  end
  
  def show
    @partner = Partner.find_by(id: params[:id])
    if @partner
      render json: @partner, status: :ok
    else
      render json: { error: "Partner not found" }, status: :not_found
    end
  end
  
  def approve
    @partner = Partner.find_by(id: params[:id])
    if @partner
      @partner.update(status: "approved", approved_at: Time.current)
      render json: { message: "Partner approved successfully" }, status: :ok
    else
      render json: { error: "Partner not found" }, status: :not_found
    end
  end
  
  def reject
    @partner = Partner.find_by(id: params[:id])
    if @partner
      @partner.update(status: "rejected")
      render json: { message: "Partner rejected" }, status: :ok
    else
      render json: { error: "Partner not found" }, status: :not_found
    end
  end
  
  def destroy
    @partner = Partner.find_by(id: params[:id])
    if @partner
      @partner.destroy
      render json: { message: "Deleted successfully" }, status: :ok
    else
      render json: { error: "Partner not found" }, status: :not_found
    end
  end
end
# backend/app/controllers/application_controller.rb
class ApplicationController < ActionController::API
  include ActionController::RequestForgeryProtection
  
  protect_from_forgery with: :null_session
end
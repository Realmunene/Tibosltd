# backend/config/routes.rb
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # ========== PUBLIC ENDPOINTS ==========
      # Only POST endpoints for public submissions
      post '/estimates', to: 'estimates#create'
      post '/consultations', to: 'consultations#create'
      post '/newsletters', to: 'newsletters#create'
      post '/partners', to: 'partners#create'
      post '/contact_messages', to: 'contact_messages#create'
      
      # ========== ADMIN ENDPOINTS ==========
      namespace :admin do
        # Authentication
        post '/login', to: 'sessions#create'
        delete '/logout', to: 'sessions#destroy'
        get '/profile', to: 'sessions#profile'
        
        # Password Reset
        post '/forgot-password', to: 'password_resets#create'
        post '/reset-password', to: 'password_resets#update'
        
        # Dashboard
        get '/stats', to: 'dashboard#stats'
        
        # Estimates
        get '/estimates', to: 'estimates#index'
        get '/estimates/:id', to: 'estimates#show'
        patch '/estimates/:id/mark_as_read', to: 'estimates#mark_as_read'
        delete '/estimates/:id', to: 'estimates#destroy'
        
        # Consultations
        get '/consultations', to: 'consultations#index'
        get '/consultations/:id', to: 'consultations#show'
        patch '/consultations/:id/confirm', to: 'consultations#confirm'
        patch '/consultations/:id/cancel', to: 'consultations#cancel'
        patch '/consultations/:id/complete', to: 'consultations#complete'
        delete '/consultations/:id', to: 'consultations#destroy'
        
        # Newsletters
        get '/newsletters', to: 'newsletters#index'
        post '/newsletters', to: 'newsletters#create'
        get '/newsletters/export', to: 'newsletters#export'
        patch '/newsletters/:id/unsubscribe', to: 'newsletters#unsubscribe'
        patch '/newsletters/:id/resubscribe', to: 'newsletters#resubscribe'
        delete '/newsletters/:id', to: 'newsletters#destroy'
        
        # Partners
        get '/partners', to: 'partners#index'
        get '/partners/pending', to: 'partners#pending'
        get '/partners/:id', to: 'partners#show'
        patch '/partners/:id/approve', to: 'partners#approve'
        patch '/partners/:id/reject', to: 'partners#reject'
        delete '/partners/:id', to: 'partners#destroy'
        
        # Contact Messages
        get '/contact_messages', to: 'contact_messages#index'
        get '/contact_messages/unread', to: 'contact_messages#unread'
        get '/contact_messages/:id', to: 'contact_messages#show'
        patch '/contact_messages/:id/mark_as_read', to: 'contact_messages#mark_as_read'
        patch '/contact_messages/:id/mark_as_replied', to: 'contact_messages#mark_as_replied'
        delete '/contact_messages/:id', to: 'contact_messages#destroy'
      end
    end
  end
  
  # Health Check
  get '/health', to: 'health#check'
end
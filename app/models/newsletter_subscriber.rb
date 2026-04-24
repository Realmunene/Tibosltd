# backend/app/models/newsletter_subscriber.rb
class NewsletterSubscriber < ApplicationRecord
  validates :email, presence: true, 
                    uniqueness: { case_sensitive: false },
                    format: { with: URI::MailTo::EMAIL_REGEXP }
  
  # No enum at all - just simple validations
  validates :status, inclusion: { in: ["active", "unsubscribed"] }
  
  # Scopes
  scope :active_subscribers, -> { where(status: "active") }
  scope :recent, -> { order(created_at: :desc) }
  
  # Instance methods
  def active?
    status == "active"
  end
  
  def unsubscribe!
    update(status: "unsubscribed")
  end
  
  def resubscribe!
    update(status: "active")
  end
end
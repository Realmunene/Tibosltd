class Partner < ApplicationRecord
  has_secure_password

  # Validations
  validates :supplier_type, presence: true
  validates :supplier_name, presence: true
  validates :mobile, presence: true
  validates :email, presence: true, 
                    uniqueness: { case_sensitive: false },
                    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :contact_person, presence: true
  validates :city, presence: true
  validates :password, length: { minimum: 6 }, if: -> { new_record? || password.present? }

  # Status enum - FIXED syntax
  enum :status, {
    pending: "pending",
    approved: "approved",
    rejected: "rejected",
    inactive: "inactive"
  }, default: :pending

  # Supplier types
  SUPPLIER_TYPES = [
    "construction",
    "transport", 
    "contractor",
    "architect",
    "engineering"
  ].freeze

  # Scopes
  scope :pending_approval, -> { where(status: "pending") }
  scope :approved_partners, -> { where(status: "approved") }
  scope :recent, -> { order(created_at: :desc) }

  # Callbacks
  after_create :send_approval_notification

  def approve!
    update(status: "approved", approved_at: Time.current)
    send_approved_email
  end

  def reject!
    update(status: "rejected")
    send_rejected_email
  end

  def full_address
    [address, city].compact.join(", ")
  end

  private

  def send_approval_notification
    Rails.logger.info "New partner registration: #{supplier_name} (#{email})"
  end

  def send_approved_email
    Rails.logger.info "Partner approved: #{supplier_name} (#{email})"
  end

  def send_rejected_email
    Rails.logger.info "Partner rejected: #{supplier_name} (#{email})"
  end
end
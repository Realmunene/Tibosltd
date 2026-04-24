class Admin < ApplicationRecord
  has_secure_password

  # Validations
  validates :email, presence: true, uniqueness: { case_sensitive: false }
  validates :role, presence: true, inclusion: { in: [0, 1] }
  validates :password, length: { minimum: 6 }, if: -> { new_record? || password.present? }

  # Role constants
  ROLES = {
    super_admin: 0,
    admin: 1
  }.freeze

  # Callbacks
  after_initialize :set_default_role, if: :new_record?

  def set_default_role
    self.role ||= ROLES[:admin]
  end

  def super_admin?
    role == ROLES[:super_admin]
  end

  def admin?
    role == ROLES[:admin]
  end
end
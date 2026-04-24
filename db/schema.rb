# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2026_04_24_021253) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.integer "role", default: 1
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
  end

  create_table "consultations", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "phone", null: false
    t.date "preferred_date", null: false
    t.string "preferred_time", null: false
    t.string "consultation_type", default: "virtual"
    t.text "message"
    t.string "status", default: "pending"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_consultations_on_created_at"
    t.index ["preferred_date"], name: "index_consultations_on_preferred_date"
    t.index ["status"], name: "index_consultations_on_status"
  end

  create_table "contact_messages", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "phone"
    t.text "message", null: false
    t.string "status", default: "unread"
    t.datetime "read_at"
    t.datetime "replied_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_contact_messages_on_created_at"
    t.index ["status"], name: "index_contact_messages_on_status"
  end

  create_table "estimate_requests", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "phone", null: false
    t.string "project_type", null: false
    t.string "project_size"
    t.string "budget"
    t.text "message", null: false
    t.string "status", default: "pending"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_estimate_requests_on_created_at"
    t.index ["status"], name: "index_estimate_requests_on_status"
  end

  create_table "newsletter_subscribers", force: :cascade do |t|
    t.string "email", null: false
    t.string "status", default: "active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_newsletter_subscribers_on_email", unique: true
    t.index ["status"], name: "index_newsletter_subscribers_on_status"
  end

  create_table "partners", force: :cascade do |t|
    t.string "supplier_type", null: false
    t.string "supplier_name", null: false
    t.string "mobile", null: false
    t.string "email", null: false
    t.string "contact_person", null: false
    t.string "password_digest", null: false
    t.text "description"
    t.string "city", null: false
    t.text "address"
    t.string "status", default: "pending"
    t.datetime "approved_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_partners_on_created_at"
    t.index ["email"], name: "index_partners_on_email", unique: true
    t.index ["status"], name: "index_partners_on_status"
    t.index ["supplier_type"], name: "index_partners_on_supplier_type"
  end
end

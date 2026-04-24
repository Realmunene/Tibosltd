class CreateConsultations < ActiveRecord::Migration[8.0]
  def change
    create_table :consultations do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :phone, null: false
      t.date :preferred_date, null: false
      t.string :preferred_time, null: false
      t.string :consultation_type, default: "virtual"
      t.text :message
      t.string :status, default: "pending"

      t.timestamps
    end
    
    # Add indexes
    add_index :consultations, :status
    add_index :consultations, :preferred_date
    add_index :consultations, :created_at
  end
end
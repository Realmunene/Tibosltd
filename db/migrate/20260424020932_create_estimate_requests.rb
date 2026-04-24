class CreateEstimateRequests < ActiveRecord::Migration[8.0]
  def change
    create_table :estimate_requests do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :phone, null: false
      t.string :project_type, null: false
      t.string :project_size
      t.string :budget
      t.text :message, null: false
      t.string :status, default: "pending"

      t.timestamps
    end
    
    # Add indexes
    add_index :estimate_requests, :status
    add_index :estimate_requests, :created_at
  end
end
class CreatePartners < ActiveRecord::Migration[8.0]
  def change
    create_table :partners do |t|
      t.string :supplier_type, null: false
      t.string :supplier_name, null: false
      t.string :mobile, null: false
      t.string :email, null: false
      t.string :contact_person, null: false
      t.string :password_digest, null: false
      t.text :description
      t.string :city, null: false
      t.text :address
      t.string :status, default: "pending"
      t.datetime :approved_at

      t.timestamps
    end
    
    # Add indexes
    add_index :partners, :email, unique: true
    add_index :partners, :status
    add_index :partners, :supplier_type
    add_index :partners, :created_at
  end
end
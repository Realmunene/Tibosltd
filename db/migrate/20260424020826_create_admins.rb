class CreateAdmins < ActiveRecord::Migration[8.0]
  def change
    create_table :admins do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.integer :role, default: 1
      t.string :reset_password_token
      t.datetime :reset_password_sent_at

      t.timestamps
    end
    
    # Add indexes
    add_index :admins, :email, unique: true
    add_index :admins, :reset_password_token, unique: true
  end
end
class CreateContactMessages < ActiveRecord::Migration[8.0]
  def change
    create_table :contact_messages do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :phone
      t.text :message, null: false
      t.string :status, default: "unread"
      t.datetime :read_at
      t.datetime :replied_at

      t.timestamps
    end
    
    # Add indexes
    add_index :contact_messages, :status
    add_index :contact_messages, :created_at
  end
end
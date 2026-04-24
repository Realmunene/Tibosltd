class CreateNewsletterSubscribers < ActiveRecord::Migration[8.0]
  def change
    create_table :newsletter_subscribers do |t|
      t.string :email, null: false
      t.string :status, default: "active"

      t.timestamps
    end
    
    # Add indexes
    add_index :newsletter_subscribers, :email, unique: true
    add_index :newsletter_subscribers, :status
  end
end
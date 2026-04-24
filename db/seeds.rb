# db/seeds.rb

# Clear existing data (optional)
puts "Clearing existing data..."
Admin.destroy_all if Admin.count > 0

# Create Super Admin
puts "Creating Super Admin..."
admin = Admin.new(
  email: "superadmin@tibos.com",
  role: 0
)
admin.password = "Admin@123"
admin.password_confirmation = "Admin@123"
admin.save!

puts "✅ Super Admin created successfully!"
puts "   Email: superadmin@tibos.com"
puts "   Password: Admin@123"
puts ""

# Create sample estimate requests (optional)
puts "Creating sample estimate requests..."
estimate1 = EstimateRequest.new(
  name: "John Mwangi",
  email: "john.mwangi@example.com",
  phone: "+254 712 345 678",
  project_type: "residential",
  project_size: "medium",
  budget: "5m-10m",
  message: "I need a 3-bedroom house constructed in Kisii. Looking for a modern design with quality finishes.",
  status: "pending"
)
estimate1.save!

estimate2 = EstimateRequest.new(
  name: "Sarah Wanjiku",
  email: "sarah.wanjiku@example.com",
  phone: "+254 723 456 789",
  project_type: "commercial",
  project_size: "large",
  budget: "10m-20m",
  message: "Planning to build a retail space in Sotik. Need a detailed estimate.",
  status: "read"
)
estimate2.save!

puts "✅ Created #{EstimateRequest.count} estimate requests"

# Create sample consultations
puts "Creating sample consultations..."
consultation1 = Consultation.new(
  name: "Michael Otieno",
  email: "michael@example.com",
  phone: "+254 745 678 901",
  preferred_date: Date.today + 7,
  preferred_time: "10:00 AM",
  consultation_type: "virtual",
  message: "Looking to discuss a commercial building project in Kisii town.",
  status: "pending"
)
consultation1.save!

consultation2 = Consultation.new(
  name: "Grace Nduta",
  email: "grace.nduta@example.com",
  phone: "+254 756 789 012",
  preferred_date: Date.today + 5,
  preferred_time: "2:00 PM",
  consultation_type: "in-person",
  message: "Need consultation for a residential property in Sotik.",
  status: "confirmed"
)
consultation2.save!

puts "✅ Created #{Consultation.count} consultation requests"

# Create sample newsletter subscribers
puts "Creating sample newsletter subscribers..."
subscriber1 = NewsletterSubscriber.new(
  email: "test1@example.com",
  status: "active"
)
subscriber1.save!

subscriber2 = NewsletterSubscriber.new(
  email: "test2@example.com",
  status: "active"
)
subscriber2.save!

puts "✅ Created #{NewsletterSubscriber.count} newsletter subscribers"

# Create sample partners
puts "Creating sample partner registrations..."
partner1 = Partner.new(
  supplier_type: "construction",
  supplier_name: "Apex Building Supplies Ltd",
  mobile: "+254 712 345 678",
  email: "info@apexbuildingsupplies.com",
  contact_person: "John Kamau",
  city: "Nairobi",
  address: "Industrial Area, Nairobi",
  description: "Leading supplier of quality construction materials including cement, steel, and roofing.",
  status: "pending"
)
partner1.password = "Partner@123"
partner1.password_confirmation = "Partner@123"
partner1.save!

partner2 = Partner.new(
  supplier_type: "contractor",
  supplier_name: "Elite Electrical Services",
  mobile: "+254 723 456 789",
  email: "sarah@eliteelectrical.com",
  contact_person: "Sarah Wanjiku",
  city: "Kisii",
  address: "Kisii Town, Kisii County",
  description: "Licensed electrical contractors for residential and commercial projects.",
  status: "approved",
  approved_at: Time.current
)
partner2.password = "Partner@123"
partner2.password_confirmation = "Partner@123"
partner2.save!

puts "✅ Created #{Partner.count} partner registrations"

# Create sample contact messages
puts "Creating sample contact messages..."
message1 = ContactMessage.new(
  name: "David Kimani",
  email: "david.kimani@example.com",
  phone: "+254 778 901 234",
  message: "I'm interested in your construction services. Could you send me more information about your residential building options?",
  status: "unread"
)
message1.save!

message2 = ContactMessage.new(
  name: "Elizabeth Muthoni",
  email: "elizabeth@example.com",
  phone: "+254 789 012 345",
  message: "Do you offer financing options for construction projects? Looking to build a commercial space in Kisii.",
  status: "read",
  read_at: Time.current
)
message2.save!

message3 = ContactMessage.new(
  name: "Charles Otieno",
  email: "charles.otieno@example.com",
  phone: "+254 790 123 456",
  message: "I have a plot in Sotik and would like to get a quote for a 4-bedroom house. What's the best way to proceed?",
  status: "unread"
)
message3.save!

puts "✅ Created #{ContactMessage.count} contact messages"

puts ""
puts "=" * 50
puts "🎉 Database seeding completed successfully!"
puts "=" * 50
puts ""
puts "📊 Summary:"
puts "   - Admins: #{Admin.count}"
puts "   - Estimate Requests: #{EstimateRequest.count}"
puts "   - Consultations: #{Consultation.count}"
puts "   - Newsletter Subscribers: #{NewsletterSubscriber.count}"
puts "   - Partners: #{Partner.count}"
puts "   - Contact Messages: #{ContactMessage.count}"
puts ""
puts "🔐 Login Credentials:"
puts "   Email: superadmin@tibos.com"
puts "   Password: Admin@123"
puts ""
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCalendarAlt, 
  faUser, 
  faTag,
  faArrowRight,
  faEye,
  faComment,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

// Import your blog images here
import blog1Img from "./images/project.jpg";
import blog2Img from "./images/adfasdf.jpg";
import blog3Img from "./images/background.jpg";
import blog4Img from "./images/ensuite.jpg";
import blog5Img from "./images/safety.jpg";
import blog6Img from "./images/flower.jpg";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Construction Trends to Watch in 2024",
      excerpt: "Discover the latest innovations shaping the construction industry, from sustainable materials to smart building technologies.",
      category: "Trends",
      author: "John Munene",
      date: "January 15, 2024",
      readTime: "5 min read",
      views: 1245,
      comments: 8,
      image: blog1Img,
      content: "Full article content goes here..."
    },
    {
      id: 2,
      title: "Sustainable Building Practices for Modern Homes",
      excerpt: "Learn how eco-friendly construction methods can reduce environmental impact while lowering long-term costs.",
      category: "Sustainability",
      author: "Sarah Wanjiku",
      date: "January 10, 2024",
      readTime: "7 min read",
      views: 892,
      comments: 12,
      image: blog2Img,
      content: "Full article content goes here..."
    },
    {
      id: 3,
      title: "The Importance of Quality Materials in Construction",
      excerpt: "Why investing in premium materials pays off in the long run through durability and reduced maintenance.",
      category: "Quality",
      author: "Peter Omondi",
      date: "January 5, 2024",
      readTime: "6 min read",
      views: 1567,
      comments: 15,
      image: blog3Img,
      content: "Full article content goes here..."
    },
    {
      id: 4,
      title: "Affordable Housing Solutions in Kenya",
      excerpt: "Exploring innovative approaches to making quality housing accessible to more Kenyans.",
      category: "Housing",
      author: "Grace Nduta",
      date: "December 20, 2023",
      readTime: "8 min read",
      views: 2103,
      comments: 24,
      image: blog4Img,
      content: "Full article content goes here..."
    },
    {
      id: 5,
      title: "Safety Standards Every Construction Site Must Follow",
      excerpt: "A comprehensive guide to maintaining safety protocols and protecting workers on site.",
      category: "Safety",
      author: "James Otieno",
      date: "December 15, 2023",
      readTime: "6 min read",
      views: 987,
      comments: 6,
      image: blog5Img,
      content: "Full article content goes here..."
    },
    {
      id: 6,
      title: "Maximizing Small Spaces: Interior Design Tips",
      excerpt: "Creative solutions for making the most of limited space in urban apartments and homes.",
      category: "Design",
      author: "Lisa Kamau",
      date: "December 10, 2023",
      readTime: "4 min read",
      views: 734,
      comments: 9,
      image: blog6Img,
      content: "Full article content goes here..."
    }
  ];

  const categories = ["All", "Trends", "Sustainability", "Quality", "Housing", "Safety", "Design"];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative w-full bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#020617] py-20 md:py-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, rgba(255,147,6,0.03) 0px, rgba(255,147,6,0.03) 1px, transparent 1px, transparent 60px),
              repeating-linear-gradient(0deg, rgba(255,147,6,0.03) 0px, rgba(255,147,6,0.03) 1px, transparent 1px, transparent 60px)
            `,
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#FF9306]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#FF6A00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF9306] animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wider">LATEST UPDATES</span>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9306] to-[#FF6A00]">
              Our Blog
            </span>
            <br />
            <span className="text-white">Insights & Updates</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Stay informed with the latest construction trends, tips, and company news
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 pl-11 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-colors"
            />
            <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#FF9306] to-[#FF6A00] text-black shadow-lg"
                    : "bg-white/5 text-gray-400 hover:text-white border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF9306]/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FF9306]/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/10">
                  <span className="text-[#FF9306] text-xs font-semibold">{post.category}</span>
                </div>

                {/* Read Time Badge */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1.5">
                  <span className="text-gray-300 text-xs">📖 {post.readTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-[#FF9306] text-xs" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faUser} className="text-[#FF9306] text-xs" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#FF9306] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-xs">
                  <div className="flex items-center gap-1 text-gray-500">
                    <FontAwesomeIcon icon={faEye} className="text-[#FF9306] text-xs" />
                    <span>{post.views} views</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <FontAwesomeIcon icon={faComment} className="text-[#FF9306] text-xs" />
                    <span>{post.comments} comments</span>
                  </div>
                </div>

                {/* Read More Link */}
                <button className="text-[#FF9306] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No articles found matching your criteria.</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-12">
            <button className="group relative bg-white/5 backdrop-blur-sm border border-[#FF9306]/30 px-8 py-3 text-white font-semibold rounded-lg hover:bg-[#FF9306]/10 hover:border-[#FF9306] transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                Load More Articles
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-r from-[#FF9306]/10 to-[#FF6A00]/10 rounded-2xl p-8 border border-[#FF9306]/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400 mb-6">Get the latest construction insights and updates delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9306] transition-colors"
            />
            <button className="bg-gradient-to-r from-[#FF6A00] to-[#FF9306] px-6 py-3 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 text-xs mt-4">No spam, unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
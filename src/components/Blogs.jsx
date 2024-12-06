import React from 'react';
import { FaPen, FaLeaf, FaBalanceScale } from 'react-icons/fa';  // Example icons for topics

const Blogs = () => {
  const blogPosts = [
    { 
      title: "The Benefits of WPC in Modern Architecture", 
      excerpt: "Discover how WPC is revolutionizing building materials...", 
      icon: <FaPen />, 
      image: "https://imgs.search.brave.com/pYPbyCA23xoCqLCBJFNoRIDfCEqkzP_zDk1hUCKQ-lM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9l/Y28tc2lnbi1ncmFz/c18yMy0yMTQ4NTc2/NjU3LmpwZz9zZW10/PWFpc19oeWJyaWQ" 
    },
    { 
      title: "Eco-Friendly Home Improvements with WPC", 
      excerpt: "Learn how to make your home more sustainable with WPC products...", 
      icon: <FaLeaf />, 
      image: "https://imgs.search.brave.com/pYPbyCA23xoCqLCBJFNoRIDfCEqkzP_zDk1hUCKQ-lM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9l/Y28tc2lnbi1ncmFz/c18yMy0yMTQ4NTc2/NjU3LmpwZz9zZW10/PWFpc19oeWJyaWQ" 
    },
    { 
      title: "WPC vs Traditional Materials: A Comparison", 
      excerpt: "We compare WPC to traditional building materials in terms of durability, cost, and environmental impact...", 
      icon: <FaBalanceScale />, 
      image: "https://imgs.search.brave.com/pYPbyCA23xoCqLCBJFNoRIDfCEqkzP_zDk1hUCKQ-lM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9l/Y28tc2lnbi1ncmFz/c18yMy0yMTQ4NTc2/NjU3LmpwZz9zZW10/PWFpc19oeWJyaWQ" 
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">WPC Insights: Our Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:duration-500">
              <div className="relative mb-4">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg">
                  <div className="text-3xl text-blue-500">{post.icon}</div>
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4 text-base">{post.excerpt}</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">Read more</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

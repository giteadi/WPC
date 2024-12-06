import React from 'react';
import { FaRecycle, FaTree, FaHome } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">About WPC Solutions</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg mb-6">
            At WPC Solutions, we're committed to providing eco-friendly, durable, and stylish wood-plastic composite products for your home. Our innovative materials combine the best properties of wood and plastic to create superior building materials that are both environmentally conscious and long-lasting.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-6">
            We strive to revolutionize the building materials industry by offering sustainable alternatives that don't compromise on quality or aesthetics. Our goal is to help homeowners and builders create beautiful, long-lasting structures while reducing their environmental impact.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <FaRecycle className="text-5xl text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p>We're committed to using recycled materials and reducing waste in our production process.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaTree className="text-5xl text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Environmental Responsibility</h3>
              <p>Our products help preserve forests by reducing the demand for traditional wood materials.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaHome className="text-5xl text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Living</h3>
              <p>We believe in enhancing the quality of life through durable, low-maintenance, and beautiful home solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


import React from 'react';
import { FaLeaf, FaShieldAlt, FaPaintRoller } from 'react-icons/fa';
import Blogs from './Blogs';
import Testimomials from './Testimonials';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header
        className="relative bg-gray-900 text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/bazeercloud/image/upload/v1733465987/wpc_ayo3xf.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative min-h-[80vh] flex items-center justify-center">
          <div className="max-w-3xl text-center p-6 rounded-lg"
            style={{
              background: "rgba(255, 255, 255, 0.15)", 
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.4)", 
              backdropFilter: "blur(15px)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.18)"
            }}
          >
            <h1 className="text-5xl font-extrabold mb-6 text-yellow-300">SARS - Secure and Reliable Solution (WPC)</h1>
            <p className="text-2xl font-semibold">Eco-friendly, durable, and stylish wood-plastic composite products for your home.</p>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-8">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-lg"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(12px)",
              }}>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">WPC Doors</h3>
              <p className="text-lg">Stylish and durable doors that combine the best of wood and plastic.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(12px)",
              }}>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">WPC Frames</h3>
              <p className="text-lg">Strong and weather-resistant frames for your windows and doors.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(12px)",
              }}>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">WPC Wall Panels</h3>
              <p className="text-lg">Beautiful and easy-to-install wall panels for interior and exterior use.</p>
            </div>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-8">Why Choose WPC?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex items-center p-8 rounded-lg shadow-lg bg-white"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(12px)",
              }}>
              <FaLeaf className="text-5xl text-green-600 mr-6" />
              <div>
                <h3 className="text-2xl font-semibold mb-4">Eco-Friendly</h3>
                <p className="text-lg">Made from recycled materials, reducing environmental impact.</p>
              </div>
            </div>
            <div className="flex items-center p-8 rounded-lg shadow-lg bg-white"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(12px)",
              }}>
              <FaShieldAlt className="text-5xl text-blue-600 mr-6" />
              <div>
                <h3 className="text-2xl font-semibold mb-4">Durable</h3>
                <p className="text-lg">Resistant to rot, decay, and insect damage for long-lasting performance.</p>
              </div>
            </div>
            <div className="flex items-center p-8 rounded-lg shadow-lg bg-white"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(12px)",
              }}>
              <FaPaintRoller className="text-5xl text-purple-600 mr-6" />
              <div>
                <h3 className="text-2xl font-semibold mb-4">Low Maintenance</h3>
                <p className="text-lg">No need for painting or staining, saving you time and money.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-16">
          <Blogs />
        </section>
        <section className="mb-16">
          <Testimomials />
        </section>
      </main>
    </div>
  );
};

export default Home;

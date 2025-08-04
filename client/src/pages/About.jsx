import React from "react";

const About = () => {
  return (
    <div className="mt-24 px-6 py-12 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700">About Stayfinity</h1>

        {/* What is Stayfinity */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">🏨 What is Stayfinity?</h2>
          <p className="text-lg leading-relaxed">
            <strong>Stayfinity</strong> is an intuitive hotel booking platform that helps travelers browse, book, and manage hotel stays effortlessly. Built with simplicity and functionality in mind, it supports both users and administrators with features tailored to their needs.
          </p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-6">✨ Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">📋</span>
              <div>
                <h3 className="font-semibold">Hotel Listings</h3>
                <p className="text-gray-600">
                  View hotels with images, amenities, pricing, and availability details.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-2xl">👤</span>
              <div>
                <h3 className="font-semibold">User Accounts</h3>
                <p className="text-gray-600">
                  Create accounts, login securely, and manage your personal bookings.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-2xl">✅</span>
              <div>
                <h3 className="font-semibold">Instant Booking</h3>
                <p className="text-gray-600">
                  Book rooms instantly and receive real-time confirmation and receipts.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-2xl">📱</span>
              <div>
                <h3 className="font-semibold">Responsive Design</h3>
                <p className="text-gray-600">
                  Optimized for all screen sizes — mobile, tablet, and desktop.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">🎯 Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At Stayfinity, we aim to make hotel booking simple, fast, and enjoyable. By combining clean UI with robust backend features, we offer a reliable solution for travelers to find and reserve stays — anytime, anywhere.
          </p>
        </section>

       
      </div>
    </div>
  );
};

export default About;

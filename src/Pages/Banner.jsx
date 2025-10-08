import React from "react";

const Banner = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Discover Amazing Apps
      </h1>
      <p className="text-lg max-w-xl mb-8">
        Explore productivity and lifestyle apps that make your day smarter.
      </p>
      <div className="flex gap-4">
        <a
          href="https://apps.apple.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          App Store
        </a>
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition"
        >
          Play Store
        </a>
      </div>
    </section>
  );
};

export default Banner;

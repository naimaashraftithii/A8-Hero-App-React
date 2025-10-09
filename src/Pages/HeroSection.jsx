import React from "react";
import heroImage from "../assets/hero.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      {/* Top Section */}
      <section className="w-full bg-white text-center px-4 py-12 overflow-hidden">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-black drop-shadow-lg">
          We Build <br />
          <span className="text-indigo-500 font-bold">Productive</span> Apps
        </h2>

        <p className="pt-4 md:pt-6 text-sm md:text-base text-[#627382] max-w-2xl mx-auto mb-8 drop-shadow-md">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler,
          smarter, and more exciting. Our goal is to turn your ideas into digital
          experiences that truly make an impact.
        </p>

        {/* Download Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          {/* Google Play */}
          <a
            href="https://play.google.com/store/apps?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="group flex items-center gap-2 bg-white text-black border border-[#D2D2D2] 
              px-4 py-2 rounded-lg transition-all duration-300 
              hover:bg-gradient-to-r hover:from-[#34A853] hover:to-[#4285F4] hover:text-white shadow-md"
            >
              <FaGooglePlay className="text-lg text-[#34A853] group-hover:text-white transition-all duration-300" />
              Google Play
            </button>
          </a>

          {/* App Store */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="group flex items-center gap-2 bg-white text-black border border-[#D2D2D2] 
              px-4 py-2 rounded-lg transition-all duration-300 
              hover:bg-gradient-to-r hover:from-[#000000] hover:to-[#434343] hover:text-white shadow-md"
            >
              <FaApple className="text-lg text-[#000000] group-hover:text-white transition-all duration-300" />
              App Store
            </button>
          </a>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="w-full flex justify-center items-center px-2 py-8">
        <img
          src={heroImage}
          alt="App showcase"
          className="w-full max-w-[600px] sm:max-w-[550px] md:max-w-[520px] lg:max-w-[600px]
          h-auto object-contain shadow-2xl rounded-3xl transition-transform duration-300 hover:scale-105"
        />
      </section>

      {/* Bottom Stats Section */}
      <section className="w-full -mt-8 bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-20">
        <div className="text-2xl md:text-4xl font-extrabold mb-8 text-center drop-shadow-lg">
          <h1>Trusted by Millions, Built for You</h1>
        </div>

        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-around px-6 gap-6">
          {/* Box 1 */}
          <div className="group text-center p-6 rounded-lg transition duration-300 hover:bg-white/20 hover:scale-105 cursor-pointer">
            <p className="text-xs pb-2 transition duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent">
              Total Downloads
            </p>
            <h3 className="text-5xl font-bold p-1 text-white transition duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent">
              29.6M
            </h3>
            <p className="text-xs text-indigo-200 pt-2 transition duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent">
              21% More Than Last Month
            </p>
          </div>

          {/* Box 2 */}
          <div className="group text-center p-6 rounded-lg transition duration-300 hover:bg-white/20 hover:scale-105 cursor-pointer">
            <p className="text-xs pb-2 transition duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent">
              Total Reviews
            </p>
            <h3 className="text-5xl font-bold p-1 text-white transition duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent">
              906K
            </h3>
            <p className="text-xs text-indigo-200 pt-2 transition duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent">
              40% More Than Last Month
            </p>
          </div>

          {/* Box 3 */}
          <div className="group text-center p-6 rounded-lg transition duration-300 hover:bg-white/20 hover:scale-105 cursor-pointer">
            <p className="text-xs pb-2 transition duration-300 group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text group-hover:text-transparent">
              Active Apps
            </p>
            <h3 className="text-5xl font-bold p-1 text-white transition duration-300 group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text group-hover:text-transparent">
              132+
            </h3>
            <p className="text-xs text-indigo-200 pt-2 transition duration-300 group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text group-hover:text-transparent">
              31 More Will Launch
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

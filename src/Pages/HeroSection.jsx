import React from "react";
import heroImage from "../assets/hero.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      {/*Hero Top Section */}
      <section className="w-full overflow-hidden bg-white text-center px-4 py-12">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-black drop-shadow-lg">
          We Build <br />
          <span className="text-indigo-500 font-bold">Productive</span> Apps
        </h2>
        <p className="pt-4 md:pt-6 text-sm md:text-base text-[#627382] max-w-2xl mx-auto mb-8 drop-shadow-md">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler,
          smarter, and more exciting. Our goal is to turn your ideas into digital
          experiences that truly make an impact.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button className="flex items-center gap-2 bg-white text-black border border-[#D2D2D2] px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#7f00ff] hover:to-[#e100ff] hover:text-white transition-all duration-300">
            <FaGooglePlay className="text-lg" /> Google Play
          </button>
          <button className="flex items-center gap-2 bg-white text-black border border-[#D2D2D2] px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#7f00ff] hover:to-[#e100ff] hover:text-white transition-all duration-300">
            <FaApple className="text-lg" /> App Store
          </button>
        </div>
      </section>

      {/* 2. Hero Image Section */}
      <section className="w-full flex justify-center items-center px-2 py-8 mb-15">
        <img
          src={heroImage}
          alt="App showcase"
          className="
            w-full max-w-[600px] sm:max-w-[550px] md:max-w-[520px] lg:max-w-[600px]
            h-auto object-contain shadow-2xl rounded-3xl transition-transform duration-300 hover:scale-105
          "
        />
      </section>

      {/* 3. Bottom Stats Section */}
      <section className="w-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-20 -mt-22.5">
  <div className="text-2xl md:text-4xl font-extrabold mb-8 text-center drop-shadow-lg">
    <h1>Trusted by Millions, Built for You</h1>
  </div>

  <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-around px-6 gap-6">

    {/* Stats 1 */}
    <div className="text-center md:text-center p-6 rounded-lg transition duration-300 hover:bg-white/20 hover:text-yellow-400 cursor-pointer">
      <p className="text-xs pb-2 transition duration-300 hover:text-yellow-400">Total Downloads</p>
      <h3 className="text-5xl font-bold p-1 transition duration-300 hover:text-yellow-400">29.6M</h3>
      <p className="text-xs text-indigo-200 pt-2 transition duration-300 hover:text-yellow-400">21% More Than Last Month</p>
    </div>

    {/* Stats 2 */}
    <div className="text-center md:text-center p-6 rounded-lg transition duration-300 hover:bg-white/20 hover:text-yellow-400 cursor-pointer">
      <p className="text-xs pb-2 transition duration-300 hover:text-yellow-400">Total Reviews</p>
      <h3 className="text-5xl font-bold p-1 transition duration-300 hover:text-yellow-400">906K</h3>
      <p className="text-xs text-indigo-200 pt-2 transition duration-300 hover:text-yellow-400">40% More Than Last Month</p>
    </div>

    {/* Stats 3 */}
    <div className="text-center md:text-center p-6 rounded-lg transition duration-300 hover:bg-white/20 hover:text-green-400 cursor-pointer">
      <p className="text-xs pb-2 transition duration-300 hover:text-green-400">Active Apps</p>
      <h3 className="text-5xl font-bold p-1 transition duration-300 hover:text-green-400">132+</h3>
      <p className="text-xs text-indigo-200 pt-2 transition duration-300 hover:text-green-400">31 More Will Launch</p>
    </div>

  </div>
</section>
 <section></section>

    </>
  );
};

export default HeroSection;

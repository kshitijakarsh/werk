"use client";
import { useEffect, useState } from "react";
import TaperedLinesBackground from "@/components/HeroBackground";
import Navbar from "@/components/Navbar";
import TweetGenerationFlow from "@/components/TweetGenerationFlow";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="relative w-full min-h-screen flex justify-center items-center px-4 overflow-hidden">
        <Navbar />
        <div className="absolute inset-0 z-0">
          <TaperedLinesBackground />
        </div>

        <div className="absolute inset-0 z-0 bg-gradient-radial from-gray-900/20 to-transparent"></div>

        <div
          className={`relative z-10 flex flex-row items-center space-x-28 max-w-6xl w-full transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-white max-w">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
              Write Tweets That Sound Like You
            </h1>
            <h1 className="text-4xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
              — Only Better
            </h1>

            <p className="mt-6 text-gray-400 max-w-md">
              Our AI enhances your unique voice while keeping your authentic
              style. Stand out with tweets that capture attention and drive
              engagement.
            </p>

            <button className="mt-8 px-6 py-3 bg-black text-white font-medium rounded-md border border-gray-800 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Get Started</span>
              <span className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-70">
                <span className="absolute bg-white button-line"></span>
              </span>
            </button>
          </div>

          <>
            <div className="relative p-8 rounded-lg max-w-sm w-full bg-black/70 backdrop-blur-sm overflow-hidden border border-gray-800 shadow-xl shadow-black/30">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/10"></div>
              <BorderBeam
                className="w-full h-full"
                colorFrom="#888888"
                colorTo="#ffffff"
              />

              <div className="relative z-10">
                <h2 className="text-white text-xl font-semibold mb-4">
                  Start Writing Better Tweets
                </h2>
                <p className="text-gray-300 mb-6">
                  Transform your ideas into engaging tweets that maintain your
                  unique voice and connect with your audience.
                </p>

                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                  <button className="w-full py-3 bg-black text-white font-medium rounded-md border border-gray-800 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                    <span className="relative z-10">Join Waitlist</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        </div>

        <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-gray-500/5 blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-32 h-32 rounded-full bg-gray-400/5 blur-3xl"></div>
      </div>
      <TweetGenerationFlow />
    </div>
  );
}

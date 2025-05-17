"use client";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import TaperedLinesBackground from "@/components/HeroBackground";
import { ShineBorder } from "./magicui/shine-border";
import { BorderBeam } from "./magicui/border-beam";

export default function TweetGenerationFlow() {
  const [tweet, setTweet] = useState("");

  const handleTweetClick = (content: any) => setTweet(content);

  return (
    <section className="relative w-full py-28 px-4 md:px-8 flex flex-col items-center bg-black/60 mx-auto select-none overflow-hidden h-screen">
      <div className="absolute inset-0 -z-10">
        <TaperedLinesBackground />
      </div>
      <div className="absolute inset-0 -z-20 bg-gradient-radial from-gray-900/25 to-transparent" />

      <h1 className="text-3xl md:text-4xl font-extrabold mb-24 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600 max-w-xl">
        How It Works
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 w-full justify-center">
        <div className="relative overflow-hidden w-64 h-80 rounded-xl">
          <ShineBorder
            shineColor={["#2D2D2D", "#7D7D7D", "#BFBFBF"]}
            className="rounded-xl"
          />
          <img
            src="/learning.jpg"
            alt="Learning"
            className="w-full h-full object-cover rounded-xl border border-gray-700 [mask-image:linear-gradient(to_top,transparent,white)] [-webkit-mask-image:linear-gradient(to_top,transparent,white)]"
          />
          <h1 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center font-mono text-white text-sm z-10">
            We learn from you
          </h1>
        </div>

        <MoveRight
          className="w-10 h-10 text-gray-400 hidden md:block self-center"
          aria-hidden="true"
          strokeWidth={2}
        />

        <div className="relative overflow-hidden w-64 h-80 rounded-xl">
          <ShineBorder
            shineColor={["#2D2D2D", "#7D7D7D", "#BFBFBF"]}
            className="rounded-xl"
          />
          <img
            src="/your_model.jpg"
            alt="Model"
            className="w-full h-full object-cover rounded-xl border border-gray-700 [mask-image:linear-gradient(to_top,transparent,white)] [-webkit-mask-image:linear-gradient(to_top,transparent,white)]"
          />
          <h1 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center font-mono text-white text-sm z-10">
            We create a model to represent you
          </h1>
        </div>

        <MoveRight
          className="w-10 h-10 text-gray-400 hidden md:block self-center"
          aria-hidden="true"
          strokeWidth={2}
        />

        <div className="relative overflow-hidden h-80 rounded-xl">
          <ShineBorder
            shineColor={["#2D2D2D", "#7D7D7D", "#BFBFBF"]}
            className="rounded-xl"
          />
          <div className="w-full h-full flex flex-col gap-4 justify-center px-6 py-4 bg-black/40 backdrop-blur-sm rounded-xl border border-gray-700">
            <h2 className="text-white text-sm text-center mb-2 z-10 relative">
              Choose your tweet tone
            </h2>
            <button
              className="px-6 py-3 bg-black text-white font-medium rounded-md border border-gray-700 hover:shadow-lg hover:shadow-white/10 transition duration-300 z-10 relative"
              onClick={() =>
                handleTweetClick(
                  "Been playing around with agents lately. Made one that actually learns from your tweets and then writes like you. It’s scary good. Teaching it sarcasm now. Wish me luck."
                )
              }
            >
              Tech Related
            </button>
            <button
              className="px-6 py-3 bg-black text-white font-medium rounded-md border border-gray-700 hover:shadow-lg hover:shadow-white/10 transition duration-300 z-10 relative"
              onClick={() =>
                handleTweetClick(
                  "Just launched twyt — an AI agent that learns from your Twitter and tweets like you. Think of it as your digital twin, but slightly more productive. Try it out, judge me later."
                )
              }
            >
              Launch Tweet
            </button>
            <button
              className="px-6 py-3 bg-black text-white font-medium rounded-md border border-gray-700 hover:shadow-lg hover:shadow-white/10 transition duration-300 z-10 relative"
              onClick={() =>
                handleTweetClick(
                  "ngl if twyt tweets better than me I’m suing myself for identity theft"
                )
              }
            >
              I wanna shitpost today
            </button>
          </div>
        </div>
      </div>

      {tweet && (
        <div className="mt-16 px-6 py-4 bg-black border border-gray-700 rounded-xl max-w-xl text-white text-center font-light italic shadow-md relative">
          <BorderBeam
            className="w-full h-full"
            colorFrom="#888888"
            colorTo="#ffffff"
          />

          {tweet}
        </div>
      )}
    </section>
  );
}

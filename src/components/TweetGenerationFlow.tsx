"use client";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import TaperedLinesBackground from "@/components/HeroBackground";

const FlowCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="p-6 rounded-xl bg-black/80 backdrop-blur-md border border-gray-700 shadow-md w-full md:w-80">
      <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default function TweetGenerationFlow() {
  const [copied, setCopied] = useState(false);
  const tweetText =
    "Just shipped our new AI feature that enhances productivity by 40%. Early users are calling it 'game-changing' — can't wait to hear what you think! #AIrevolution";

  const handleCopy = () => {
    navigator.clipboard.writeText(tweetText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="relative w-full py-28 px-8 flex flex-col items-center bg-black/60 rounded-2xl max-w mx-auto select-none">
      <div className="absolute inset-0 -z-10">
        <TaperedLinesBackground />
      </div>
      <div className="absolute inset-0 -z-20 bg-gradient-radial from-gray-900/25 to-transparent"></div>

      <h1 className="text-3xl md:text-4xl font-extrabold mb-32 text-center text-white max-w-xl">
        How It Works
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-12 md:gap-16 w-full justify-center">
        <FlowCard
          title="Learning from your tweets"
          description="We analyze your Twitter history to capture your voice"
        />

        <MoveRight
          className="w-10 h-10 text-gray-400 hidden md:block self-center"
          aria-hidden="true"
          strokeWidth={2}
        />

        <FlowCard
          title="Tweeting for you"
          description="We generate on-brand tweets that sound like you"
        />
      </div>

      <button
        onClick={handleCopy}
        className={`mt-32 px-10 py-3 rounded-lg font-semibold transition-colors duration-300 relative overflow-hidden border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white shadow-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 ${
          copied ? "" : ""
        }`}
      >
        {copied ? "Copied!" : "Copy Example Tweet"}
      </button>
    </section>
  );
}

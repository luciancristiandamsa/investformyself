"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function SimpleChoicesPage() {
  const [answer, setAnswer] = useState<null | "correct" | "wrong">(null);

  /* AUDIO */
  const correctSoundRef = useRef<HTMLAudioElement | null>(null);
  const wrongSoundRef = useRef<HTMLAudioElement | null>(null);

  if (!correctSoundRef.current) {
    correctSoundRef.current = new Audio("/sounds/correct.mp3");
  }

  if (!wrongSoundRef.current) {
    wrongSoundRef.current = new Audio("/sounds/wrong.mp3");
  }

  const playCorrect = () => {
    correctSoundRef.current!.currentTime = 0;
    correctSoundRef.current?.play();
  };

  const playWrong = () => {
    wrongSoundRef.current!.currentTime = 0;
    wrongSoundRef.current?.play();
  };

  return (
    <main
      className="relative min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage: "url('/InvestForMySelf_Background_Homepage.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 max-w-4xl mx-auto pt-16">
        {/* HERO */}
        <div className="bg-black/25 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg mb-4">
          <h1 className="text-4xl font-extrabold text-white">
            🧩 Simple Choices
          </h1>

          <p className="mt-3 text-white/85 text-base md:text-lg">
            Learning how to choose wisely
          </p>
        </div>

        <div className="mb-8 text-sm text-white/80">
  <Link href="/" className="hover:text-green-300">
    Home
  </Link>
  {" / "}
  <Link href="/children" className="hover:text-green-300">
    Children
  </Link>
  {" / "}
  <Link
    href="/children/little-explorers"
    className="hover:text-green-300"
  >
    Little Explorers
  </Link>
  {" / "}
  <span className="text-white font-semibold">
    Simple Choices
  </span>
</div>


        {/* GAME */}
        <div className="bg-white/90 rounded-3xl p-8 shadow-md mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            😊 Pick one
          </h2>

          <p className="mb-6">
            You have free time. What do you pick?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* OPTION 1 — CORRECT */}
            <button
              onClick={() => {
                setAnswer("correct");
                playCorrect();
              }}
              className="p-6 rounded-2xl border border-gray-300 bg-white hover:bg-gray-50 transition text-left shadow-sm"
            >
              📘 Read a book or learn something new
            </button>

            {/* OPTION 2 — WRONG */}
            <button
              onClick={() => {
                setAnswer("wrong");
                playWrong();
              }}
              className="p-6 rounded-2xl border border-gray-300 bg-white hover:bg-gray-50 transition text-left shadow-sm"
            >
              📺 Watch videos for a long time
            </button>
          </div>

          {/* FEEDBACK (reserved space) */}
          <div className="mt-6 min-h-[40px]">
            {answer === "correct" && (
              <p className="text-green-700 font-medium">
                ✔ Nice pick! 🌟
              </p>
            )}

            {answer === "wrong" && (
              <p className="text-red-600 font-medium">
                ✖ Try again 😊
              </p>
            )}
          </div>
        </div>

        {/* BACK */}
        <div className="text-center">
          <Link
            href="/children"
            className="text-white underline hover:text-green-300"
          >
            ← Back to Children Page
          </Link>
        </div>
      </div>
    </main>
  );
}

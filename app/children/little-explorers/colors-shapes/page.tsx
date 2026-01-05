"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function ColorsAndShapesPage() {
  const [colorAnswer, setColorAnswer] = useState<null | "correct" | "wrong">(null);
  const [shapeAnswer, setShapeAnswer] = useState<null | "correct" | "wrong">(null);

  const correctSound =
    typeof Audio !== "undefined" ? new Audio("/sounds/correct.mp3") : null;
  const wrongSound =
    typeof Audio !== "undefined" ? new Audio("/sounds/wrong.mp3") : null;

  return (
    <main
      className="relative min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage: "url('/InvestForMySelf_Background_Homepage.png')",
      }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 max-w-4xl mx-auto pt-16">
        {/* HERO */}
        <div className="bg-black/25 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg mb-12">
          <h1 className="text-4xl font-extrabold text-white">
            🎨 Colors & Shapes
          </h1>
          <p className="mt-4 text-white/90">
            Click the correct answer. If it’s wrong, try again!
          </p>
        </div>
        <div className="mb-8 text-sm text-white/80">
  <Link href="/" className="hover:text-green-300">Home</Link>
  {" / "}
  <Link href="/children" className="hover:text-green-300">Children</Link>
  {" / "}
  <Link
  href="/children/little-explorers"
  className="hover:text-green-300"
>
  Little Explorers
</Link>
{" / "}
<span className="text-white font-semibold">
  Colors & Shapes
</span>
</div>


        {/* GAME 1 — COLORS */}
        <div className="bg-white/90 rounded-3xl p-8 shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            🎯 Find the Color
          </h2>

          <p className="mb-6">
            Which one is <span className="font-bold text-red-500">RED</span>?
          </p>

          <div className="grid grid-cols-3 gap-6">
            {/* CORRECT */}
            <button
              onClick={() => {
                setColorAnswer("correct");
                correctSound?.play();
              }}
              className="h-20 rounded-xl bg-red-500 hover:scale-105 transition"
            />

            {/* WRONG */}
            <button
              onClick={() => {
                setColorAnswer("wrong");
                wrongSound?.play();
              }}
              className="h-20 rounded-xl bg-blue-500 hover:scale-105 transition"
            />

            {/* WRONG */}
            <button
              onClick={() => {
                setColorAnswer("wrong");
                wrongSound?.play();
              }}
              className="h-20 rounded-xl bg-green-500 hover:scale-105 transition"
            />
          </div>

          {/* FEEDBACK (stable height) */}
          <div className="mt-6 min-h-[32px]">
            {colorAnswer === "correct" && (
              <p className="text-green-700 font-medium">
                ✔ Great job! Red is the correct color.
              </p>
            )}

            {colorAnswer === "wrong" && (
              <p className="text-red-600 font-medium">
                ✖ That’s okay — try again!
              </p>
            )}
          </div>
        </div>

        {/* GAME 2 — SHAPES */}
        <div className="bg-white/90 rounded-3xl p-8 shadow-md mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            🔺 Find the Shape
          </h2>

          <p className="mb-6">
            Which one is a <strong>circle</strong>?
          </p>

          <div className="grid grid-cols-3 gap-6">
            {/* CORRECT */}
            <button
              onClick={() => {
                setShapeAnswer("correct");
                correctSound?.play();
              }}
              className="h-20 w-20 bg-blue-400 rounded-full mx-auto hover:scale-105 transition"
            />

            {/* WRONG */}
            <button
              onClick={() => {
                setShapeAnswer("wrong");
                wrongSound?.play();
              }}
              className="h-20 w-20 bg-yellow-400 mx-auto hover:scale-105 transition"
            />

            {/* WRONG */}
            <button
              onClick={() => {
                setShapeAnswer("wrong");
                wrongSound?.play();
              }}
              className="h-20 w-20 bg-green-400 rotate-45 mx-auto hover:scale-105 transition"
            />
          </div>

          {/* FEEDBACK (stable height) */}
          <div className="mt-6 min-h-[32px]">
            {shapeAnswer === "correct" && (
              <p className="text-green-700 font-medium">
                ✔ Nice work! The circle is correct.
              </p>
            )}

            {shapeAnswer === "wrong" && (
              <p className="text-red-600 font-medium">
                ✖ Not quite — try again!
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

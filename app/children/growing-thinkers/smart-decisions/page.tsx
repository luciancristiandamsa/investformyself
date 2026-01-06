"use client";

import { useState } from "react";
import Link from "next/link";

export default function SmartDecisionsPage() {
  const [moneyChoice, setMoneyChoice] = useState<null | "now" | "later" | "split">(null);
  const [timeChoice, setTimeChoice] = useState<null | "play" | "work" | "plan">(null);

  const clickSound =
    typeof Audio !== "undefined" ? new Audio("/sounds/correct.mp3") : null;

  return (
    <main
      className="relative min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage: "url('/InvestForMySelf_Background_Homepage.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto pt-16">
        {/* HERO */}
        <div className="bg-black/25 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg mb-12">
          <h1 className="text-4xl font-extrabold text-white">
            💡 Smart Decisions
          </h1>
          <p className="mt-4 text-white/90">
            Every choice leads somewhere. Let’s practice thinking one step ahead.
          </p>
        </div>

        {/* BREADCRUMBS */}
        <div className="mb-8 text-sm text-white/80">
          <Link href="/" className="hover:text-green-300">Home</Link>
          {" / "}
          <Link href="/children" className="hover:text-green-300">Children</Link>
          {" / "}
          <Link href="/children/growing-thinkers" className="hover:text-green-300">
            Growing Thinkers
          </Link>
          {" / "}
          <span className="text-white font-semibold">Smart Decisions</span>
        </div>

        {/* GAME 1 — MONEY */}
        <div className="bg-white/90 rounded-3xl p-6 shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4">💰 Money Choice</h2>

          <p className="mb-6">
            You receive some money as a gift. What do you do?
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => {
                setMoneyChoice("now");
                clickSound?.play();
              }}
              className="p-6 rounded-xl bg-white hover:scale-105 transition shadow border"
            >
              Spend it all now
            </button>

            <button
              onClick={() => {
                setMoneyChoice("later");
                clickSound?.play();
              }}
              className="p-6 rounded-xl bg-white hover:scale-105 transition shadow border"
            >
              Save it for later
            </button>

            <button
              onClick={() => {
                setMoneyChoice("split");
                clickSound?.play();
              }}
              className="p-6 rounded-xl bg-white hover:scale-105 transition shadow border"
            >
              Spend some, save some
            </button>
          </div>

          {/* FEEDBACK — reserved space only */}
          <div className="mt-6 min-h-[80px]">
            {moneyChoice === "now" && (
              <p className="text-gray-700 font-medium">
                You enjoy something right away, but later you don’t have money
                for something bigger.
              </p>
            )}

            {moneyChoice === "later" && (
              <p className="text-gray-700 font-medium">
                You move closer to a bigger goal, but you miss enjoying something
                today.
              </p>
            )}

            {moneyChoice === "split" && (
              <p className="text-green-700 font-medium">
                You enjoy today and still move toward your bigger goal. Nice balance!
              </p>
            )}

            {moneyChoice && (
              <p className="mt-3 text-sm text-gray-600">
                💭 What do you think you would choose next time?
              </p>
            )}
          </div>
        </div>

        {/* GAME 2 — TIME */}
        <div className="bg-white/90 rounded-3xl p-6 shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4">⏰ Time Choice</h2>

          <p className="mb-6">
            You have homework and also want to play. What do you do?
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => {
                setTimeChoice("play");
                clickSound?.play();
              }}
              className="p-6 rounded-xl bg-white hover:scale-105 transition shadow border"
            >
              Play first
            </button>

            <button
              onClick={() => {
                setTimeChoice("work");
                clickSound?.play();
              }}
              className="p-6 rounded-xl bg-white hover:scale-105 transition shadow border"
            >
              Homework first
            </button>

            <button
              onClick={() => {
                setTimeChoice("plan");
                clickSound?.play();
              }}
              className="p-6 rounded-xl bg-white hover:scale-105 transition shadow border"
            >
              Plan a short break
            </button>
          </div>

          {/* FEEDBACK — reserved space only */}
          <div className="mt-6 min-h-[80px]">
            {timeChoice === "play" && (
              <p className="text-gray-700 font-medium">
                Playing is fun, but homework might feel harder later.
              </p>
            )}

            {timeChoice === "work" && (
              <p className="text-green-700 font-medium">
                You finish your work and can relax after.
              </p>
            )}

            {timeChoice === "plan" && (
              <p className="text-green-700 font-medium">
                Planning helps you enjoy both and stay focused.
              </p>
            )}

            {timeChoice && (
              <p className="mt-3 text-sm text-gray-600">
                💭 How does planning change how you feel later?
              </p>
            )}
          </div>
        </div>

        {/* BACK */}
        <div className="text-center">
          <Link
            href="/children/growing-thinkers"
            className="text-white underline hover:text-green-300"
          >
            ← Back to Growing Thinkers
          </Link>
        </div>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

export default function PlanningAheadPage() {
  const [projectChoice, setProjectChoice] = useState<null | "daily" | "last" | "plan">(null);
  const [morningChoice, setMorningChoice] = useState<null | "night" | "morning" | "rush">(null);

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
            📊 Planning Ahead
          </h1>
          <p className="mt-4 text-white/90">
            Planning helps make things easier and less stressful.
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
          <span className="text-white font-semibold">Planning Ahead</span>
        </div>

        {/* GAME 1 — PROJECT */}
        <div className="bg-white/90 rounded-3xl p-6 shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            📘 School Project
          </h2>

          <p className="mb-6">
            You have a school project due in one week. What do you do?
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => {
                setProjectChoice("daily");
                clickSound?.play();
              }}
              className="p-6 rounded-xl bg-white shadow border hover:scale-105 transition"
            >
              Work a little each day
            </button>

            <button
              onClick={() => {
                setProjectChoice("last");
                clickSound?.play();
              }}
              className="p-6 rounded-xl bg-white shadow border hover:scale-105 transition"
            >
              Wait until the last day
            </button>

            <button
              onClick={() => {
                setProjectChoice("plan");
                clickSound?.play();
              }}
              className="p-6 rounded-xl bg-white shadow border hover:scale-105 transition"
            >
              Make a simple plan first
            </button>
          </div>

          <div className="mt-6 min-h-[80px]">
            {projectChoice === "daily" && (
              <p className="text-green-700 font-medium">
                Small steps each day make the work feel easier.
              </p>
            )}

            {projectChoice === "last" && (
              <p className="text-gray-700 font-medium">
                Waiting can make things feel rushed and stressful.
              </p>
            )}

            {projectChoice === "plan" && (
              <p className="text-green-700 font-medium">
                Planning helps you know what to do and when.
              </p>
            )}

            {projectChoice && (
              <p className="mt-3 text-sm text-gray-600">
                💭 How does planning change the week?
              </p>
            )}
          </div>
        </div>

        {/* GAME 2 — MORNING */}
        <div className="bg-white/90 rounded-3xl p-6 shadow-md mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            ⏰ Morning Routine
          </h2>

          <p className="mb-6">
            You’re getting ready for school in the morning. What helps most?
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => {
                setMorningChoice("night");
                clickSound?.play();
              }}
              className="p-6 rounded-xl bg-white shadow border hover:scale-105 transition"
            >
              Prepare things the night before
            </button>

            <button
              onClick={() => {
                setMorningChoice("morning");
                clickSound?.play();
              }}
              className="p-6 rounded-xl bg-white shadow border hover:scale-105 transition"
            >
              Decide everything in the morning
            </button>

            <button
              onClick={() => {
                setMorningChoice("rush");
                clickSound?.play();
              }}
              className="p-6 rounded-xl bg-white shadow border hover:scale-105 transition"
            >
              Rush and grab things quickly
            </button>
          </div>

          <div className="mt-6 min-h-[80px]">
            {morningChoice === "night" && (
              <p className="text-green-700 font-medium">
                Preparing early makes mornings calmer.
              </p>
            )}

            {morningChoice === "morning" && (
              <p className="text-gray-700 font-medium">
                Deciding in the morning can take extra time.
              </p>
            )}

            {morningChoice === "rush" && (
              <p className="text-gray-700 font-medium">
                Rushing can make you forget things.
              </p>
            )}

            {morningChoice && (
              <p className="mt-3 text-sm text-gray-600">
                💭 How does planning help you feel?
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

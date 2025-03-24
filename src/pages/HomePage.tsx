// ---------------------------
// shell-app/src/pages/HomePage.tsx
// ---------------------------
import React from "react";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <section className="text-center py-12 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-6 text-gray-600">지금 바로 IoEHub에 접속하여 당신의 IoT와 AI를 연결해보세요.</p>
        <a
          href="/login"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}
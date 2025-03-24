// ---------------------------
// shell-app/src/components/HeroSection.tsx
// ---------------------------
import React from "react";

export default function HeroSection() {
  return (
    <section className="text-center py-24 bg-gradient-to-b from-white to-gray-50">
      <h2 className="text-5xl font-extrabold mb-6">Connect Your IoT with AI</h2>
      <p className="text-xl mb-8 text-gray-600">IoEHub는 MCP 서버와 IoT 장비를 통합하여 AI 기반의 자동화를 실현합니다.</p>
      <div className="space-x-4">
        <a href="/login" className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg">Get Started</a>
        <a href="/docs" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg text-lg">Documentation</a>
      </div>
    </section>
  );
}

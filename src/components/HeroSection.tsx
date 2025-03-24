// ---------------------------
// shell-app/src/components/HeroSection.tsx
// ---------------------------
import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-50 to-white -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        {/* 텍스트 영역 */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
            The AI community <br />
            building the future.
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl">
            Connect Everything. Automate Anything. <br />
            IoEHub는 IoT 기기와 AI를 쉽게 연결하여 지능형 자동화를 구현합니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
            <Link to="/explore" className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition">
              Explore AI Apps
            </Link>
            <Link to="/docs" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg text-lg font-medium hover:bg-blue-50 transition">
              Browse Models
            </Link>
          </div>
        </div>
        
        {/* 이미지/애니메이션 영역 */}
        <div className="w-full md:w-1/2 relative">
          <div className="bg-white rounded-xl shadow-lg p-6 md:ml-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="font-semibold mb-1">AI 연동</h3>
                <p className="text-xs text-gray-600">자연어 처리, 이미지 인식, 예측 알고리즘</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-xl">📱</span>
                </div>
                <h3 className="font-semibold mb-1">IoT 제어</h3>
                <p className="text-xs text-gray-600">센서, 액추에이터, 웨어러블 디바이스</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-xl">🔄</span>
                </div>
                <h3 className="font-semibold mb-1">MCP 서버</h3>
                <p className="text-xs text-gray-600">실시간 메시지 중계 및 처리</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="font-semibold mb-1">데이터 분석</h3>
                <p className="text-xs text-gray-600">시각화, 이상 감지, 예측</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

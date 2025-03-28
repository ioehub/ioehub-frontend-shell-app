// ---------------------------
// shell-app/src/components/Footer.tsx
// ---------------------------
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* 회사 정보 및 로고 */}
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <div className="mr-2 w-8 h-8 bg-yellow-400 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">😊</span>
              </div>
              <span className="text-xl font-bold">ioehub</span>
            </div>
            <p className="text-gray-600 mb-4">
              IoT 장치와 AI 서비스를 연결하여 더 지능적이고 자동화된 세상을 구축합니다.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ioehub" className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://github.com/ioehub" className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://linkedin.com/company/ioehub" className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* 리소스 */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">리소스</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/models" className="hover:underline">AI 모델</Link></li>
              <li><Link to="/datasets" className="hover:underline">데이터셋</Link></li>
              <li><Link to="/spaces" className="hover:underline">스페이스</Link></li>
              <li><Link to="/docs" className="hover:underline">API 문서</Link></li>
              <li><Link to="/pricing" className="hover:underline">가격 정책</Link></li>
            </ul>
          </div>
          
          {/* IoEHub */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">IoEHub</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/about" className="hover:underline">회사 소개</Link></li>
              <li><Link to="/careers" className="hover:underline">채용 정보</Link></li>
              <li><Link to="/blog" className="hover:underline">블로그</Link></li>
              <li><Link to="/newsletter" className="hover:underline">뉴스레터</Link></li>
              <li><Link to="/press" className="hover:underline">보도자료</Link></li>
            </ul>
          </div>
          
          {/* 지원 */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">지원</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/help" className="hover:underline">도움말</Link></li>
              <li><Link to="/status" className="hover:underline">시스템 상태</Link></li>
              <li><Link to="/contact" className="hover:underline">문의하기</Link></li>
              <li><Link to="/privacy" className="hover:underline">개인정보 처리방침</Link></li>
              <li><Link to="/terms" className="hover:underline">서비스 이용약관</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            2025 IoEHub. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4">
            <a href="/cookies" className="text-gray-500 text-sm hover:underline mb-2 md:mb-0">쿠키 정책</a>
            <a href="/legal" className="text-gray-500 text-sm hover:underline mb-2 md:mb-0">법적 고지</a>
            <a href="/security" className="text-gray-500 text-sm hover:underline mb-2 md:mb-0">보안 정책</a>
            <a href="/sitemap" className="text-gray-500 text-sm hover:underline mb-2 md:mb-0">사이트맵</a>
            <div className="text-gray-400 text-sm">
              <span className="mr-2">서울특별시 강남구 테헤란로 123</span>
              <span>사업자등록번호: 123-45-67890</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

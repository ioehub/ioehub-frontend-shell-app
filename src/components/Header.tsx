// ---------------------------
// shell-app/src/components/Header.tsx
// ---------------------------
import React, { useState } from "react";
import { Link } from "react-router-dom";

// 아이콘 컴포넌트
const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6C12.268 6 6 12.268 6 20C6 27.732 12.268 34 20 34C27.732 34 34 27.732 34 20C34 12.268 27.732 6 20 6ZM20 8C26.627 8 32 13.373 32 20C32 26.627 26.627 32 20 32C13.373 32 8 26.627 8 20C8 13.373 13.373 8 20 8Z" fill="#FFD43B"/>
    <path d="M20 12C16.686 12 14 14.686 14 18C14 21.314 16.686 24 20 24C23.314 24 26 21.314 26 18C26 14.686 23.314 12 20 12Z" fill="#FFD43B"/>
    <path d="M15 26C13.895 26 13 26.895 13 28C13 29.105 13.895 30 15 30C16.105 30 17 29.105 17 28C17 26.895 16.105 26 15 26Z" fill="#FFD43B"/>
    <path d="M25 26C23.895 26 23 26.895 23 28C23 29.105 23.895 30 25 30C26.105 30 27 29.105 27 28C27 26.895 26.105 26 25 26Z" fill="#FFD43B"/>
  </svg>
);

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  
  return (
    <header className="w-full px-4 py-3 border-b flex items-center bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-2 mr-3">
        <Logo />
        <h1 className="text-xl font-bold">
          <Link to="/" className="hover:opacity-80">ioehub</Link>
        </h1>
      </div>
      
      {/* 검색창 */}
      <div className="relative flex-grow max-w-2xl mx-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <SearchIcon />
          </div>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="block w-full bg-gray-100 border border-gray-300 rounded-lg py-2 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search models, datasets, users..."
          />
        </div>
      </div>
      
      {/* 메인 네비게이션 */}
      <nav className="flex items-center space-x-1 md:space-x-3 text-sm">
        <Link to="/models" className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg font-medium">
          <span className="mr-1 text-gray-400">🤖</span> Models
        </Link>
        <Link to="/datasets" className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg font-medium">
          <span className="mr-1 text-gray-400">📊</span> Datasets
        </Link>
        <Link to="/spaces" className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg font-medium">
          <span className="mr-1 text-gray-400">🚀</span> Spaces
        </Link>
        <Link to="/docs" className="hidden md:flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg font-medium">
          <span className="mr-1 text-gray-400">📚</span> Docs
        </Link>
        <div className="hidden lg:flex items-center">
          <Link to="/mcp" className="px-3 py-2 hover:bg-gray-100 rounded-lg font-medium">MCP</Link>
          <Link to="/device" className="px-3 py-2 hover:bg-gray-100 rounded-lg font-medium">Devices</Link>
        </div>
        <Link to="/pricing" className="hidden md:block px-3 py-2 hover:bg-gray-100 rounded-lg font-medium">Pricing</Link>
        
        <div className="flex items-center ml-2">
          <Link to="/login" className="mr-2 px-2 py-1 text-gray-700 hover:bg-gray-100 rounded-lg">Log in</Link>
          <Link to="/signup" className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
}

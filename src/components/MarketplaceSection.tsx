// ---------------------------
// shell-app/src/components/MarketplaceSection.tsx
// ---------------------------
import React from "react";
import { Link } from "react-router-dom";

// 마켓플레이스 아이템 샘플 데이터
const marketplaceItems = [
  {
    id: "1",
    name: "스마트 온도/습도 센서",
    category: "sensor",
    manufacturer: "Samsung Electronics",
    price: "19,900",
    rating: 4.8,
    reviews: 423,
    image: "temp-sensor"
  },
  {
    id: "2",
    name: "산업용 모션 감지기",
    category: "sensor",
    manufacturer: "LG Industrial",
    price: "78,500",
    rating: 4.6,
    reviews: 215,
    image: "motion-sensor"
  },
  {
    id: "3",
    name: "스마트 플러그 컨트롤러",
    category: "actuator",
    manufacturer: "IoEHub Inc",
    price: "15,000",
    rating: 4.9,
    reviews: 812,
    image: "smart-plug"
  },
  {
    id: "4",
    name: "AI 음성 제어 패널",
    category: "controller",
    manufacturer: "Naver AI",
    price: "129,000",
    rating: 4.7,
    reviews: 147,
    image: "voice-panel"
  },
  {
    id: "5",
    name: "산업용 게이트웨이 v2",
    category: "gateway",
    manufacturer: "SK Telecom",
    price: "299,000",
    rating: 4.5,
    reviews: 94,
    image: "gateway"
  },
  {
    id: "6",
    name: "MCP-500 서버 (소형)",
    category: "server",
    manufacturer: "IoEHub Inc",
    price: "499,000",
    rating: 4.9,
    reviews: 53,
    image: "mcp-server"
  }
];

// 카테고리 아이콘 컴포넌트
const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case "sensor":
      return (
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
        </div>
      );
    case "actuator":
      return (
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
      );
    case "controller":
      return (
        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </div>
      );
    case "gateway":
      return (
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
            <line x1="6" y1="10" x2="6" y2="14"/>
            <line x1="12" y1="10" x2="12" y2="14"/>
            <line x1="18" y1="10" x2="18" y2="14"/>
          </svg>
        </div>
      );
    case "server":
      return (
        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
            <line x1="6" y1="6" x2="6.01" y2="6"/>
            <line x1="6" y1="18" x2="6.01" y2="18"/>
          </svg>
        </div>
      );
    default:
      return (
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="16"/>
            <line x1="8" y1="12" x2="16" y2="12"/>
          </svg>
        </div>
      );
  }
};

// 별점 컴포넌트
const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-500">
          {i < fullStars ? '★' : (i === fullStars && hasHalfStar ? '★' : '☆')}
        </span>
      ))}
      <span className="ml-1 text-gray-700">{rating}</span>
    </div>
  );
};

// 제품 카드 컴포넌트
const ProductCard = ({ item }: { item: any }) => (
  <Link to={`/marketplace/${item.id}`} className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-200">
    <div className={`h-40 bg-gradient-to-br from-${getCategoryColor(item.category)}-50 to-${getCategoryColor(item.category)}-100 p-4 flex items-center justify-center`}>
      <CategoryIcon category={item.category} />
    </div>
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded-full">{getCategoryName(item.category)}</span>
        <span className="text-xs text-gray-500">{item.manufacturer}</span>
      </div>
      <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
      <div className="mb-2">
        <StarRating rating={item.rating} />
        <span className="text-xs text-gray-500 ml-2">({item.reviews} 리뷰)</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold text-blue-600">{item.price}원</span>
        <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700">
          장바구니 담기
        </button>
      </div>
    </div>
  </Link>
);

// 카테고리에 따른 색상 반환
function getCategoryColor(category: string): string {
  switch (category) {
    case "sensor": return "blue";
    case "actuator": return "green";
    case "controller": return "purple";
    case "gateway": return "orange";
    case "server": return "red";
    default: return "gray";
  }
}

// 카테고리 이름 반환
function getCategoryName(category: string): string {
  switch (category) {
    case "sensor": return "센서";
    case "actuator": return "액추에이터";
    case "controller": return "컨트롤러";
    case "gateway": return "게이트웨이";
    case "server": return "서버";
    default: return "기타";
  }
}

export default function MarketplaceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold">IoT 디바이스 마켓플레이스</h2>
            <p className="text-gray-600">MCP 서버와 호환되는 다양한 IoT 디바이스를 찾아보세요</p>
          </div>
          <Link to="/marketplace" className="text-blue-600 hover:underline font-medium">
            전체 보기 →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {marketplaceItems.map(item => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-lg font-medium mb-4">필요한 IoT 디바이스를 찾지 못하셨나요?</h3>
          <Link to="/marketplace/request" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            디바이스 요청하기
          </Link>
        </div>
      </div>
    </section>
  );
}

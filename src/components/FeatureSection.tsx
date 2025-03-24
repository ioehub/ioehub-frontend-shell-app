// ---------------------------
// shell-app/src/components/FeatureSection.tsx
// ---------------------------
import React from "react";

// lucide-react 대신 직접 SVG 컴포넌트 정의
const Cpu = (props: React.SVGProps<SVGSVGElement> & { size?: number | string }) => {
  const size = props.size || 24;
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size}
      height={size}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <line x1="9" y1="1" x2="9" y2="4"></line>
      <line x1="15" y1="1" x2="15" y2="4"></line>
      <line x1="9" y1="20" x2="9" y2="23"></line>
      <line x1="15" y1="20" x2="15" y2="23"></line>
      <line x1="20" y1="9" x2="23" y2="9"></line>
      <line x1="20" y1="14" x2="23" y2="14"></line>
      <line x1="1" y1="9" x2="4" y2="9"></line>
      <line x1="1" y1="14" x2="4" y2="14"></line>
    </svg>
  );
};

const Wifi = (props: React.SVGProps<SVGSVGElement> & { size?: number | string }) => {
  const size = props.size || 24;
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size}
      height={size}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
      <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
      <line x1="12" y1="20" x2="12.01" y2="20"></line>
    </svg>
  );
};

const Settings2 = (props: React.SVGProps<SVGSVGElement> & { size?: number | string }) => {
  const size = props.size || 24;
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size}
      height={size}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 7h-9"></path>
      <path d="M14 17H5"></path>
      <circle cx="17" cy="17" r="3"></circle>
      <circle cx="7" cy="7" r="3"></circle>
    </svg>
  );
};

export default function FeatureSection() {
  const features = [
    {
      icon: <Cpu size={32} className="text-blue-600" />,
      title: "AI 연동",
      description: "AI 모델과 쉽게 연결하여 자동화 및 추론을 구현할 수 있습니다."
    },
    {
      icon: <Wifi size={32} className="text-blue-600" />,
      title: "IoT 장비 관리",
      description: "MCP 서버를 통해 다양한 IoT 디바이스를 제어하고 모니터링하세요."
    },
    {
      icon: <Settings2 size={32} className="text-blue-600" />,
      title: "쉬운 설정",
      description: "웹 기반 UI로 누구나 손쉽게 설정하고 사용할 수 있습니다."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-12">Why IoEHub?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="p-6 border rounded-xl shadow-sm">
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
              <p className="text-gray-600 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

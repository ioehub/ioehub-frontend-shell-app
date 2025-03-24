// ---------------------------
// shell-app/src/components/FeatureSection.tsx
// ---------------------------
import React from "react";
import { Cpu, Wifi, Settings2 } from "lucide-react";

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

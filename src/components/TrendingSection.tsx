// ---------------------------
// shell-app/src/components/TrendingSection.tsx
// ---------------------------
import React from "react";
import { Link } from "react-router-dom";

// 샘플 데이터
const trendingModels = [
  {
    id: "1",
    name: "ioehub/smart-thermostat-v1",
    description: "스마트 온도 조절 및 예측 시스템",
    downloads: "23.4k",
    days: 2,
    author: "ioehub"
  },
  {
    id: "2",
    name: "samsung/SmolControl-256-preview",
    description: "작은 IoT 제어 모델, 경량화 버전",
    downloads: "18.9k",
    days: 1,
    author: "samsung"
  },
  {
    id: "3",
    name: "manycore-research/Spatial-IoT-1B",
    description: "공간 데이터 학습 및 IoT 상황 인식 모델",
    downloads: "13.3k",
    days: 3,
    author: "manycore-research"
  },
  {
    id: "4", 
    name: "sesame/mcp-1b",
    description: "대규모 MCP 서버 운영 및 최적화 모델",
    downloads: "11.2k",
    days: 6,
    author: "sesame"
  },
  {
    id: "5",
    name: "canopy-labs/orpheus-3b-8.1-ft",
    description: "IoT 센서 데이터 처리 및 분석 모델",
    downloads: "9.1k",
    days: 4,
    author: "canopy-labs"
  }
];

const trendingDatasets = [
  {
    id: "1",
    name: "nvedia/Smart-Sensor-Dataset-v1",
    description: "IoT 센서 145개 기종의 수집 데이터",
    size: "1.34GB",
    days: 5,
    author: "nvedia"
  },
  {
    id: "2",
    name: "stanford/reasoning-v1-20m",
    description: "IoT 데이터 기반 추론 및 의사결정 데이터셋",
    size: "726MB",
    days: 2,
    author: "stanford"
  },
  {
    id: "3",
    name: "CongiIo/Smart-DistilE1-dataset-119k",
    description: "중국 스마트 시티 센서 데이터",
    size: "212MB",
    days: 3,
    author: "CongiIo"
  }
];

const trendingSpaces = [
  {
    id: "1",
    name: "Stable Virtual Camera",
    description: "IoT 카메라로부터 입력 받은 이미지 처리",
    downloads: "253",
    type: "image",
    author: "ioehub"
  },
  {
    id: "2",
    name: "Gemini Co-Drawing",
    description: "다양한 IoT 디바이스와 협업 드로잉",
    downloads: "194",
    type: "drawing",
    author: "google"
  },
  {
    id: "3",
    name: "Sesame CSM",
    description: "MCP 관리 및 대화 인터페이스",
    downloads: "178",
    type: "conversation",
    author: "sesame"
  },
  {
    id: "4",
    name: "InfluNoize-FLUX",
    description: "노이즈 필터링 및 IoT 시그널 개선",
    downloads: "177",
    type: "audio",
    author: "nvedia"
  }
];

// 카드 컴포넌트
const ModelCard = ({ model }: { model: any }) => (
  <Link to={`/models/${model.id}`} className="block border border-gray-200 hover:border-gray-300 hover:shadow-md rounded-lg p-4 transition-all">
    <div className="flex items-center space-x-2 mb-1">
      <span className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md">🤖 Model</span>
      <span className="text-xs text-gray-500">Updated {model.days} days ago</span>
    </div>
    <h3 className="font-medium text-blue-600">{model.name}</h3>
    <p className="text-sm text-gray-600 mt-1 mb-2">{model.description}</p>
    <div className="text-xs text-gray-500 flex items-center">
      <span className="mr-3">👁️ {model.downloads}</span>
      <span className="text-gray-400">by {model.author}</span>
    </div>
  </Link>
);

const DatasetCard = ({ dataset }: { dataset: any }) => (
  <Link to={`/datasets/${dataset.id}`} className="block border border-gray-200 hover:border-gray-300 hover:shadow-md rounded-lg p-4 transition-all">
    <div className="flex items-center space-x-2 mb-1">
      <span className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md">📊 Dataset</span>
      <span className="text-xs text-gray-500">Updated {dataset.days} days ago</span>
    </div>
    <h3 className="font-medium text-blue-600">{dataset.name}</h3>
    <p className="text-sm text-gray-600 mt-1 mb-2">{dataset.description}</p>
    <div className="text-xs text-gray-500 flex items-center">
      <span className="mr-3">💾 {dataset.size}</span>
      <span className="text-gray-400">by {dataset.author}</span>
    </div>
  </Link>
);

const SpaceCard = ({ space }: { space: any }) => (
  <Link to={`/spaces/${space.id}`} className="block border border-gray-200 hover:border-gray-300 hover:shadow-md rounded-lg overflow-hidden transition-all">
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-24 flex items-center justify-center text-white font-medium">
      {space.type === "image" && <span className="text-3xl">🖼️</span>}
      {space.type === "drawing" && <span className="text-3xl">✏️</span>}
      {space.type === "conversation" && <span className="text-3xl">💬</span>}
      {space.type === "audio" && <span className="text-3xl">🔊</span>}
    </div>
    <div className="p-4">
      <div className="flex items-center space-x-2 mb-1">
        <span className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md">🚀 Space</span>
        <span className="text-xs text-gray-500">👍 {space.downloads}</span>
      </div>
      <h3 className="font-medium">{space.name}</h3>
      <p className="text-sm text-gray-600 mt-1 mb-1">{space.description}</p>
      <div className="text-xs text-gray-500">
        <span className="text-gray-400">by {space.author}</span>
      </div>
    </div>
  </Link>
);

export default function TrendingSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-10">
          <h2 className="text-2xl font-bold">Trending on <span className="inline-flex items-center">
            <span className="bg-yellow-300 text-white rounded-full p-1 mr-1">😊</span> ioehub</span>
          </h2>
          <span className="text-sm text-gray-500 ml-3">this week</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* 모델 섹션 */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="p-1 rounded-full bg-gray-200 mr-2">
                <span className="text-gray-700 text-sm">🤖</span>
              </div>
              <h3 className="font-medium">Models</h3>
            </div>
            <div className="space-y-3">
              {trendingModels.map(model => (
                <ModelCard key={model.id} model={model} />
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link to="/models" className="text-blue-600 text-sm font-medium hover:underline">
                Browse 1M+ models
              </Link>
            </div>
          </div>

          {/* 스페이스 섹션 */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="p-1 rounded-full bg-gray-200 mr-2">
                <span className="text-gray-700 text-sm">🚀</span>
              </div>
              <h3 className="font-medium">Spaces</h3>
            </div>
            <div className="space-y-4">
              {trendingSpaces.map(space => (
                <SpaceCard key={space.id} space={space} />
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link to="/spaces" className="text-blue-600 text-sm font-medium hover:underline">
                Browse 400k+ applications
              </Link>
            </div>
          </div>

          {/* 데이터셋 섹션 */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="p-1 rounded-full bg-gray-200 mr-2">
                <span className="text-gray-700 text-sm">📊</span>
              </div>
              <h3 className="font-medium">Datasets</h3>
            </div>
            <div className="space-y-3">
              {trendingDatasets.map(dataset => (
                <DatasetCard key={dataset.id} dataset={dataset} />
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link to="/datasets" className="text-blue-600 text-sm font-medium hover:underline">
                Browse 250k+ datasets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

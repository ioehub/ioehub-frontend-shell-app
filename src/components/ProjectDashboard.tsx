// ---------------------------
// shell-app/src/components/ProjectDashboard.tsx
// ---------------------------
import React, { useState } from "react";

// 샘플 프로젝트 데이터
const sampleProjects = [
  {
    id: "1",
    name: "스마트 홈 자동화",
    description: "집안 온도, 조명, 보안을 AI로 자동 제어하는 시스템",
    devices: 12,
    models: 3,
    status: "active",
    lastUpdated: "2시간 전"
  },
  {
    id: "2",
    name: "공장 설비 모니터링",
    description: "제조 라인의 설비 상태를 실시간으로 모니터링하고 이상 감지",
    devices: 45,
    models: 5,
    status: "active",
    lastUpdated: "1일 전"
  },
  {
    id: "3",
    name: "농장 자동화 시스템",
    description: "토양 습도, 일조량에 따른 자동 급수 및 환경 제어",
    devices: 18,
    models: 2,
    status: "inactive",
    lastUpdated: "5일 전"
  }
];

// 샘플 디바이스 데이터
const sampleDevices = [
  {
    id: "1",
    name: "거실 온도 센서",
    type: "sensor",
    status: "online",
    battery: 87,
    lastReading: "23.5°C",
    lastUpdate: "2분 전"
  },
  {
    id: "2",
    name: "현관 카메라",
    type: "camera",
    status: "online",
    battery: 100,
    lastReading: "동작 감지: 없음",
    lastUpdate: "30초 전"
  },
  {
    id: "3",
    name: "주방 스마트 스위치",
    type: "actuator",
    status: "offline",
    battery: 0,
    lastReading: "꺼짐",
    lastUpdate: "3시간 전"
  },
  {
    id: "4",
    name: "침실 조명 컨트롤러",
    type: "controller",
    status: "online",
    battery: 62,
    lastReading: "밝기: 40%",
    lastUpdate: "15분 전"
  }
];

// 샘플 모델 데이터
const sampleModels = [
  {
    id: "1",
    name: "온도 예측 모델",
    type: "regression",
    accuracy: 94.2,
    lastTrained: "2일 전",
    status: "deployed"
  },
  {
    id: "2",
    name: "얼굴 인식",
    type: "computer vision",
    accuracy: 98.7,
    lastTrained: "1주일 전",
    status: "deployed"
  },
  {
    id: "3",
    name: "이상 동작 감지",
    type: "anomaly detection",
    accuracy: 91.5,
    lastTrained: "3일 전",
    status: "training"
  }
];

// 샘플 로그 데이터
const sampleLogs = [
  { time: "12:45:23", level: "info", message: "온도 센서 데이터 수집 완료" },
  { time: "12:42:15", level: "warning", message: "주방 스마트 스위치 연결 끊김" },
  { time: "12:30:08", level: "info", message: "얼굴 인식 모델 추론 - 가족 구성원 확인" },
  { time: "12:15:56", level: "error", message: "배터리 부족 - 침실 모션 센서" },
  { time: "11:52:30", level: "info", message: "일일 데이터 백업 완료" }
];

// 상태 배지 컴포넌트
const StatusBadge = ({ status }: { status: string }) => {
  let bgColor = "bg-gray-100 text-gray-800";
  
  if (status === "active" || status === "online" || status === "deployed") {
    bgColor = "bg-green-100 text-green-800";
  } else if (status === "training") {
    bgColor = "bg-blue-100 text-blue-800";
  } else if (status === "inactive" || status === "offline") {
    bgColor = "bg-red-100 text-red-800";
  }
  
  return (
    <span className={`text-xs px-2 py-1 rounded-full ${bgColor}`}>
      {status}
    </span>
  );
};

// 탭 인터페이스 컴포넌트
const TabInterface = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
  const tabs = [
    { id: "dashboard", label: "대시보드" },
    { id: "devices", label: "디바이스" },
    { id: "models", label: "AI 모델" },
    { id: "logs", label: "로그" }
  ];
  
  return (
    <div className="border-b border-gray-200">
      <nav className="flex -mb-px">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-4 px-6 text-sm font-medium ${
              activeTab === tab.id 
                ? "border-b-2 border-blue-500 text-blue-600" 
                : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

// 프로젝트 목록 컴포넌트
const ProjectList = ({ projects, activeProject, setActiveProject }: { projects: any[], activeProject: string, setActiveProject: (id: string) => void }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-4 py-5 border-b border-gray-200">
        <h3 className="text-lg font-medium">내 프로젝트</h3>
      </div>
      <ul className="divide-y divide-gray-200">
        {projects.map(project => (
          <li key={project.id}>
            <button
              onClick={() => setActiveProject(project.id)}
              className={`w-full text-left px-4 py-4 hover:bg-gray-50 ${activeProject === project.id ? "bg-blue-50" : ""}`}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-medium">{project.name}</h4>
                <StatusBadge status={project.status} />
              </div>
              <p className="text-xs text-gray-500 mt-1">{project.description}</p>
              <div className="mt-2 flex items-center text-xs text-gray-500">
                <span className="mr-3">📱 {project.devices} 디바이스</span>
                <span className="mr-3">🧠 {project.models} 모델</span>
                <span>⏱️ {project.lastUpdated}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
      <div className="px-4 py-3 bg-gray-50">
        <button className="w-full text-blue-600 text-sm font-medium hover:text-blue-800">
          + 새 프로젝트 만들기
        </button>
      </div>
    </div>
  );
};

// 대시보드 탭 컴포넌트
const DashboardTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium mb-3">개요</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="text-sm text-gray-500 mb-1">활성 디바이스</h4>
            <p className="text-2xl font-bold">3/4</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="text-sm text-gray-500 mb-1">배포된 모델</h4>
            <p className="text-2xl font-bold">2/3</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <h4 className="text-sm text-gray-500 mb-1">금일 트리거</h4>
            <p className="text-2xl font-bold">23</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <h4 className="text-sm text-gray-500 mb-1">평균 응답 시간</h4>
            <p className="text-2xl font-bold">126ms</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium mb-3">최근 활동</h3>
        <ul className="divide-y divide-gray-200">
          {sampleLogs.slice(0, 3).map((log, idx) => (
            <li key={idx} className="py-2">
              <div className="flex items-start">
                <div className={`w-2 h-2 mt-1.5 rounded-full mr-2 ${log.level === 'error' ? 'bg-red-500' : (log.level === 'warning' ? 'bg-yellow-500' : 'bg-green-500')}`}></div>
                <div>
                  <p className="text-sm">{log.message}</p>
                  <p className="text-xs text-gray-500">{log.time}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button className="w-full mt-2 text-blue-600 text-sm font-medium hover:text-blue-800">
          모든 로그 보기
        </button>
      </div>
    </div>
  );
};

// 디바이스 탭 컴포넌트
const DevicesTab = () => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center">
        <h3 className="text-lg font-medium">디바이스 목록</h3>
        <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">새 디바이스 등록</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">디바이스</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">타입</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">배터리</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">마지막 측정값</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">업데이트</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sampleDevices.map(device => (
              <tr key={device.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{device.name}</div>
                  <div className="text-xs text-gray-500">ID: {device.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{device.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={device.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-24 bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${device.battery > 70 ? 'bg-green-600' : (device.battery > 30 ? 'bg-yellow-400' : 'bg-red-600')}`}
                      style={{ width: `${device.battery}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">{device.battery}%</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{device.lastReading}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{device.lastUpdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 모델 탭 컴포넌트
const ModelsTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {sampleModels.map(model => (
        <div key={model.id} className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b">
            <div className="flex justify-between">
              <h3 className="font-medium">{model.name}</h3>
              <StatusBadge status={model.status} />
            </div>
            <p className="text-sm text-gray-500 mt-1">{model.type}</p>
          </div>
          <div className="p-4">
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">정확도</span>
                <span className="font-medium">{model.accuracy}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${model.accuracy}%` }}></div>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              마지막 훈련: {model.lastTrained}
            </div>
          </div>
          <div className="bg-gray-50 p-4 flex justify-between">
            <button className="px-3 py-1 border border-gray-300 rounded text-xs">세부정보</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs">
              {model.status === "deployed" ? "재훈련" : "배포"}
            </button>
          </div>
        </div>
      ))}
      <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        <h4 className="font-medium text-gray-700">새 모델 추가</h4>
        <p className="text-sm text-gray-500 text-center mt-2">
          직접 모델을 훈련하거나<br />
          라이브러리에서 가져오세요
        </p>
      </div>
    </div>
  );
};

// 로그 탭 컴포넌트
const LogsTab = () => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center">
        <h3 className="text-lg font-medium">시스템 로그</h3>
        <div>
          <select className="text-sm border rounded-md px-2 py-1">
            <option>모든 로그</option>
            <option>에러만</option>
            <option>경고만</option>
            <option>정보만</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">시간</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">레벨</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">메시지</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sampleLogs.map((log, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    log.level === 'error' 
                      ? 'bg-red-100 text-red-800' 
                      : (log.level === 'warning' 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-green-100 text-green-800')
                  }`}>
                    {log.level}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-3 bg-gray-50 flex justify-between">
        <button className="text-sm text-blue-600">지난 로그 불러오기</button>
        <div className="text-sm text-gray-500">총 5개의 로그</div>
      </div>
    </div>
  );
};

export default function ProjectDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeProject, setActiveProject] = useState("1");
  
  // 현재 선택된 프로젝트 정보
  const currentProject = sampleProjects.find(p => p.id === activeProject);
  
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">{currentProject?.name}</h2>
            <p className="text-gray-600">{currentProject?.description}</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-50">
              설정
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium shadow-sm hover:bg-blue-700">
              게시
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <ProjectList 
              projects={sampleProjects} 
              activeProject={activeProject} 
              setActiveProject={setActiveProject} 
            />
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow">
              <TabInterface activeTab={activeTab} setActiveTab={setActiveTab} />
              
              <div className="p-6">
                {activeTab === "dashboard" && <DashboardTab />}
                {activeTab === "devices" && <DevicesTab />}
                {activeTab === "models" && <ModelsTab />}
                {activeTab === "logs" && <LogsTab />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

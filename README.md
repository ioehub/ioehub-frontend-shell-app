# IoEHub Frontend (Micro Frontend Architecture)

IoEHub는 IoT + AI 플랫폼으로, MCP 서버 및 IoT 장비를 연결하고 자동화하는 기능을 제공합니다. 이 저장소는 **마이크로 프론트엔드 아키텍처(Microfrontend Architecture)**를 기반으로 구성되어 있으며, `pnpm workspace`를 통해 다중 앱을 관리합니다.

## 📦 주요 앱 구성

| 앱 이름 | 설명 |
|---------|------|
| `shell-app` | 공개 홈 + 라우팅 허브 (Hero, Docs, Login, About 등) |
| `mcp-core-app` | MCP 등록/연결 관련 기능 |
| `mcp-monitor-app` | MCP 상태 실시간 모니터링 |
| `mcp-config-app` | MCP 상세 설정 페이지 |
| `docs-app` | 사용자 설명서 및 기술 문서 뷰어 |
| `search-app` | 글로벌 검색 (MCP, 디바이스, 프로젝트 등) |
| `shared-lib` | 공통 컴포넌트, 유틸, 스타일 라이브러리 |

## ⚙️ 기술 스택
- React 18
- TypeScript
- Tailwind CSS
- Webpack 5 + Module Federation
- pnpm workspace
- react-i18next (다국어 지원)
- Vitest + Testing Library (테스트)

## 🚀 실행 방법
```bash
pnpm install
pnpm --filter shell-app dev
```

## 📁 구조 예시 (`shell-app`)
```
shell-app/src/
├── components/      // Header, Footer, Hero 등
├── pages/           // Home, Docs, Login, About, Contact
├── locales/         // i18n 텍스트 (en, ko)
├── i18n.ts          // i18n 설정
├── App.tsx          // 전체 라우팅
├── index.tsx        // 진입점
├── index.css        // Tailwind 설정
```

## 🧪 테스트
```bash
pnpm --filter shell-app test
```

## 📝 라이선스
본 프로젝트는 MIT 라이선스를 따릅니다.

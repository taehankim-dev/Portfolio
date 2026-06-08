# Project: 김태한의 포트폴리오 프로젝트

## 프로젝트 개요
- 이 프로젝트는 3~4년 차 주니어 개발자의 이직을 목표로 하는 포트폴리오 웹사이트이다.

## 기술 스택 및 환경
- **Framework**: Next.js 16 (App Router 기반)
- **Deployment**: Vercel (Production 환경)
- **Styling**: Tailwind CSS
- **Language**: TypeScript 5.0+
- **Package Manager**: npm 11.0+

## 📜 코드 작성 지침 및 규칙 (Code Style)
- **컴포넌트 구조**: 
  - 기본적으로 모든 컴포넌트는 **서버 컴포넌트(Server Component)**로 작성한다.
  - State, Effect, 이벤트 핸들러가 필요한 경우에만 파일 최상단에 `"use client"`를 명시하여 클라이언트 컴포넌트로 전환한다.
- **스타일링**: Tailwind CSS 유틸리티 클래스를 우선 사용하며, 컴포넌트 가독성을 해치지 않도록 필요시 분리한다.
- **데이터 관리**: 포트폴리오 프로젝트 데이터나 이력 정보는 `src/data/` 혹은 S3 등 외부 저장소에서 패치하는 구조를 취하므로, 하드코딩을 최소화하고 데이터 구조(Type/Interface)를 먼저 정의한다.
- **이미지 최적화**: 모든 이미지는 Next.js의 `next/image` 컴포넌트를 사용하고 `width`, `height` 또는 `fill` 속성을 필수 지정하여 Vercel 배포 시 최적화 경고가 뜨지 않게 한다.

## 컨텐츠 파이프라인 (MD to MDX 변환)
- **원본 저장소**: `_projects/[프로젝트명].md`
- **배포용 저장소**: `content/projects/[프로젝트명].md`
- **동작 방식**: `_projects/`에 원본 마크다운을 추가한 후, 변환 스크립트를 실행하여 `content/projects/`에 MDX 파일과 필요한 Frontmatter(메타데이터)를 생성한다.
- **콘텐츠 변환 명령어**: `npm run build:contents` (또는 `node scripts/convert-md.js`)

## 🎨 MDX 스타일링 및 컴포넌트 규칙
- HTML로 정상 변환되어 배포 중이므로, MDX 내부에서 HTML 태그나 커스텀 리액트 컴포넌트를 혼용할 때 Next.js 빌드 에러가 나지 않도록 주의한다.
- 마크다운 내부의 이미지 경로가 Vercel 배포 시 깨지지 않도록 `public/images/projects/` 경로를 표준으로 삼는다.

## 🚀 배포 및 환경 변수 주의사항 (Vercel 변동성 방지)
- 빌드 에러를 유발하는 TypeScript 경고나 Lint 에러는 엄격히 금지한다. (Vercel 빌드 실패 원인 1위)
- 환경 변수(API URL 등)를 클라이언트 컴포넌트에서 사용할 때는 반드시 `NEXT_PUBLIC_` 접두사를 붙인다.
- Vercel 배포 환경을 고려하여 정적 페이지 생성이 가능한 부분(프로젝트 상세 등)은 `generateStaticParams` 활용을 적극 고려한다.
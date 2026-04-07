# Academy Admin Frontend

## 프로젝트 개요

학원 관리 시스템 관리자 프론트엔드 (React 18 + Vite 6 + MUI 6)

## 기술 스택

- **빌드**: Vite 6, TypeScript (점진 도입)
- **UI**: MUI 6, Material Dashboard 2 커스텀 테마
- **상태**: Zustand (UI), React Query (서버)
- **HTTP**: Axios (shared/api/client.js)
- **테이블**: TanStack Table 8 (shared/components/DataTable)
- **폼**: React Hook Form + Zod (shared/components/FormFields)
- **에디터**: TipTap (shared/components/RichEditor)
- **다국어**: i18next (shared/i18n)

## 실행

```bash
npm run dev          # Vite 개발 서버 (포트 3000)
npm run build        # 프로덕션 빌드
docker compose up -d --build   # Docker 컨테이너
```

## 연동 백엔드

- **프로젝트**: `../academy-admin-back-end-JavaSpring/`
- **API**: `http://localhost:9001/api`
- **DB**: MariaDB 172.30.1.72:3306/acm_basic (academyAdmin)
- **CLAUDE.md**: `../academy-admin-back-end-JavaSpring/CLAUDE.md`

프론트에서 필요한 API가 백엔드에 없으면, 백엔드 프로젝트에서 먼저 구현 후 프론트 연동.

## 리뉴얼 문서

- [리뉴얼 플랜](docs/renewal/RENEWAL_PLAN.md)
- [구현 가이드](docs/renewal/IMPLEMENTATION_GUIDE.md)
- [기술 대체 방안](docs/renewal/TECH_ALTERNATIVES.md)

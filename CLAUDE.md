# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Online Academy Admin Frontend - React Material Dashboard 기반 관리자 콘솔

## Environment

- **Framework**: React (Material Dashboard)
- **Port**: 4001
- **Domain**: admin.unmong.com

## Help Page 관리

> 작성 표준: [HELP_PAGE_GUIDE.md](https://github.com/bluevlad/Claude-Opus-bluevlad/blob/main/standards/documentation/HELP_PAGE_GUIDE.md)
> HTML 템플릿: [help-page-template.html](https://github.com/bluevlad/Claude-Opus-bluevlad/blob/main/standards/documentation/templates/help-page-template.html)

- **기능 추가/변경/삭제 시 반드시 헬프 페이지도 함께 업데이트**
- 헬프 파일 위치: `public/help/`
- 서비스 accent-color: `#3b82f6` (Blue)
- 대상 가이드 파일:
  - `admin-guide.html` — 관리자 콘솔 가이드
  - `api-guide.html` — 관리자 API 가이드

## Do NOT

- .env 파일 커밋 금지
- 운영 Docker 컨테이너 직접 조작 금지

# FormCraft

드래그앤드롭으로 폼을 구성하고, 실시간 미리보기와 제출까지 가능한 인터랙티브 폼 빌더

## 주요 기능

- **폼 편집기** — Text, Textarea, Select, Checkbox, Radio 필드를 추가하고 라벨·플레이스홀더·필수 여부를 설정
- **드래그앤드롭** — 필드 순서를 직관적으로 변경
- **실시간 미리보기** — 편집 내용이 즉시 반영되는 라이브 프리뷰
- **유효성 검사** — 필수 필드 미입력 시 에러 메시지 표시
- **폼 제출** — 입력값을 확인할 수 있는 결과 화면

## 기술 스택

| 분류 | 기술 |
| --- | --- |
| Framework | React 19, TypeScript, Vite |
| State | Zustand |
| DnD | @dnd-kit/core, @dnd-kit/sortable |
| Styling | Tailwind CSS v4, tailwind-variants, tailwind-merge |

## 시작하기

### 사전 요구사항

- Node.js 18+
- pnpm

### 설치 및 실행

```bash
git clone https://github.com/yujinimda/form-craft.git
cd form-craft
pnpm install
pnpm dev
```

### 빌드

```bash
pnpm build
```

`dist/` 폴더에 빌드 결과물이 생성됩니다.

## 프로젝트 구조

```
src/
├── app/            # 앱 진입점, 라우팅, 글로벌 스타일
├── features/       # 기능 단위 모듈
│   ├── builder/    # 폼 편집기
│   ├── preview/    # 실시간 미리보기
│   └── result/     # 제출 결과 화면
├── shared/         # 공통 UI, 유틸, 타입, 스토어
│   ├── ui/
│   ├── lib/
│   ├── stores/
│   └── types/
└── main.tsx
```

## 라이선스

MIT
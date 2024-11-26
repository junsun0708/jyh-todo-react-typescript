# Todo List 웹 애플리케이션 PRD

## 1. 프로젝트 개요
이 프로젝트는 사용자가 할 일을 효율적으로 관리할 수 있는 투두리스트 웹 애플리케이션입니다. Firebase를 활용해 데이터를 실시간으로 저장하고 관리합니다.

### 1.1 핵심 가치
- 단순성: 직관적이고 깔끔한 UI로 사용자 경험 최적화
- 효율성: 빠른 할 일 등록과 관리
- 실시간성: Firebase를 통한 즉각적인 데이터 동기화

## 2. 기능 명세

### 2.1 필수 기능 (Core Features)
- [✅] 프로젝트 초기 설정
  - [✅] React + TypeScript 설정
  - [✅] TailwindCSS 설정
  - [✅] Firebase 설정

- [ ] 할 일 관리 (Todo Management)
  - [ ] 할 일 추가
  - [ ] 할 일 수정
  - [ ] 할 일 삭제
  - [ ] 완료 상태 토글

- [ ] 우선순위 관리 (Priority Management)
  - [ ] 우선순위 설정 (높음/중간/낮음)
  - [ ] 우선순위별 필터링
  - [ ] 우선순위별 색상 구분

### 2.2 추가 기능 (Additional Features)
- [ ] 카테고리 관리
  - [ ] 카테고리 생성/수정/삭제
  - [ ] 카테고리별 할 일 필터링

- [ ] 검색 기능
  - [ ] 제목 기반 검색
  - [ ] 실시간 검색 결과 표시

- [ ] 정렬 기능
  - [ ] 생성일 기준 정렬
  - [ ] 우선순위 기준 정렬
  - [ ] 완료 상태 기준 정렬

## 3. UI/UX 디자인 명세

### 3.1 레이아웃 구조
```
+------------------+
|      Header      |
+------------------+
|   Search Bar     |
+------------------+
| Filter & Sort    |
+------------------+
|                  |
|    Todo List     |
|                  |
+------------------+
|   Add Todo FAB   |
+------------------+
```

### 3.2 색상 팔레트
```css
--primary: #3B82F6;     /* 주요 액션 */
--secondary: #6B7280;   /* 보조 텍스트 */
--danger: #EF4444;      /* 삭제/경고 */
--success: #10B981;     /* 완료/성공 */
--warning: #F59E0B;     /* 주의/중요 */
--background: #F3F4F6;  /* 배경색 */
--surface: #FFFFFF;     /* 카드 배경 */
```

### 3.3 우선순위 표시
- 높음: 빨간색 태그 (#EF4444)
- 중간: 노란색 태그 (#F59E0B)
- 낮음: 초록색 태그 (#10B981)

## 4. 기술 스택

### 4.1 Frontend
- React 18
- TypeScript
- TailwindCSS
- React Icons

### 4.2 Backend
- Firebase
  - Firestore (데이터베이스)
  - Hosting (배포)

### 4.3 개발 도구
- Vite
- ESLint
- Prettier

## 5. 프로젝트 구조
```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.tsx          # 앱 헤더 및 네비게이션
│   │   └── Layout.tsx          # 전체 레이아웃 구조
│   ├── Todo/
│   │   ├── TodoList.tsx        # 할 일 목록 컨테이너
│   │   ├── TodoItem.tsx        # 개별 할 일 항목
│   │   ├── TodoForm.tsx        # 할 일 추가/수정 폼
│   │   ├── TodoFilter.tsx      # 필터링 컴포넌트
│   │   ├── TodoSearch.tsx      # 검색 컴포넌트
│   │   ├── TodoSort.tsx        # 정렬 컴포넌트
│   │   └── TodoPriority.tsx    # 우선순위 선택 컴포넌트
│   └── UI/
│       ├── Button.tsx          # 재사용 가능한 버튼
│       ├── Input.tsx           # 재사용 가능한 입력 필드
│       ├── Select.tsx          # 재사용 가능한 선택 컴포넌트
│       ├── Badge.tsx           # 우선순위/상태 표시 뱃지
│       ├── Modal.tsx           # 모달 다이얼로그
│       └── Spinner.tsx         # 로딩 스피너
├── hooks/
│   ├── useTodos.ts            # 할 일 CRUD 커스텀 훅
│   ├── useFilter.ts           # 필터링 로직 커스텀 훅
│   ├── useSort.ts             # 정렬 로직 커스텀 훅
│   └── useSearch.ts           # 검색 로직 커스텀 훅
├── services/
│   └── firebase.ts            # Firebase 설정 및 API
├── types/
│   ├── todo.ts                # 할 일 관련 타입 정의
│   └── common.ts              # 공통 타입 정의
├── utils/
│   ├── helpers.ts             # 유틸리티 함수
│   └── constants.ts           # 상수 정의
└── context/
    └── TodoContext.tsx        # 전역 상태 관리
```

## 6. 개선사항 및 추가 제안
1. 다크모드 지원
2. 드래그 앤 드롭으로 우선순위 조정
3. 할 일 완료시 애니메이션 효과
4. 마감일 설정 기능
5. 반응형 디자인 강화
6. 로컬 스토리지 백업 기능

## 7. 작업 현황
- [✅] PRD 문서 작성
- [✅] 데이터베이스 설계
- [✅] 프로젝트 초기 설정
  - [✅] React + TypeScript 프로젝트 생성
  - [✅] TailwindCSS 설정
  - [✅] Firebase 설정
  - [✅] ESLint/Prettier 설정
  - [✅] 타입 정의
- [✅] 컴포넌트 구조 설계
- [ ] UI 구현
- [ ] 기능 구현
- [ ] 테스트
- [ ] 배포
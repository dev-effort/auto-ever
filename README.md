## 실행 방법

1. 터미널에 yarn install을 통해 의존성을 설치합니다.
2. 터미널에 yarn dev를 통해 실행시킵니다.
3. 예시) http://localhost:5173로 접속합니다.

## 구현 사항

`자주 묻는 질문` 페이지에 대한 구현

### 기능 리스트

1. 최상위 탭을 통한 카테고리 목록 조회
2. 카테고리 별 FAQ 목록 조회 및 필터링
3. 검색창을 통한 검색 기능 일체 (검색 건수 및 초기화, 검색 결과 없는 케이스, 검색창 비우기)
4. FAQ 목록 (아코디언)
5. 더보기 버튼을 통한 페이징 기능
6. 각 페이지로의 라우팅
7. 서비스 제안서 pdf 다운로드
8. 플로팅 버튼을 통한 스크롤 최상위로 이동 및 스크롤이 아래로 내려갔을때에만 플로팅버튼 위치

## 아키텍처 및 프로젝트 구조

### 사용한 기술 스택 / 라이브러리

vite, react, typescript, react-query, axios-mock-adapter, emotion, react-router-dom

### Repository layer

- 서버와 프론트간의 인터페이스를 하는 repository layer
- repository layer는 객체지향의 interface를 통하여 컴포넌트와 통신
- 서버 api 개발전, api 명세 협의 후 test repository를 만들어 사용하고, api 개발 후에는 실제 구현체 repository를 만들어 교체할 수 있는 구조
- test repository 구현 시 axios-mock-adapter를 사용하여 api mocking.
- mock data를 만들때는 faker 라이브러리를 사용 (해당 프로젝트에서는 실제 data가 있어 그 부분을 사용)
- api의 명세는 types.ts에 정의
- 각 타입은 model로 class로 정의 (해당 모델은 react-query의 반환 시 변환)

### 비동기 처리 및 model layer (react-query)

- reactHooks 폴더에 repository 별로 queryhook을 개발
- key를 관리
- 값의 반환은 select를 통해 모델을 반환
- model을 반환하는 것은 데이터에 대한 비지니스 로직 또는 포멧팅등을 하기 위함
- 컴포넌트 내부 또는 jsx 내부에서 데이터의 변환, 포멧팅을 제한

### 컴포넌트 layer

- model과 jsx를 통한 화면 구성
- emotion의 styled를 통한 스타일링
- emtoion의 theme을 구성하여 공통의 css를 token으로 제공

## 아쉬운 점

시간 관계상 구현 하지 못한 기능

- 검색어 2자 제한과 modal
- footer의 이용약관 modal
- 공통 sytle css을 셋팅 하지 않음
- 기존 페이지와 일치하지 않는 미디어쿼리 이용한 반응형 (rem을 사용하지 않음)
  시간 관계상 원본과 일치하는 반응형 웹을 구현하지 않고, 임의로 구현하였습니다.

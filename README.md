## CMW_WikiPage

### 시작

1. npm install

2. npm run dev (포트: 3000)

   - node 버전 18.17.0 이상에서 작동

### 기술스택

- node v18.17.0

- Next.js v14.1.0

- MSW v2.1.7

- Typescript

### 폴더구조

```mk
📦
├─ .env
├─ .eslintrc.json
├─ .gitignore
├─ README.md
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ mockServiceWorker.js
│  ├─ next.svg
│  └─ vercel.svg
├─ src
│  ├─ app
│  │  ├─ api
│  │  │  └─ wikis.ts    # axios api instance
│  │  ├─ components
│  │  │  ├─ wikiCard    # 위키 목록 카드 컴포넌트
│  │  │  │  ├─ WikiCard.tsx
│  │  │  │  └─ wikiCard.module.css
│  │  │  └─ wikiList    # 위키 목록 컴포넌트
│  │  │     ├─ WikiList.tsx
│  │  │     └─ wikiList.module.css
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ mockProvider.tsx   # MSW 실행 파일
│  │  ├─ page.tsx
│  │  ├─ types    # tpye 폴더
│  │  │  └─ wiki.ts
│  │  ├─ wiki     # 위키 상세 컴포넌트
│  │  │  └─ [wikiId]
│  │  │     ├─ page.tsx
│  │  │     └─ wikiPage.module.css
│  │  └─ write    # 위키 생성, 수정 컴포넌트
│  │     ├─ page.tsx
│  │     └─ writePage.module.css
│  └─ mocks       # MSW 설정 폴더
│     ├─ browser.ts
│     ├─ handlers.ts
│     └─ server.ts
├─ tailwind.config.ts
└─ tsconfig.json
```

## 실행화면

- [x] 위키페이지는 제목과 본문으로 구성되며 각각 텍스트 입니다.
- [x] 처음페이지에서는 여러개의 위키페이지제목이 목록으로 나옵니다.
      ![스크린샷 2024-02-11 오후 7 58 58](https://github.com/homile/CMW_WikiPage/assets/56163157/995dff9c-e18f-424a-8270-06e2cc42eafe)

- [x] 처음페이지에 목록으로 보여지는 제목의 갯수는 5개이며, 5개가 넘어가면 페이지를 구분해서 표시합니다.
      ![위키 목록](https://github.com/homile/CMW_WikiPage/assets/56163157/e9e0eef1-749c-49c3-a112-525d7396da04)

- [x] 위키페이지 제목을 클릭하면 제목과 본문을 볼 수 있습니다.
      ![위키 제목 보기](https://github.com/homile/CMW_WikiPage/assets/56163157/0425f38d-ee0d-44a1-a9d7-21c59062e6de)
- [x] 위키페이지 본문에 다른 위키페이지의 제목이 있으면 자동으로 링크가 걸리고,클릭하면 해당 위키페이지로 이동합니다.
      ![위키 본문 제목 이동](https://github.com/homile/CMW_WikiPage/assets/56163157/eb4c43fd-8769-47d1-828e-2de6cedbf4a3)
- [x] 메인페이지에서 추가 버튼을 누르면 새로이 입력할 수 있는 창이 나오고, 제목과 내용을 입력할 수 있습니다.
      ![위키 생성](https://github.com/homile/CMW_WikiPage/assets/56163157/c1651779-c6ca-454e-bac3-740a51ee00de)
- [x] 위키내용페이지에는 수정 버튼이 있고, 수정을 누르면 내용을 수정해서 저장할 수 있습니다.
      ![위키 수정](https://github.com/homile/CMW_WikiPage/assets/56163157/089c070f-aec7-4962-a8d7-e713ab15d476)

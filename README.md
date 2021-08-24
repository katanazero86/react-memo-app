# react-memo-app

---

> ### Memo app 소개 <br/>
> React.js, React-router, Jotai, HTML5, CSS3, Vite, SCSS
> - Owner & Maintainer
> - github. [https://github.com/katanazero86/react-memo-app](https://github.com/katanazero86/react-memo-app)
> - Vite 를 이용하여 프로젝트 생성(Node.js >= 12.0.0) : https://vitejs.dev/
> - 메모 작성 및 삭제, 작성된 메모 목록에서 드래그를 활용하여 재정렬을 합니다.(이게 전부입니다. 매우 단순합니다.)
> - Code Split 적용을 하고자 React.lazy 를 라우터 레벨에서 사용하였습니다.

---

> - 프로젝트 실행방법(execution)
> ```
> node moudle install : npm i or npm install
> dev : npm run dev
> build : npm run build
> ```

---

> ### project 배포(deploy) <br/>
> - https://www.heroku.com/ - 헤로쿠 클라우드 플랫폼을 이용하여 배포
> - 헤로쿠 배포를 위한 express 서버 모듈 설치 및 server/server.js 작성
> - 헤로쿠가 서버를 실행할 수 있도록, package.json 스크립트 추가(`"start": "node ./server/server.js"`)
> - https://react-toy.herokuapp.com/

---

> ### 구조 및 규약

```
/src/assets : icons, images, scss 정적자원을 관리하는 폴더
/src/components : React 컴포넌트를 관리하는 폴더
/src/pages : React 컨테이너 컴포넌트를 관리하는 폴더(컨테이너 컴포넌트를 묶은 컨테이너가 될 수도 있으며, 단순한 page 일 수도 있습니다.
/src/hooks : React 커스텀훅을 관리하는 폴더
/src/router : React-router
/src/store : Jotai

- 컴포넌트(*.jsx)명은 대문자로 시작(Index.jsx or About.jsx)
- 기본적인 CSS 작성은 CSS module 적극 권장

```

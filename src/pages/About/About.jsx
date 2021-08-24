import React from 'react';
import classes from './About.module.scss';

export default function About() {
    return (
        <section className={`${classes.aboutWrap} pa-5`}>
            <div className={`${classes.about}`}>
                <h1 className="hello">안녕하세요, 배창현입니다.</h1>
                <p className="introduce">
                    2016년부터 현업에 뛰어든 만 4년 차, 웹 개발자 배창현입니다. 주로 웹 서비스 개발을 담당하였습니다. <br/>
                    Vue.js, Nuxt.js, React.js, Spring, Java 기술 등을 활용한 프로젝트에 참여한 실무 경험이 있습니다. 기술 역량을 키우고자 학습모임 및 지속적인 학습을
                    통해 부족한 부분을
                    보완하고자 노력했습니다. 또한, 프로젝트를 진행하면서 구성원들과 적극적으로 소통하며 협업해왔습니다.<br/>
                    좋은 코드와 설계를 늘 고민하며, 지식을 공유하는 문화를 좋아하는 개발자입니다.<br/>
                </p>
                <p className="project-info">
                    해당 프로젝트는 React.js 를 학습하고자 시작한 간단한 memo app 입니다.<br/>
                    기능은 단순 합니다. 생성/삭제와 메모 목록에서 드래그 시, 목록을 재정렬 해줍니다.<br/>
                    React.js, SCSS, jotai, React Router 가 적용되어 있습니다.<br/>
                    Vite 를 이용하여, 프로젝트를 생성하였습니다. (Rollup.js 기반)
                </p>
            </div>
        </section>
    )
}

export const Projects = [
  {
    key: 'project01',
    title: '포트폴리오 웹사이트',
    subTitle: '2023.12 (1인 개인 프로젝트)',
    body: [
      {
        key: 'project01_line01', 
        text: '포트폴리오 용도로 제작한 웹사이트입니다. 현재 웹사이트 해당합니다.'
      },
      {
        key: 'project01_line02', 
        text: `Next.js의 학습을 위해 Next.js로 개발하였습니다. 
              SSR을 지원하는 Next.js에 대해 알 수 있었습니다. 
              또한, Vercel을 이용하여 정적 웹사이트를 배포를 경험할 수 있었습니다.`
      },
      {
        key: 'project01_readme',
        link: 'Portfolio',
        text: '자세히 보기 (README)'
      }
    ],
    info: [
      {
        key: 'project01_func',
        title: '주요 기능',
        text: '간단한 자기소개, 인적사항, 기술 스택, Github 및 Tistory 링크,  업무 경력, 프로젝트 경험'
      },
      {
        key: 'project01_github',
        title: 'Github',
        text: 'https://github.com/taehankim-dev/Portfolio',
      },
      {
        key: 'project01_link',
        title: 'URL',
        text: '프로젝트 링크 주소'
      },
      {
        key: 'project01_tech',
        title: '기술 스택',
        text: 'Next.js, Typescript, Tailwind CSS, Vercel'
      }
    ]
  },

  {
    key: 'project02',
    title: '웹 다이어리 프로젝트',
    subTitle: '2023.09 ~ 2023.10 (1인 개인 프로젝트)',
    body: [
      {
        key: 'project02_line01', 
        text: `웹 버전의 일정 관리 프로젝트입니다.
               사용자들의 일정을 웹으로 관리하고자 제작한 웹 사이트입니다.`
      },
      {
        key: 'project02_line02', 
        text: `React와 Recoil의 학습을 위해 React로 개발하였습니다. 
              Firebase를 이용하여 회원관리와 회원들이 작성한 일정들을 관리할 수 있도록 개발하였습니다.
              github-pages를 이용하여 github에 배포했고, Github Actions를 활용하여 Auto Deploy를 적용하였습니다.`
      },
      {
        key: 'project02_readme',
        link: 'DiaryProject',
        text: '자세히 보기 (README)'
      }
    ],
    info: [
      {
        key: 'project02_func',
        title: '주요 기능',
        text: '회원가입, 일정 관리, 사용자 정보 수정'
      },
      {
        key: 'project02_github',
        title: 'Github',
        text: 'https://github.com/taehankim-dev/DiaryWebService',
      },
      {
        key: 'project02_link',
        title: 'URL',
        text: 'https://taehankim-dev.github.io/DiaryWebService/'
      },
      {
        key: 'project02_tech',
        title: '기술 스택',
        text: 'React, Typescript, Recoil, Emotion, Firebase, Vite'
      }
    ]
  }
]
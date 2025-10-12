export const project01 = {
  // 사진은 담당 파트 개수만큼 넣고 슬라이드
  name: 'Tranner01',
  part: 'FE',
  info: '여행 계획 웹 서비스',
  period: '2024.09.01 ~ 2024.12.15',
  lastUpdate: '2024.12.30',
  mainImage: '/projects/project01/main_photo.png',
  headCount: { BE: 3, FE: 2 },
  detailPart: {
    FE: [
      { partName: '회원가입', contribution: '100%' },
      {
        partName: '로그인(카카오 로그인 및 토큰 관리 포함)',
        contribution: '100%',
      },
      { partName: '여행 계획 페이지(google map API)', contribution: '100%' },
      { partName: '프론트엔드 배포(EC2, NginX 사용)', contribution: '100%' },
    ],
  },
  developEnvironment: [
    { section: '개발 언어', content: 'Java 17 / TypeScript, HTML5, CSS3' },
    { section: 'IDE', content: 'IntelliJ / Visual Studio Code' },
    { section: 'Framework', content: 'Spring Boot / React' },
  ],
};

export const project02 = {
  // 사진은 담당 파트 개수만큼 넣고 슬라이드
  name: 'Tranner02',
  part: 'BE',
  info: '여행 계획 웹 서비스',
  period: '2025.03.04 ~ 2025.07.20',
  lastUpdate: '2025.07.20',
  mainImage: '/projects/project02/main_photo.png',
  headCount: { BE: 3, FE: 2 },
  detailPart: {
    BE: [
      {
        partName: 'Spring Cloud Eureka 및 AWS ECS를 사용한 MSA 구조 적용',
        contribution: '100%',
      },
      {
        partName: '로그인 및 회원가입(소셜 로그인 기능 포함)',
        contribution: '100%',
      },
      {
        partName: '외부 api 호출 시 최적화를 위한 redis 캐시 서버 사용',
        contribution: '100%',
      },
      {
        partName: 'github action/AWS ECR을 사용한 CI/CD',
        contribution: '100%',
      },
    ],
  },
  developEnvironment: [
    { section: '개발 언어', content: 'Java 17 / TypeScript, HTML5, CSS3' },
    { section: 'IDE', content: 'IntelliJ / Visual Studio Code' },
    { section: 'Framework', content: 'Spring Boot / React' },
  ],
};

export const project03 = {
  // 사진은 담당 파트 개수만큼 넣고 슬라이드
  name: 'Phraiz',
  part: 'BE',
  info: 'AI 패러프레이징/요약, 인용 생성을 통한 통합 글쓰기 지원 플랫폼',
  period: '2025.05.23 ~ ',
  lastUpdate: '-',
  mainImage: '/projects/project02/main_photo.png',
  headCount: { BE: 2, FE: 2 },
  detailPart: {
    BE: [
      {
        partName: '공통 기능 구현',
        contribution: '100%',
      },
      {
        partName: 'open ai api를 사용한 ai 패러프레이징/요약 기능 구현',
        contribution: '100%',
      },
      {
        partName: 'toss payment를 활용한 결제 관련 기능 구현',
        contribution: '100%',
      },
      {
        partName: 'github action/Docker hub을 사용한 CI/CD',
        contribution: '100%',
      },
      // {
      //   partName: 'Docker 로그 실시간 Slack 연동 (Shell Script)',
      //   contribution: '100%',
      // },
    ],
  },
  developEnvironment: [
    { section: '개발 언어', content: 'Java 17 / TypeScript, HTML5, CSS3' },
    { section: 'IDE', content: 'IntelliJ / Visual Studio Code' },
    { section: 'Framework', content: 'Spring Boot / Next.js' },
  ],
};

export const project02 = {
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

export const project01 = {
  // 사진은 담당 파트 개수만큼 넣고 슬라이드
  name: 'Tranner02',
  part: 'BE',
  info: '여행 계획 웹 서비스',
  period: '2025.03.04 ~ 2025.07.20',
  lastUpdate: '2025.07.20',
  mainImage: '/projects/project02/main_photo.png',
  headCount: { BE: 3, FE: 2 },
  detailPart: {
    FE: [
      { partName: '회원가입', contribution: '100%' },
      {
        partName: '로그인(카카오 로그인 및 토큰 관리 포함)',
        contribution: '100%',
      },
      { partName: '여행 계획 페이지(google map API)', contribution: '100%' },
      { partName: '배포', contribution: '100%' },
    ],
    BE: [{ partName: '로그인 및 spring security 관련', contribution: '30%' }],
  },
  developEnvironment: [
    { section: '개발 언어', content: 'Java 17 / TypeScript, HTML5, CSS3' },
    { section: 'IDE', content: 'IntelliJ / Visual Studio Code' },
    { section: 'Framework', content: 'Spring Boot / React' },
  ],
};

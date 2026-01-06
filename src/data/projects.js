export const project01 = {
  name: 'Tranner01',
  part: 'FE',
  info: '여행 계획 웹 서비스',
  period: '2024.09.01 ~ 2024.12.15',
  lastUpdate: '2024.12.30',
  mainImage: '/projects/project01/main_photo.png',
  headCount: { BE: 2, FE: 2, AI: 1 },
  detailPart: {
    FE: [
      { partName: '회원가입 화면 구현', contribution: '40%' },
      { partName: '카카오 로그인 및 JWT 토큰 관리', contribution: '40%' },
      {
        partName: 'Google Maps API 기반 여행 일정 관리 화면 구현',
        contribution: '40%',
      },
      {
        partName: 'AWS EC2 및 Nginx 기반 프론트엔드 배포',
        contribution: '40%',
      },
    ],
  },
  developEnvironment: [
    { section: '개발 언어', content: 'Java 17 / TypeScript, HTML5, CSS3' },
    { section: 'IDE', content: 'IntelliJ / Visual Studio Code' },
    { section: 'Framework', content: 'Spring Boot / React' },
  ],
};

export const project02 = {
  name: 'Tranner02',
  part: 'BE',
  info: '여행 계획 웹 서비스',
  period: '2025.03.04 ~ 2025.07.20',
  lastUpdate: '2025.07.20',
  mainImage: '/projects/project02/main_photo.png',
  headCount: { BE: 2, FE: 2, AI: 1 },
  detailPart: {
    BE: [
      {
        partName: 'Spring Cloud Eureka 기반 MSA 구조 설계',
        contribution: '50%',
      },
      {
        partName: 'AWS ECS 기반 서비스 배포 환경 구축',
        contribution: '50%',
      },
      {
        partName: 'JWT 기반 인증/인가 로직 구현',
        contribution: '50%',
      },
      {
        partName: 'Redis 캐싱을 통한 외부 API 응답 성능 개선',
        contribution: '50%',
      },
      {
        partName: 'Github Actions + AWS ECR 기반 CI/CD 파이프라인 구축',
        contribution: '50%',
      },
      {
        partName: 'API 에러 응답 표준 스펙 정의 및 문서화',
        contribution: '50%',
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
  name: 'Phraiz',
  part: 'BE',
  info: 'AI 패러프레이징/요약, 인용 생성을 통한 통합 글쓰기 지원 플랫폼',
  period: '2025.05.23 ~ 2025.11.20',
  lastUpdate: '-',
  mainImage: '/projects/project03/main_photo.PNG',
  headCount: { BE: 2, FE: 2 },
  detailPart: {
    BE: [
      {
        partName: '공통 기능 추상화 및 도메인별 확장 구조 설계',
        contribution: '50%',
      },
      {
        partName: 'OpenAI API 기반 텍스트 변환 기능 구현',
        contribution: '50%',
      },
      {
        partName: 'Toss Payments 연동 결제 플로우 구현',
        contribution: '50%',
      },
    ],
  },
  developEnvironment: [
    { section: '개발 언어', content: 'Java 17 / TypeScript, HTML5, CSS3' },
    { section: 'IDE', content: 'IntelliJ / Visual Studio Code' },
    { section: 'Framework', content: 'Spring Boot / Next.js' },
  ],
};

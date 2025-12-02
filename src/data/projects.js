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
  headCount: { BE: 1, FE: 1, AI: 3 },
  detailPart: {
    BE: [
      {
        partName:
          'Spring Cloud Eureka + AWS ECS기반의 MSA 구조 설계 및 서비스 배포',
        contribution: '100%',
      },
      {
        partName: '로그인/회원가입 및 인증/인가 로직 구현',
        contribution: '100%',
      },
      {
        partName: '외부 API 호출 시 성능 개선을 위한 Redis 기반 캐싱 적용',
        contribution: '100%',
      },
      {
        partName: 'Github Actions + AWS ECR을 사용한 CI/CD',
        contribution: '100%',
      },
      {
        partName:
          '프론트 개발자와 협업을 위한 API 에러 응답 스펙을 정의하고 문서화하여 일관된 오류 처리 체계 구축',
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
  period: '2025.05.23 ~ 2025.11.20',
  lastUpdate: '-',
  mainImage: '/projects/project03/main_photo.PNG',
  headCount: { BE: 2, FE: 2 },
  detailPart: {
    BE: [
      {
        partName:
          '패러프레이징/요약/인용 기능에서 공통되는 폴더/히스토리 로직을 추상화하여 공통 레이어로 분리, 도메인별로 확장하여 사용할 수 있는 구조 설계',
        contribution: '100%',
      },
      {
        partName:
          'OpenAI API 기반 AI 패러프레이징/요약 기능 구현 및 프롬프트 구조 개선으로 응답 품질 향상',
        contribution: '100%',
      },
      {
        partName:
          ' Toss Payments 연동을 통한 결제 승인/취소 등 결제 플로우 구현',
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

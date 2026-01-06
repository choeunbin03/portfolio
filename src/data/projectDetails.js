export const tranner01Data = {
  title: 'Tranner',
  subtitle: '국내 여행 계획 서비스',
  shortDescription:
    '사용자들이 빠르고 쉽게 여행을 계획할 수 있도록 지원하는 국내 여행 계획 서비스입니다.',
  liveUrl: '',
  githubUrl: 'https://github.com/SSU-Traveler/Tranner-FE',
  description: '사용자들이 빠르고 쉽게 여행을 계획할 수 있도록 지원하는',
  description_point: '국내 여행 계획 서비스',
  mainImage: '/tranner01/main_photo.svg',
  duration: '2023.09.01 - 2024.12.15',
  team: '백엔드(3명), 프론트(2명)',
  serviceGoalTitle: '복잡한 여행 계획, 이제는 간단하게!',

  serviceGoals: [
    {
      icon: '✈️',
      title: '국내 여행 특화 간소화',
      description:
        '국내 여행에만 집중하여 불필요한 기능을 최소화하고, 여행지 선택부터 일정 관리까지 복잡한 절차를 간단하게 만들어 누구나 쉽게 여행을 계획할 수 있도록 지원',
    },
    {
      icon: '📅',
      title: '직관적인 일정 관리',
      description:
        '사용자 친화적인 UI/UX로 여행 일정을 손쉽게 계획하고 관리할 수 있으며, 여행지 추가·삭제·변경이 직관적으로 이루어져 간편한 일정 관리 제공',
    },
    {
      icon: '🗺️',
      title: '실시간 여행 정보 통합',
      description:
        '선택한 여행지의 실시간 날씨 정보와 인기 명소, 음식점, 숙박 시설 정보를 한 곳에서 확인하고, 소셜 로그인을 통해 간편하게 일정을 저장하고 관리',
    },
  ],
  devStack: {
    '개발 언어': 'Java 17, TypeScript, HTML5, CSS3',
    프레임워크: 'Spring Boot, React',
    데이터베이스: 'RDS(MySQL)',
    '버전 관리 도구': 'Git',
    '인프라 구성': 'AWS, Nginx, Docker',
    '배포 자동화': 'GitHub Actions',
    '프론트 사용 기술': 'zustand, tailwindCSS',
  },

  documents: [{ name: '아키텍처 구성도', image: '/tranner01/arch.PNG' }],
  parts: [
    {
      title: '로그인 및 회원가입',
      images: ['회원가입.png', '로그인.png'],
      description: [
        '로그인·회원가입 및 OAuth2(카카오) 인증 흐름 UI 구현',
        '백엔드 인증 API 연동을 고려한 사용자 입력/에러 처리',
      ],
    },
    {
      title: '여행 일정 설정 UI',
      images: ['캘린더 모달.png'],
      description: ['여행 기간 설정을 위한 날짜 선택 UI 구현'],
    },
    {
      title: '여행 계획 화면 구성',
      images: ['계획 페이지.png'],
      description: [
        '지도·장소 검색 결과를 일정 단위로 연결하는 화면 구조 설계',
        '무한 스크롤 기반 장소 리스트 구현으로 사용자 경험 개선',
      ],
    },
  ],
  review: {
    challenges: [
      {
        title: '프론트엔드와 백엔드의 유효성 검사 역할 분리',
        content:
          '회원가입 구현 과정에서 유효성 검사를 프론트와 백엔드 중 어디까지 책임져야 하는지 고민했고, 프론트는 UX 개선을, 백엔드는 보안과 데이터 무결성을 책임진다는 역할 분리를 이해하게 되었습니다.',
      },
      {
        title: 'Token 재발급을 통한 사용자 경험 개선',
        content:
          'Refresh Token 기반 Access Token 재발급 로직을 구현하며, 보안을 유지하면서도 사용자의 로그인 경험을 해치지 않는 인증 흐름을 설계했습니다.',
      },
    ],

    reflection: {
      learned: [
        '프론트엔드를 직접 구현하며 클라이언트–서버 간 데이터 흐름과 API 설계의 중요성을 체감했습니다.',
        '백엔드 개발 시 프론트엔드의 요구사항을 더 명확히 이해할 수 있게 되었습니다.',
      ],
      improvements: [
        '초기 설계 단계에서 성능과 데이터 흐름을 더 함께 고려하지 못한 점이 아쉬웠습니다.',
      ],
    },
  },
};

export const tranner02Data = {
  title: 'Tranner',
  subtitle: 'AI 기반 여행 계획 서비스',
  shortDescription:
    'AI를 활용한 맞춤 여행 추천과 리뷰 요약 기능으로 국내/해외 여행 계획을 간편하게 수립할 수 있는 여행 계획 플랫폼입니다.',
  liveUrl: '',
  githubUrl: 'https://github.com/Capstone2-Tranner/BE',
  description: 'AI를 활용하여 여행지 추천부터 일정 생성까지',
  description_point: '스마트한 여행 계획 서비스',
  mainImage: '/tranner02/main_photo.png',
  duration: '2025.03 - 2025.06',
  team: '백엔드(1명), 프론트(1명), AI(3명)',
  serviceGoalTitle: 'AI가 추천하는 나만의 여행 계획',

  serviceGoals: [
    {
      icon: '🤖',
      title: 'AI 기반 맞춤 여행 추천',
      description:
        'LangChain과 RAG 기술을 활용하여 사용자의 선호도를 분석하고 국내 여행지를 자동으로 추천합니다. 설문지 기반으로 취향에 맞는 여행지와 일정을 AI가 생성합니다.',
    },
    {
      icon: '🌏',
      title: '국내/해외 여행 통합 지원',
      description:
        '국내는 물론 해외 여행지까지 통합 검색 및 계획이 가능합니다. AI 자동 일정 생성 기능은 국내 여행에 특화되어 있으며, 해외 여행은 수동으로 상세 계획을 수립할 수 있습니다.',
    },
    {
      icon: '⭐',
      title: 'Google Maps 리뷰 요약',
      description:
        '방대한 리뷰 데이터를 AI가 분석하여 핵심 정보만 간결하게 요약해 제공합니다. 장소 선택 시 빠르게 정보를 파악하여 의사결정 시간을 단축합니다.',
    },
  ],

  devStack: {
    '개발 언어': 'Java 17, Python 3.11, TypeScript',
    프레임워크: 'Spring Boot 3.4, Spring Cloud, React',
    데이터베이스: 'MySQL, Redis, Pinecone',
    'AI/ML': 'LangChain, Claude API, Sentence-Transformers',
    '버전 관리 도구': 'Git, GitHub',
    '인프라 구성': 'AWS ECS, AWS ECR, AWS S3, Docker, Nginx',
    '배포 자동화': 'GitHub Actions',
    '외부 API': 'Google Places API, Google Maps API',
  },

  documents: [
    { name: '기능정의서', image: '/tranner02/func_spec.PNG' },
    { name: '아키텍처 구성도', image: '/tranner02/arch.PNG' },
    { name: 'ERD', image: '/tranner02/erd.PNG' },
    { name: '화면 정의서', image: '/tranner02/wireframe.PNG' },
    { name: '비용 설계', image: '/tranner02/cost.PNG' },
    { name: 'api 명세서', image: '/tranner02/api.PNG' },
    { name: 'Error Code', image: '/tranner02/error_code.PNG' },
    { name: 'wbs', image: '/tranner02/wbs.PNG' },
  ],

  parts: [
    {
      title: 'Spring Cloud 기반 MSA 아키텍처 설계',
      images: [],
      description: [
        'Spring Cloud Eureka 기반 서비스 디스커버리 구조 설계',
        'Account / External API 서버 분리 및 ECS 기반 컨테이너 배포',
      ],
    },
    {
      title: 'JWT + OAuth 2.0 인증/인가 시스템',
      images: [],
      description: [
        'Access/Refresh Token 기반 인증 전략 구현',
        'Kakao·Google OAuth2 연동 및 자동 회원 처리',
      ],
    },
    {
      title: 'Redis 기반 API 캐싱',
      images: [],
      description: [
        '외부 API 호출 최소화를 위한 Redis 캐싱 구조 설계',
        '검색/상세 데이터 TTL 분리로 성능 최적화',
        // '장소 상세정보 캐싱 (TTL: 24시간), 검색 결과 캐싱 (TTL: 1시간)',
      ],
    },
  ],

  review: {
    challenges: [
      {
        icon: '🔧',
        title: '멀티 모듈 기반 MSA 초기 환경 구성',
        description:
          'MSA 구조를 하나의 레포에서 멀티 모듈로 관리하며, 모듈 간 의존성과 빌드 설정을 정리하는 데 어려움을 겪었습니다.',
        solution:
          '공통 의존성과 모듈별 의존성을 명확히 분리하여 Gradle 멀티 모듈 구조를 정리했습니다.',
        result: '멀티 모듈 구조에 대한 이해도 향상 및 이후 설정 작업 효율 개선',
      },
      {
        icon: '🐳',
        title: 'Docker 환경변수 전달 이슈',
        description:
          'ECS 환경에서 컨테이너 실행 시 환경변수가 애플리케이션에 전달되지 않는 문제가 발생했습니다.',
        solution:
          'ENTRYPOINT와 CMD 구조를 수정하여 쉘을 통해 환경변수를 전달하도록 개선했습니다.',
        result: '배포 환경에서 서비스가 안정적으로 동작',
        links: [
          {
            title: '📝 Docker 환경변수 전달 트러블슈팅',
            url: 'https://codstudy.tistory.com/165',
          },
        ],
      },
    ],
    reflection: {
      // learned: [
      //   'MSA 구조 도입은 생각보다 고려할 사항이 많다는 것을 체감했습니다. 초기 구축 비용이 많이 들어가며, 서비스 디스커버리, 분산 트랜잭션, 서비스 간 통신, 모니터링 등 다양한 측면을 고려해야 합니다.',
      //   '멀티 모듈 프로젝트 구조에서 모듈 간 의존성 관리와 빌드 설정의 중요성을 배웠습니다. 초기 설정의 복잡도가 높지만, 잘 구성하면 유지보수성과 확장성이 크게 향상됩니다.',
      //   '헬스 체크와 모니터링 환경을 초기부터 구축하는 것이 중요합니다. 문제 상황이 생겼을 때 빠르게 파악하고 분석할 수 있는 환경이 서비스 안정성에 직결됩니다.',
      //   '테이블 설계 시 MSA 환경을 고려한 데이터베이스 분리 전략이 필요합니다. 각 서비스가 독립적인 데이터베이스를 가지면서도 데이터 일관성을 유지하는 것이 핵심입니다.',
      // ],
      learned: [
        'MSA는 구조적 장점만큼 초기 설계와 운영 비용이 크다는 것을 체감했습니다.',
        '멀티 모듈 프로젝트에서는 초기 의존성 설계가 유지보수성과 직결된다는 것을 배웠습니다.',
      ],
      improvements: [
        '초기 단계에서 모니터링과 로깅 환경을 함께 설계하지 못한 점이 아쉬웠습니다.',
      ],
    },
  },
};

export const phraizData = {
  title: 'Phraiz',
  subtitle: 'AI 기반 통합 글쓰기 지원 플랫폼',
  shortDescription:
    '패러프레이징부터 요약, 인용 생성까지 AI로 효율적인 글쓰기를 지원하는 한국어 특화 학술 글쓰기 플랫폼입니다.',
  liveUrl: '',
  githubUrl: 'https://github.com/SSU-IT-Contest/BE',
  description: '문장 다듬기부터 요약, 인용 생성까지',
  description_point: 'AI로 효율적인 글쓰기',
  mainImage: '/phraiz/main_photo.svg',
  duration: '2025.05.23 - 2025.11.20',
  team: '백엔드(2명), 프론트(2명)',
  serviceGoalTitle: '누구나 전문가처럼 쓰는 시대, Phraiz로',
  serviceGoals: [
    {
      icon: '✍️',
      title: 'AI 기반 자동 패러프레이징',
      description:
        'GPT API를 활용한 다양한 문체 모드(표준/학술/창의적/유창형/문학적)로 자연스러운 문장 변환 제공',
    },
    {
      icon: '📚',
      title: '정확한 인용 형식 자동 생성',
      description:
        'URL, DOI, ISBN 입력만으로 APA, MLA 등 다양한 학술 인용 형식을 자동으로 생성하여 출처 표기의 복잡성 해소',
    },
    {
      icon: '📝',
      title: '통합된 글쓰기 작성 지원',
      description:
        '패러프레이징, 다양한 요약 모드, 인용 생성을 하나의 플랫폼에서 원스톱으로 처리하여 학술 글쓰기 효율성 극대화',
    },
  ],
  devStack: {
    '개발 언어': 'Java 17, TypeScript',
    프레임워크: 'Spring Boot, Next.js',
    데이터베이스: 'RDS(MySQL)',
    '버전 관리 도구': 'Git',
    '인프라 구성': 'AWS, Nginx, Docker',
    '배포 자동화': 'GitHub Actions',
  },
  documents: [
    { name: '기능정의서', image: '/phraiz/function_spec.PNG' },
    { name: '아키텍처 구성도', image: '/phraiz/arch.PNG' },
    { name: 'api 명세서', image: '/phraiz/api.PNG' },
    { name: 'WBS', image: '/phraiz/wbs.PNG' },
    { name: 'error_code', image: '/phraiz/error_code.PNG' },
  ],
  parts: [
    {
      title: 'GPT API 프롬프트 설계',
      images: [],
      description: [
        '다양한 글쓰기 목적을 위한 구조화된 프롬프트 템플릿 설계',
        '모드·강도 값에 따른 파라미터 동적 제어 로직 구현',
      ],
    },
    {
      title: '인프라 구축 및 운영',
      images: [],
      description: [
        'AWS EC2/RDS 기반 인프라 구축 및 Docker·Nginx 환경 구성',
        'CI/CD 자동화 및 서버 장애 대응 경험',
      ],
    },
    {
      title: '공통 데이터 관리 기능 구현',
      images: [],
      description: [
        '결과 히스토리·폴더 공통 구조 설계로 데이터 관리 일관성 확보',
      ],
    },
    {
      title: '결제 시스템 연동',
      images: [],
      description: ['토스 페이먼츠 기반 구독 결제 및 상태 동기화 로직 구현'],
    },
  ],
  review: {
    challenges: [
      {
        icon: '🔧',
        title: '서버 메모리 부족으로 인한 OOM 문제',
        description:
          '트래픽이 증가하는 구간에서 메모리 부족으로 서버가 다운되는 문제가 발생했습니다.',
        solution:
          '모니터링을 통해 원인을 파악하고 Swap 메모리를 설정해 서비스 안정성을 우선 확보했습니다.',
        links: [
          {
            title: '📝 문제 발생 및 해결 과정',
            url: 'https://codstudy.tistory.com/209',
          },
          {
            title: '📝 Swap 메모리 설정 방법',
            url: 'https://codstudy.tistory.com/211',
          },
        ],
      },
      {
        icon: '💾',
        title: '트랜잭션 범위 설정 문제',
        description:
          '트랜잭션 단위를 명확히 구분하지 않아 DB 커넥션 점유와 성능 저하가 발생했습니다.',
        solution:
          '비즈니스 로직 경계를 기준으로 트랜잭션 범위를 재설정해 성능을 개선했습니다.',
      },
      {
        icon: '📊',
        title: '실시간 로그 모니터링 부재',
        description: '장애 발생 시 로그 확인 과정이 비효율적이었습니다.',
        solution:
          'Docker 로그를 Slack으로 전송하는 간단한 모니터링 시스템을 구축했습니다.',
      },
      // {
      //   icon: '🔨',
      //   title: '적절한 추상화 수준과 메서드 분리',
      //   description:
      //     'GPT API 프롬프트 생성 로직을 구현하면서 어느 수준까지 메서드를 분리하고 추상화해야 하는지 고민했습니다.',
      //   solution:
      //     '너무 세분화하면 코드 추적이 어렵고, 너무 크면 재사용성과 테스트 용이성이 떨어지는 문제가 있었습니다. 단일 책임 원칙을 기준으로 각 메서드가 하나의 명확한 역할만 수행하도록 리팩토링했습니다.',
      // },
    ],
    reflection: {
      learned: [
        '운영 환경에서는 근본 원인 분석과 함께 서비스 안정화를 위한 판단이 중요하다는 것을 배웠습니다.',
        'CS 기초 지식이 실제 장애 해결에 직접적으로 연결된다는 것을 체감했습니다.',
      ],
      improvements: [
        '초기 인프라 설계 단계에서 예상 트래픽을 더 고려했어야 했습니다.',
        '로그와 모니터링을 더 체계적으로 구성해보고 싶습니다.',
      ],
    },
  },
};

export const tranner01Data = {
  title: 'Tranner',
  subtitle: '국내 여행 계획 서비스',
  shortDescription:
    '사용자들이 빠르고 쉽게 여행을 계획할 수 있도록 지원하는 국내 여행 계획 서비스입니다.',
  liveUrl: '',
  githubUrl: 'https://github.com/yourusername/tranner',
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

  documents: [
    { name: '기능정의서', image: '/tranner01/function_spec.PNG' },
    { name: '화면 정의서', image: '/tranner01/wireframe.PNG' },
    { name: '아키텍처 구성도', image: '/tranner01/arch.PNG' },
  ],
  parts: [
    {
      title: '로그인 및 회원가입',
      images: ['회원가입.png', '로그인.png'],
      description: [
        '자체 회원가입 및 로그인 기능 구현',
        'OAuth2를 활용한 카카오 소셜 로그인 연동',
      ],
    },
    {
      title: '캘린더 모달',
      images: ['캘린더 모달.png'],
      description: [
        'react-date-range 라이브러리를 사용한 날짜 선택 기능',
        '여행 기간 설정을 위한 직관적인 UI 구현',
      ],
    },
    {
      title: '여행 계획 페이지',
      images: ['계획 페이지.png'],
      description: [
        'Google Places API를 활용한 장소 검색 기능 구현',
        'Google Maps API로 지도 표시 및 커스텀 마커 적용',
        '일정별 계획표 컴포넌트 구현',
        '장소 리스트는 무한 스크롤로 구현',
      ],
    },
  ],
  review: {
    challenges: [
      {
        title: '프론트엔드와 백엔드의 유효성 검사 역할 분리',
        content:
          '회원가입 시 유효성 검사를 프론트와 백엔드 양쪽에서 모두 해야 하는지에 대한 의문이 들어 조사한 결과, 프론트엔드는 사용자 경험 개선을, 백엔드는 보안과 데이터 무결성을 담당한다는 것을 이해했습니다.',
      },
      {
        title: 'Token 재발급을 통한 사용자 경험 개선',
        content:
          'Refresh Token으로 Access Token을 재발급받는 로직을 구현하면서, 사용자가 로그인 상태를 유지하면서도 보안을 강화할 수 있는 방법을 고민했습니다.',
      },
      {
        title: '라이브러리 선택의 중요성',
        content:
          'react-date-range의 DateRangePicker를 사용하면서 편리함과 동시에 커스터마이징의 제약을 경험했습니다. 다음 프로젝트에서는 여러 라이브러리를 비교 분석 후 신중하게 선택하겠습니다.',
      },
      {
        title: '컴포넌트 설계와 책임 분리',
        content:
          '여행 계획 페이지의 컴포넌트 구조를 설계하면서 유지보수성과 재사용성을 고려한 컴포넌트 분리의 중요성을 깨달았습니다.',
      },
    ],
    reflection: {
      learned: [
        '백엔드 개발자로서 프론트엔드를 경험하며 클라이언트-서버 간 데이터 흐름을 깊이 있게 이해할 수 있었습니다.',
        '사용자 인증 과정에서 토큰 기반 인증의 동작 원리와 보안 메커니즘을 학습했습니다.',
        'JSON 데이터 구조를 효율적이고 명확하게 설계하는 것이 개발 생산성에 큰 영향을 미친다는 것을 체감했습니다.',
      ],
      improvements: [
        'Google Places API 사용 시 검색 결과 로딩 시간이 길어지는 문제가 있었습니다. 디바운싱, 캐싱 등의 성능 최적화 기법을 적용하지 못한 점이 아쉬웠습니다.',
        'UI/UX 구현에 집중하다 보니 성능 최적화에 충분한 시간을 할애하지 못했습니다. 다음에는 초기 설계 단계부터 성능을 고려하겠습니다.',
        '상태 관리와 데이터 처리에 대한 이해도를 더 높여 효율적인 아키텍처를 구성하고 싶습니다.',
      ],
    },
  },
};

export const phraizData = {
  title: 'Phraiz',
  subtitle: 'AI 기반 통합 글쓰기 지원 플랫폼',
  shortDescription:
    '패러프레이징부터 요약, 인용 생성까지 AI로 효율적인 글쓰기를 지원하는 한국어 특화 학술 글쓰기 플랫폼입니다.',
  liveUrl: 'https://www.phraiz.com',
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
      title: 'GPT API 프롬프트 엔지니어링',
      images: ['gpt_prompt_structure.png', 'tone_blend_system.png'],
      description: [
        '역할-목표-규칙-지침-출력의 5단계 구조화된 프롬프트 템플릿 설계',
        '모드별(표준/학술/창의적/유창형/문학적) 가이드라인 정의',
        '사용자 입력 강도 값(0-100)에 따른 temperature, top_p, presence_penalty 파라미터 조정',
        '모드와 강도에 따라 적절한 프롬프트 메시지를 생성하는 함수 구현',
      ],
    },
    {
      title: '인프라 구축 및 운영',
      images: ['infrastructure_architecture.png', 'cicd_pipeline.png'],
      description: [
        'AWS EC2, RDS를 활용한 서버 인프라 설계 및 구축',
        'Docker 컨테이너화 및 Nginx 리버스 프록시 설정',
        'GitHub Actions 기반 CI/CD 파이프라인 구축으로 배포 자동화',
        '서버 장애 대응',
      ],
    },
    {
      title: '폴더 및 히스토리 공통 기능 구현',
      images: ['folder_history_structure.png', 'common_api_design.png'],
      description: [
        '패러프레이징, 요약, 인용 생성 결과의 통합 저장 시스템 설계',
        '공통 컴포넌트화를 통한 코드 재사용성 향상',
      ],
    },
    {
      title: '토스 페이먼츠 결제 시스템 연동',
      images: ['payment_flow.png', 'toss_api_integration.png'],
      description: [
        '토스 페이먼츠 API를 활용한 구독 결제 시스템 구현',
        '결제 승인, 취소, 환불 프로세스 구현',
        'Webhook을 통한 결제 상태 동기화 및 검증 로직 개발',
      ],
    },
  ],
  review: {
    challenges: [
      {
        icon: '🔧',
        title: '서버 메모리 부족으로 인한 OOM 문제 해결',
        description:
          't3.micro 인스턴스(RAM 1GB)로 서버를 운영하던 중, 봇 요청이 급격히 증가하는 구간에서 메모리 부족으로 서버가 다운되는 문제가 발생했습니다.',
        solution:
          '모니터링 결과 물리 메모리가 부족한 것을 확인하고, Swap 메모리를 설정하여 가상 메모리를 확보함으로써 서버 안정성을 확보했습니다.',
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
        title: '트랜잭션 범위 설정의 중요성',
        description:
          '초기 구현 시 트랜잭션 단위를 명확히 구분하지 않아 불필요한 DB 커넥션 점유와 성능 저하 문제가 발생했습니다.',
        solution:
          '비즈니스 로직의 경계를 분석하여 트랜잭션 범위를 재설정하고, 읽기 전용 트랜잭션을 분리하는 리팩토링을 진행하여 동시 처리 성능을 개선했습니다.',
      },
      {
        icon: '📊',
        title: '실시간 로그 모니터링 시스템 구축',
        description:
          '백엔드 및 인프라 담당자로서 문제 발생 시 매번 서버에 접속해 로그를 확인하는 과정이 비효율적이었습니다.',
        solution:
          '셸 스크립트를 작성하여 Docker 로그를 실시간으로 Slack으로 전송하는 모니터링 시스템을 구축했습니다. nohup으로 백그라운드 실행하여 24시간 로그를 추적할 수 있게 되었고, 장애 대응 시간을 크게 단축했습니다.',
      },
      {
        icon: '🔨',
        title: '적절한 추상화 수준과 메서드 분리',
        description:
          'GPT API 프롬프트 생성 로직을 구현하면서 어느 수준까지 메서드를 분리하고 추상화해야 하는지 고민했습니다.',
        solution:
          '너무 세분화하면 코드 추적이 어렵고, 너무 크면 재사용성과 테스트 용이성이 떨어지는 문제가 있었습니다. 단일 책임 원칙을 기준으로 각 메서드가 하나의 명확한 역할만 수행하도록 리팩토링했습니다.',
      },
    ],
    reflection: {
      learned: [
        'OS, 네트워크 등 CS 기본 지식의 중요성을 깨달았습니다. 특히 메모리 관리 문제를 해결하면서 JVM 동작 원리를 깊이 이해하여 더 효율적인 코드를 작성하고 싶다는 동기를 얻었습니다.',
        '트랜잭션 경계를 올바르게 설정하는 것이 성능과 데이터 정합성에 큰 영향을 미친다는 것을 체감했습니다.',
        '서버 리소스 모니터링의 중요성과 Swap 메모리 등 메모리 관리 기법을 학습했습니다.',
        '코드의 추상화 수준과 메서드 분리 기준에 대한 실질적인 감각을 키울 수 있었습니다.',
      ],
      improvements: [
        '초기 인프라 설계 시 예상 트래픽을 고려한 적절한 인스턴스 스펙 선정이 필요했습니다.',
        '로그 모니터링 시스템을 더 체계적으로 구축하여 에러 레벨별 알림, 로그 필터링 등의 기능을 추가하고 싶습니다.',
        '현재는 공통 기능을 common 폴더로 분리했지만, 향후 여러 프로젝트에서 재사용할 수 있도록 독립적인 라이브러리나 모듈로 분리하는 것도 고려해볼 만합니다.',
        '테스트 코드 작성을 병행했다면 리팩토링 과정에서 더 안전하게 코드를 개선할 수 있었을 것입니다.',
      ],
    },
  },
};

export const anotherProjectData = {
  title: 'Another Project',
  description: '다른 프로젝트에 대한 간단한 설명',
  duration: '2025.01.01 - 2025.06.30',
  team: '백엔드(2명), 프론트(1명), 디자이너(1명)',
  serviceGoals: [
    { title: '목표 1', description: '내용 1' },
    { title: '목표 2', description: '내용 2' },
  ],
  devStack: {
    '개발 언어': 'Python, JavaScript',
    프레임워크: 'Django, Vue.js',
    데이터베이스: 'PostgreSQL',
  },
};

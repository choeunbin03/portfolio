export const tranner01Data = {
  title: 'Tranner',
  description: '사용자들이 빠르고 쉽게 여행을 계획할 수 있도록 지원하는',
  description_point: '국내 여행 계획 서비스',
  duration: '2023.09.01 - 2024.12.15',
  team: '백엔드(3명), 프론트(2명)',
  serviceGoals: [
    {
      title: '간편한 국내 여행 서비스 제공',
      description: '대한민국 여행에 특화된 서비스를 구축',
    },
    {
      title: '효율적인 예약 및 일정 관리',
      description:
        '사용자들이 빠르고 효율적으로 여행을 예약하고 관리할 수 있는 시스템을 제공',
    },
    {
      title: '사용자 경험 극대화',
      description:
        '직관적인 인터페이스와 최적화된 서비스를 통해 사용자 만족도를 높임',
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

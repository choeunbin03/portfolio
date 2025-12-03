// 주요 학습 카테고리 - Highlight Cards 방식
export const highlightCategories = [
  {
    id: 'infra',
    icon: '🔧',
    title: '인프라 & 트러블슈팅',
    description: '실제 프로젝트에서 겪은 문제들을 해결한 과정과 인사이트',
    posts: [
      {
        title: 'OOM 문제 해결기',
        description: '메모리 관리 및 가상 메모리 vs 물리 메모리 분석',
        link: 'https://codstudy.tistory.com/209',
      },
      {
        title: 'Redis Replica 설정 오류 해결',
        description: 'RedisReadOnlyException 트러블슈팅 과정',
        link: 'https://codstudy.tistory.com/191',
      },
      {
        title: 'Docker 배포 자동화 구축',
        description: 'EC2 환경에서 Docker 컨테이너 배포 플로우 정리',
        link: 'https://codstudy.tistory.com/154',
      },
      {
        title: 'SWAP 메모리의 필요성',
        description: '물리 메모리 부족 상황에서의 SWAP 활용',
        link: 'https://codstudy.tistory.com/211',
      },
    ],
  },
  {
    id: 'backend',
    icon: '🌱',
    title: 'Spring & Backend',
    description: 'Spring 학습',
    posts: [
      {
        title: 'Spring Security JWT 인증 구현',
        description: 'OAuth 및 JWT 기반 인증/인가 시스템 구축',
        link: 'https://codstudy.tistory.com/84',
      },
      {
        title: '웹 동작 원리 파헤치기',
        description: '브라우저 렌더링 과정 이해',
        link: 'https://codstudy.tistory.com/174',
      },
      {
        title: 'Checked Exception vs Runtime Exception',
        description: 'Java 예외 처리 전략과 실무 적용',
        link: 'https://codstudy.tistory.com/123',
      },
      {
        title: '@Transactional 동작 원리',
        description: 'Spring 트랜잭션 관리 메커니즘 분석',
        link: 'https://codstudy.tistory.com/120',
      },
    ],
  },
  {
    id: 'cs',
    icon: '💡',
    title: 'CS 기초',
    description: '컴퓨터 과학 기초 개념 정리 및 알고리즘',
    posts: [
      {
        title: '유클리드 호제법 (GCD/LCM)',
        description: '최대공약수와 최소공배수를 효율적으로 구하는 알고리즘',
        link: 'https://codstudy.tistory.com/205',
      },
      // 추후 추가 예정
    ],
  },
];

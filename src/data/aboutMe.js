// src/data/aboutMe.ts
export const personalInfo = {
  name: '조은빈',
  birth: '2003.03.24',
  contact: {
    email: 'choeunbiin03@naver.com',
    phone: '010-9332-3488',
  },
};

export const introduction = {
  headline: '끊임없이 배우고 성장을 즐기는 개발자 조은빈입니다.',
  detail:
    '안녕하세요, 고민과 발전을 즐기며 사용자 입장에서 생각하는 신입 백엔드 개발자 조은빈입니다.\n\n' +
    '**사용자 입장**에서의 시나리오부터 **개발 편의성, 유지보수성**을 고려한 구조 설계를 좋아합니다.\n새로운 개념을 접하면 단순히 사용하는 것에서 그치지 않고, **내부 원리를 이해하려고 파고드는 과정**을 중요하게 생각합니다.\n\n' +
    '항상 더 나은 방법이 있지 않을지 **스스로 질문하고 고민하며 성장하는 태도**를 갖고 있습니다.\n아직 경험은 많지 않지만, 안정적이고 신뢰할 수 있는 서비스를 만들기 위해 꾸준히 성장하고 있습니다.',
};

export const sections = {
  education: [
    { content: '진명여자고등학교', period: '2019.03 ~ 2022.02' },
    { content: '숭실대 소프트웨어학부', period: '2022.03 ~ 2026.02' },
  ],
  career: [],
  award: [],
  active: [
    {
      content: '2025 블레이버스 MVP 개발 해커톤 참가',
      period: '2025.02',
    },
    {
      content: '생성형AI와 AI에이전트 개발 교육 (교내 비교과 프로그램)',
      period: '2025.06.30 ~ 2025.07.02',
    },
    {
      content: '교내 2025 제 3회 IT 프로젝트 공모전 참가',
      period: '2025.05 ~ 2025.11',
    },
  ],
  certificate: [
    { content: '컴퓨터활용능력 2급', period: '2022.02.11' },
    { content: 'TOPCIT 수준 3', period: '2025.05.24' },
    { content: 'TOEIC 815점', period: '2025.10.18' },
    { content: '정보처리기사', period: '2025.12.24' },
    //{ content: 'SQLD', period: '' },
  ],
};

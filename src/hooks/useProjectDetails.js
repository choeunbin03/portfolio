import { tranner01Data, anotherProjectData } from '../data/projectDetails';

// 프로젝트 이름을 인자로 받아 해당하는 데이터를 반환하는 훅
export const useProjectData = (projectName) => {
  if (projectName === 'Tranner01') {
    return tranner01Data;
  }
  if (projectName === 'Another Project') {
    return anotherProjectData;
  }
  // 기본값 또는 에러 처리
  return null;
};

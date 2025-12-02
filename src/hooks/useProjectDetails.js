import {
  tranner01Data,
  tranner02Data,
  phraizData,
} from '../data/projectDetails';

// 프로젝트 이름을 인자로 받아 해당하는 데이터를 반환하는 훅
export const useProjectData = (projectName) => {
  if (projectName === 'Tranner01') {
    return tranner01Data;
  }
  if (projectName === 'Tranner02') {
    return tranner02Data;
  }
  if (projectName === 'Phraiz') {
    return phraizData;
  }
  // 기본값 또는 에러 처리
  return null;
};

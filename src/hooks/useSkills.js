import { strong, knowledgeable, experienced } from '../data/skills';

export const useSkills = () => {
  /** 여기서 훗날 fetch · i18n 등을 캡슐화할 수도 있음 */
  return { strong, knowledgeable, experienced };
};

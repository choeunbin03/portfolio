import { personalInfo, introduction, sections } from '../data/aboutMe';

export const useAboutMe = () => {
  /** 여기서 훗날 fetch · i18n 등을 캡슐화할 수도 있음 */
  return { personalInfo, introduction, sections };
};

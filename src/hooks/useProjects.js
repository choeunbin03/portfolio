import { project01, project02 } from '../data/projects';

export const userProjects = () => {
  /** 여기서 훗날 fetch · i18n 등을 캡슐화할 수도 있음 */
  return { project01, project02 };
};

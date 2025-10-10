// src/hooks/useStudy.js

import { backend, database, devops, productivity } from '../data/study';

export const useStudy = () => {
  return { backend, database, devops, productivity };
};

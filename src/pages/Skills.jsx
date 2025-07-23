import { useState } from 'react';
import InfoComponents from '../compenents/InfoComponents';
import SkillsComponents from '../compenents/SkillsComponents';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  //strong
  const strong = {
    language: ['Java', 'Spring', 'MySql'],
    detail: `웹 프로젝트를 진행하면서 해당 기술에 대한 공부를 관심 있게 했습니다.
      (실제로는 무엇을 할 수 있는지 대충 3줄로 설명 줄글X 어디까지 이해 및 적용)`,
  };
  //knowledgeable
  const knowledgeable = {
    language: ['Typescript', 'React', 'Jsp', 'Javascript', 'Html/Css'],
    detail: ``,
  };
  //experienced
  const experienced = {
    language: ['Aws'],
    detail: `S3 서비스를 사용하여 파일 저장 및 불러오기.
            Ec2를 사용하여 배포. (route53으로 도메인 연결)`,
  };

  const info = {
    strong: strong,
    knowledgeable: knowledgeable,
    experienced: experienced,
  };

  //설명 opened 여부
  const [isOpened, setIsOpened] = useState({
    strong: true,
    knowledgeable: true,
    experienced: true,
  });

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[80%] h-[80%]">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 1, y: +30 }} // 초기 상태
            whileInView={{ opacity: 1, y: 0 }} // 애니메이션 상태
            exit={{ opacity: 1, y: +100 }} // 종료 상태
            transition={{ duration: 0.5 }} // 애니메이션 지속 시간
            className="overflow-hidden"
          >
            <div className="">
              <p className="flex items-start ml-5 mb-5 text-[40px] font-bold">
                Skills
              </p>
              <hr />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="h-[90%] flex justify-between">
          <motion.ul
            className=""
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.5 }}
          >
            {Object.entries(info).map(([key, value]) => {
              if (value && value != null) {
                return (
                  <AnimatePresence mode="popLayout">
                    <motion.li
                      key={key}
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: 'spring' }}
                    >
                      <SkillsComponents
                        isOpened={isOpened[key]}
                        setIsOpened={setIsOpened}
                        label={key}
                        contents={value}
                      />
                    </motion.li>
                  </AnimatePresence>
                );
              }
              return null;
            })}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

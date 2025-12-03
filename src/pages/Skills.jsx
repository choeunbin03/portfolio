import SkillsComponents from '../components/SkillsComponents';
import { motion, AnimatePresence } from 'framer-motion';
import { useSkills } from '../hooks/useSkills';
import { useStudy } from '../hooks/useStudy';
import HighlightCard from '../components/HighlightCard';

const Skills = () => {
  const { strong, knowledgeable, experienced } = useSkills();
  const { highlightCategories } = useStudy();

  return (
    <div className="w-full justify-center flex flex-col items-center px-6 sm:px-8 md:px-10">
      <div className="w-full max-w-[1400px] flex justify-center items-center relative">
        <div className="w-full md:w-[90%] lg:w-[80%] h-full">
          {/* Skills 섹션 */}
          <div className="pt-[130px] sm:pt-[120px] md:pt-[150px]">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 1, x: +50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 1, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <div className="w-0.5 sm:w-1 h-6 sm:h-7 md:h-8 bg-point-main rounded-full"></div>
                  <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-point-dark font-bold">
                    Skills
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 w-full auto-rows-fr">
                  <SkillsComponents label="strong" contents={strong} />
                  <SkillsComponents
                    label="knowledgeable"
                    contents={knowledgeable}
                  />
                  <SkillsComponents
                    label="experienced"
                    contents={experienced}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Study 섹션 */}
          <div className="mt-16 sm:mt-20 md:mt-24 mb-20 sm:mb-32 md:mb-40">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 1, x: +50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 1, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <div className="w-0.5 sm:w-1 h-6 sm:h-7 md:h-8 bg-point-main rounded-full"></div>
                  <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-point-dark font-bold">
                    Study
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 w-full">
                  {highlightCategories.map((category) => (
                    <HighlightCard key={category.id} category={category} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

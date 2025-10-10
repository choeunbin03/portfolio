import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { useAboutMe } from '../../hooks/useAboutMe';

export default function AboutMeIntro() {
  const { personalInfo, introduction } = useAboutMe();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1, y: +30 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: +100 }}
        transition={{ duration: 0.5 }}
        className="overflow"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1.5 h-12 bg-point-main rounded-full"></div>
          <h1 className="text-[50px] text-point-dark font-bold">About Me</h1>
        </div>
        <hr className="border-gray-300 border-t-2" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 1, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: +100 }}
        transition={{ duration: 0.5 }}
        className="mt-12 grid grid-cols-1 xl:grid-cols-[auto_1fr] gap-8 xl:gap-16 items-start"
      >
        {/* 프로필 카드 */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-6 border-2 border-gray-200 shadow-lg mx-auto xl:mx-0">
          <img
            src="조은빈.jpg"
            className="w-[230px] sm:w-[230px] md:w-[240px] lg:w-[260px] rounded-lg shadow-md mb-5"
            alt="증명사진"
          />
          <div className="space-y-2">
            <p className="font-bold text-[25px] text-gray-800">{personalInfo.name}</p>
            <div className="space-y-1.5 text-gray-600">
              <p className="flex items-center gap-2 text-[17px]">
                <span className="text-point-main">🎂</span> {personalInfo.birth}
              </p>
              <p className="flex items-center gap-2 text-[17px]">
                <span className="text-point-main">📧</span> {personalInfo.contact.email}
              </p>
              <p className="flex items-center gap-2 text-[17px]">
                <span className="text-point-main">📞</span> {personalInfo.contact.phone}
              </p>
            </div>
          </div>
        </div>

        {/* 소개 영역 */}
        <div className="flex flex-col space-y-6">
          {/* 헤드라인 */}
          <div className="border-l-4 border-point-main pl-6 py-2">
            <h2 className="text-[28px] md:text-[32px] font-bold text-point-dark leading-snug break-keep">
              {introduction.headline}
            </h2>
          </div>
          
          {/* 상세 소개 */}
          <div className="prose prose-lg max-w-none text-[16px] md:text-[18px] leading-relaxed break-keep text-gray-700">
            <ReactMarkdown
              components={{
                strong: ({ node, ...props }) => (
                  <strong className="text-point-main font-semibold" {...props} />
                ),
                p: ({ node, ...props }) => <p className="my-4" {...props} />,
              }}
            >
              {introduction.detail}
            </ReactMarkdown>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

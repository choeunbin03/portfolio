import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { useAboutMe } from '../../hooks/useAboutMe';
import ValueCards from './ValueCards';
import InterestTags from './InterestTags';

export default function AboutMeIntro() {
  const { personalInfo, introduction } = useAboutMe();

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-2 sm:gap-3 mb-2">
          <div className="w-1 sm:w-1.5 h-8 sm:h-10 md:h-12 bg-point-main rounded-full"></div>
          <h1 className="text-[32px] sm:text-[40px] md:text-[50px] text-point-dark font-bold">
            About Me
          </h1>
        </div>
        <hr className="border-gray-300 border-t-2" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
        // className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 xl:grid-cols-[auto_1fr] gap-6 sm:gap-8 xl:gap-16 items-start"
        className="mt-8 sm:mt-10 md:mt-12 gap-6 sm:gap-8 xl:gap-16 flex flex-col items-center"
      >
        {/* 프로필 카드 */}
        {/* <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 shadow-lg mx-auto xl:mx-0 w-full max-w-[250px] sm:max-w-[250px]">
          <img
            src="조은빈.jpg"
            className="w-full rounded-lg shadow-md mb-4 sm:mb-5"
            alt="증명사진"
          />
          <div className="space-y-2">
            <p className="font-bold text-[20px] sm:text-[22px] md:text-[25px] text-gray-800">
              {personalInfo.name}
            </p>
            <div className="space-y-1.5 text-gray-600">
              <p className="flex items-center gap-2 text-[14px] sm:text-[15px] md:text-[17px]">
                <span className="text-point-main">🎂</span> {personalInfo.birth}
              </p>
              <p className="flex items-center gap-2 text-[14px] sm:text-[15px] md:text-[17px] break-all">
                <span className="text-point-main">📧</span>{' '}
                {personalInfo.contact.email}
              </p>
              <p className="flex items-center gap-2 text-[14px] sm:text-[15px] md:text-[17px]">
                <span className="text-point-main">📞</span>{' '}
                {personalInfo.contact.phone}
              </p>
            </div>
          </div>
        </div> */}
        <div className="w-full flex items-center">
          <img
            src="조은빈.jpg"
            className="w-[120px] sm:w-[150px] xl:w-[180px] rounded-lg shadow-md mb-2 sm:mb-3 mr-8 md:mr-16"
            alt="증명사진"
          />
          <div className="">
            <p className="font-bold text-[22px] sm:text-[25px] md:text-[28px] text-gray-800">
              {personalInfo.name}
            </p>
            <p className="text-[16px] sm:text-[19px] md:text-[22px] text-gray-800 mb-4">
              {personalInfo.position}
            </p>
            <div className="space-y-1 text-gray-600">
              <p className="flex items-center gap-2 text-[12px] sm:text-[15px] md:text-[17px]">
                <span className="text-gray-800 font-bold">생년월일: </span>{' '}
                {personalInfo.birth}
              </p>
              <p className="flex items-center gap-2 text-[12px] sm:text-[15px] md:text-[17px]">
                <span className="text-gray-800 font-bold">이메일: </span>{' '}
                {personalInfo.contact.email}
              </p>
              <p className="flex items-center gap-2 text-[12px] sm:text-[15px] md:text-[17px]">
                <span className="text-gray-800 font-bold">전화번호: </span>{' '}
                {personalInfo.contact.phone}
              </p>
              <p className="flex items-center gap-2 text-[12px] sm:text-[15px] md:text-[17px]">
                <span className="text-gray-800 font-bold">깃허브: </span>{' '}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {personalInfo.github}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* 소개 영역 */}
        <div className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6">
          {/* 헤드라인 */}
          <div className="border-l-4 border-point-main pl-4 sm:pl-5 md:pl-6 py-2">
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-point-dark leading-snug break-keep">
              {introduction.headline}
            </h2>
          </div>

          {/* 상세 소개 */}
          <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed break-keep text-gray-700">
            <ReactMarkdown
              components={{
                strong: ({ node, ...props }) => (
                  <strong
                    className="text-point-main font-semibold"
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p className="my-3 sm:my-4" {...props} />
                ),
              }}
            >
              {introduction.detail}
            </ReactMarkdown>
          </div>

          {/* 핵심 가치 카드 */}
          {/* <ValueCards /> */}

          {/* 관심 분야 */}
          {/* <InterestTags /> */}
        </div>
      </motion.div>
    </div>
  );
}

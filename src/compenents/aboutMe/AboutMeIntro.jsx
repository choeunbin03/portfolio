import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { useAboutMe } from '../../hooks/useAboutMe';

export default function AboutMeIntro() {
  const { personalInfo, introduction } = useAboutMe();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1, y: +30 }} // 초기 상태
        whileInView={{ opacity: 1, y: 0 }} // 애니메이션 상태
        exit={{ opacity: 1, y: +100 }} // 종료 상태
        transition={{ duration: 0.5 }} // 애니메이션 지속 시간
        className="overflow"
      >
        <div className="">
          <p className="flex items-start pl-5  text-[50px] text-point-dark font-bold  w-full pb-2 h-[85px]">
            About Me.
          </p>
          <hr className="border-gray-350 border-t-2" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 1, x: -50 }} // 초기 상태
        whileInView={{ opacity: 1, x: 0 }} // 애니메이션 상태
        exit={{ opacity: 1, x: +100 }} // 종료 상태
        transition={{ duration: 0.5 }} // 애니메이션 지속 시간
        className="flex flex-col items-center justify-center md:flex-row md:items-start"
      >
        <div>
          <img
            src="조은빈.jpg"
            className="w-[230px] sm:w-[230px] md:min-w-[210px] md:w-[210px] lg:w-[260px] my-[30px] md:ml-2 rounded-sm"
            alt="증명사진"
          />
          <div className="justify-items-start mt-[15px] ml-2 md:ml-4 min-w-[240px]">
            <p className="font-bold text-[25px]">{personalInfo.name}</p>
            <p className=" text-[18px] text-gray-700">
              🎂 {personalInfo.birth}
            </p>
            <p className="text-[18px] text-gray-700">
              📧 {personalInfo.contact.email}
            </p>
            <p className="text-[18px] text-gray-700">
              📞 {personalInfo.contact.phone}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start md:ml-[50px] xl:ml-[110px] mt-[50px] lg:mt-[80px] shadow-lg rounded-xl px-[40px] py-[30px]">
          <p className="text-[29px] font-bold text-point-dark whitespace-pre-line min-w-[260px] break-keep">
            {introduction.headline}
          </p>
          {/* ✅ className은 래퍼 div에! */}
          <div className="prose prose-lg max-w-[700px] text-[16px] md:text-[18px] leading-relaxed break-keep">
            <ReactMarkdown
              // remarkPlugins={[remarkGfm, remarkBreaks]} // 필요하면 주석 해제
              components={{
                strong: ({ node, ...props }) => (
                  <strong
                    className="text-point-main font-semibold"
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p className="my-3" {...props} /> // 단락 간 간격
                ),
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

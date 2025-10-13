import { motion } from 'framer-motion';

const ValueCards = () => {
  const values = [
    {
      icon: '🎯',
      title: '문제 해결',
      description: '복잡한 문제를 논리적으로 분석하고 최적의 솔루션을 찾아냅니다.'
    },
    {
      icon: '🚀',
      title: '지속적 성장',
      description: '새로운 기술을 배우고 적용하며 끊임없이 발전합니다.'
    },
    {
      icon: '👥',
      title: '협업과 소통',
      description: '팀원들과 적극적으로 소통하며 함께 성장합니다.'
    },
    {
      icon: '💡',
      title: '사용자 중심',
      description: '사용자 경험을 최우선으로 생각하며 서비스를 개발합니다.'
    }
  ];

  return (
    <div className="mt-8 sm:mt-12 md:mt-16">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
        <div className="w-0.5 sm:w-1 h-6 sm:h-7 md:h-8 bg-point-main rounded-full"></div>
        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-point-dark font-bold">
          핵심 가치
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
            className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 hover:border-point-main/50 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="text-[28px] sm:text-[32px] md:text-4xl group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </span>
              <div className="flex-1">
                <h4 className="text-[16px] sm:text-[18px] md:text-xl font-bold text-gray-800 mb-1.5 sm:mb-2 group-hover:text-point-main transition-colors">
                  {value.title}
                </h4>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] text-gray-600 leading-relaxed break-keep">
                  {value.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ValueCards;

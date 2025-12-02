import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

const ValueCards = () => {
  const values = [
    {
      icon: '📌',
      title: '책임감',
      description:
        '**맡은 일은 끝까지 책임지고 완성해야 한다고 믿습니다.**\n\n' +
        '코드 한 줄, 작은 태스크 하나라도 미루지 않고 스스로 책임지는 태도가 개발자의 기본이라고 생각합니다.',
    },
    {
      icon: '📌',
      title: '협업',
      description:
        '**일은 혼자 하는 것이 아니라 팀과 함께 만드는 것이라고 생각합니다.**\n\n' +
        '상황 공유, 커뮤니케이션, 배려를 기반으로 독단적이지 않은 협업 문화를 중요하게 여깁니다.',
    },
    {
      icon: '📌',
      title: '근본적 해결',
      description:
        '**문제를 ‘겉만’ 보고 넘기지 않습니다.**\n\n' +
        '내가 작성한 코드의 동작 원리와 흐름을 설명할 수 있을 정도로 깊이 이해하고, 근본적인 원인을 찾아 해결해야 진짜 의미 있는 결과가 나온다고 믿습니다.',
    },
    {
      icon: '📌',
      title: '사용자 중심',
      description:
        '**백엔드 로직은 결국 사용자 경험을 완성하는 핵심이라고 생각합니다.**\n\n' +
        '프론트–도메인–인프라 전체 흐름을 바라보며 더 매끄럽고 쓰기 편한 서비스를 만드는 것을 목표로 합니다.',
    },
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
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
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
                <ReactMarkdown
                  components={{
                    strong: ({ node, ...props }) => (
                      <strong
                        className="text-point-main font-semibold"
                        {...props}
                      />
                    ),
                    p: ({ node, ...props }) => (
                      <p
                        className="text-[13px] sm:text-[14px] md:text-[15px] text-gray-600 leading-relaxed break-keep"
                        {...props}
                      />
                    ),
                  }}
                >
                  {value.description}
                </ReactMarkdown>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ValueCards;

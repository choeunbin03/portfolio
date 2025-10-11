import { motion } from 'framer-motion';

const InterestTags = () => {
  const interests = [
    { category: 'Backend', items: ['Spring Boot', 'JPA', 'RESTful API', 'MSA'] },
    { category: 'Database', items: ['MySQL', 'Redis', 'Query Optimization'] },
    { category: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Nginx'] },
    { category: 'Growth', items: ['Clean Code', 'Design Pattern', 'TDD', 'Refactoring'] }
  ];

  return (
    <div className="mt-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-8 bg-point-main rounded-full"></div>
        <h3 className="text-[28px] md:text-[32px] text-point-dark font-bold">
          관심 분야
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interests.map((interest, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:shadow-lg transition-all duration-300"
          >
            <h4 className="text-lg font-bold text-point-main mb-4 flex items-center gap-2">
              <span className="text-point-main">▹</span>
              {interest.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {interest.items.map((item, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-point-main/10 text-gray-700 rounded-lg text-sm font-medium hover:bg-point-main/20 hover:text-point-main transition-colors duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InterestTags;

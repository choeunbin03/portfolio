import upperFirstLetter from '../../utils/upperFirstLetter';

const InfoComponents = ({ label, contents }) => {
  return (
    <section className="mt-6 sm:mt-8 md:mt-10">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
        <div className="w-0.5 sm:w-1 h-6 sm:h-7 md:h-8 bg-point-main rounded-full"></div>
        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-point-dark font-bold">
          {upperFirstLetter(label)}
        </h3>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-4 sm:p-5 md:p-6 border border-gray-200 shadow-md">
        <ul className="space-y-3 sm:space-y-4 w-full">
          {contents.map((el, i) => (
            <li
              key={i}
              className="flex flex-col md:grid md:grid-cols-[auto_1fr] md:items-baseline md:gap-x-6 pb-3 sm:pb-4 border-b border-gray-200 last:border-b-0 last:pb-0"
            >
              {/* 기간 */}
              <span className="text-point-main font-semibold tabular-nums whitespace-nowrap text-[13px] sm:text-[14px] md:text-base w-full md:w-[140px] mb-1 md:mb-0">
                {el.period}
              </span>

              {/* 내용 */}
              <span className="min-w-0 md:min-w-0 whitespace-normal break-words text-[14px] sm:text-[15px] md:text-base text-gray-700 leading-relaxed">
                {el.content}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InfoComponents;

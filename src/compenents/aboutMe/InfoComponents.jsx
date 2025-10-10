import upperFirstLetter from '../../utils/upperFirstLetter';

const InfoComponents = ({ label, contents }) => {
  return (
    <section className="mt-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-point-main rounded-full"></div>
        <h3 className="text-[28px] md:text-[32px] text-point-dark font-bold">
          {upperFirstLetter(label)}
        </h3>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-6 border border-gray-200 shadow-md">
        <ul className="space-y-4 w-full">
          {contents.map((el, i) => (
            <li
              key={i}
              className="flex flex-col md:grid md:grid-cols-[auto_1fr] md:items-baseline md:gap-x-6 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0"
            >
              {/* 기간 */}
              <span className="text-point-main font-semibold tabular-nums whitespace-nowrap text-sm md:text-base w-[140px]">
                {el.period}
              </span>

              {/* 내용 */}
              <span className="min-w-0 md:min-w-0 whitespace-normal break-words text-[15px] md:text-base text-gray-700 leading-relaxed mt-1 md:mt-0">
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

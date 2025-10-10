import upperFirstLetter from '../../utils/upperFirstLetter';

const InfoComponents = ({ label, contents }) => {
  return (
    <section className="mt-6">
      <h3 className="text-[28px] md:text-[32px] text-point-dark font-bold">
        {upperFirstLetter(label)}
      </h3>

      <ul className="space-y-3 w-full ml-3">
        {contents.map((el, i) => (
          <li
            key={i}
            className="
          flex flex-col md:grid md:grid-cols-[auto_1fr]
          md:items-baseline md:gap-x-6
        "
          >
            {/* 기간: 숫자 간격 고정, 모바일에선 위에 */}
            <span className="text-slate-600 tabular-nums whitespace-nowrap text-sm md:text-base w-[140px]">
              {el.period}
            </span>

            {/* 내용: 반드시 줄바꿈 가능하도록 */}
            <span className="min-w-0 md:min-w-0 whitespace-normal break-words text-[15px] md:text-base">
              {el.content}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InfoComponents;

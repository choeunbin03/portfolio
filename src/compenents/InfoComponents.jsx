import upperFirstLetter from '../utils/upperFirstLetter';

const InfoComponents = ({ label, contents }) => {
  return (
    <div className="flex flex-col items-start ml-7 mt-5">
      <p className="text-[26px] font-bold">{upperFirstLetter(label)}</p>
      <ul className="ml-2 mt-2 list-disc pl-5">
        {contents.map((element) => (
          <li className="text-[16px]">
            <span>{element.content} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="border-l-2 border-gray-400 pl-3">
              {element.period}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoComponents;

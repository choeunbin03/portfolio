import React from 'react';

const StudyCard = ({ title, subtopics }) => {
  return (
    <div className="w-[230px] h-fit bg-point-reverse bg-opacity-30 rounded-xl p-4">
      <h4 className="font-bold text-[16px] mb-2">{title}</h4>
      <ul className="list-disc list-inside text-sm">
        {subtopics.map((item, index) => (
          <li key={index}>
            {item.link ? (
              <a href={item.link} className="hover:font-bold break-keep">
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudyCard;

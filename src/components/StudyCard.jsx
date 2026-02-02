import React from 'react';

const StudyCard = ({ post }) => {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 sm:p-7 md:p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:border-point-main/40 transition-all duration-300 group h-full"
    >
      {/* 헤더 */}
      <div className="mb-4 sm:mb-5">
        <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-gray-900 group-hover:text-point-main transition-colors mb-2">
          {post.title}
        </h3>
        <p className="text-[14px] sm:text-[15px] text-point-main font-medium">
          {post.subtitle}
        </p>
      </div>

      {/* 구분선 */}
      <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-4 sm:mb-5"></div>

      {/* 설명 */}
      <p className="text-[13px] sm:text-[14px] md:text-[15px] text-gray-600 leading-relaxed mb-5 sm:mb-6 break-keep">
        {post.description}
      </p>

      {/* 태그 */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-[11px] sm:text-[12px] bg-point-main/10 text-point-main rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 더보기 링크 */}
      <div className="mt-5 sm:mt-6 pt-4 border-t border-gray-200">
        <span className="text-[13px] sm:text-[14px] text-point-main font-medium flex items-center gap-2">
          <span>자세히 보기</span>
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </span>
      </div>
    </a>
  );
};

export default StudyCard;

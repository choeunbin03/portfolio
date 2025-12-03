import React from 'react';

const HighlightCard = ({ category }) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 sm:p-7 md:p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:border-point-main/40 transition-all duration-300 group">
      {/* 헤더 */}
      <div className="mb-5 sm:mb-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl sm:text-4xl">{category.icon}</span>
          <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-gray-900 group-hover:text-point-main transition-colors">
            {category.title}
          </h3>
        </div>
        <p className="text-[13px] sm:text-[14px] md:text-[15px] text-gray-600 leading-relaxed pl-1">
          {category.description}
        </p>
      </div>

      {/* 구분선 */}
      <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-5 sm:mb-6"></div>

      {/* 포스트 리스트 */}
      <ul className="space-y-4 sm:space-y-5">
        {category.posts.map((post, index) => (
          <li key={index}>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group/post hover:bg-gray-50/50 rounded-lg p-3 sm:p-4 transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                <span className="text-point-main text-[14px] sm:text-[15px] mt-1 font-bold group-hover/post:scale-110 transition-transform">▸</span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[15px] sm:text-[16px] md:text-[17px] font-semibold text-gray-800 group-hover/post:text-point-main transition-colors mb-1 sm:mb-1.5">
                    {post.title}
                  </h4>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-600 leading-relaxed break-keep">
                    {post.description}
                  </p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {/* 더보기 링크 (선택사항) */}
      <div className="mt-6 pt-5 border-t border-gray-200">
        <a
          href="https://codstudy.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] sm:text-[14px] text-point-main font-medium hover:underline flex items-center gap-2 group/more"
        >
          <span>블로그에서 더보기</span>
          <span className="group-hover/more:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
};

export default HighlightCard;

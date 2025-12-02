import { FaGithub } from 'react-icons/fa';
import { SiTistory } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { useState } from 'react';
import ContactModal from '../components/ContactModal';

const Sidebar = () => {
  const github = 'https://github.com/choeunbin03';
  const blog = 'https://codstudy.tistory.com/';
  const email = 'choeunbiin03@naver.com';

  const [open, setOpen] = useState(false);

  const onSend = async (payload) => {
    console.log('send payload', payload);
  };

  return (
    <>
      {/* 데스크톱: 우측 사이드바 */}
      <div className="hidden md:block fixed top-0 right-0 w-[80px] h-screen z-20 bg-point-main shadow-2xl shadow-black/50">
        <div className="w-[80%] h-full bg-white ml-auto flex flex-col items-center justify-between py-8">
          <div className="flex flex-col items-center gap-8">
            {/* GitHub */}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-point-main hover:scale-110 transition-transform"
            >
              <FaGithub size={30} />
            </a>

            {/* Tistory */}
            <a
              href={blog}
              target="_blank"
              rel="noopener noreferrer"
              className="text-point-main hover:scale-110 transition-transform"
            >
              <SiTistory size={26} />
            </a>
          </div>

          <div>
            {/* E-mail */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="text-point-main hover:scale-110 transition-transform mb-2"
            >
              <HiOutlineMail size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* 모바일: 우측 하단 플로팅 툴바 */}
      <div className="md:hidden fixed bottom-6 right-4 z-30">
        <div className="bg-white rounded-full shadow-2xl border-2 border-point-main p-3 flex flex-col items-center gap-4">
          {/* GitHub */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-point-main hover:scale-110 transition-transform active:scale-95"
          >
            <FaGithub size={24} />
          </a>

          {/* Tistory */}
          <a
            href={blog}
            target="_blank"
            rel="noopener noreferrer"
            className="text-point-main hover:scale-110 transition-transform active:scale-95"
          >
            <SiTistory size={22} />
          </a>

          {/* E-mail */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-point-main hover:scale-110 transition-transform active:scale-95"
          >
            <HiOutlineMail size={26} />
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        onSend={onSend}
      />
    </>
  );
};

export default Sidebar;

import { FaGithub } from 'react-icons/fa';
import { SiTistory } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { useState } from 'react';
import ContactModal from '../compenents/ContactModal';

const Sidebar = () => {
  const github = 'https://github.com/choeunbin03';
  const blog = 'https://codstudy.tistory.com/';
  const email = 'choeunbiin03@naver.com';

  const [open, setOpen] = useState(false);

  // 실제 전송 로직을 덮어쓰기(예: EmailJS, 서버 API)
  const onSend = async (payload) => {
    // 예) EmailJS
    // await emailjs.send("service_id", "template_id", payload, { publicKey: "YOUR_KEY" });

    // 또는 서버로:
    // await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(payload) });
    console.log('send payload', payload);
  };

  return (
    <div>
      <div className="fixed top-0 right-0 w-[80px] h-screen z-20 bg-point-main shadow-2xl shadow-black/50">
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

          <div className="">
            {/* E-mail */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="text-point-main hover:scale-110 transition-transform mb-2"
            >
              <HiOutlineMail size={32} />
            </button>
            <ContactModal
              open={open}
              onClose={() => setOpen(false)}
              onSend={onSend}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

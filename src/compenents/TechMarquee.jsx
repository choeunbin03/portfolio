import {
  SiSpring,
  SiMysql,
  SiPython,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';

const icons = [
  <SiSpring />,
  <SiMysql />,
  <SiPython />,
  <SiJavascript />,
  <SiReact />,
  <SiHtml5 />,
  <SiCss3 />,
];
// 생략 (Spring, JS, React …)

export default function TechMarquee() {
  const loop = [...icons, ...icons, ...icons]; // 무한루프용 두 번 복제

  return (
    <div className="w-screen overflow-hidden">
      {/* ↓ 가로 폭이 충분히 길어야 translateX(-50%)가 보임 */}
      <div className="flex items-center gap-20 animate-scroll-x">
        {loop.map((Icon, i) => (
          <span key={i} className="text-[50px] text-point-main opacity-50">
            {Icon}
          </span>
        ))}
      </div>
    </div>
  );
}

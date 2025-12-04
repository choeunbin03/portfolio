import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

/**
 * Props
 * - open: 모달 열림 여부
 * - onClose: 닫기 콜백
 * - onSend?: 실제 전송 로직을 덮어씌우고 싶을 때 (비동기 함수)
 *   - 인자: { name, email, subject, message }
 */

const ContactModal = ({ open, onClose, onSend }) => {
  const apiKey = process.env.REACT_APP_EMAIL_JS_KEY;

  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    from_email: '',
    title: '',
    message: '',
  });

  // ESC 로 닫기
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const validate = () => {
    if (!/^\S+@\S+\.\S+$/.test(form.from_email))
      return '올바른 이메일을 입력해 주세요.';
    if (!form.title.trim()) return '제목을 입력해 주세요.';
    if (!form.message.trim()) return '메시지를 입력해 주세요.';
    return null;
  };

  const sendEmail = async (formData) => {
    return emailjs.send(
      'choeunbin_contact',
      'template_lqscmhe',
      formData, // 이제 formData의 키가 EmailJS 템플릿 변수와 일치
      apiKey
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      alert(err);
      return;
    }
    try {
      setSending(true);
      await sendEmail(form);
      alert('메시지가 전송되었습니다. 감사합니다!');
      setForm({ email: '', subject: '', message: '' });
      onClose();
    } catch (error) {
      console.error(error);
      alert('전송 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setSending(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* backdrop */}
      <button
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-label="닫기(배경)"
      />

      {/* modal */}
      <div
        className="
          relative w-[min(680px,92vw)] rounded-2xl shadow-2xl outline-none
          bg-white
          ring-1 ring-slate-200
          overflow-hidden
          animate-[fadeIn_.2s_ease-out]
        "
      >
        {/* 상단 헤더 */}
        <div
          className="
            h-16 flex items-center justify-between px-6
            bg-point-dark text-white
          "
        >
          <h2 className="text-[19px] md:text-[22px] font-bold tracking-wide">
            Contact
          </h2>
          <button
            onClick={onClose}
            className="rounded-md px-2 py-1 hover:bg-white/10 focus:ring-2 focus:ring-white/60"
            aria-label="닫기"
          >
            ✕
          </button>
        </div>

        {/* 폼 */}
        <form onSubmit={handleSubmit} className="p-6 md:p-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <label className="md:col-span-2 flex flex-col gap-1">
              <span className="text-sm text-slate-600">Email</span>
              <input
                type="email"
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="
                  h-11 rounded-lg border border-slate-300 px-3
                  focus:outline-none focus:ring-2 focus:ring-blue-500/60
                "
              />
            </label>

            {/* Subject */}
            <label className="md:col-span-2 flex flex-col gap-1">
              <span className="text-sm text-slate-600">Subject</span>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Subject"
                className="
                  h-11 rounded-lg border border-slate-300 px-3
                  focus:outline-none focus:ring-2 focus:ring-blue-500/60
                "
              />
            </label>

            {/* Message */}
            <label className="md:col-span-2 flex flex-col gap-1">
              <span className="text-sm text-slate-600">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message…"
                rows={5}
                className="
                  rounded-lg border border-slate-300 px-3 py-2
                  focus:outline-none focus:ring-2 focus:ring-blue-500/60
                  resize-y
                "
              />
            </label>
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="h-11 px-4 rounded-lg border border-slate-300 hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={sending}
              className="
                h-11 px-6 rounded-lg text-white font-semibold bg-point-dark
                hover:opacity-95 active:translate-y-[1px]
                disabled:opacity-50 disabled:cursor-not-allowed
                shadow-md
              "
            >
              {sending ? 'Sending…' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;

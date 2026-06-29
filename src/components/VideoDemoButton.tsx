'use client';

import { useState } from 'react';

export function VideoDemoButton({
  videoSrc,
  title = 'Video Demo',
  label = '▶ Xem Video Demo',
  primary = true,
}: {
  videoSrc?: string;
  title?: string;
  label?: string;
  primary?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const src = videoSrc || '/media/videos/ai-sales-machine-demo.mp4';

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          primary
            ? 'rounded-full bg-white px-6 py-3 font-black text-dark shadow-soft hover:bg-cyan-50'
            : 'rounded-full border border-white/20 px-6 py-3 font-black text-white hover:bg-white/10'
        }
      >
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="w-full max-w-5xl rounded-[32px] border border-white/10 bg-slate-950 p-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between gap-4 px-2 text-white">
              <div>
                <p className="text-xs font-black uppercase tracking-[.16em] text-cyan-300">Demo bán hàng</p>
                <h3 className="mt-1 text-xl font-black">{title}</h3>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-full bg-white/10 px-4 py-2 text-sm font-black hover:bg-white/20">Đóng</button>
            </div>
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black">
              <video className="aspect-video w-full bg-black object-cover" src={src} controls autoPlay />
            </div>
            <p className="mt-4 px-2 text-sm leading-6 text-slate-300">
              Đặt file video tại: <span className="font-bold text-cyan-200">public/media/videos/{src.split('/').pop()}</span>. Nếu chưa có video, đây là vị trí demo sẽ hiển thị sau khi anh quay xong.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

'use client';

import { useState } from 'react';
import { Room, RoomEvent, Track, createLocalAudioTrack } from 'livekit-client';
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  Sparkles,
  Activity,
  ShieldCheck,
  Zap,
} from 'lucide-react';

const liveStats = [
  ['AI Employees', '19'],
  ['Workflow live', '31+'],
  ['Lead flow', '24/7'],
  ['Demo ngành', 'BĐS'],
];

const runningJobs = [
  ['WF31', 'Quế Anh đang nhận cuộc gọi khách mới', 'Voice AI', 'LIVE'],
  ['WF31D', 'Trâm Anh đang tách transcript thành dữ liệu', 'Transcript', 'RUN'],
  ['WF14', 'Hà Anh cập nhật CRM lead HOT', 'CRM', 'SYNC'],
  ['WF23', 'Giang Anh giao task cho sales phụ trách', 'Task', 'ROUTE'],
  ['WF08', 'Vân Anh cập nhật dashboard điều hành', 'Dashboard', 'OK'],
  ['WF30', 'Phương Anh chuẩn bị follow-up tiếp theo', 'Follow-up', 'READY'],
];

const aiOnline = ['Quế Anh', 'Hà Anh', 'Vân Anh', 'Trâm Anh', 'Giang Anh', 'Phương Anh', 'Mai Anh', 'Hải Anh'];

export function HeroFounder() {
  const [status, setStatus] = useState('Gọi Quế Anh');
  const [room, setRoom] = useState<Room | null>(null);

  function cleanupRemoteAudio() {
    document.querySelectorAll('[data-livekit-remote-audio="true"]').forEach((el) => el.remove());
  }

  async function startCall() {
    try {
      setStatus('Đang tạo phòng gọi...');

      const now = Date.now();

      const res = await fetch('https://automation.huypt.com/webhook/wf31/voice-entry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'website',
          channel: 'voice',
          source_id: 'ai.huypt.com',
          caller_id: `WEB_${now}`,
          lead_id: `WEB_LEAD_${now}`,
          customer_name: 'Khách gọi từ website',
          test_mode: false,
        }),
      });

      if (!res.ok) throw new Error(`WF31 error: ${res.status}`);

      const data = await res.json();

      if (!data?.livekit_url || !data?.token) {
        throw new Error('WF31 thiếu livekit_url hoặc token');
      }

      setStatus('Đang kết nối Quế Anh...');

      const nextRoom = new Room();

      nextRoom.on(RoomEvent.TrackSubscribed, (track) => {
        if (track.kind === Track.Kind.Audio) {
          const audioEl = track.attach();
          audioEl.autoplay = true;
          audioEl.setAttribute('data-livekit-remote-audio', 'true');
          document.body.appendChild(audioEl);
        }
      });

      nextRoom.on(RoomEvent.TrackUnsubscribed, (track) => {
        track.detach().forEach((el) => el.remove());
      });

      nextRoom.on(RoomEvent.Disconnected, () => {
        cleanupRemoteAudio();
        setRoom(null);
        setStatus('Gọi Quế Anh');
      });

      await nextRoom.connect(data.livekit_url, data.token);

      const micTrack = await createLocalAudioTrack({
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
      });

      await nextRoom.localParticipant.publishTrack(micTrack);

      setRoom(nextRoom);
      setStatus('Đang nói chuyện với Quế Anh');
    } catch (error) {
      console.error(error);
      cleanupRemoteAudio();
      setRoom(null);
      setStatus('Lỗi kết nối, thử lại');
    }
  }

  function endCall() {
    room?.disconnect();
    cleanupRemoteAudio();
    setRoom(null);
    setStatus('Gọi Quế Anh');
  }

  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#020617] text-white scroll-mt-24">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute -left-24 top-0 h-[34rem] w-[34rem] rounded-full bg-cyan-500/25 blur-3xl pulse-glow" />
      <div className="absolute right-0 top-24 h-[38rem] w-[38rem] rounded-full bg-blue-600/25 blur-3xl pulse-glow" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="section-container relative z-10 grid min-h-[880px] items-center gap-14 py-20 lg:grid-cols-[1.02fr_.98fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-cyan-200 backdrop-blur">
            <Sparkles size={15} /> V21 Production / AI Employee Sales Hub
          </span>

          <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[1.01] tracking-[-0.06em] md:text-7xl">
            19 AI Employees làm việc 24/7 cho doanh nghiệp của bạn.
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-300">
            Khách gọi đến được tiếp nhận ngay. Lead tự vào CRM. Dashboard cập nhật liên tục. Doanh nghiệp có thể bắt đầu từ một AI Employee, sau đó mở rộng khi thấy hiệu quả.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="/#demo" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-slate-950 shadow-soft hover:bg-cyan-100">
              Xem Demo AI Sales BĐS <ArrowRight size={18} />
            </a>

            <button
              type="button"
              onClick={room ? endCall : startCall}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-7 py-4 font-black text-white backdrop-blur hover:bg-white/15"
            >
              <PhoneCall size={18} />
              {room ? 'Kết thúc cuộc gọi' : status}
            </button>

            <a href="https://zalo.me/0838713123" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 px-7 py-4 font-black text-white hover:bg-white/10">
              <MessageCircle size={18} /> Zalo 0838 713 123
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
            {liveStats.map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur">
                <p className="text-2xl font-black tracking-[-0.03em] text-white">{value}</p>
                <p className="mt-1 text-xs font-bold leading-5 text-slate-300">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid max-w-2xl gap-3 md:grid-cols-3">
            {[
              [Zap, 'Xem demo vận hành thật'],
              [ShieldCheck, 'Có CRM và follow-up'],
              [Activity, 'Có dashboard quản trị'],
            ].map(([Icon, text]) => {
              const Cmp = Icon as typeof Zap;
              return (
                <div key={text as string} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-black text-slate-200">
                  <Cmp size={17} className="text-cyan-300" />
                  {text as string}
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 rounded-[48px] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-violet-500/20 blur-2xl" />
          <div className="glass-card relative overflow-hidden rounded-[40px] p-5">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 p-5">
              <div className="scan-line pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-300/0 via-cyan-300/20 to-cyan-300/0" />

              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[.18em] text-cyan-300">AI Employee Runtime</p>
                  <p className="mt-1 text-2xl font-black">Huy Automation AI</p>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-black text-emerald-300">● LIVE</span>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {runningJobs.map(([wf, text, tag, status]) => (
                  <div key={wf} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.07]">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-black text-cyan-200">{wf}</p>
                      <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-bold text-slate-300">{tag}</span>
                    </div>
                    <p className="mt-3 text-sm font-semibold leading-6 text-slate-300">{text}</p>
                    <p className="mt-3 text-[10px] font-black uppercase tracking-[.16em] text-emerald-300">● {status}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-black uppercase tracking-[.16em] text-cyan-300">AI Workforce Online</p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {aiOnline.map((name) => (
                    <a key={name} href={`/employees/${toSlug(name)}`} className="rounded-2xl bg-white/[0.06] p-3 text-sm font-black text-white hover:bg-cyan-300/15">
                      <span className="mr-2 text-emerald-300">●</span>
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="floaty absolute -bottom-7 -left-4 rounded-3xl border border-white/10 bg-white p-5 text-slate-950 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[.14em] text-slate-500">Demo quan trọng nhất</p>
            <p className="mt-1 text-xl font-black">AI Sales BĐS</p>
            <p className="mt-2 flex items-center gap-2 text-sm font-bold text-emerald-600">
              <CheckCircle2 size={16} /> Khách gọi → Quế Anh → CRM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function toSlug(value: string) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/\s+/g, '-');
}
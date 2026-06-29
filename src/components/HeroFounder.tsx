import { ArrowRight, CheckCircle2, MessageCircle, PhoneCall, Sparkles } from 'lucide-react';

const liveStats = [
  ['AI Employees Online', '19'],
  ['Automation Running', '127'],
  ['Tasks Completed Today', '2,486'],
  ['CRM Updates', '198'],
];

const runningJobs = [
  ['WF31', 'Quế Anh đang nghe cuộc gọi mới', 'Voice AI'],
  ['WF14', 'Hà Anh vừa cập nhật CRM lead', 'CRM'],
  ['WF08', 'Vân Anh đồng bộ dashboard', 'Dashboard'],
  ['WF23', 'Giang Anh route task cho sales', 'Execution'],
  ['WF05', 'Mai Anh chuẩn bị lịch đăng Facebook', 'Publishing'],
  ['WF01', 'Huyền Anh viết bản nháp mới', 'Content'],
];

const aiOnline = ['Quế Anh', 'Hà Anh', 'Vân Anh', 'Mai Anh', 'Lan Anh', 'Trâm Anh', 'Hải Anh', 'Việt Anh'];

export function HeroFounder() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#020617] text-white scroll-mt-24">
      <div className="absolute inset-0 grid-pattern opacity-70" />
      <div className="absolute -left-28 top-10 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl pulse-glow" />
      <div className="absolute right-0 top-20 h-[32rem] w-[32rem] rounded-full bg-cyan-400/20 blur-3xl pulse-glow" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="section-container relative z-10 grid min-h-[900px] items-center gap-14 py-24 lg:grid-cols-[1.02fr_.98fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-cyan-200 backdrop-blur">
            <Sparkles size={15} /> Huy Automation AI Experience Platform
          </span>
          <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[1.02] tracking-[-0.055em] md:text-7xl">
            Một AI Company đang hoạt động bên trong trình duyệt.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-300">
            Hành trình build in public từ studio ảnh gia đình thành hệ thống Automation: 19 AI Employees, mỗi AI là một workflow có thể demo, triển khai và sở hữu.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="/#demo" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-slate-950 shadow-soft hover:bg-cyan-100">
              Xem hệ thống hoạt động <ArrowRight size={18} />
            </a>
            <a href="/employees/que-anh" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-7 py-4 font-black text-white backdrop-blur hover:bg-white/15">
              <PhoneCall size={18} /> Gọi Quế Anh
            </a>
            <a href="/#employees" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 px-7 py-4 font-black text-white hover:bg-white/10">
              <MessageCircle size={18} /> Gặp 19 AI
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
        </div>

        <div className="relative">
          <div className="absolute -inset-10 rounded-[48px] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-violet-500/20 blur-2xl" />
          <div className="glass-card relative overflow-hidden rounded-[40px] p-5">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 p-5">
              <div className="scan-line pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-300/0 via-cyan-300/20 to-cyan-300/0" />
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[.18em] text-cyan-300">Mission Control</p>
                  <p className="mt-1 text-2xl font-black">HAIOS Runtime</p>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-black text-emerald-300">● LIVE</span>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {runningJobs.map(([wf, text, tag]) => (
                  <div key={wf} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-black text-cyan-200">{wf}</p>
                      <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-bold text-slate-300">{tag}</span>
                    </div>
                    <p className="mt-3 text-sm font-semibold leading-6 text-slate-300">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-black uppercase tracking-[.16em] text-cyan-300">AI Workforce Online</p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {aiOnline.map((name) => (
                    <a key={name} href={`/employees/${toSlug(name)}`} className="rounded-2xl bg-white/[0.06] p-3 text-sm font-black text-white hover:bg-cyan-300/15">
                      <span className="mr-2 text-emerald-300">●</span>{name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="floaty absolute -bottom-7 -left-4 rounded-3xl border border-white/10 bg-white p-5 text-slate-950 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[.14em] text-slate-500">Featured Demo</p>
            <p className="mt-1 text-xl font-black">AI Sales BĐS</p>
            <p className="mt-2 flex items-center gap-2 text-sm font-bold text-emerald-600"><CheckCircle2 size={16}/> Voice → CRM → Task</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function toSlug(value: string) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/\s+/g, '-');
}

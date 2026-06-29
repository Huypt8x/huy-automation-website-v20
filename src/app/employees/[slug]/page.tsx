import type React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { departments, employees, workflows, systems } from '@/data/site';
import { employeePromise } from '@/lib/salesCopy';
import Link from 'next/link';
import { notFound } from 'next/navigation';

function toSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function generateStaticParams() {
  return [...departments.map((d)=>({slug:d.slug})), ...employees.map((e)=>({slug:e.slug}))];
}

export default function EmployeeOrDepartmentPage({ params }: { params: { slug: string } }) {
  const dept = departments.find((d) => d.slug === params.slug);
  const emp = employees.find((e) => e.slug === params.slug);
  if (dept) return <DepartmentPage dept={dept} />;
  if (emp) return <EmployeePage emp={emp} />;
  return notFound();
}

function DepartmentPage({ dept }: { dept: typeof departments[number] }) {
  const team = employees.filter((e)=>dept.employeeSlugs.includes(e.slug));
  const relatedWf = workflows.filter((w)=>dept.workflowIds.includes(w.id));
  const relatedSystems = systems.filter((s)=>dept.systemIds.includes(s.id));
  return <main className="bg-bg text-dark"><Header />
    <section className="bg-dark py-24 text-white"><div className="section-container"><Link href="/#employees" className="text-sm font-bold text-cyan-200">← Quay lại AI Employees</Link><p className="mt-12 text-sm font-black uppercase tracking-[.18em] text-cyan-300">AI Department</p><h1 className="mt-5 text-6xl font-black">{dept.name}</h1><p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">{dept.mission}</p><Link href={`/consultation?source=${dept.slug}`} className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-black text-dark">Triển khai phòng ban AI này</Link></div></section>
    <section className="py-20"><div className="section-container grid gap-6 lg:grid-cols-3"><Info title="Phòng ban này làm gì?" value={dept.description}/><Info title="AI Employees" value={`${team.length} nhân sự AI`}/><Info title="Kết quả chính" value={dept.kpis.join(' / ')}/></div></section>
    <section className="pb-24"><div className="section-container grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
      <Card label="Team Members" title={`Gặp đội ${dept.name}`}><div className="mt-6 grid gap-3 md:grid-cols-2">{team.map((e)=>{const p=employeePromise(e); return <Link key={e.slug} href={`/employees/${e.slug}`} className="rounded-2xl bg-bg p-5 font-bold hover:bg-blue-50"><p className="text-xl font-black">{e.name}</p><p className="text-sm font-medium text-muted">{e.role}</p><p className="mt-3 text-sm leading-6 text-slate-600">{p.headline}</p><p className="mt-4 text-sm font-black text-primary">Gặp {e.name} →</p></Link>})}</div></Card>
      <Card label="Hệ thống hỗ trợ" title="Automation hỗ trợ"><h3 className="text-xl font-black">Hệ thống Automation</h3><div className="mt-4 grid gap-2">{relatedWf.map((w)=><Link className="rounded-2xl bg-bg p-4 font-bold hover:bg-blue-50" href={`/automation/${w.slug}`} key={w.id}>{w.id} — {w.name}</Link>)}</div><h3 className="mt-8 text-xl font-black">Gói giải pháp</h3><div className="mt-4 grid gap-2">{relatedSystems.map((s)=><Link className="rounded-2xl bg-bg p-4 font-bold hover:bg-blue-50" href={`/systems/${s.slug}`} key={s.id}>{s.id} — {s.name}</Link>)}</div></Card>
    </div></section><Footer /></main>;
}

function EmployeePage({ emp }: { emp: typeof employees[number] }) {
  const dept = departments.find((d)=>d.name===emp.department)!;
  const relatedWf = workflows.filter((w)=>emp.workflowIds.includes(w.id));
  const relatedSystems = systems.filter((s)=>emp.systemIds.includes(s.id));
  const promise = employeePromise(emp);
  return <main className="bg-bg text-dark"><Header />
    <section className="bg-dark py-24 text-white"><div className="section-container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-center"><div><Link href={`/employees/${dept.slug}`} className="text-sm font-bold text-cyan-200">← Quay lại {dept.name}</Link><div className="mt-10 flex h-32 w-32 items-center justify-center rounded-[36px] bg-white/10 text-6xl font-black text-cyan-300">{emp.name.charAt(0)}</div><p className="mt-5 inline-flex rounded-full bg-success/15 px-4 py-2 text-sm font-bold text-emerald-300">AI Employee / Ready for video</p></div><div><p className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">{promise.intro}</p><h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.04em] md:text-7xl">{promise.headline}</h1><p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">{promise.promise}</p><div className="mt-8 flex flex-wrap gap-3"><Link href={`/consultation?source=${emp.slug}`} className="rounded-full bg-white px-7 py-4 font-black text-dark">Sở hữu {emp.name}</Link><a href="#video" className="rounded-full border border-white/20 px-7 py-4 font-black text-white hover:bg-white/10">Xem demo / video</a></div></div></div></section>
    <section className="py-20"><div className="section-container grid gap-6 lg:grid-cols-3"><Link href={`/roles/${toSlug(emp.role)}`} className="block"><Info title="Vai trò" value={emp.role}/></Link><Link href={`/employees/${dept.slug}`} className="block"><Info title="Phòng ban" value={emp.department}/></Link><Link href={`/directory/${emp.id.toLowerCase()}`} className="block"><Info title="Employee ID" value={emp.id}/></Link></div></section>
    <section className="pb-24"><div className="section-container grid gap-8 lg:grid-cols-[1.1fr_.9fr]"><Card label="Công việc phụ trách" title={`${emp.name} giúp doanh nghiệp làm gì?`}><div className="mt-6 space-y-4">{emp.missions.map((m)=><p key={m} className="rounded-2xl bg-bg p-4 font-semibold leading-7">✓ {m}</p>)}</div></Card><Card label="Kết quả nhận được" title="Doanh nghiệp nhận được gì?"><div className="mt-6 space-y-4">{promise.output.map((m)=><p key={m} className="rounded-2xl bg-blue-50 p-4 font-black text-primary">✓ {m}</p>)}</div></Card></div></section>
    <section id="video" className="bg-white py-20"><div className="section-container grid gap-8 lg:grid-cols-[1fr_.85fr]"><div className="rounded-[32px] border border-border bg-bg p-8"><span className="badge">Video giới thiệu</span><h2 className="mt-5 text-3xl font-black">Demo {emp.name} cho doanh nghiệp</h2>{emp.media?.find((item)=>item.type==='video') ? <div className="mt-6 overflow-hidden rounded-[28px] border border-border bg-black"><video className="aspect-video w-full bg-black object-contain" src={emp.media.find((item)=>item.type==='video')?.url} controls preload="metadata" /></div> : <div className="mt-6 flex aspect-video items-center justify-center rounded-[28px] bg-dark p-8 text-center text-white"><div><p className="text-3xl font-black">Video Avatar</p><p className="mt-3 text-sm leading-6 text-slate-300">Video demo sẽ cho thấy {emp.name} xử lý công việc thực tế, kết quả tạo ra và cách doanh nghiệp có thể triển khai.</p></div></div>}{emp.media?.find((item)=>item.type==='video')?.caption && <p className="mt-4 text-sm leading-6 text-muted">{emp.media.find((item)=>item.type==='video')?.caption}</p>}</div><Card label="Hệ thống hỗ trợ" title="Hệ thống triển khai đi kèm"><div className="mt-6 grid gap-2">{relatedWf.map((w)=><Link key={w.id} href={`/automation/${w.slug}`} className="rounded-2xl bg-bg p-4 font-bold hover:bg-blue-50">{w.id} — {w.name}</Link>)}</div><h3 className="mt-8 text-xl font-black">Gói giải pháp</h3><div className="mt-4 grid gap-2">{relatedSystems.map((s)=><Link key={s.id} href={`/systems/${s.slug}`} className="rounded-2xl bg-bg p-4 font-bold hover:bg-blue-50">{s.id} — {s.name}</Link>)}</div></Card></div></section>
    <section className="bg-dark py-20 text-white"><div className="section-container text-center"><h2 className="text-4xl font-black">Muốn sở hữu {emp.name} cho doanh nghiệp của bạn?</h2><p className="mx-auto mt-4 max-w-2xl text-slate-300">Liên hệ đội ngũ Huy Automation AI để được tư vấn giải pháp phù hợp. Gọi/Zalo: 0838 713 123.</p><Link href={`/consultation?source=${emp.slug}`} className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-black text-dark">Sở hữu {emp.name}</Link><a href="tel:0838713123" className="ml-3 mt-8 inline-flex rounded-full border border-white/20 px-7 py-4 font-black text-white hover:bg-white/10">Gọi 0838 713 123</a></div></section><Footer /></main>;
}

function Info({ title, value }: { title:string; value:string }) { return <div className="rounded-[28px] border border-border bg-white p-7 shadow-sm hover:border-primary hover:bg-blue-50"><p className="text-sm font-black uppercase tracking-[.14em] text-primary">{title}</p><p className="mt-4 text-lg font-black leading-7 text-dark">{value}</p></div> }
function Card({ label, title, children }: { label:string; title:string; children:React.ReactNode }) { return <div className="rounded-[32px] border border-border bg-white p-8 shadow-sm"><span className="badge">{label}</span><h2 className="mt-5 text-3xl font-black">{title}</h2>{children}</div> }

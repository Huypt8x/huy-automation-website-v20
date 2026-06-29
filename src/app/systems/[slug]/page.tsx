import type React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { systems, workflows, employees } from '@/data/site';
import { employeePromise, getWorkflowSalesCopy, systemSalesName } from '@/lib/salesCopy';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams(){return systems.map(s=>({slug:s.slug}))}

export default function SystemPage({params}:{params:{slug:string}}){
  const sys=systems.find(s=>s.slug===params.slug);
  if(!sys)return notFound();
  const wfs=workflows.filter(w=>sys.workflows.includes(w.id));
  const emps=employees.filter(e=>sys.employees.includes(e.slug));
  const displayName=systemSalesName(sys);
  return <main className="bg-bg text-dark"><Header/>
    <section className="bg-dark py-24 text-white"><div className="section-container"><Link href="/#roadmap" className="text-sm font-bold text-cyan-200">← Quay lại G1-G5</Link><p className="mt-12 text-sm font-black uppercase tracking-[.18em] text-cyan-300">{sys.id} / AI Company OS</p><h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.04em] md:text-7xl">{displayName}</h1><p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">{sys.purpose}</p><Link href={`/consultation?source=${sys.slug}`} className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-black text-dark">Tôi muốn triển khai {displayName}</Link></div></section>
    <section className="py-20"><div className="section-container grid gap-6 lg:grid-cols-3"><Info title="Phòng ban AI" value={displayName}/><Info title="AI Employees" value={`${emps.length} nhân viên AI`}/><Info title="Kết quả" value={sys.deliverables.join(' / ')}/></div></section>
    <section className="pb-24"><div className="section-container grid gap-8 lg:grid-cols-2"><Card label="Team" title="AI Employees tham gia giải pháp"><div className="mt-6 grid gap-3">{emps.map(e=>{const p=employeePromise(e); return <Link href={`/employees/${e.slug}`} className="rounded-2xl bg-bg p-5 hover:bg-blue-50" key={e.slug}><p className="text-xl font-black">{e.name} — {e.role}</p><p className="mt-2 text-sm leading-6 text-muted">{p.headline}</p></Link>})}</div></Card><Card label="Powered By" title="Các phần triển khai trong giải pháp"><div className="mt-6 grid gap-3">{wfs.map(w=>{const copy=getWorkflowSalesCopy(w); return <Link href={`/automation/${w.slug}`} className="rounded-2xl bg-bg p-5 hover:bg-blue-50" key={w.id}><p className="font-black">{w.id} — {copy.plainName}</p><p className="mt-2 text-sm leading-6 text-muted">{copy.headline}</p></Link>})}</div></Card></div></section>
    <section className="bg-white py-20"><div className="section-container grid gap-8 lg:grid-cols-[1fr_.85fr]"><Card label="Deliverables" title="Khách nhận được gì?"><div className="mt-6 space-y-3">{sys.deliverables.map(d=><p className="rounded-2xl bg-bg p-4 font-bold" key={d}>✓ {d}</p>)}</div></Card><Card label="Demo" title="Video / tài sản bán hàng">{sys.videoUrl ? <div className="mt-6 overflow-hidden rounded-[28px] border border-border bg-black"><video className="aspect-video w-full bg-black object-contain" src={sys.videoUrl} controls preload="metadata" /></div> : <div className="mt-6 flex aspect-video items-center justify-center rounded-[28px] bg-dark p-8 text-center text-white"><div><p className="text-3xl font-black">Video Demo</p><p className="mt-3 text-sm text-slate-300">Sau này thêm video giới thiệu hệ thống và AI Employees liên quan.</p></div></div>}<Link href={`/consultation?source=${sys.slug}`} className="mt-8 inline-flex rounded-full bg-primary px-7 py-4 font-black text-white">Nhận tư vấn {sys.id}</Link></Card></div></section><Footer/></main>
}
function Info({title,value}:{title:string;value:string}){return <div className="rounded-[28px] border border-border bg-white p-7 shadow-sm"><p className="text-sm font-black uppercase tracking-[.14em] text-primary">{title}</p><p className="mt-4 text-lg font-black leading-7 text-dark">{value}</p></div>}
function Card({label,title,children}:{label:string;title:string;children:React.ReactNode}){return <div className="rounded-[32px] border border-border bg-white p-8 shadow-sm"><span className="badge">{label}</span><h2 className="mt-5 text-3xl font-black">{title}</h2>{children}</div>}

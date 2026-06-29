import type React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { employees, departments, workflows, systems } from '@/data/site';
import Link from 'next/link';
import { notFound } from 'next/navigation';

function toSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function generateStaticParams() {
  return employees.map((e) => ({ id: e.id.toLowerCase() }));
}

export default function DirectoryPage({ params }: { params: { id: string } }) {
  const emp = employees.find((e) => e.id.toLowerCase() === params.id);
  if (!emp) return notFound();
  const dept = departments.find((d) => d.name === emp.department)!;
  const relatedWf = workflows.filter((w) => emp.workflowIds.includes(w.id));
  const relatedSystems = systems.filter((s) => emp.systemIds.includes(s.id));

  return (
    <main className="bg-bg text-dark">
      <Header />
      <section className="bg-dark py-24 text-white">
        <div className="section-container">
          <Link href={`/employees/${emp.slug}`} className="text-sm font-bold text-cyan-200">← Quay lại hồ sơ {emp.name}</Link>
          <p className="mt-12 text-sm font-black uppercase tracking-[.18em] text-cyan-300">Employee Directory</p>
          <h1 className="mt-5 text-6xl font-black">{emp.id}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
            Mã định danh của nhân sự AI trong Huy Automation System. Dùng để theo dõi vai trò, phòng ban, workflow liên quan và hệ thống đang vận hành.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container grid gap-6 lg:grid-cols-3">
          <Link href={`/employees/${emp.slug}`} className="block"><Info title="AI Employee" value={emp.name} /></Link>
          <Link href={`/roles/${toSlug(emp.role)}`} className="block"><Info title="Role" value={emp.role} /></Link>
          <Link href={`/employees/${dept.slug}`} className="block"><Info title="Department" value={emp.department} /></Link>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-container grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Card label="Directory Data" title="Thông tin lưu trữ">
            <div className="mt-6 space-y-3">
              <p className="rounded-2xl bg-bg p-4 font-bold">Slug: {emp.slug}</p>
              <p className="rounded-2xl bg-bg p-4 font-bold">Role: {emp.role}</p>
              <p className="rounded-2xl bg-bg p-4 font-bold">Department: {emp.department}</p>
            </div>
          </Card>
          <Card label="Liên kết hệ thống" title="Automation & Gói giải pháp">
            <h3 className="mt-6 text-xl font-black">Automation hỗ trợ</h3>
            <div className="mt-4 grid gap-2">
              {relatedWf.map((w) => <Link key={w.id} href={`/automation/${w.slug}`} className="rounded-2xl bg-bg p-4 font-bold hover:bg-blue-50">{w.id} — {w.name}</Link>)}
            </div>
            <h3 className="mt-8 text-xl font-black">Gói giải pháp</h3>
            <div className="mt-4 grid gap-2">
              {relatedSystems.map((s) => <Link key={s.id} href={`/systems/${s.slug}`} className="rounded-2xl bg-bg p-4 font-bold hover:bg-blue-50">{s.id} — {s.name}</Link>)}
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Info({ title, value }: { title: string; value: string }) {
  return <div className="rounded-[28px] border border-border bg-white p-7 shadow-sm"><p className="text-sm font-black uppercase tracking-[.14em] text-primary">{title}</p><p className="mt-4 text-lg font-black leading-7 text-dark">{value}</p></div>;
}

function Card({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return <div className="rounded-[32px] border border-border bg-white p-8 shadow-sm"><span className="badge">{label}</span><h2 className="mt-5 text-3xl font-black">{title}</h2>{children}</div>;
}

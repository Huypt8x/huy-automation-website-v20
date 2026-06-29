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
  const roles = Array.from(new Set(employees.map((e) => e.role)));
  return roles.map((role) => ({ slug: toSlug(role) }));
}

export default function RolePage({ params }: { params: { slug: string } }) {
  const roleEmployees = employees.filter((e) => toSlug(e.role) === params.slug);
  if (!roleEmployees.length) return notFound();
  const roleName = roleEmployees[0].role;
  const relatedDepartments = departments.filter((d) => roleEmployees.some((e) => e.department === d.name));
  const relatedWorkflowIds = Array.from(new Set(roleEmployees.flatMap((e) => e.workflowIds)));
  const relatedSystemIds = Array.from(new Set(roleEmployees.flatMap((e) => e.systemIds)));
  const relatedWf = workflows.filter((w) => relatedWorkflowIds.includes(w.id));
  const relatedSystems = systems.filter((s) => relatedSystemIds.includes(s.id));

  return (
    <main className="bg-bg text-dark">
      <Header />
      <section className="bg-dark py-24 text-white">
        <div className="section-container">
          <Link href="/#employees" className="text-sm font-bold text-cyan-200">← Quay lại AI Employees</Link>
          <p className="mt-12 text-sm font-black uppercase tracking-[.18em] text-cyan-300">Role Profile</p>
          <h1 className="mt-5 text-6xl font-black">{roleName}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
            Vai trò này mô tả một năng lực cụ thể trong AI Company: nhiệm vụ, kết quả tạo ra, workflow phía sau và nhân sự AI đang đảm nhiệm.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container grid gap-6 lg:grid-cols-3">
          <Info title="Role" value={roleName} />
          <Info title="AI Employees" value={`${roleEmployees.length} nhân sự AI`} />
          <Info title="Department" value={relatedDepartments.map((d) => d.name).join(', ')} />
        </div>
      </section>

      <section className="pb-24">
        <div className="section-container grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Card label="Employees" title="Nhân sự giữ vai trò này">
            <div className="mt-6 grid gap-3">
              {roleEmployees.map((e) => (
                <Link key={e.slug} href={`/employees/${e.slug}`} className="rounded-2xl bg-bg p-4 font-bold hover:bg-blue-50">
                  <p>{e.name}</p>
                  <p className="text-sm font-medium text-muted">{e.department}</p>
                </Link>
              ))}
            </div>
          </Card>
          <Card label="Automation / Gói giải pháp" title="Kết nối liên quan">
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

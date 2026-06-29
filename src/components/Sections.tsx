import Link from 'next/link';
import { ArrowRight, Bot, CheckCircle2, CircleDollarSign, LayoutDashboard, Mic, Play, Workflow } from 'lucide-react';
import { departments, employees, workflows, systems, caseStudies, blogPosts } from '@/data/site';
import { getWorkflowSalesCopy, employeePromise, systemSalesName, getPrimaryEmployee } from '@/lib/salesCopy';

const realEstateFlow = [
  ['Khách gọi', '“Tôi có 3 tỷ, muốn mua ở Hà Đông, cuối tuần xem nhà được không?”'],
  ['Quế Anh tư vấn', 'AI hỏi ngân sách, mục đích mua, khu vực, thời gian xem nhà.'],
  ['Transcript', 'Trâm Anh tóm tắt nhu cầu và trích dữ liệu quan trọng.'],
  ['CRM', 'Hà Anh tạo lead HOT, gắn budget, timeline, dự án quan tâm.'],
  ['Dashboard', 'Vân Anh cập nhật chỉ số, cảnh báo và báo cáo tiến độ cho chủ doanh nghiệp.'],
];

export function DemoSalesMachine() {
  return (
    <section id="demo" className="relative overflow-hidden bg-white py-28 scroll-mt-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-50 to-transparent" />
      <div className="section-container relative">
        <div className="grid gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <div>
            <span className="badge">Demo AI Sales BĐS / Xem hệ thống vận hành thực tế</span>
            <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] text-dark md:text-6xl">AI Sales BĐS xử lý khách hàng từ cuộc gọi đến CRM như thế nào?</h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Doanh nghiệp sẽ thấy toàn bộ quy trình: khách gọi vào, Quế Anh tư vấn, Trâm Anh ghi transcript, Hà Anh cập nhật CRM, Vân Anh đưa dữ liệu lên dashboard và đội sales nhận task chăm sóc tiếp.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/case-studies/ai-sales-bat-dong-san" className="inline-flex items-center justify-center gap-2 rounded-full bg-dark px-7 py-4 font-black text-white hover:bg-primary">Xem Demo AI Sales BĐS <ArrowRight size={18}/></Link>
              <Link href="/employees/que-anh" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-7 py-4 font-black text-dark hover:border-primary">Sở hữu Quế Anh <Mic size={18}/></Link>
            </div>
          </div>

          <div className="rounded-[40px] border border-slate-200 bg-slate-950 p-4 shadow-soft">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-900">
              <div className="relative flex aspect-video items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,.35),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(37,99,235,.38),transparent_35%),#020617]">
                <div className="absolute inset-0 grid-pattern opacity-40" />
                <div className="relative text-center text-white">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-slate-950 shadow-soft"><Play fill="currentColor" size={30}/></div>
                  <p className="mt-5 text-3xl font-black tracking-[-.03em]">AI Sales BĐS Demo</p>
                  <p className="mt-2 text-sm font-bold text-cyan-200">Video demo: Khách gọi → Quế Anh tư vấn → CRM → Dashboard → Sales nhận việc</p>
                </div>
              </div>
              <div className="grid gap-3 border-t border-white/10 p-5 md:grid-cols-3">
                {['Voice AI', 'Transcript + CRM', 'Dashboard + Task'].map((item)=><div key={item} className="rounded-2xl bg-white/[0.06] p-4 text-sm font-black text-white">✓ {item}</div>)}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {realEstateFlow.map(([title, desc], index) => (
            <div key={title} className="rounded-[28px] border border-border bg-bg p-5 transition hover:-translate-y-1 hover:border-primary hover:bg-blue-50">
              <p className="text-sm font-black text-primary">BƯỚC {index + 1}</p>
              <h3 className="mt-3 text-xl font-black text-dark">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EmployeeDepartments() {
  return (
    <section id="employees" className="bg-bg py-28 scroll-mt-24">
      <div className="section-container">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="badge">AI Employees có thể triển khai cho doanh nghiệp</span>
            <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">Chọn AI Employee bạn muốn sở hữu cho doanh nghiệp của mình.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">Mỗi AI Employee đảm nhận một công việc cụ thể: nghe máy, chăm sóc khách hàng, cập nhật CRM, quản lý dashboard hoặc vận hành content. Doanh nghiệp chọn nhân sự AI phù hợp, Huy Automation AI triển khai trọn gói để AI đó làm việc trong quy trình thật.</p>
          </div>
          <Link href="/consultation?source=v21-ai-employee" className="rounded-full bg-dark px-6 py-4 text-center font-black text-white hover:bg-primary">Sở hữu AI Employee</Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {departments.map((dept) => (
            <div key={dept.id} className="rounded-[36px] border border-border bg-white p-7 shadow-sm transition hover:border-primary hover:shadow-soft">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black">{dept.name}</h3>
                  <p className="mt-2 text-muted">{dept.description}</p>
                </div>
                <Link href={`/employees/${dept.slug}`} className="whitespace-nowrap text-sm font-black text-primary">Xem phòng ban →</Link>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {dept.employeeSlugs.map((slug) => {
                  const emp = employees.find((item) => item.slug === slug)!;
                  const p = employeePromise(emp);
                  return (
                    <Link key={emp.id} href={`/employees/${emp.slug}`} className="group block rounded-3xl bg-bg p-5 transition hover:-translate-y-1 hover:bg-blue-50">
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-black text-dark">{emp.name}</p>
                        <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-black text-emerald-700">ONLINE</span>
                      </div>
                      <p className="mt-1 text-sm font-bold text-primary">{emp.role}</p>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{p.headline}</p>
                      <p className="mt-4 text-xs font-black text-primary group-hover:translate-x-1">Sở hữu {emp.name} →</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AICompanyMap() {
  const nodes = [
    { icon: Bot, label: 'AI Employees', desc: 'Mỗi AI Employee giải quyết một bài toán vận hành cụ thể cho doanh nghiệp.', href: '/#employees' },
    { icon: Workflow, label: 'Triển khai linh hoạt', desc: 'Bắt đầu với một việc cần tự động hóa nhất, sau đó mở rộng khi doanh nghiệp sẵn sàng.', href: '/#pricing' },
    { icon: LayoutDashboard, label: 'Live Demo & Dashboard', desc: 'Demo BĐS chứng minh mô hình có thể chuyển đổi sang nhiều ngành.', href: '/#demo' },
    { icon: CircleDollarSign, label: 'Điểm chạm chốt sale', desc: 'Khách xem demo, chọn AI Employee cần sở hữu và liên hệ để triển khai.', href: '/#lead' },
  ];
  return (
    <section id="os" className="bg-white py-28 scroll-mt-24">
      <div className="section-container">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge">AI Employee Sales Hub</span>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-6xl">Sở hữu đội ngũ AI Employees để bán hàng, chăm sóc khách và vận hành 24/7.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">Doanh nghiệp có thể xem demo thực tế, hiểu kết quả nhận được và chọn AI Employee phù hợp để triển khai ngay vào quy trình bán hàng, chăm sóc khách hàng hoặc vận hành.</p>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {nodes.map((node) => {
            const Icon = node.icon;
            return <a key={node.label} href={node.href} className="rounded-[32px] border border-border bg-bg p-7 transition hover:-translate-y-1 hover:border-primary hover:bg-blue-50">
              <Icon className="text-primary" size={30}/>
              <h3 className="mt-5 text-2xl font-black text-dark">{node.label}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{node.desc}</p>
            </a>
          })}
        </div>
      </div>
    </section>
  );
}

export function FounderJourney() {
  const steps = ['Chọn giải pháp AI đầu tiên', 'Đưa vào vận hành thực tế', 'Theo dõi kết quả rõ ràng', 'Bổ sung năng lực khi cần', 'Xây dựng đội ngũ AI theo từng bước'];
  return (
    <section id="journey" className="bg-bg py-28 scroll-mt-24">
      <div className="section-container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <span className="badge">Build in Public</span>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-5xl">Theo dõi cách AI Employees được xây dựng và ứng dụng vào kinh doanh.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">Khách hàng có thể theo dõi hành trình xây dựng hệ thống, xem demo thực tế và đánh giá năng lực triển khai trước khi liên hệ.</p>
          <Link href="/blog" className="mt-8 inline-flex rounded-full bg-primary px-6 py-4 font-black text-white">Xem cách hệ thống được xây dựng</Link>
        </div>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <a key={step} href={index === 2 ? '/#build' : index === 3 ? '/#employees' : '/#journey'} className="flex items-center gap-5 rounded-3xl border border-border bg-white p-5 shadow-sm transition hover:border-primary hover:bg-blue-50">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-black text-white">{index + 1}</span>
              <p className="text-lg font-black text-dark">{step}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BuildInPublicTimeline() {
  return (
    <section id="build" className="bg-dark py-28 text-white scroll-mt-24">
      <div className="section-container">
        <span className="inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.15em] text-cyan-200">AI Employee Marketplace</span>
        <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">Mỗi AI Employee đi kèm một hệ thống triển khai hoàn chỉnh.</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Doanh nghiệp có thể bắt đầu với một việc cụ thể như tiếp nhận khách, lưu thông tin và báo đội sales. Khi nhu cầu tăng, hệ thống có thể mở rộng thêm CRM, dashboard và điều phối vận hành.</p>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {workflows.map((wf) => {
            const sales = getWorkflowSalesCopy(wf);
            const employee = getPrimaryEmployee(wf);
            return (
            <a key={wf.id} href={`/automation/${wf.slug}`} className="group block rounded-[32px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.08]">
              <div className="mb-5 flex h-36 flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-slate-800 via-blue-950 to-slate-950 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl font-black text-primary">{employee?.name?.charAt(0) || 'A'}</div>
                <p className="mt-3 text-sm font-black text-white">{employee?.name || 'AI Employee'}</p>
                <p className="mt-1 text-xs font-bold text-cyan-200">{employee?.role || 'Automation AI'}</p>
              </div>
              <p className="text-sm font-black text-cyan-300">AI EMPLOYEE</p>
              <h3 className="mt-2 text-xl font-black">{sales.plainName.replace(/^[^—]+—\s*/, employee ? `${employee.name} — ` : '')}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{sales.customerPromise}</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <p className="inline-flex rounded-full bg-success/15 px-3 py-1 text-xs font-bold text-emerald-300">READY</p>
                <span className="rounded-full border border-cyan-300/30 px-3 py-2 text-sm font-bold text-cyan-200 group-hover:border-cyan-200 group-hover:text-white">Xem demo →</span>
              </div>
            </a>
          );})}
        </div>
      </div>
    </section>
  );
}

export function GSystemRoadmap() {
  return (
    <section id="roadmap" className="bg-white py-28 scroll-mt-24">
      <div className="section-container">
        <span className="badge">Gói sở hữu AI Employees</span>
        <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-5xl">Bắt đầu từ một AI Employee, mở rộng thành cả đội ngũ AI khi doanh nghiệp sẵn sàng.</h2>
        <div className="mt-14 grid gap-5 md:grid-cols-5">
          {systems.map((g) => (
            <a key={g.id} href={`/systems/${g.slug}`} className="block rounded-[28px] border border-border bg-bg p-6 transition hover:-translate-y-1 hover:border-primary hover:bg-blue-50">
              <p className="text-3xl font-black text-primary">{g.id}</p>
              <h3 className="mt-3 text-xl font-black">{systemSalesName(g)}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{g.purpose}</p>
              <p className="mt-5 text-sm font-black text-primary">Xem gói →</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseAndBlogPlaceholders() {
  return (
    <>
      <section id="cases" className="bg-bg py-28 scroll-mt-24">
        <div className="section-container">
          <span className="badge">Case Study & Demo thực tế</span>
          <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-5xl">Doanh nghiệp giống bạn có thể ứng dụng AI Employees như thế nào?</h2>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {caseStudies.map((item, index) => (
              <a key={item.slug} href={`/case-studies/${item.slug}`} className={`block rounded-[32px] border p-7 shadow-sm transition hover:-translate-y-1 hover:border-primary ${index === 0 ? 'border-primary bg-blue-50' : 'border-border bg-white'}`}>
                <p className="text-sm font-black text-primary">CASE 0{index + 1}</p>
                <h3 className="mt-3 text-xl font-black text-dark">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{item.summary}</p>
                <p className="mt-5 text-sm font-black text-primary">Xem case study →</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="blog" className="bg-white py-28 scroll-mt-24">
        <div className="section-container">
          <span className="badge">Content kéo khách về Website</span>
          <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-5xl">Từ mạng xã hội đến website, khách hàng có thể xem demo và lựa chọn giải pháp phù hợp.</h2>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="block rounded-[28px] border border-border bg-bg p-7 transition hover:-translate-y-1 hover:border-primary hover:bg-blue-50">
                <p className="text-sm font-black text-primary">POST 0{index + 1}</p>
                <h3 className="mt-3 text-xl font-black text-dark">{post.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{post.excerpt}</p>
                <p className="mt-5 text-sm font-black text-primary">Đọc bài →</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function LeadMagnetForm() {
  return (
    <section id="lead" className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-28 scroll-mt-24">
      <div className="section-container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="badge">Sở hữu AI Employee</span>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-5xl">Muốn bắt đầu bằng AI Employee đầu tiên cho doanh nghiệp của bạn?</h2>
          <p className="mt-5 text-lg leading-8 text-muted">Chọn một việc đang làm mất thời gian nhất: chăm khách, cập nhật CRM, báo cáo dashboard hoặc đăng nội dung. Huy Automation AI sẽ tư vấn AI Employee phù hợp để bắt đầu nhỏ, dễ xuống tiền và dễ mở rộng.</p>
          <div className="mt-8 grid gap-3 text-sm font-bold text-dark sm:grid-cols-2">
            {['Từ 5 triệu', 'Chọn một việc cần tự động hóa trước', 'Mở rộng khi thấy phù hợp', 'Có thể chuyển đổi theo ngành'].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-4 shadow-sm">✓ {item}</div>
            ))}
          </div>
        </div>
        <form className="rounded-[32px] border border-border bg-white p-8 shadow-soft">
          {['Tên', 'Email', 'SĐT', 'Ngành nghề / Fanpage / Website', 'Bạn muốn sở hữu AI nào? Ví dụ: Quế Anh, Vân Anh, Hải Anh...'].map((field) => (
            <label key={field} className="mb-4 block">
              <span className="mb-2 block text-sm font-bold text-dark">{field}</span>
              <input className="w-full rounded-2xl border border-border px-4 py-4 outline-none focus:border-primary" />
            </label>
          ))}
          <a href="/consultation?source=v19-sales-hub" className="mt-2 block w-full rounded-full bg-primary px-7 py-4 text-center font-bold text-white">Tư vấn AI Employee đầu tiên</a>
        </form>
      </div>
    </section>
  );
}

export function PricingSection() {
  const plans = [
    {
      badge: 'Bắt đầu dễ nhất',
      name: 'AI Employee Mini',
      price: 'Từ 5 triệu',
      desc: 'Tự động hóa một việc cụ thể: trả lời khách, ghi nhận thông tin, đẩy dữ liệu về Sheet/CRM hoặc báo Telegram.',
      items: ['1 AI Employee đầu tiên', '1 quy trình đơn giản', 'Form/Sheet/Telegram', 'Gọn nhẹ, dễ triển khai, dễ mở rộng'],
      cta: 'Sở hữu AI Employee đầu tiên',
    },
    {
      badge: 'Phù hợp để bán demo',
      name: 'Quế Anh / AI Sales BĐS',
      price: 'Từ 9 triệu',
      desc: 'Dành cho đội sales muốn thử AI trong quy trình bán hàng: tiếp nhận khách, hỏi nhu cầu, lưu lead và nhắc đội sales xử lý tiếp.',
      items: ['Voice hoặc Chat theo nhu cầu', 'Lead tự động vào CRM/Sheet', 'Thông báo Telegram', 'Có thể nâng cấp dashboard'],
      cta: 'Sở hữu Quế Anh',
    },
    {
      badge: 'Mở rộng khi sẵn sàng',
      name: 'AI Business OS',
      price: 'Liên hệ',
      desc: 'Dành cho doanh nghiệp muốn xây dựng nhiều AI Employees theo phòng ban: sales, CRM, dashboard, content và vận hành.',
      items: ['Nhiều AI Employees', 'CRM + Dashboard quản trị', 'Báo cáo cho chủ doanh nghiệp', 'Training, bảo hành và scale'],
      cta: 'Tư vấn lộ trình mở rộng',
    },
  ];
  return (
    <section id="pricing" className="bg-white py-28 scroll-mt-24">
      <div className="section-container">
        <div className="max-w-4xl">
          <span className="badge">Bắt đầu từ AI Employee đầu tiên</span>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-5xl">Bắt đầu với AI Employee đầu tiên. Mở rộng khi doanh nghiệp sẵn sàng.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">Bắt đầu từ 5 triệu cho một việc cụ thể: tiếp nhận khách, lưu thông tin, báo Telegram hoặc cập nhật Sheet/CRM. Khi cần thêm năng lực, doanh nghiệp có thể mở rộng sang AI Sales, CRM, dashboard hoặc điều phối vận hành.</p>
        </div>
        <div className="mt-10 rounded-[28px] border border-blue-100 bg-blue-50 p-6 text-lg font-bold leading-8 text-dark">
          Triển khai theo từng bước: chọn việc đang tốn thời gian nhất → đưa AI Employee vào vận hành thật → đo kết quả → mở rộng thêm năng lực khi cần.
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={plan.name} className={`rounded-[32px] border p-7 shadow-sm ${index === 0 ? 'border-primary bg-blue-50' : 'border-border bg-bg'}`}>
              <p className="text-sm font-black uppercase tracking-[.12em] text-primary">{plan.badge}</p>
              <h3 className="mt-3 text-2xl font-black text-dark">{plan.name}</h3>
              <p className="mt-3 text-3xl font-black text-dark">{plan.price}</p>
              <p className="mt-4 leading-7 text-muted">{plan.desc}</p>
              <ul className="mt-6 space-y-3">{plan.items.map((item) => <li key={item} className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-dark">✓ {item}</li>)}</ul>
              <a href="/consultation?source=v21-value-ladder" className="mt-7 block rounded-full bg-dark px-6 py-4 text-center font-black text-white hover:bg-primary">{plan.cta}</a>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-7 text-muted">Chi phí thực tế phụ thuộc vào mức độ tích hợp, dữ liệu hiện có và số kênh cần kết nối. Doanh nghiệp có thể bắt đầu từ một AI Employee rồi mở rộng dần thành hệ thống lớn hơn.</p>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section id="contact" className="bg-dark py-24 text-white scroll-mt-24">
      <div className="section-container text-center">
        <h2 className="mx-auto max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">Không tuyển thêm người. Hãy sở hữu AI Employees.</h2>
        <p className="mt-5 text-xl text-slate-300">Bắt đầu từ một AI Employee, vận hành thật, đo kết quả rõ ràng rồi mở rộng khi doanh nghiệp cần.</p>
        <a href="/consultation?source=final-cta" className="mt-10 inline-flex rounded-full bg-white px-8 py-4 font-black text-dark">Gọi/Zalo 0838 713 123</a>
      </div>
    </section>
  );
}

export function HAIOSRuntimeDashboard() {
  const lanes = [
    ['Voice Inbound', 'WF31', 'Quế Anh nghe máy, hỏi nhu cầu, giữ cuộc trò chuyện tự nhiên.', 'LIVE'],
    ['Transcript', 'WF31D', 'Trâm Anh ghi lại cuộc gọi, tách ngân sách, khu vực, timeline.', 'SYNC'],
    ['CRM Lead', 'WF14', 'Hà Anh tạo lead, chấm điểm nóng/lạnh, lưu nguồn.', 'HOT'],
    ['Execution', 'WF23', 'Giang Anh giao task cho sales hoặc owner phù hợp.', 'ROUTE'],
    ['Dashboard', 'WF08', 'Vân Anh hiển thị số liệu và cảnh báo để chủ doanh nghiệp theo dõi.', 'OK'],
  ];

  return (
    <section id="runtime" className="relative overflow-hidden bg-slate-950 py-28 text-white scroll-mt-24">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="section-container relative">
        <div className="grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-cyan-200">HAIOS Runtime Dashboard</span>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-6xl">Khách hàng nhìn thấy toàn bộ quy trình AI Sales vận hành.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">Quế Anh không chỉ trả lời tự động. Giải pháp kết nối nghe máy, ghi nhận nhu cầu, cập nhật CRM, hiển thị dashboard và tạo follow-up cho đội sales.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ['Lead mới', '24/7'],
                ['CRM tự cập nhật', 'Tự động'],
                ['Sales nhận việc', 'Có task'],
              ].map(([a,b]) => <div key={a} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5"><p className="text-2xl font-black">{b}</p><p className="mt-1 text-sm font-bold text-slate-300">{a}</p></div>)}
            </div>
          </div>

          <div className="rounded-[36px] border border-white/10 bg-white/[0.06] p-5 shadow-soft backdrop-blur">
            <div className="rounded-[28px] border border-white/10 bg-[#020617] p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[.16em] text-cyan-300">Pipeline đang chạy</p>
                  <p className="mt-1 text-2xl font-black">AI Sales BĐS</p>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-black text-emerald-300">● ONLINE</span>
              </div>
              <div className="mt-5 space-y-3">
                {lanes.map(([title, wf, desc, status], index) => (
                  <div key={wf} className="grid gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 md:grid-cols-[42px_1fr_auto] md:items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300/10 text-sm font-black text-cyan-200">{index + 1}</div>
                    <div>
                      <p className="font-black text-white">{title} <span className="text-cyan-300">/ {wf}</span></p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{desc}</p>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-slate-200">{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IndustryDemoGrid() {
  const industries = [
    ['Bất động sản', 'Khách gọi hỏi dự án, AI tư vấn, CRM tự tạo lead HOT.'],
    ['Spa / thẩm mỹ', 'Tư vấn dịch vụ, đặt lịch, nhắc lịch và chăm sóc lại.'],
    ['Nha khoa', 'Tiếp nhận nhu cầu, phân loại ca, hẹn lịch tư vấn.'],
    ['Giáo dục', 'Tư vấn khóa học, thu thông tin học viên, follow-up.'],
  ];
  return (
    <section id="industry" className="bg-white py-28 scroll-mt-24">
      <div className="section-container">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge">Industry Demo</span>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-6xl">Một demo BĐS, nhân bản được sang nhiều ngành dịch vụ.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">Giải pháp không chỉ dành cho BĐS. Cùng một quy trình AI Sales có thể áp dụng cho spa, nha khoa, giáo dục và nhiều ngành dịch vụ cần tư vấn khách hàng.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {industries.map(([title, desc]) => <div key={title} className="rounded-[30px] border border-border bg-bg p-6 transition hover:-translate-y-1 hover:border-primary hover:bg-blue-50"><h3 className="text-2xl font-black text-dark">{title}</h3><p className="mt-4 text-sm leading-7 text-muted">{desc}</p></div>)}
        </div>
      </div>
    </section>
  );
}

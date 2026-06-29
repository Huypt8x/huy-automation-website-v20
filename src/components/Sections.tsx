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
            <span className="badge">Featured Demo / Flagship Solution</span>
            <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] text-dark md:text-6xl">AI Sales Bất Động Sản: xem hệ thống làm việc thật.</h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Trải nghiệm đầy đủ quy trình AI Sales Automation: tiếp nhận cuộc gọi, tư vấn nhu cầu, ghi transcript, tạo CRM, phân loại lead nóng và giao việc cho đội sales. Mô hình này có thể chuyển đổi linh hoạt sang spa, nha khoa, giáo dục, bảo hiểm, tuyển sinh hoặc nhiều ngành dịch vụ khác.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/case-studies/ai-sales-bat-dong-san" className="inline-flex items-center justify-center gap-2 rounded-full bg-dark px-7 py-4 font-black text-white hover:bg-primary">Xem Demo AI Sales BĐS <ArrowRight size={18}/></Link>
              <Link href="/employees/que-anh" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-7 py-4 font-black text-dark hover:border-primary">Gọi thử Quế Anh <Mic size={18}/></Link>
            </div>
          </div>

          <div className="rounded-[40px] border border-slate-200 bg-slate-950 p-4 shadow-soft">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-900">
              <div className="relative flex aspect-video items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,.35),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(37,99,235,.38),transparent_35%),#020617]">
                <div className="absolute inset-0 grid-pattern opacity-40" />
                <div className="relative text-center text-white">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-slate-950 shadow-soft"><Play fill="currentColor" size={30}/></div>
                  <p className="mt-5 text-3xl font-black tracking-[-.03em]">AI Sales BĐS Demo</p>
                  <p className="mt-2 text-sm font-bold text-cyan-200">Video demo: Khách gọi → AI tư vấn → CRM → Dashboard → Sales nhận việc</p>
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
            <span className="badge">Automation Specialists</span>
            <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">19 AI Employees sẵn sàng làm việc cho doanh nghiệp của bạn.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">Mỗi AI Employee phụ trách một công việc cụ thể như nghe máy, quản lý CRM, chăm sóc khách hàng, tạo nội dung hoặc theo dõi dashboard. Bạn chọn AI phù hợp, chúng tôi triển khai hệ thống Automation trọn gói phía sau.</p>
          </div>
          <Link href="/#lead" className="rounded-full bg-dark px-6 py-4 text-center font-black text-white hover:bg-primary">Chọn AI Employee phù hợp</Link>
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
    { icon: Bot, label: 'AI Employees', desc: 'Khách nhớ tên Quế Anh, Hà Anh, Vân Anh trước khi hiểu workflow phía sau.', href: '/#employees' },
    { icon: Workflow, label: 'Automation Platform', desc: 'Các AI Employees kết nối với nhau thành một hệ thống vận hành thống nhất.', href: '/#build' },
    { icon: LayoutDashboard, label: 'Live Demo & Dashboard', desc: 'Demo BĐS chứng minh mô hình có thể chuyển đổi sang nhiều ngành.', href: '/#demo' },
    { icon: CircleDollarSign, label: 'Sales Conversion Hub', desc: 'Khách hàng trải nghiệm demo, chọn giải pháp và để lại thông tin tư vấn.', href: '/#lead' },
  ];
  return (
    <section id="os" className="bg-white py-28 scroll-mt-24">
      <div className="section-container">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge">AI Company OS</span>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-6xl">Không mua nhiều phần mềm rời rạc. Sở hữu một đội ngũ AI vận hành doanh nghiệp.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">Mỗi AI Employee đảm nhiệm một công việc chuyên biệt và phối hợp với các AI khác để tạo thành một hệ thống Automation thống nhất, giúp doanh nghiệp bán hàng, chăm sóc khách hàng và vận hành hiệu quả hơn.</p>
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
  const steps = ['20+ năm làm nghề ảnh', 'Bắt đầu tìm hiểu Automation', 'Xây WF00-WF09', 'Tạo 19 AI Employees', 'Biến workflow thành sản phẩm bán hàng'];
  return (
    <section id="journey" className="bg-bg py-28 scroll-mt-24">
      <div className="section-container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <span className="badge">Build in Public</span>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-5xl">Build in Public là bằng chứng cho chất lượng hệ thống.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">Mọi AI Employee và mọi giải pháp trên website đều được Huy Automation AI xây dựng, sử dụng và tối ưu trong hoạt động hằng ngày trước khi triển khai cho khách hàng. Bạn không mua một ý tưởng, bạn sở hữu một hệ thống đã được kiểm chứng bằng thực tế.</p>
          <Link href="/blog" className="mt-8 inline-flex rounded-full bg-primary px-6 py-4 font-black text-white">Xem hành trình Build in Public</Link>
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
        <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">Hệ thống Automation đứng sau mỗi AI Employee.</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Mỗi AI Employee được xây dựng để giải quyết một công việc cụ thể trong doanh nghiệp. Khi triển khai, bạn không chỉ sở hữu một AI mà còn nhận toàn bộ hệ thống Automation đã được thiết kế, kiểm thử và vận hành thực tế.</p>
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
        <span className="badge">Automation Packages</span>
        <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-5xl">Các gói nhỏ có thể bán riêng, gói BĐS là flagship demo.</h2>
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
          <span className="badge">Case Studies & Demo</span>
          <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-5xl">Bằng chứng để khách tin hệ thống chạy thật.</h2>
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
          <span className="badge">Build In Public Content</span>
          <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-5xl">Content ngoài kênh kéo lead về đây.</h2>
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
          <span className="badge">Own Your AI Employee</span>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-5xl">Muốn sở hữu Quế Anh, Hà Anh, Vân Anh hay một workflow riêng?</h2>
          <p className="mt-5 text-lg leading-8 text-muted">Để lại thông tin. Huy Automation AI sẽ audit quy trình hiện tại và đề xuất AI Employee đầu tiên nên triển khai cho doanh nghiệp của bạn.</p>
          <div className="mt-8 grid gap-3 text-sm font-bold text-dark sm:grid-cols-2">
            {['Chọn AI Employee phù hợp', 'Xem demo workflow thật', 'Ước lượng chi phí triển khai', 'Có thể chuyển đổi theo ngành'].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-4 shadow-sm">✓ {item}</div>
            ))}
          </div>
        </div>
        <form className="rounded-[32px] border border-border bg-white p-8 shadow-soft">
          {['Tên', 'Email', 'SĐT', 'Ngành nghề / Fanpage / Website', 'Bạn muốn sở hữu AI nào hoặc tự động hóa việc gì?'].map((field) => (
            <label key={field} className="mb-4 block">
              <span className="mb-2 block text-sm font-bold text-dark">{field}</span>
              <input className="w-full rounded-2xl border border-border px-4 py-4 outline-none focus:border-primary" />
            </label>
          ))}
          <a href="/consultation?source=v19-sales-hub" className="mt-2 block w-full rounded-full bg-primary px-7 py-4 text-center font-bold text-white">Gửi yêu cầu demo Automation</a>
        </form>
      </div>
    </section>
  );
}

export function PricingSection() {
  const plans = [
    { name: 'Single AI Employee', price: '15 - 30 triệu', desc: 'Triển khai một workflow cụ thể như đăng Facebook, CRM, dashboard hoặc follow-up.', items: ['1 AI Employee', '1 workflow chính', 'Form/CRM cơ bản', 'Handover vận hành'] },
    { name: 'AI Sales Machine', price: '30 - 70 triệu', desc: 'Gói bán hàng/chăm sóc khách hàng tự động. BĐS là bản demo flagship.', items: ['Voice/Chat/CRM', 'Lead scoring', 'Task cho sale', 'Dashboard demo'] },
    { name: 'AI Business OS', price: '80 - 150 triệu+', desc: 'Xây nhiều AI Employees thành hệ thống vận hành theo phòng ban.', items: ['Nhiều workflow', 'Dashboard quản trị', 'Báo cáo CEO', 'Training & scale'] },
  ];
  return (
    <section id="pricing" className="bg-white py-28 scroll-mt-24">
      <div className="section-container">
        <div className="max-w-4xl">
          <span className="badge">Pricing Direction</span>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-5xl">Bắt đầu với một AI Employee, mở rộng thành đội ngũ AI khi doanh nghiệp sẵn sàng.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">Triển khai từ một AI Employee theo đúng nhu cầu hiện tại của doanh nghiệp. Khi hoạt động mở rộng, có thể bổ sung thêm AI Employees để hình thành một hệ thống Automation hoàn chỉnh mà không cần thay đổi nền tảng.</p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={plan.name} className={`rounded-[32px] border p-7 shadow-sm ${index === 1 ? 'border-primary bg-blue-50' : 'border-border bg-bg'}`}>
              <p className="text-sm font-black uppercase tracking-[.12em] text-primary">Gói {index + 1}</p>
              <h3 className="mt-3 text-2xl font-black text-dark">{plan.name}</h3>
              <p className="mt-3 text-3xl font-black text-dark">{plan.price}</p>
              <p className="mt-4 leading-7 text-muted">{plan.desc}</p>
              <ul className="mt-6 space-y-3">{plan.items.map((item) => <li key={item} className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-dark">✓ {item}</li>)}</ul>
              <a href="/#lead" className="mt-7 block rounded-full bg-dark px-6 py-4 text-center font-black text-white hover:bg-primary">Audit trước khi báo giá</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section id="contact" className="bg-dark py-24 text-white scroll-mt-24">
      <div className="section-container text-center">
        <h2 className="mx-auto max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">Không tuyển thêm người. Hãy sở hữu AI Employees.</h2>
        <p className="mt-5 text-xl text-slate-300">Bắt đầu bằng một workflow đầu tiên, rồi nâng cấp thành đội ngũ AI vận hành 24/7.</p>
        <a href="/consultation?source=final-cta" className="mt-10 inline-flex rounded-full bg-white px-8 py-4 font-black text-dark">Đặt lịch tư vấn Automation</a>
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
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-6xl">Không chỉ có giao diện đẹp. Có cả hệ thống vận hành phía sau.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">Phần này dùng để demo cho khách hàng thấy một lead đi qua hệ thống như thế nào: từ cuộc gọi đầu tiên đến CRM, task, dashboard và follow-up.</p>
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
          <p className="mt-5 text-lg leading-8 text-muted">Cốt lõi không phải là ngành BĐS. Cốt lõi là quy trình: tiếp nhận khách → hiểu nhu cầu → lưu CRM → giao task → chăm sóc tiếp.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {industries.map(([title, desc]) => <div key={title} className="rounded-[30px] border border-border bg-bg p-6 transition hover:-translate-y-1 hover:border-primary hover:bg-blue-50"><h3 className="text-2xl font-black text-dark">{title}</h3><p className="mt-4 text-sm leading-7 text-muted">{desc}</p></div>)}
        </div>
      </div>
    </section>
  );
}

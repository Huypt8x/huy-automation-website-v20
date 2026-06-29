import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { VideoDemoButton } from '@/components/VideoDemoButton';
import { workflows, employees, systems, type Employee, type Workflow } from '@/data/site';
import { getPrimaryEmployee, getWorkflowSalesCopy } from '@/lib/salesCopy';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return workflows.map((workflow) => ({ slug: workflow.slug }));
}

function getPackageForWorkflow(workflow: Workflow) {
  const slug = workflow.slug.toLowerCase();
  const text = `${workflow.id} ${workflow.name} ${workflow.shortDescription}`.toUpperCase();

  if (slug.includes('wf14') || text.includes('SALES')) {
    return {
      name: 'AI Sales Machine',
      price: 'Từ 9 triệu',
      bestFor: 'Doanh nghiệp muốn bắt đầu bằng một AI Employee xử lý lead và chăm sóc khách hàng.',
      includes: ['1 AI Employee sales', 'CRM/Sheet cơ bản', 'Thông báo Telegram', 'Có thể nâng cấp pipeline'],
    };
  }

  if (slug.includes('wf22') || slug.includes('wf23') || slug.includes('wf24') || text.includes('COO') || text.includes('FORECAST')) {
    return {
      name: 'AI Business OS',
      price: 'Liên hệ',
      bestFor: 'Doanh nghiệp đã có AI Employee đầu tiên và muốn mở rộng thành đội ngũ AI vận hành.',
      includes: ['Nhiều AI Employees', 'Điều phối công việc', 'Dashboard quản trị', 'Training & scale'],
    };
  }

  if (['wf07', 'wf08', 'wf09'].includes(slug)) {
    return {
      name: 'AI Growth & Analytics Machine',
      price: 'Từ 8 triệu',
      bestFor: 'Doanh nghiệp muốn có một AI Employee đọc số liệu, cảnh báo và hỗ trợ ra quyết định.',
      includes: ['Dashboard cơ bản', 'Báo cáo định kỳ', 'Cảnh báo chỉ số', 'Nâng cấp learning sau'],
    };
  }

  return {
    name: 'AI Content Machine',
    price: 'Từ 5 triệu',
    bestFor: 'Doanh nghiệp muốn thử một AI Employee làm nội dung, chăm kênh hoặc tự động hóa một đầu việc nhỏ.',
    includes: ['1 AI Employee đầu tiên', '1 quy trình đơn giản', 'Sheet/Telegram/Form', 'Có thể mở rộng sau'],
  };
}

function getRoiForWorkflow(workflow: Workflow) {
  const slug = workflow.slug.toLowerCase();

  if (slug.includes('wf14')) {
    return [
      { label: 'Tiết kiệm', value: '10-20 giờ/tháng follow-up' },
      { label: 'Thay thế', value: '1 trợ lý sales nhập liệu' },
      { label: 'Tạo', value: 'Pipeline và task bán hàng rõ ràng' },
      { label: 'Tác động', value: 'Lead không bị bỏ quên' },
    ];
  }

  if (slug.includes('wf22') || slug.includes('wf23') || slug.includes('wf24')) {
    return [
      { label: 'Tiết kiệm', value: '5-10 giờ/tuần tổng hợp vận hành' },
      { label: 'Thay thế', value: 'Báo cáo thủ công mỗi ngày' },
      { label: 'Tạo', value: 'Ưu tiên việc và forecast doanh thu' },
      { label: 'Tác động', value: 'Chủ doanh nghiệp biết điểm nghẽn ngay' },
    ];
  }

  if (['wf08', 'wf09'].includes(slug)) {
    return [
      { label: 'Tiết kiệm', value: '8-12 giờ/tháng đọc số liệu' },
      { label: 'Thay thế', value: 'Báo cáo marketing thủ công' },
      { label: 'Tạo', value: 'Insight và vòng học tối ưu' },
      { label: 'Tác động', value: 'Ra quyết định bằng dữ liệu' },
    ];
  }

  return [
    { label: 'Tiết kiệm', value: '20 giờ/tháng' },
    { label: 'Thay thế', value: '1 Content Planner thủ công' },
    { label: 'Tạo', value: '44 ý tưởng nội dung có thể triển khai' },
    { label: 'Chi phí', value: 'Giảm phụ thuộc nhân sự content' },
  ];
}

export default function WorkflowDetailPage({ params }: { params: { slug: string } }) {
  const workflow = workflows.find((item) => item.slug === params.slug);
  if (!workflow) return notFound();

  const sales = getWorkflowSalesCopy(workflow);
  const primaryEmployee = getPrimaryEmployee(workflow);
  const relatedEmployees = employees.filter((emp) => workflow.employeeSlugs.includes(emp.slug));
  const relatedSystems = systems.filter((sys) => workflow.systemIds.includes(sys.id));
  const productPackage = getPackageForWorkflow(workflow);
  const roi = getRoiForWorkflow(workflow);
  const videoSrc = workflow.videoUrl || `/media/videos/${workflow.slug}-demo.mp4`;

  return (
    <main className="bg-bg text-dark">
      <Header />
      <section className="bg-dark py-24 text-white">
        <div className="section-container">
          <Link href="/#build" className="text-sm font-bold text-cyan-200 hover:text-white">← Quay lại AI Marketplace</Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">{workflow.id} / Automation System</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.04em] md:text-7xl">{sales.headline}</h1>
              <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">{sales.customerPromise}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <VideoDemoButton videoSrc={videoSrc} title={`${workflow.id} — ${workflow.name}`} label="▶ Xem Video Demo" />
                <Link href={`/consultation?source=${workflow.slug}&employee=${primaryEmployee?.slug || ''}`} className="rounded-full border border-white/20 px-6 py-3 font-black text-white hover:bg-white/10">Đăng ký Demo 15 phút</Link>
              </div>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/[0.06] p-8">
              <p className="text-sm font-black uppercase tracking-[.14em] text-cyan-200">AI Employee dành cho doanh nghiệp của bạn</p>
              {primaryEmployee && <EmployeeMiniCard employee={primaryEmployee} />}
              <div className="mt-6 rounded-3xl bg-white/10 p-5">
                <p className="text-sm font-bold text-slate-300">Hệ thống Automation hỗ trợ</p>
                <p className="mt-2 text-2xl font-black">{workflow.id} — {workflow.name}</p>
              </div>
              <div className="mt-6 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                <p className="text-sm font-bold text-cyan-200">Thuộc gói sản phẩm</p>
                <p className="mt-2 text-2xl font-black">{productPackage.name}</p>
                <p className="mt-1 text-lg font-black text-cyan-200">{productPackage.price}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container grid gap-6 lg:grid-cols-3">
          <SalesCard title="Vấn đề khách đang gặp" items={sales.problems} accent="red" />
          <SalesCard title="Hệ thống giải quyết" items={sales.solutions} accent="blue" />
          <SalesCard title="Kết quả nhìn thấy" items={sales.results} accent="green" />
        </div>
      </section>

      <section className="pb-20">
        <div className="section-container rounded-[36px] border border-border bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
            <BeforeAfterBox title="TRƯỚC" tone="red" items={sales.problems.slice(0, 3)} />
            <div className="hidden items-center justify-center text-5xl font-black text-primary lg:flex">→</div>
            <BeforeAfterBox title="SAU" tone="green" items={sales.results.slice(0, 3)} />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-container grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-[32px] border border-border bg-white p-8 shadow-sm">
            <span className="badge">Nhìn là hiểu</span>
            <h2 className="mt-5 text-3xl font-black">Hệ thống này vận hành như thế nào?</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {sales.simpleFlow.map((step, index) => (
                <div key={step} className="relative rounded-[28px] border border-border bg-bg p-6 text-center">
                  <p className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-black text-white">{index + 1}</p>
                  <p className="mt-4 text-xl font-black leading-7">{step}</p>
                  {index < sales.simpleFlow.length - 1 && <span className="absolute -right-4 top-1/2 hidden text-3xl font-black text-primary md:block">→</span>}
                </div>
              ))}
            </div>
            <p className="mt-8 rounded-3xl bg-blue-50 p-6 text-lg font-bold leading-8 text-dark">{sales.customerPromise}</p>
          </div>
          <div className="rounded-[32px] border border-border bg-white p-8 shadow-sm">
            <span className="badge">AI Employee</span>
            <h2 className="mt-5 text-3xl font-black">AI Employee nào phụ trách công việc này?</h2>
            <div className="mt-6 grid gap-3">
              {relatedEmployees.map((emp) => (
                <Link key={emp.slug} href={`/employees/${emp.slug}`} className="rounded-2xl bg-bg p-4 hover:bg-blue-50">
                  <p className="font-black">{emp.name}</p>
                  <p className="text-sm text-muted">{emp.role}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-container grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-[32px] border border-border bg-bg p-8">
            <span className="badge">Minh chứng hệ thống thật</span>
            <h2 className="mt-5 text-3xl font-black">Minh chứng vận hành thực tế</h2>
            <div className="mt-6 overflow-hidden rounded-[28px] border border-border bg-dark">
              <img src={workflow.imageUrl || '/media/workflows/workflow-placeholder.png'} alt={`${workflow.id} workflow screenshot`} className="h-auto w-full object-cover" />
            </div>
          </div>
          <div id="video" className="rounded-[32px] border border-border bg-bg p-8">
            <span className="badge">Video demo</span>
            <h2 className="mt-5 text-3xl font-black">Demo giúp doanh nghiệp đánh giá trước khi triển khai</h2>
            <div className="mt-6 flex aspect-video items-center justify-center rounded-[28px] bg-dark text-center text-white">
              <div className="p-8">
                <p className="text-3xl font-black">Video Demo</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">Click nút bên dưới để mở popup demo trên cùng trang.</p>
                <div className="mt-6"><VideoDemoButton videoSrc={videoSrc} title={`${workflow.id} — ${workflow.name}`} label="▶ Xem Video Demo" primary={false} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-20">
        <div className="section-container grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-[32px] border border-border bg-white p-8 shadow-sm">
            <span className="badge">ROI cho chủ doanh nghiệp</span>
            <h2 className="mt-5 text-3xl font-black">Giá trị doanh nghiệp nhận được</h2>
            <div className="mt-6 grid gap-3">
              {roi.map((item) => (
                <div key={item.label} className="rounded-2xl bg-bg p-4">
                  <p className="text-xs font-black uppercase tracking-[.12em] text-primary">{item.label}</p>
                  <p className="mt-1 text-lg font-black text-dark">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-primary bg-blue-50 p-8 shadow-sm">
            <span className="badge">Bắt đầu từ một AI Employee</span>
            <h2 className="mt-5 text-3xl font-black">{productPackage.name}</h2>
            <p className="mt-3 text-4xl font-black text-dark">{productPackage.price}</p>
            <p className="mt-4 text-lg leading-8 text-muted">{productPackage.bestFor}</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {productPackage.includes.map((item) => <p key={item} className="rounded-2xl bg-white p-4 font-bold">✓ {item}</p>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/consultation?source=${workflow.slug}&package=${encodeURIComponent(productPackage.name)}`} className="rounded-full bg-dark px-7 py-4 font-black text-white hover:bg-primary">Đăng ký Demo 15 phút</Link>
              <Link href="/#lead" className="rounded-full border border-primary/20 bg-white px-7 py-4 font-black text-primary hover:bg-blue-100">Nhận Audit AI miễn phí</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-container grid gap-8 md:grid-cols-2">
          <div className="rounded-[32px] border border-border bg-bg p-8">
            <span className="badge">Powered By</span>
            <h2 className="mt-5 text-3xl font-black">Hệ thống triển khai đi kèm</h2>
            <div className="mt-6 flex flex-wrap gap-2">{workflow.tools.map((tool) => <span key={tool} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-primary">{tool}</span>)}</div>
            <h3 className="mt-8 text-xl font-black">Gắn với G-System</h3>
            <div className="mt-4 grid gap-3">{relatedSystems.map((sys) => <Link key={sys.slug} href={`/systems/${sys.slug}`} className="rounded-2xl bg-white p-4 font-black hover:bg-blue-50">{sys.id} — {sys.name}</Link>)}</div>
          </div>
          <div className="rounded-[32px] border border-border bg-bg p-8">
            <span className="badge">Bước tiếp theo</span>
            <h2 className="mt-5 text-3xl font-black">Muốn biết giải pháp này có phù hợp với doanh nghiệp của anh/chị không?</h2>
            <p className="mt-4 leading-8 text-muted">Bắt đầu bằng Audit AI miễn phí. Huy Automation sẽ nhìn vào ngành nghề, quy trình bán hàng hiện tại và đề xuất nên bắt đầu từ Lead Machine, Sales Machine hay Business OS.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#lead" className="rounded-full bg-primary px-7 py-4 font-black text-white">Nhận Audit AI miễn phí</Link>
              <Link href={`/consultation?source=${workflow.slug}`} className="rounded-full border border-border bg-white px-7 py-4 font-black text-dark">Đăng ký Demo 15 phút</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function EmployeeMiniCard({ employee }: { employee: Employee }) {
  return (
    <Link href={`/employees/${employee.slug}`} className="mt-5 flex items-center gap-4 rounded-3xl bg-white p-5 text-dark hover:bg-blue-50">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-black text-white">{employee.name.charAt(0)}</div>
      <div><p className="text-2xl font-black">{employee.name}</p><p className="text-sm font-bold text-muted">{employee.role}</p></div>
    </Link>
  );
}

function SalesCard({ title, items, accent }: { title: string; items: string[]; accent: 'red' | 'blue' | 'green' }) {
  const color = accent === 'red' ? 'text-red-600 bg-red-50' : accent === 'green' ? 'text-emerald-600 bg-emerald-50' : 'text-primary bg-blue-50';
  return (
    <div className="rounded-[32px] border border-border bg-white p-8 shadow-sm">
      <p className={`inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-[.12em] ${color}`}>{title}</p>
      <div className="mt-6 space-y-3">{items.map((item) => <p key={item} className="rounded-2xl bg-bg p-4 font-bold leading-7">✓ {item}</p>)}</div>
    </div>
  );
}

function BeforeAfterBox({ title, items, tone }: { title: string; items: string[]; tone: 'red' | 'green' }) {
  const color = tone === 'red' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600';
  return (
    <div className="rounded-[28px] border border-border bg-bg p-7">
      <p className={`inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-[.12em] ${color}`}>{title}</p>
      <div className="mt-6 space-y-3">
        {items.map((item) => <p key={item} className="rounded-2xl bg-white p-4 font-bold leading-7">{tone === 'red' ? '✕' : '✓'} {item}</p>)}
      </div>
    </div>
  );
}

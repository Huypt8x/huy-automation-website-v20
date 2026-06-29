import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function ConsultationPage() {
  return (
    <main className="bg-bg text-dark">
      <Header />
      <section className="relative overflow-hidden bg-white py-24">
        <div className="pointer-events-none absolute left-10 top-24 h-56 w-56 rounded-full bg-blue-100 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-64 w-64 rounded-full bg-cyan-100 blur-3xl" />
        <div className="section-container relative mx-auto max-w-4xl text-center">
          <span className="badge">Lead Form</span>
          <h1 className="mt-6 text-5xl font-black tracking-[-0.04em] md:text-7xl">
            Tôi muốn sở hữu AI Employee / Workflow / AI Company OS
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
            Chọn nhân viên AI, workflow hoặc hệ thống bạn muốn xem demo. Huy Automation sẽ tư vấn cách triển khai phù hợp với doanh nghiệp của bạn.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-container mx-auto max-w-3xl">
          <form className="rounded-[36px] border border-border bg-white p-8 shadow-soft md:p-10">
            {['Họ tên', 'Email', 'SĐT / Zalo', 'Bạn muốn sở hữu AI Employee / Workflow nào?', 'Mô tả nhu cầu automation hiện tại'].map((field) => (
              <label key={field} className="mb-5 block text-left">
                <span className="mb-2 block text-sm font-bold text-dark">{field}</span>
                <input className="w-full rounded-2xl border border-border bg-white px-4 py-4 outline-none transition focus:border-primary focus:ring-4 focus:ring-blue-100" />
              </label>
            ))}
            <button className="mt-3 w-full rounded-full bg-primary px-7 py-5 text-lg font-black text-white shadow-soft hover:bg-blue-700">
              Gửi yêu cầu tư vấn
            </button>
            <div className="mt-8 grid gap-3 text-left text-sm text-muted md:grid-cols-3">
              <p className="rounded-2xl bg-bg p-4 font-semibold">✓ WF00-WF09</p>
              <p className="rounded-2xl bg-bg p-4 font-semibold">✓ 19 AI Employees</p>
              <p className="rounded-2xl bg-bg p-4 font-semibold">✓ G1-G5 AI Company OS</p>
            </div>
            <p className="mt-5 text-center text-sm text-muted">Sau khi gửi form, đội Huy Automation sẽ liên hệ để tư vấn demo phù hợp.</p>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#020617] py-20 text-slate-300">
      <div className="section-container grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="font-black text-white">HUY AUTOMATION AI</h3>
          <p className="mt-4 text-sm leading-6">AI Employee Marketplace dành cho doanh nghiệp muốn sở hữu đội ngũ AI làm việc 24/7: từ Voice AI, CRM, Dashboard đến Sales và Content Automation.</p>
        </div>
        <div>
          <h4 className="font-black text-white">Giải pháp</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm"><a href="/#demo">Demo BĐS</a><a href="/#employees">19 AI Employees</a><a href="/#build">AI Employee Marketplace</a><a href="/#pricing">Từ 5 triệu</a></div>
        </div>
        <div>
          <h4 className="font-black text-white">AI nổi bật</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm"><a href="/employees/que-anh">Quế Anh Voice AI</a><a href="/employees/ha-anh">Hà Anh CRM AI</a><a href="/employees/van-anh">Vân Anh Dashboard AI</a><a href="/case-studies/ai-sales-bat-dong-san">AI Sales BĐS</a></div>
        </div>
        <div>
          <h4 className="font-black text-white">Liên hệ tư vấn</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm"><a href="tel:0838713123">Gọi: 0838 713 123</a><a href="https://zalo.me/0838713123">Chat Zalo</a><a href="/consultation">Form tư vấn</a><a href="mailto:huypt8x@gmail.com">huypt8x@gmail.com</a></div>
        </div>
      </div>
    </footer>
  );
}

from pathlib import Path

root = Path('/mnt/data/v20work')

def rep(file, pairs):
    p = root / file
    s = p.read_text(encoding='utf-8')
    for a,b in pairs:
        s = s.replace(a,b)
    p.write_text(s, encoding='utf-8')

rep('src/components/Sections.tsx', [
("['Dashboard', 'Vân Anh cập nhật chỉ số và cảnh báo cho đội sale.'],", "['Dashboard', 'Vân Anh cập nhật chỉ số, cảnh báo và báo cáo tiến độ cho chủ doanh nghiệp.'],"),
("Gói BĐS là showroom công nghệ, không phải website bán nhà.", "AI Sales Bất Động Sản: xem hệ thống làm việc thật."),
("Huy Automation AI bán hệ thống Automation. Gói AI Sales Bất Động Sản chỉ là demo được đầu tư kỹ nhất vì dễ hiểu, nhiều tiền và có thể chuyển đổi sang spa, nha khoa, giáo dục, bảo hiểm, tuyển sinh hoặc dịch vụ khác.", "Trải nghiệm đầy đủ quy trình AI Sales Automation: tiếp nhận cuộc gọi, tư vấn nhu cầu, ghi transcript, tạo CRM, phân loại lead nóng và giao việc cho đội sales. Mô hình này có thể chuyển đổi linh hoạt sang spa, nha khoa, giáo dục, bảo hiểm, tuyển sinh hoặc nhiều ngành dịch vụ khác."),
("Xem trang demo BĐS", "Xem Demo AI Sales BĐS"),
("Gặp Quế Anh", "Gọi thử Quế Anh"),
("Đặt video thật tại public/media/videos/real-estate-sales-demo.mp4", "Video demo: Khách gọi → AI tư vấn → CRM → Dashboard → Sales nhận việc"),
("19 AI Employees. Mỗi AI là một workflow có thể sở hữu.", "19 AI Employees sẵn sàng làm việc cho doanh nghiệp của bạn."),
("Khách xem video ngoài Facebook/TikTok biết tên AI trước. Về website, họ gặp đúng nhân vật đó, xem demo, hiểu workflow phía sau và bấm “Sở hữu AI này”.", "Mỗi AI Employee phụ trách một công việc cụ thể như nghe máy, quản lý CRM, chăm sóc khách hàng, tạo nội dung hoặc theo dõi dashboard. Bạn chọn AI phù hợp, chúng tôi triển khai hệ thống Automation trọn gói phía sau."),
("Tư vấn chọn AI đầu tiên", "Chọn AI Employee phù hợp"),
("Automation Workflows", "Automation Platform"),
("Mỗi nhân vật là một hệ thống: voice, CRM, dashboard, content, publishing, execution.", "Các AI Employees kết nối với nhau thành một hệ thống vận hành thống nhất."),
("Mọi content ngoài kênh dẫn về đây để đặt demo và để lại thông tin.", "Khách hàng trải nghiệm demo, chọn giải pháp và để lại thông tin tư vấn."),
("Không bán phần mềm rời rạc. Bán đội ngũ AI vận hành doanh nghiệp.", "Không mua nhiều phần mềm rời rạc. Sở hữu một đội ngũ AI vận hành doanh nghiệp."),
("Website này là điểm chạm cuối cùng: người xem từ Facebook, YouTube, TikTok quay về đây để gặp AI Employee, xem workflow và quyết định mua Automation.", "Mỗi AI Employee đảm nhiệm một công việc chuyên biệt và phối hợp với các AI khác để tạo thành một hệ thống Automation thống nhất, giúp doanh nghiệp bán hàng, chăm sóc khách hàng và vận hành hiệu quả hơn."),
("Founder Journey", "Build in Public"),
("Hành trình là content bán hàng.", "Build in Public là bằng chứng cho chất lượng hệ thống."),
("V18 đúng vì nó không phải website giới thiệu công ty. Nó ghi lại quá trình xây một AI Company thật — và chính quá trình đó tạo niềm tin để bán Automation.", "Mọi AI Employee và mọi giải pháp trên website đều được Huy Automation AI xây dựng, sử dụng và tối ưu trong hoạt động hằng ngày trước khi triển khai cho khách hàng. Bạn không mua một ý tưởng, bạn sở hữu một hệ thống đã được kiểm chứng bằng thực tế."),
("Đọc Build In Public", "Xem hành trình Build in Public"),
("Workflow Marketplace", "AI Employees Marketplace"),
("Workflow thật đứng phía sau từng AI Employee.", "Hệ thống Automation đứng sau mỗi AI Employee."),
("WF không còn là mã kỹ thuật khó nhớ. WF31 là Quế Anh. WF14 là Hà Anh. WF08 là Vân Anh. Khách mua nhân vật, nhận hệ thống Automation phía sau.", "Mỗi AI Employee được xây dựng để giải quyết một công việc cụ thể trong doanh nghiệp. Khi triển khai, bạn không chỉ sở hữu một AI mà còn nhận toàn bộ hệ thống Automation đã được thiết kế, kiểm thử và vận hành thực tế."),
("Không ép khách mua lớn ngay. Khách có thể sở hữu một AI trước, thấy hiệu quả rồi nâng cấp thành phòng ban Automation.", "Triển khai từ một AI Employee theo đúng nhu cầu hiện tại của doanh nghiệp. Khi hoạt động mở rộng, có thể bổ sung thêm AI Employees để hình thành một hệ thống Automation hoàn chỉnh mà không cần thay đổi nền tảng."),
("Bắt đầu bằng một AI Employee, rồi mở rộng thành hệ thống.", "Bắt đầu với một AI Employee, mở rộng thành đội ngũ AI khi doanh nghiệp sẵn sàng."),
])

rep('src/app/automation/[slug]/page.tsx', [
("AI Employee xuất hiện trước khách", "AI Employee dành cho doanh nghiệp của bạn"),
("Workflow đứng phía sau", "Hệ thống Automation hỗ trợ"),
("Đặt lịch Demo 15 phút", "Đăng ký Demo 15 phút"),
("Workflow này hoạt động thế nào?", "Hệ thống này vận hành như thế nào?"),
("Ai đang làm việc này?", "AI Employee nào phụ trách công việc này?"),
("← Quay lại Build In Public", "← Quay lại AI Marketplace"),
("/ Powered Workflow", "/ Automation System"),
])

rep('src/components/Footer.tsx', [
("Experience Platform: mọi content ngoài kênh dẫn về đây để khách gặp AI Employees, xem demo và quyết định mua Automation.", "AI Employees Marketplace dành cho doanh nghiệp muốn sở hữu đội ngũ AI làm việc 24/7: từ Voice AI, CRM, Dashboard đến Sales và Content Automation."),
("Sales Hub", "Giải pháp"),
("Workflow Marketplace", "AI Employees Marketplace"),
("Pricing", "Bảng giá"),
("Featured AI", "AI nổi bật"),
("Contact", "Liên hệ tư vấn"),
("Sở hữu AI Employee", "Chọn AI Employee"),
])

rep('src/data/site.ts', [
("Vân Anh cập nhật chỉ số và cảnh báo cho đội sale.", "Vân Anh cập nhật chỉ số, cảnh báo và báo cáo tiến độ cho chủ doanh nghiệp."),
("Showroom công nghệ để bán cho đội sale BĐS và chuyển đổi sang ngành khác.", "Giải pháp AI Sales Automation dành cho doanh nghiệp bất động sản: tiếp nhận khách hàng 24/7, tự động ghi nhận CRM, phân loại khách tiềm năng và hỗ trợ đội ngũ sales tăng tỷ lệ chuyển đổi."),
("Không bán bất động sản, bán Automation cho đội sales BĐS.", "Demo AI Sales Automation cho doanh nghiệp bất động sản và có thể chuyển đổi sang nhiều ngành khác."),
("BĐS là ngành dễ hiểu và nhiều tiền.", "Bất động sản là ngành có nhu cầu phản hồi nhanh, quản lý lead tốt và theo sát khách hàng liên tục."),
("Demo Voice → CRM → Dashboard khiến khách thấy ngay giá trị.", "Demo Voice → Transcript → CRM → Dashboard giúp doanh nghiệp thấy rõ cách AI xử lý lead từ đầu đến cuối."),
("Cùng một khung có thể chuyển sang ngành khác.", "Cùng một mô hình có thể chuyển đổi sang spa, nha khoa, giáo dục, bảo hiểm, tuyển sinh hoặc nhiều ngành dịch vụ khác."),
])

rep('src/lib/salesCopy.ts', [
("problemTitle:'Vấn đề khách đang gặp'", "problemTitle:'Vấn đề doanh nghiệp đang gặp'"),
("solutionTitle:'Workflow giải quyết'", "solutionTitle:'AI Employee giải quyết'"),
("ctaLabel: `Tôi muốn sở hữu ${plainName.split(' — ')[0]}`", "ctaLabel: `Sở hữu ${plainName.split(' — ')[0]}`"),
])

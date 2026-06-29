import { employees, type Workflow, type Employee, type SystemItem } from '@/data/site';

export type WorkflowSalesCopy = {
  headline: string;
  plainName: string;
  problemTitle: string;
  problems: string[];
  solutionTitle: string;
  solutions: string[];
  results: string[];
  simpleFlow: string[];
  customerPromise: string;
  primaryEmployeeSlug: string;
  ctaLabel: string;
};

const genericProblems = ['Làm thủ công mất thời gian.', 'Dữ liệu bị rời rạc.', 'Không có người theo dõi đều 24/7.'];
const genericSolutions = ['Chuẩn hóa input/output.', 'Tự động vận hành quy trình.', 'Đưa kết quả về CRM/dashboard.'];
const genericResults = ['Tiết kiệm thời gian.', 'Ít bỏ sót việc.', 'Có dữ liệu để quản lý.'];

export const workflowSalesCopy: Record<string, WorkflowSalesCopy> = {
  wf00: copy('Biến hành trình founder thành bản đồ nội dung bán hàng.', 'Kim Anh — Content Planner Automation', 'kim-anh', ['Không biết hôm nay đăng gì.', 'Câu chuyện thật chưa thành hệ thống.', 'Content không có lộ trình.'], ['Tạo event library.', 'Chia hành trình thành chủ đề.', 'Đẩy sang WF01 viết bài.'], ['Có content roadmap.', 'Có ý tưởng dài hạn.', 'Dễ scale kênh nội dung.'], ['Founder Story', 'Kim Anh lập kế hoạch', 'Content Roadmap']),
  wf01: copy('Tự viết bài Facebook theo giọng founder.', 'Huyền Anh — Story Writer Automation', 'huyen-anh', ['Có ý tưởng nhưng không viết đều.', 'Giọng văn dễ bị quảng cáo.', 'Mất thời gian viết tay.'], ['Viết theo event.', 'Giữ giọng founder.', 'Tạo hook/caption/hashtag.'], ['Bài đăng hoàn chỉnh.', 'Giọng tự nhiên.', 'Content queue sẵn sàng.'], ['Event', 'Huyền Anh viết bài', 'Facebook Post']),
  wf02: copy('Tự chọn hướng hình ảnh kể chuyện cho từng bài.', 'Lam Anh — Visual Director Automation', 'lam-anh', ['Ảnh đẹp nhưng không đúng câu chuyện.', 'Ảnh stock làm mất trust.', 'Không biết bài nào cần bằng chứng vận hành thật.'], ['Đọc nội dung.', 'Chọn visual strategy.', 'Tạo visual brief.'], ['Ảnh bám câu chuyện.', 'Visual đồng bộ.', 'Giảm ảnh AI vô hồn.'], ['Caption', 'Lam Anh chọn visual', 'Visual Brief']),
  wf03: copy('Tự tạo prompt ảnh và image job đúng ngữ cảnh.', 'Việt Anh — Image Job Automation', 'viet-anh', genericProblems, genericSolutions, genericResults, ['Visual Brief', 'Image Job', 'Render Ready']),
  wf04: copy('Tự render ảnh, lưu link và cập nhật trạng thái.', 'Việt Anh — Image Generator Automation', 'viet-anh', genericProblems, genericSolutions, genericResults, ['Image Job', 'Render', 'Image URL']),
  wf05: copy('Mai Anh đăng bài Fanpage đều đặn và lưu post ID.', 'Mai Anh — Publishing Automation', 'mai-anh', ['Có bài nhưng quên đăng.', 'Không lưu post ID.', 'Không nối được analytics.'], ['Đăng theo lịch.', 'Lưu publish log.', 'Đẩy sang WF08 đo lường.'], ['Fanpage đều bài.', 'Có log.', 'Có dữ liệu đo.'], ['Content Package', 'Mai Anh đăng bài', 'Post ID']),
  wf06: copy('Tự chuẩn bị bản đăng Facebook cá nhân cho founder.', 'Mai Anh — Personal Publisher', 'mai-anh', genericProblems, genericSolutions, genericResults, ['Content Queue', 'Chỉnh giọng', 'Personal Post']),
  wf08: copy('Vân Anh theo dõi dashboard và báo cáo hệ thống.', 'Vân Anh — Dashboard Automation', 'van-anh', ['Không biết hệ thống nào đang chạy.', 'Không nhìn thấy số liệu tổng.', 'Không có cảnh báo sớm.'], ['Gom dữ liệu về dashboard.', 'Tạo report.', 'Hiển thị trạng thái hệ thống.'], ['Chủ doanh nghiệp nhìn thấy hệ thống.', 'Biết điểm nghẽn.', 'Ra quyết định bằng dữ liệu.'], ['Logs', 'Vân Anh đồng bộ', 'Dashboard']),
  wf09: copy('Minh Anh giúp hệ thống học từ dữ liệu cũ.', 'Minh Anh — Learning Automation', 'minh-anh', ['Làm nhiều nhưng không rút kinh nghiệm.', 'Lỗi lặp lại.', 'Không biết tối ưu gì.'], ['Đọc analytics.', 'Tìm pattern.', 'Đề xuất vòng sau.'], ['Learning memory.', 'Next strategy.', 'Hệ thống tốt dần.'], ['Analytics', 'Minh Anh học', 'Next Action']),
  wf12: copy('Thủy Anh biến inbox thành lead có dữ liệu.', 'Thủy Anh — Chat Automation', 'thuy-anh', ['Inbox bị trôi.', 'Không ghi nguồn lead.', 'Không biết khách hỏi gì trước đó.'], ['Trả lời bước đầu.', 'Thu thông tin.', 'Đẩy CRM.'], ['Có lead từ chat.', 'Có lịch sử.', 'Có follow-up.'], ['Inbox', 'Thủy Anh hỏi đáp', 'CRM Lead']),
  wf14: copy('Hà Anh không để bất kỳ khách hàng nào bị quên.', 'Hà Anh — CRM Automation', 'ha-anh', ['Lead nằm rải rác.', 'Không chấm điểm HOT/WARM/COLD.', 'Sale quên follow-up.'], ['Tạo CRM lead.', 'Gắn nhu cầu/ngân sách/timeline.', 'Tạo next action.'], ['CRM sạch.', 'Lead có ưu tiên.', 'Sale biết việc tiếp theo.'], ['Lead Data', 'Hà Anh ghi CRM', 'Next Task']),
  wf22: copy('Bảo Anh biến mục tiêu thành việc cần làm.', 'Bảo Anh — COO Automation', 'bao-anh', genericProblems, genericSolutions, genericResults, ['CEO Goal', 'Bảo Anh phân tích', 'Task List']),
  wf23: copy('Giang Anh route task và theo dõi execution.', 'Giang Anh — Execution Manager', 'giang-anh', ['Việc bị rơi giữa các khâu xử lý.', 'Không biết ai xử lý.', 'Không có trạng thái rõ.'], ['Route task.', 'Update status.', 'Báo lỗi.'], ['Task rõ người xử lý.', 'Biết tiến độ.', 'Ít quên việc.'], ['Task', 'Giang Anh route', 'Done/Issue']),
  wf30: copy('Duyên Anh chăm sóc lead và follow-up tự động.', 'Duyên Anh — Sales Follow-up Automation', 'duyen-anh', ['Khách hỏi xong bị bỏ quên.', 'Follow-up không đúng lúc.', 'Không có memory khách.'], ['Đọc CRM.', 'Soạn câu trả lời/chăm sóc.', 'Tạo next action.'], ['Khách được chăm sóc.', 'Lead ấm hơn.', 'Sale đỡ thủ công.'], ['CRM Lead', 'Duyên Anh follow-up', 'Next Action']),
  wf31: copy('Quế Anh nghe máy 24/7 và hỏi nhu cầu khách hàng.', 'Quế Anh — Voice AI Automation', 'que-anh', ['Lead gọi lúc sale bận.', 'Không ghi đủ nhu cầu.', 'Khách nóng bị mất.'], ['Nghe máy bằng Voice AI.', 'Hỏi nhu cầu/ngân sách/timeline.', 'Đẩy transcript sang CRM.'], ['Có transcript.', 'Có lead HOT.', 'Sale nhận task.'], ['Khách gọi', 'Quế Anh tư vấn', 'CRM + Task']),
  wf31a: copy('Voice Gateway đưa cuộc gọi thật vào hệ thống.', 'Việt Anh — Voice Gateway Automation', 'viet-anh', genericProblems, genericSolutions, genericResults, ['Website', 'LiveKit Room', 'Agent']),
  wf31d: copy('Trâm Anh biến cuộc gọi thành transcript và summary.', 'Trâm Anh — Transcript Automation', 'tram-anh', ['Nghe xong không có dữ liệu.', 'Không trích được ngân sách/timeline.', 'Không đồng bộ CRM.'], ['Ghi transcript.', 'Tóm tắt nhu cầu.', 'Trích field quan trọng.'], ['Có text cuộc gọi.', 'Có summary.', 'CRM đủ dữ liệu.'], ['Voice', 'Trâm Anh tóm tắt', 'Structured Data']),
};

function copy(headline:string, plainName:string, primaryEmployeeSlug:string, problems:string[], solutions:string[], results:string[], simpleFlow:string[]): WorkflowSalesCopy {
  return { headline, plainName, problemTitle:'Vấn đề doanh nghiệp đang gặp', problems, solutionTitle:'AI Employee giải quyết', solutions, results, simpleFlow, customerPromise: headline, primaryEmployeeSlug, ctaLabel: `Sở hữu ${plainName.split(' — ')[0]}` };
}

export function getWorkflowSalesCopy(workflow: Workflow) { return workflowSalesCopy[workflow.slug] || copy(workflow.purpose, workflow.name, workflow.employeeSlugs[0] || 'que-anh', genericProblems, genericSolutions, genericResults, ['Input','Workflow','Output']); }
export function getPrimaryEmployee(workflow: Workflow): Employee | undefined { const copy = getWorkflowSalesCopy(workflow); return employees.find((employee) => employee.slug === copy.primaryEmployeeSlug) || employees.find((employee) => workflow.employeeSlugs.includes(employee.slug)); }

export function employeePromise(employee: Employee) {
  const map: Record<string, { headline: string; promise: string; intro: string; output: string[] }> = {
    'que-anh': { headline:'Quế Anh tiếp nhận cuộc gọi, hỏi nhu cầu và cập nhật CRM tự động.', promise:'Không bỏ sót khách gọi đến, sale nhận đủ thông tin để chăm sóc tiếp.', intro:'Quế Anh — AI Voice Sales cho doanh nghiệp.', output:['Cuộc gọi được tiếp nhận','Transcript cuộc gọi','Lead HOT trong CRM','Task cho sale'] },
    'ha-anh': { headline:'Hà Anh tạo lead, chấm điểm khách hàng và nhắc việc chăm sóc tiếp.', promise:'CRM luôn có dữ liệu rõ ràng, sale biết khách nào cần ưu tiên.', intro:'Hà Anh — CRM Automation cho doanh nghiệp.', output:['CRM lead','Lead score HOT/WARM/COLD','Customer memory','Next action'] },
    'van-anh': { headline:'Vân Anh hiển thị dashboard, cảnh báo và báo cáo vận hành.', promise:'Chủ doanh nghiệp nhìn thấy số liệu quan trọng để ra quyết định nhanh hơn.', intro:'Vân Anh — Dashboard Automation cho doanh nghiệp.', output:['Dashboard realtime','Workflow status','Cảnh báo lỗi','CEO report'] },
    'tram-anh': { headline:'Trâm Anh biến cuộc gọi và hội thoại thành dữ liệu có thể dùng ngay.', promise:'Doanh nghiệp có transcript, tóm tắt nhu cầu và các trường quan trọng cho CRM.', intro:'Trâm Anh — Transcript & Summary Automation.', output:['Transcript','Summary','Budget/timeline/project fields'] },
    'mai-anh': { headline:'Mai Anh đăng bài đúng lịch và lưu dữ liệu để đo lường hiệu quả.', promise:'Nội dung được xuất bản đều đặn, có log và có dữ liệu phục vụ tối ưu.', intro:'Mai Anh — Publishing Automation.', output:['Post package','Publish log','Post ID'] },
    'lan-anh': { headline:'Lan Anh vận hành lịch đăng Facebook tự động cho doanh nghiệp.', promise:'Doanh nghiệp có nội dung đều đặn để nuôi niềm tin và dẫn khách về website.', intro:'Lan Anh — Facebook Content Automation.', output:['Facebook post','Content queue','Schedule'] },
    'thuy-anh': { headline:'Thủy Anh xử lý chat, thu thông tin và chuyển dữ liệu về CRM.', promise:'Inbox không bị trôi, khách được phản hồi nhanh và có dữ liệu để chăm sóc tiếp.', intro:'Thủy Anh — Chat & Messenger Automation.', output:['Chat reply','Lead capture','CRM sync'] },
    'phuong-anh': { headline:'Phương Anh đặt lịch, xác nhận lịch hẹn và giảm thao tác thủ công.', promise:'Khách dễ chọn lịch demo, lịch xem nhà hoặc lịch tư vấn mà không cần chờ nhân viên.', intro:'Phương Anh — Booking Automation.', output:['Booking','Calendar task','Confirmation'] },
    'kim-anh': { headline:'Kim Anh lập kế hoạch nội dung để doanh nghiệp xuất hiện đều và đúng hướng.', promise:'Hành trình thương hiệu được chuyển thành roadmap nội dung có mục tiêu bán hàng.', intro:'Kim Anh — Content Planner Automation.', output:['Content roadmap','Event library','Ý tưởng bài viết'] },
    'huyen-anh': { headline:'Huyền Anh viết bài theo giọng thương hiệu để duy trì sự hiện diện đều đặn.', promise:'Doanh nghiệp có nội dung gần gũi, nhất quán và dễ tạo niềm tin.', intro:'Huyền Anh — Story Writer Automation.', output:['Hook','Caption','Full post'] },
    'lam-anh': { headline:'Lam Anh định hướng hình ảnh để nội dung kể chuyện rõ hơn.', promise:'Mỗi bài viết có visual phù hợp, tăng độ tin cậy và dễ giữ người xem.', intro:'Lam Anh — Visual Director Automation.', output:['Visual brief','Image direction','Creative asset'] },
    'viet-anh': { headline:'Việt Anh kết nối API, webhook và các nền tảng để hệ thống chạy thật.', promise:'Doanh nghiệp có luồng dữ liệu liền mạch giữa website, voice, CRM và dashboard.', intro:'Việt Anh — Integration Automation.', output:['Webhook','API connection','Thiết lập hệ thống'] },
    'hai-anh': { headline:'Hải Anh thiết kế kiến trúc để giải pháp có thể mở rộng sang nhiều ngành.', promise:'Doanh nghiệp có nền tảng ổn định, dễ nâng cấp khi cần thêm AI Employee.', intro:'Hải Anh — System Architect Automation.', output:['System map','Data flow','Scalable architecture'] },
    'bao-anh': { headline:'Bảo Anh điều phối mục tiêu, ưu tiên và kế hoạch vận hành.', promise:'Chủ doanh nghiệp biết việc nào cần làm trước và đội ngũ bám đúng tiến độ.', intro:'Bảo Anh — COO Automation.', output:['Priority','Operations report','Execution plan'] },
    'giang-anh': { headline:'Giang Anh giao task, theo dõi trạng thái và báo lỗi khi có điểm nghẽn.', promise:'Công việc rõ người xử lý, rõ tiến độ và giảm nguy cơ bị bỏ quên.', intro:'Giang Anh — Execution Manager Automation.', output:['Assigned task','Status update','Issue log'] },
    'duyen-anh': { headline:'Duyên Anh chăm sóc khách hàng sau khi có lead để không mất cơ hội bán hàng.', promise:'Khách được nhắc lại đúng thời điểm, sale có next action rõ ràng.', intro:'Duyên Anh — Customer Care Automation.', output:['Follow-up message','Care sequence','Next action'] },
    'minh-anh': { headline:'Minh Anh phân tích dữ liệu để cải thiện nội dung và quy trình bán hàng.', promise:'Doanh nghiệp biết kênh nào hiệu quả, nội dung nào tốt và bước nào cần tối ưu.', intro:'Minh Anh — Learning Automation.', output:['Learning memory','Insight','Next strategy'] },
    'ngoc-anh': { headline:'Ngọc Anh kiểm tra chất lượng đầu ra trước khi dữ liệu đi tiếp.', promise:'Giảm lỗi sai định dạng, thiếu thông tin và các vấn đề gây mất thời gian sửa lại.', intro:'Ngọc Anh — QA Automation.', output:['Checklist','QA report','Error prevention'] },
    'my-anh': { headline:'Mỹ Anh đóng gói thông điệp để giải pháp dễ hiểu và dễ bán hơn.', promise:'Sản phẩm AI có lời kể rõ ràng, dễ giới thiệu với khách hàng.', intro:'Mỹ Anh — Brand Creative Automation.', output:['Creative angle','Hook','Brand message'] },
  };
  return map[employee.slug] || { headline:`${employee.name} phụ trách ${employee.role} cho doanh nghiệp.`, promise:employee.bio, intro:`${employee.name} — ${employee.role}.`, output: employee.kpis };
}

export function systemSalesName(system: SystemItem) {
  const map: Record<string,string> = {
    g1:'Gói WF đăng Facebook',
    g2:'Gói Lead Capture Automation',
    g3:'Gói CRM & Sales Automation',
    g4:'Gói Quản lý Workflow',
    g5:'Gói Dashboard & Learning',
    'real-estate-sales-ai':'Gói AI Sales BĐS Flagship',
  };
  return map[system.slug] || system.name;
}

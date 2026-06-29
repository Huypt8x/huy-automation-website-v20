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
const genericSolutions = ['Chuẩn hóa input/output.', 'Tự động chạy workflow.', 'Đưa kết quả về CRM/dashboard.'];
const genericResults = ['Tiết kiệm thời gian.', 'Ít bỏ sót việc.', 'Có dữ liệu để quản lý.'];

export const workflowSalesCopy: Record<string, WorkflowSalesCopy> = {
  wf00: copy('Biến hành trình founder thành bản đồ nội dung bán hàng.', 'Kim Anh — Content Planner Automation', 'kim-anh', ['Không biết hôm nay đăng gì.', 'Câu chuyện thật chưa thành hệ thống.', 'Content không có lộ trình.'], ['Tạo event library.', 'Chia hành trình thành chủ đề.', 'Đẩy sang WF01 viết bài.'], ['Có content roadmap.', 'Có ý tưởng dài hạn.', 'Dễ scale kênh nội dung.'], ['Founder Story', 'Kim Anh lập kế hoạch', 'Content Roadmap']),
  wf01: copy('Tự viết bài Facebook theo giọng founder.', 'Huyền Anh — Story Writer Automation', 'huyen-anh', ['Có ý tưởng nhưng không viết đều.', 'Giọng văn dễ bị quảng cáo.', 'Mất thời gian viết tay.'], ['Viết theo event.', 'Giữ giọng founder.', 'Tạo hook/caption/hashtag.'], ['Bài đăng hoàn chỉnh.', 'Giọng tự nhiên.', 'Content queue sẵn sàng.'], ['Event', 'Huyền Anh viết bài', 'Facebook Post']),
  wf02: copy('Tự chọn hướng hình ảnh kể chuyện cho từng bài.', 'Lam Anh — Visual Director Automation', 'lam-anh', ['Ảnh đẹp nhưng không đúng câu chuyện.', 'Ảnh stock làm mất trust.', 'Không biết bài nào cần workflow thật.'], ['Đọc nội dung.', 'Chọn visual strategy.', 'Tạo visual brief.'], ['Ảnh bám câu chuyện.', 'Visual đồng bộ.', 'Giảm ảnh AI vô hồn.'], ['Caption', 'Lam Anh chọn visual', 'Visual Brief']),
  wf03: copy('Tự tạo prompt ảnh và image job đúng ngữ cảnh.', 'Việt Anh — Image Job Automation', 'viet-anh', genericProblems, genericSolutions, genericResults, ['Visual Brief', 'Image Job', 'Render Ready']),
  wf04: copy('Tự render ảnh, lưu link và cập nhật trạng thái.', 'Việt Anh — Image Generator Automation', 'viet-anh', genericProblems, genericSolutions, genericResults, ['Image Job', 'Render', 'Image URL']),
  wf05: copy('Mai Anh đăng bài Fanpage đều đặn và lưu post ID.', 'Mai Anh — Publishing Automation', 'mai-anh', ['Có bài nhưng quên đăng.', 'Không lưu post ID.', 'Không nối được analytics.'], ['Đăng theo lịch.', 'Lưu publish log.', 'Đẩy sang WF08 đo lường.'], ['Fanpage đều bài.', 'Có log.', 'Có dữ liệu đo.'], ['Content Package', 'Mai Anh đăng bài', 'Post ID']),
  wf06: copy('Tự chuẩn bị bản đăng Facebook cá nhân cho founder.', 'Mai Anh — Personal Publisher', 'mai-anh', genericProblems, genericSolutions, genericResults, ['Content Queue', 'Chỉnh giọng', 'Personal Post']),
  wf08: copy('Vân Anh theo dõi dashboard và báo cáo hệ thống.', 'Vân Anh — Dashboard Automation', 'van-anh', ['Không biết workflow nào đang chạy.', 'Không nhìn thấy số liệu tổng.', 'Không có cảnh báo sớm.'], ['Gom dữ liệu về dashboard.', 'Tạo report.', 'Hiển thị trạng thái hệ thống.'], ['Founder nhìn thấy hệ thống.', 'Biết điểm nghẽn.', 'Ra quyết định bằng dữ liệu.'], ['Logs', 'Vân Anh đồng bộ', 'Dashboard']),
  wf09: copy('Minh Anh giúp hệ thống học từ dữ liệu cũ.', 'Minh Anh — Learning Automation', 'minh-anh', ['Làm nhiều nhưng không rút kinh nghiệm.', 'Lỗi lặp lại.', 'Không biết tối ưu gì.'], ['Đọc analytics.', 'Tìm pattern.', 'Đề xuất vòng sau.'], ['Learning memory.', 'Next strategy.', 'Hệ thống tốt dần.'], ['Analytics', 'Minh Anh học', 'Next Action']),
  wf12: copy('Thủy Anh biến inbox thành lead có dữ liệu.', 'Thủy Anh — Chat Automation', 'thuy-anh', ['Inbox bị trôi.', 'Không ghi nguồn lead.', 'Không biết khách hỏi gì trước đó.'], ['Trả lời bước đầu.', 'Thu thông tin.', 'Đẩy CRM.'], ['Có lead từ chat.', 'Có lịch sử.', 'Có follow-up.'], ['Inbox', 'Thủy Anh hỏi đáp', 'CRM Lead']),
  wf14: copy('Hà Anh không để bất kỳ khách hàng nào bị quên.', 'Hà Anh — CRM Automation', 'ha-anh', ['Lead nằm rải rác.', 'Không chấm điểm HOT/WARM/COLD.', 'Sale quên follow-up.'], ['Tạo CRM lead.', 'Gắn nhu cầu/ngân sách/timeline.', 'Tạo next action.'], ['CRM sạch.', 'Lead có ưu tiên.', 'Sale biết việc tiếp theo.'], ['Lead Data', 'Hà Anh ghi CRM', 'Next Task']),
  wf22: copy('Bảo Anh biến mục tiêu thành việc cần làm.', 'Bảo Anh — COO Automation', 'bao-anh', genericProblems, genericSolutions, genericResults, ['CEO Goal', 'Bảo Anh phân tích', 'Task List']),
  wf23: copy('Giang Anh route task và theo dõi execution.', 'Giang Anh — Execution Manager', 'giang-anh', ['Việc bị rơi giữa các workflow.', 'Không biết ai xử lý.', 'Không có trạng thái rõ.'], ['Route task.', 'Update status.', 'Báo lỗi.'], ['Task rõ người xử lý.', 'Biết tiến độ.', 'Ít quên việc.'], ['Task', 'Giang Anh route', 'Done/Issue']),
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
    'que-anh': { headline:'Tôi là Quế Anh. Sở hữu em là sở hữu gói Voice AI Automation.', promise:'Em nghe máy 24/7, hỏi nhu cầu khách, ghi transcript và đẩy dữ liệu sang CRM cho sale.', intro:'Xin chào, tôi là Quế Anh — Voice AI của Huy Automation AI.', output:['Cuộc gọi được tiếp nhận','Transcript cuộc gọi','Lead HOT trong CRM','Task cho sale'] },
    'ha-anh': { headline:'Tôi là Hà Anh. Sở hữu em là sở hữu gói CRM AI.', promise:'Em tạo lead, chấm điểm, ghi nhớ nhu cầu và không để khách hàng nào bị quên.', intro:'Xin chào, tôi là Hà Anh — CRM AI của Huy Automation AI.', output:['CRM lead','Lead score HOT/WARM/COLD','Customer memory','Next action'] },
    'van-anh': { headline:'Tôi là Vân Anh. Sở hữu em là sở hữu dashboard theo dõi hệ thống.', promise:'Em theo dõi workflow, số liệu, cảnh báo lỗi và báo cáo cho chủ doanh nghiệp.', intro:'Xin chào, tôi là Vân Anh — Dashboard AI của Huy Automation AI.', output:['Dashboard realtime','Workflow status','Cảnh báo lỗi','CEO report'] },
    'tram-anh': { headline:'Tôi là Trâm Anh. Tôi biến hội thoại thành dữ liệu.', promise:'Em ghi transcript, tóm tắt nhu cầu và trích entity quan trọng cho CRM.', intro:'Xin chào, tôi là Trâm Anh — Transcript & Summary AI.', output:['Transcript','Summary','Budget/timeline/project fields'] },
    'mai-anh': { headline:'Tôi là Mai Anh. Tôi đăng bài đúng lịch và lưu dữ liệu để đo lường.', promise:'Em giúp content không nằm trong bản nháp mà được xuất bản đều đặn.', intro:'Xin chào, tôi là Mai Anh — Publishing AI.', output:['Post package','Publish log','Post ID'] },
    'lan-anh': { headline:'Tôi là Lan Anh. Tôi vận hành gói đăng Facebook tự động.', promise:'Em giúp doanh nghiệp có nội dung đều đặn trên Facebook để kéo lead về website.', intro:'Xin chào, tôi là Lan Anh — Facebook Content AI.', output:['Facebook post','Content queue','Schedule'] },
    'thuy-anh': { headline:'Tôi là Thủy Anh. Tôi xử lý chat và Messenger tự động.', promise:'Em trả lời inbox, thu lead và chuyển dữ liệu về CRM.', intro:'Xin chào, tôi là Thủy Anh — Chat Automation AI.', output:['Chat reply','Lead capture','CRM sync'] },
    'phuong-anh': { headline:'Tôi là Phương Anh. Tôi đặt lịch và xác nhận cuộc hẹn.', promise:'Em giúp khách chọn lịch demo, lịch xem nhà hoặc lịch tư vấn mà không cần nhắn tay.', intro:'Xin chào, tôi là Phương Anh — Booking AI.', output:['Booking','Calendar task','Confirmation'] },
    'kim-anh': { headline:'Tôi là Kim Anh. Tôi lập kế hoạch nội dung từ hành trình founder.', promise:'Em biến Build In Public thành content roadmap bán hàng.', intro:'Xin chào, tôi là Kim Anh — Content Planner AI.', output:['Content roadmap','Event library','Ý tưởng bài viết'] },
    'huyen-anh': { headline:'Tôi là Huyền Anh. Tôi viết bài theo giọng founder.', promise:'Em giúp thương hiệu cá nhân có tiếng nói đều và thật.', intro:'Xin chào, tôi là Huyền Anh — Story Writer AI.', output:['Hook','Caption','Full post'] },
    'lam-anh': { headline:'Tôi là Lam Anh. Tôi giúp mỗi bài có hình ảnh biết kể chuyện.', promise:'Em tạo visual direction để nội dung có chiều sâu và trust.', intro:'Xin chào, tôi là Lam Anh — Visual Director AI.', output:['Visual brief','Image direction','Creative asset'] },
    'viet-anh': { headline:'Tôi là Việt Anh. Tôi nối API và biến ý tưởng thành workflow chạy thật.', promise:'Em xử lý webhook, API, LiveKit, CRM và các tích hợp kỹ thuật.', intro:'Xin chào, tôi là Việt Anh — Integration AI.', output:['Webhook','API connection','Workflow setup'] },
    'hai-anh': { headline:'Tôi là Hải Anh. Tôi thiết kế kiến trúc hệ thống có thể chuyển ngành.', promise:'Em giúp workflow không chỉ chạy cho BĐS mà có thể đổi sang ngành khác.', intro:'Xin chào, tôi là Hải Anh — System Architect AI.', output:['System map','Data flow','Scalable architecture'] },
    'bao-anh': { headline:'Tôi là Bảo Anh. Tôi điều phối hệ thống như COO AI.', promise:'Em giúp chủ doanh nghiệp biết việc nào cần ưu tiên.', intro:'Xin chào, tôi là Bảo Anh — COO Automation AI.', output:['Priority','Operations report','Execution plan'] },
    'giang-anh': { headline:'Tôi là Giang Anh. Tôi route task và theo dõi việc đang chạy.', promise:'Em giúp hệ thống biết ai xử lý việc gì và trạng thái ra sao.', intro:'Xin chào, tôi là Giang Anh — Execution Manager AI.', output:['Assigned task','Status update','Issue log'] },
    'duyen-anh': { headline:'Tôi là Duyên Anh. Tôi chăm sóc khách hàng sau khi có lead.', promise:'Em follow-up đúng lúc để lead không nguội.', intro:'Xin chào, tôi là Duyên Anh — Customer Care AI.', output:['Follow-up message','Care sequence','Next action'] },
    'minh-anh': { headline:'Tôi là Minh Anh. Tôi giúp hệ thống học từ dữ liệu cũ.', promise:'Em rút kinh nghiệm từ analytics để vòng sau tốt hơn.', intro:'Xin chào, tôi là Minh Anh — Learning AI.', output:['Learning memory','Insight','Next strategy'] },
    'ngoc-anh': { headline:'Tôi là Ngọc Anh. Tôi kiểm tra chất lượng output.', promise:'Em giúp hệ thống hạn chế lỗi, sai định dạng và thiếu dữ liệu.', intro:'Xin chào, tôi là Ngọc Anh — QA AI.', output:['Checklist','QA report','Error prevention'] },
    'my-anh': { headline:'Tôi là Mỹ Anh. Tôi đóng gói thông điệp thương hiệu.', promise:'Em giúp nhân vật AI và workflow có lời kể dễ bán.', intro:'Xin chào, tôi là Mỹ Anh — Brand Creative AI.', output:['Creative angle','Hook','Brand message'] },
  };
  return map[employee.slug] || { headline:`Tôi là ${employee.name}, ${employee.role}.`, promise:employee.bio, intro:`Xin chào, tôi là ${employee.name}.`, output: employee.kpis };
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

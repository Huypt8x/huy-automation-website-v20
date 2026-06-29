export type MediaItem = {
  type: 'image' | 'video' | 'file' | 'embed';
  title: string;
  url: string;
  caption?: string;
};

export type Employee = {
  id: string;
  name: string;
  slug: string;
  role: string;
  department: string;
  avatarUrl?: string;
  bio: string;
  missions: string[];
  kpis: string[];
  workflowIds: string[];
  systemIds: string[];
  media?: MediaItem[];
};

export type Department = {
  id: string;
  name: string;
  slug: string;
  description: string;
  mission: string;
  kpis: string[];
  employeeSlugs: string[];
  workflowIds: string[];
  systemIds: string[];
  media?: MediaItem[];
};

export type Workflow = {
  id: string;
  slug: string;
  name: string;
  status: string;
  shortDescription: string;
  purpose: string;
  input: string;
  output: string;
  tools: string[];
  employeeSlugs: string[];
  systemIds: string[];
  lessons: string[];
  videoUrl?: string;
  imageUrl?: string;
  media?: MediaItem[];
  offer: { title: string; includes: string[]; cta: string };
};

export type SystemItem = {
  id: string;
  slug: string;
  name: string;
  description: string;
  purpose: string;
  workflows: string[];
  employees: string[];
  deliverables: string[];
  videoUrl?: string;
  imageUrl?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  relatedWorkflows: string[];
  relatedSystems: string[];
  imageUrl?: string;
  videoUrl?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  body: string[];
  imageUrl?: string;
  videoUrl?: string;
};

export function employeeSlug(name: string) {
  return name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export const departments: Department[] = [
  { id: 'DEPT-CONTENT', name: 'Content Automation', slug: 'content-automation', description: 'Lập kế hoạch, viết bài, tạo visual và đăng Facebook tự động.', mission: 'Biến hành trình build công ty AI thành tài sản nội dung bán hàng.', kpis: ['Content', 'Visual', 'Publishing'], employeeSlugs: ['lan-anh','huyen-anh','kim-anh','lam-anh','mai-anh','my-anh'], workflowIds: ['WF00','WF01','WF02','WF03','WF04','WF05','WF06'], systemIds: ['G1'] },
  { id: 'DEPT-SALES', name: 'Sales Automation', slug: 'sales-automation', description: 'Voice, chat, CRM, chăm sóc khách hàng và follow-up tự động.', mission: 'Biến lead thành pipeline có dữ liệu, có follow-up và có task cho sale.', kpis: ['Lead', 'CRM', 'Follow-up', 'Voice'], employeeSlugs: ['que-anh','ha-anh','thuy-anh','phuong-anh','duyen-anh'], workflowIds: ['WF12','WF14','WF30','WF31','WF31D'], systemIds: ['G2','G3','G6'] },
  { id: 'DEPT-OPS', name: 'Operations Automation', slug: 'operations-automation', description: 'Điều phối workflow, giao việc, xử lý lỗi và kết nối API.', mission: 'Biến quy trình thủ công thành hệ thống tự chạy có log, có trạng thái và có đường lui.', kpis: ['Execution', 'API', 'Workflow'], employeeSlugs: ['giang-anh','viet-anh','hai-anh','bao-anh'], workflowIds: ['WF22','WF23','WF24','WF31A'], systemIds: ['G4'] },
  { id: 'DEPT-DATA', name: 'Dashboard & Intelligence', slug: 'dashboard-intelligence', description: 'Dashboard, analytics, memory, learning và báo cáo quản trị.', mission: 'Giúp founder nhìn thấy hệ thống đang chạy gì, lỗi ở đâu và nên tối ưu gì tiếp theo.', kpis: ['Dashboard', 'Analytics', 'Learning'], employeeSlugs: ['van-anh','minh-anh','ngoc-anh','tram-anh'], workflowIds: ['WF08','WF09','WF31D'], systemIds: ['G5'] },
];

export const employees: Employee[] = [
  { id:'EMP-01', name:'Bảo Anh', slug:'bao-anh', role:'COO Automation', department:'Operations Automation', bio:'Bảo Anh điều phối tổng thể để các workflow không chạy rời rạc.', missions:['Theo dõi trạng thái vận hành.', 'Ưu tiên workflow cần xử lý.', 'Báo cáo điểm nghẽn cho founder.'], kpis:['Operations','Priority','Control'], workflowIds:['WF22','WF23'], systemIds:['G4'] },
  { id:'EMP-02', name:'Duyên Anh', slug:'duyen-anh', role:'Customer Care Automation', department:'Sales Automation', bio:'Duyên Anh chăm sóc và nhắc lại khách hàng đúng lúc.', missions:['Follow-up lead.', 'Gửi nhắc lịch.', 'Giữ khách không bị trôi.'], kpis:['Follow-up','Retention','Care'], workflowIds:['WF30','WF12'], systemIds:['G3'] },
  { id:'EMP-03', name:'Giang Anh', slug:'giang-anh', role:'Execution Manager', department:'Operations Automation', bio:'Giang Anh route task, theo dõi execution và ghi nhận lỗi.', missions:['Giao việc cho đúng AI.', 'Theo dõi IN_PROGRESS/DONE.', 'Báo lỗi khi workflow tắc.'], kpis:['Execution','Done','Issue'], workflowIds:['WF23'], systemIds:['G4'] },
  { id:'EMP-04', name:'Hà Anh', slug:'ha-anh', role:'CRM Automation', department:'Sales Automation', bio:'Hà Anh là gói CRM AI: không để lead nào bị quên.', missions:['Tạo lead trong CRM.', 'Gắn ngân sách, nhu cầu, mức độ nóng.', 'Đẩy task follow-up cho sale.'], kpis:['CRM','Lead Score','Pipeline'], workflowIds:['WF14','WF30','WF31'], systemIds:['G3','G6'], media:[{type:'video',title:'Hà Anh CRM Demo',url:'/media/videos/ha-anh-crm-demo.mp4',caption:'Video: Hà Anh cập nhật CRM, chấm điểm lead và tạo task follow-up cho đội sales.'}] },
  { id:'EMP-05', name:'Hải Anh', slug:'hai-anh', role:'System Architect', department:'Operations Automation', bio:'Hải Anh thiết kế kiến trúc để doanh nghiệp có thể triển khai AI Employees ổn định và mở rộng sang nhiều ngành.', missions:['Thiết kế data flow.', 'Chuẩn hóa hệ thống theo gói.', 'Đảm bảo mở rộng sang ngành khác.'], kpis:['Architecture','Scale','System Map'], workflowIds:['WF22','WF31A'], systemIds:['G4','G6'] },
  { id:'EMP-06', name:'Huyền Anh', slug:'huyen-anh', role:'Story Writer Automation', department:'Content Automation', bio:'Huyền Anh biến câu chuyện thật thành nội dung kéo khách về website.', missions:['Viết bài Facebook.', 'Giữ giọng founder.', 'Biến hành trình thành content.'], kpis:['Posts','Hook','Story'], workflowIds:['WF01'], systemIds:['G1'] },
  { id:'EMP-07', name:'Kim Anh', slug:'kim-anh', role:'Content Planner Automation', department:'Content Automation', bio:'Kim Anh lập kế hoạch nội dung dài hạn từ hành trình xây công ty AI.', missions:['Tạo event library.', 'Lập content roadmap.', 'Chọn chủ đề bán hàng.'], kpis:['Roadmap','Events','Ideas'], workflowIds:['WF00'], systemIds:['G1'] },
  { id:'EMP-08', name:'Lan Anh', slug:'lan-anh', role:'Facebook Content Automation', department:'Content Automation', bio:'Lan Anh đại diện gói workflow đăng Facebook đều đặn.', missions:['Chuẩn bị nội dung fanpage.', 'Đóng gói bài đăng.', 'Tối ưu lịch xuất bản.'], kpis:['Facebook','Queue','Schedule'], workflowIds:['WF01','WF05'], systemIds:['G1'] },
  { id:'EMP-09', name:'Lam Anh', slug:'lam-anh', role:'Visual Director Automation', department:'Content Automation', bio:'Lam Anh giúp nội dung có hình ảnh kể chuyện thay vì ảnh AI chung chung.', missions:['Chọn hướng hình.', 'Tạo visual brief.', 'Đồng bộ style thương hiệu.'], kpis:['Visual','Brief','Brand'], workflowIds:['WF02','WF03'], systemIds:['G1'] },
  { id:'EMP-10', name:'Mai Anh', slug:'mai-anh', role:'Publishing Automation', department:'Content Automation', bio:'Mai Anh đăng bài đúng lịch và lưu post ID để đo lường.', missions:['Đăng bài Facebook.', 'Lưu publish log.', 'Kết nối analytics.'], kpis:['Publish','Schedule','Post ID'], workflowIds:['WF05','WF06'], systemIds:['G1'] },
  { id:'EMP-11', name:'Minh Anh', slug:'minh-anh', role:'Learning Automation', department:'Dashboard & Intelligence', bio:'Minh Anh rút kinh nghiệm từ dữ liệu để vòng sau tốt hơn.', missions:['Đọc analytics.', 'Tìm pattern.', 'Đề xuất cải tiến.'], kpis:['Learning','Insight','Optimization'], workflowIds:['WF09'], systemIds:['G5'] },
  { id:'EMP-12', name:'Ngọc Anh', slug:'ngoc-anh', role:'QA & Compliance Automation', department:'Dashboard & Intelligence', bio:'Ngọc Anh kiểm tra chất lượng dữ liệu, nội dung và output.', missions:['Kiểm tra lỗi.', 'Chuẩn hóa output.', 'Đảm bảo chất lượng trước khi publish/demo.'], kpis:['QA','Accuracy','Checklist'], workflowIds:['WF07','WF24'], systemIds:['G4'] },
  { id:'EMP-13', name:'Mỹ Anh', slug:'my-anh', role:'Brand Creative Automation', department:'Content Automation', bio:'Mỹ Anh đóng gói thông điệp thương hiệu để video và website cùng một giọng.', missions:['Viết creative angle.', 'Đề xuất hook.', 'Đồng bộ thông điệp bán hàng.'], kpis:['Brand','Hook','Creative'], workflowIds:['WF00','WF02'], systemIds:['G1'] },
  { id:'EMP-14', name:'Phương Anh', slug:'phuong-anh', role:'Booking Automation', department:'Sales Automation', bio:'Phương Anh đặt lịch demo, lịch xem nhà hoặc lịch tư vấn mà không cần nhắn tay.', missions:['Đặt lịch.', 'Xác nhận thời gian.', 'Gửi task cho người phụ trách.'], kpis:['Booking','Calendar','Confirm'], workflowIds:['WF30','WF31'], systemIds:['G3','G6'] },
  { id:'EMP-15', name:'Quế Anh', slug:'que-anh', role:'Voice AI Automation', department:'Sales Automation', bio:'Quế Anh là AI Voice Sales: nghe máy, hỏi nhu cầu, ghi transcript, cập nhật CRM và hỗ trợ sales không bỏ sót khách.', missions:['Nghe cuộc gọi.', 'Hỏi nhu cầu khách.', 'Đẩy dữ liệu sang transcript/CRM.'], kpis:['Calls','Transcript','Qualified Lead'], workflowIds:['WF31','WF31A','WF31D'], systemIds:['G3','G6'], media:[{type:'video',title:'Quế Anh Voice AI Demo',url:'/media/videos/que-anh-voice-ai-demo.mp4',caption:'Video: Quế Anh nghe máy, hỏi nhu cầu, ghi transcript và chuyển lead vào CRM.'}] },
  { id:'EMP-16', name:'Trâm Anh', slug:'tram-anh', role:'Transcript & Summary Automation', department:'Dashboard & Intelligence', bio:'Trâm Anh biến hội thoại thành transcript, summary và dữ liệu có cấu trúc.', missions:['Ghi transcript.', 'Tóm tắt nhu cầu.', 'Trích entity: ngân sách, timeline, khu vực.'], kpis:['Transcript','Summary','Entities'], workflowIds:['WF31D'], systemIds:['G6','G5'] },
  { id:'EMP-17', name:'Thủy Anh', slug:'thuy-anh', role:'Chat & Messenger Automation', department:'Sales Automation', bio:'Thủy Anh xử lý chat, inbox và luồng Messenger tự động.', missions:['Trả lời tin nhắn.', 'Thu lead.', 'Chuyển lead sang CRM.'], kpis:['Chat','Inbox','Lead'], workflowIds:['WF12','WF30'], systemIds:['G2','G3'] },
  { id:'EMP-18', name:'Việt Anh', slug:'viet-anh', role:'API & Integration Automation', department:'Operations Automation', bio:'Việt Anh nối API, webhook, n8n, LiveKit, CRM và dashboard.', missions:['Kết nối API.', 'Xử lý webhook.', 'Đảm bảo hệ thống chạy thật.'], kpis:['API','Webhook','Integration'], workflowIds:['WF03','WF04','WF31A'], systemIds:['G4','G6'] },
  { id:'EMP-19', name:'Vân Anh', slug:'van-anh', role:'Dashboard Automation', department:'Dashboard & Intelligence', bio:'Vân Anh là AI Dashboard: theo dõi số liệu, cảnh báo workflow lỗi và báo cáo cho chủ doanh nghiệp.', missions:['Theo dõi dashboard.', 'Cảnh báo workflow lỗi.', 'Báo cáo chỉ số cho founder/CEO.'], kpis:['Dashboard','Alert','Report'], workflowIds:['WF08','WF09'], systemIds:['G5'], media:[{type:'video',title:'Vân Anh Dashboard Demo',url:'/media/videos/van-anh-dashboard-demo.mp4',caption:'Video: Vân Anh theo dõi dashboard, cảnh báo lỗi và báo cáo chỉ số vận hành.'}] },
];

export const workflows: Workflow[] = [
  wf('WF00','wf00','Story Architect','Active','Tạo roadmap nội dung từ hành trình founder.','Biến hành trình build công ty AI thành thư viện sự kiện bán hàng.','Founder story','Event Library',['n8n','AI','Google Sheets'],['kim-anh','my-anh'],['G1']),
  wf('WF01','wf01','Founder Story Writer','Active','Viết bài Facebook theo giọng founder.','Tạo bài Build In Public đều đặn, không cần viết tay từ đầu.','Event Library','Facebook post package',['OpenAI','n8n','Sheets'],['huyen-anh','lan-anh'],['G1']),
  wf('WF02','wf02','Visual Director','Active','Chọn hướng hình ảnh cho từng bài.','Làm hình ảnh kể chuyện thật, không dùng ảnh AI vô hồn.','Content','Visual brief',['n8n','AI'],['lam-anh','tram-anh'],['G1']),
  wf('WF03','wf03','Image Job Builder','Active','Tạo prompt ảnh và image job.','Chuẩn hóa lệnh tạo ảnh cho pipeline nội dung.','Visual brief','Image job',['n8n','Replicate','R2'],['viet-anh','lam-anh'],['G1']),
  wf('WF04','wf04','Image Generator','Active','Render ảnh và lưu kết quả.','Tạo ảnh, lưu link, cập nhật trạng thái để dùng cho bài đăng.','Image job','Image URL',['Replicate','R2','n8n'],['viet-anh'],['G1']),
  wf('WF05','wf05','Page Publisher','Active','Đăng Facebook Page đúng lịch.','Mai Anh xuất bản nội dung đều đặn và lưu post ID để đo lường.','Content package','Published post',['Facebook API','n8n'],['mai-anh','lan-anh'],['G1']),
  wf('WF06','wf06','Personal Publisher','Active','Chuẩn bị bản đăng Facebook cá nhân.','Chuyển một nội dung thành nhiều bản theo từng kênh.', 'Content queue','Personal post package',['n8n','Facebook'],['mai-anh','huyen-anh'],['G1']),
  wf('WF08','wf08','Dashboard & Analytics Engine','Active','Thu chỉ số và tạo dashboard.', 'Vân Anh theo dõi dashboard, báo cáo chỉ số và cảnh báo vấn đề.', 'Post ID / CRM / Logs','Dashboard report',['n8n','Sheets','Dashboard'],['van-anh','bao-anh'],['G5']),
  wf('WF09','wf09','Learning Engine','Active','Rút kinh nghiệm từ dữ liệu cũ.', 'Minh Anh giúp hệ thống càng chạy càng thông minh.', 'Analytics + feedback','Learning memory',['AI','n8n','Sheets'],['minh-anh','van-anh'],['G5']),
  wf('WF12','wf12','Messenger Chat Automation','Active','Tự động trả lời inbox và thu lead.', 'Thủy Anh biến chat thành dữ liệu CRM có thể chăm sóc.', 'Inbox message','Qualified chat lead',['Facebook Messenger','n8n','AI'],['thuy-anh','duyen-anh'],['G2','G3']),
  wf('WF14','wf14','CRM Lead Manager','Active','Tự tạo lead, phân loại và ghi nhớ khách.', 'Hà Anh là gói CRM AI: không để khách nào bị quên.', 'Lead data','CRM lead + memory',['Google Sheets','n8n','AI'],['ha-anh'],['G3','G6']),
  wf('WF22','wf22','COO Automation','Active','Tạo task chiến lược và điều phối ưu tiên.', 'Bảo Anh biến mục tiêu thành việc cần làm.', 'CEO goal','Execution tasks',['n8n','AI','Telegram'],['bao-anh'],['G4']),
  wf('WF23','wf23','Execution Manager','Active','Route task và theo dõi tiến độ.', 'Giang Anh giúp việc không bị rơi giữa các khâu xử lý.', 'Task queue','Assigned tasks',['n8n','Telegram','Sheets'],['giang-anh'],['G4']),
  wf('WF30','wf30','AI Sales & Follow-up','Active','Tư vấn, chăm sóc và follow-up lead.', 'Duyên Anh/Phương Anh chăm sóc lead trước khi sale con người vào cuộc.', 'Lead + message','Next action + task',['n8n','AI','CRM'],['duyen-anh','phuong-anh'],['G3','G6']),
  wf('WF31','wf31','Voice AI Inbound','Active','Khách gọi vào, Quế Anh nghe máy và hỏi nhu cầu.', 'Quế Anh đại diện gói Voice AI cho sales 24/7.', 'Voice call','Conversation data',['LiveKit','OpenAI','n8n'],['que-anh','phuong-anh'],['G6','G3'], '/media/videos/que-anh-voice-ai-demo.mp4'),
  wf('WF31A','wf31a','Voice Gateway','Active','Tạo room, token và kết nối voice.', 'Việt Anh/Hải Anh đảm bảo cuộc gọi thật vào được hệ thống.', 'Website call','LiveKit room',['LiveKit','VPS','n8n'],['viet-anh','hai-anh'],['G6']),
  wf('WF31D','wf31d','Transcript Recorder','Active','Ghi transcript và tóm tắt cuộc gọi.', 'Trâm Anh biến tiếng nói thành dữ liệu cho CRM.', 'Voice transcript','Summary + fields',['AI','n8n','Sheets'],['tram-anh','que-anh'],['G6','G5']),
];

function wf(id:string, slug:string, name:string, status:string, shortDescription:string, purpose:string, input:string, output:string, tools:string[], employeeSlugs:string[], systemIds:string[], videoUrl = ''): Workflow {
  return { id, slug, name, status, shortDescription, purpose, input, output, tools, employeeSlugs, systemIds, lessons: ['Hệ thống phải có đầu vào và đầu ra rõ ràng.', 'Tên AI giúp khách dễ hiểu giải pháp đang sở hữu.'], imageUrl: `/media/workflows/${slug}.png`, videoUrl, offer: { title: `Sở hữu ${name}`, includes: ['Thiết lập hệ thống', 'Data structure', 'Demo handover', 'Training sử dụng'], cta: 'Đặt lịch demo' } };
}

export const systems: SystemItem[] = [
  { id:'G1', slug:'g1', name:'Content Automation OS', description:'Tạo nội dung, visual, ảnh và đăng Facebook.', purpose:'Biến Build In Public thành content machine bán hàng.', workflows:['WF00','WF01','WF02','WF03','WF04','WF05','WF06'], employees:['kim-anh','huyen-anh','lan-anh','lam-anh','mai-anh','my-anh'], deliverables:['Content roadmap','Facebook posts','Visual brief','Publish log'] },
  { id:'G2', slug:'g2', name:'Lead Capture OS', description:'Thu lead từ website, form, chat, content.', purpose:'Biến traffic từ các kênh thành lead có dữ liệu.', workflows:['WF12','WF30'], employees:['thuy-anh','duyen-anh'], deliverables:['Lead form','Chat capture','Lead source'] },
  { id:'G3', slug:'g3', name:'Sales & CRM OS', description:'CRM, follow-up, booking, pipeline.', purpose:'Biến lead thành pipeline có chăm sóc và task rõ ràng.', workflows:['WF14','WF30','WF31'], employees:['ha-anh','duyen-anh','phuong-anh','que-anh'], deliverables:['CRM','Lead scoring','Follow-up task','Booking'] },
  { id:'G4', slug:'g4', name:'Management OS', description:'COO, execution, API, vận hành workflow.', purpose:'Giúp founder biết việc gì đang chạy, lỗi ở đâu, ai xử lý.', workflows:['WF22','WF23','WF24','WF31A'], employees:['bao-anh','giang-anh','hai-anh','viet-anh','ngoc-anh'], deliverables:['Task routing','Execution report','System map'] },
  { id:'G5', slug:'g5', name:'Dashboard & Learning OS', description:'Dashboard, analytics, learning, reporting.', purpose:'Giúp doanh nghiệp nhìn thấy dữ liệu và tối ưu vòng sau.', workflows:['WF08','WF09','WF31D'], employees:['van-anh','minh-anh','tram-anh'], deliverables:['Dashboard','Report','Learning memory','Alerts'], videoUrl:'/media/videos/van-anh-dashboard-demo.mp4' },
  { id:'G6', slug:'real-estate-sales-ai', name:'AI Sales Bất Động Sản', description:'Flagship demo dùng Voice AI + Transcript + CRM + Dashboard.', purpose:'Giải pháp AI Sales Automation dành cho doanh nghiệp bất động sản: tiếp nhận khách hàng 24/7, tự động ghi nhận CRM, phân loại khách tiềm năng và hỗ trợ đội ngũ sales tăng tỷ lệ chuyển đổi.', workflows:['WF31','WF31D','WF14','WF30','WF08'], employees:['que-anh','tram-anh','ha-anh','phuong-anh','van-anh'], deliverables:['Voice demo','Transcript','CRM lead HOT','Sales task','Dashboard'], videoUrl:'/media/videos/real-estate-sales-demo.mp4' },
];

export const caseStudies: CaseStudy[] = [
  { slug:'ai-sales-bat-dong-san', title:'AI Sales Bất Động Sản — Flagship Demo', summary:'Khách gọi hỏi mua nhà → Quế Anh tư vấn → Trâm Anh tóm tắt → Hà Anh ghi CRM → Vân Anh cập nhật dashboard.', problem:'Đội sales BĐS thường mất lead vì không gọi kịp, không ghi đủ nhu cầu và không follow-up đúng lúc.', solution:'Dùng Voice AI, Transcript, CRM, Task và Dashboard để tự động hóa khâu tiếp nhận/chăm sóc lead.', result:'Một mô hình demo dễ hiểu, nhiều giá trị thương mại và có thể chuyển đổi sang các ngành khác.', relatedWorkflows:['WF31','WF31D','WF14','WF30','WF08'], relatedSystems:['G6','G3','G5'], videoUrl:'/media/videos/real-estate-sales-demo.mp4' },
  { slug:'facebook-personal-brand-automation', title:'Facebook Personal Brand Automation', summary:'Xây hệ thống nội dung cá nhân từ story đến publish.', problem:'Founder có câu chuyện thật nhưng khó duy trì nội dung đều.', solution:'Kết nối WF00-WF06 thành content pipeline.', result:'Tạo được nền tảng Build In Public có thể scale.', relatedWorkflows:['WF00','WF01','WF05','WF06'], relatedSystems:['G1'] },
  { slug:'content-pipeline-wf00-wf09', title:'Content Pipeline WF00-WF09', summary:'10 workflow đầu tiên tạo xương sống cho Content OS.', problem:'Content, hình ảnh, lịch đăng và analytics bị rời rạc.', solution:'Chuẩn hóa WF00-WF09 theo sheet, status và feedback loop.', result:'Hình thành một hệ thống content có vòng học.', relatedWorkflows:['WF00','WF01','WF02','WF03','WF04','WF05','WF08','WF09'], relatedSystems:['G1','G5'] },
  { slug:'ai-company-os', title:'AI Company OS', summary:'Từ studio ảnh gia đình đến đội ngũ 19 AI Employees.', problem:'Chủ doanh nghiệp nhỏ phải tự xử lý quá nhiều việc.', solution:'Đóng gói 19 AI Employees thành các giải pháp dễ hiểu để doanh nghiệp chọn đúng nhân sự AI cần triển khai.', result:'Tạo Sales Hub giúp khách xem demo, chọn AI Employee phù hợp và liên hệ triển khai.', relatedWorkflows:['WF00','WF09','WF31','WF14'], relatedSystems:['G1','G3','G5','G6'] },
];

export const blogPosts: BlogPost[] = [
  { slug:'vi-sao-toi-xay-ai-company-in-public', title:'Vì sao tôi xây AI Company In Public', excerpt:'Một câu chuyện thật từ studio ảnh gia đình đến hệ thống AI.', category:'Founder Diary', body:['Tôi không bắt đầu bằng một công ty công nghệ.', 'Tôi bắt đầu từ một studio ảnh gia đình và nhiều năm làm nghề thật.', 'Build In Public giúp tôi biến quá trình học, sửa lỗi và xây hệ thống thành tài sản niềm tin.'] },
  { slug:'19-ai-employees-khong-phai-chatbot', title:'19 AI Employees không phải chatbot', excerpt:'Mỗi AI Employee giải quyết một bài toán rõ ràng trong bán hàng, chăm sóc khách hàng hoặc vận hành.', category:'AI Workforce', body:['Quế Anh không chỉ là một cái tên.', 'Quế Anh giúp tiếp nhận cuộc gọi, hỏi nhu cầu và đưa dữ liệu khách hàng vào CRM.', 'Khi doanh nghiệp chọn Quế Anh, họ đang chọn một giải pháp Voice AI Sales có thể triển khai thực tế.'] },
  { slug:'goi-bds-la-showroom-cong-nghe', title:'Gói BĐS là showroom công nghệ', excerpt:'Demo AI Sales Automation cho doanh nghiệp bất động sản và có thể chuyển đổi sang nhiều ngành khác.', category:'Flagship Demo', body:['Bất động sản là ngành có nhu cầu phản hồi nhanh, quản lý lead tốt và theo sát khách hàng liên tục.', 'Demo Voice → Transcript → CRM → Dashboard giúp doanh nghiệp thấy rõ cách AI xử lý lead từ đầu đến cuối.', 'Cùng một mô hình có thể chuyển đổi sang spa, nha khoa, giáo dục, bảo hiểm, tuyển sinh hoặc nhiều ngành dịch vụ khác.'] },
];

export const dataGuide = {
  text: 'Sửa nội dung trong src/data/site.ts. File dữ liệu chính quản lý nội dung website: phòng ban AI, AI Employees, giải pháp, case study và blog.',
  images: 'Đưa ảnh vào public/media theo từng thư mục: founder, studio, workflows, employees, systems, case-studies, blog.',
  videos: 'Đặt video demo tại public/media/videos/*.mp4 hoặc thay videoUrl bằng link thật.',
  lead: 'Mọi CTA “Sở hữu AI này”, “Đặt demo”, “Gọi/Zalo” phải giúp khách liên hệ nhanh: 0838 713 123, Zalo https://zalo.me/0838713123 hoặc form /consultation.',
};

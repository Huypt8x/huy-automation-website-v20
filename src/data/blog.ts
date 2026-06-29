export const blogPosts = [
  {
    id: 'POST-01',
    slug: 'vi-sao-toi-xay-ai-company-in-public',
    title: 'Vì sao tôi xây AI Company In Public',
    excerpt: 'Hành trình xây đội ngũ AI Employees để giúp doanh nghiệp bán hàng, chăm sóc khách hàng và vận hành hiệu quả hơn.',
    category: 'Founder Diary',
    sections: [
      'Tôi không bắt đầu bằng một công ty công nghệ. Tôi bắt đầu từ một studio ảnh gia đình, nơi mọi thứ đều rất thật: khách hàng thật, deadline thật, đơn hàng thật và áp lực vận hành thật.',
      'Khi bắt đầu học automation, tôi nhận ra vấn đề lớn nhất của doanh nghiệp nhỏ không phải là thiếu ý tưởng, mà là thiếu hệ thống. Mọi thứ đang nằm trong đầu người chủ.',
      'Build In Public giúp tôi biến quá trình xây hệ thống thành tài sản: mỗi workflow, mỗi lỗi sửa được, mỗi dashboard và mỗi bài học đều trở thành nội dung tạo niềm tin.'
    ]
  },
  {
    id: 'POST-02',
    slug: 'wf00-wf09-xuong-song-cua-content-os',
    title: 'WF00-WF09: xương sống của Content OS',
    excerpt: '10 workflow đầu tiên tạo thành hệ thống nội dung tự động: từ story direction, bài viết, hình ảnh, publisher đến analytics và learning loop.',
    category: 'Build In Public',
    sections: [
      'WF00-WF09 tạo nền tảng đầu tiên để doanh nghiệp có thể sản xuất nội dung, đo lường hiệu quả và vận hành nhất quán.',
      'WF00 chọn hướng câu chuyện. WF01 viết bài. WF02 định hướng hình ảnh. WF03 tạo image job. WF04 render ảnh. WF05-WF06 chuẩn bị publish. WF07-WF09 tạo vòng feedback, analytics và learning.',
      'Khi 10 workflow này kết nối, nội dung không còn là việc làm thủ công từng bài. Nó trở thành một hệ thống có input, output, trạng thái và khả năng học.'
    ]
  },
  {
    id: 'POST-03',
    slug: 'tu-studio-anh-gia-dinh-den-ai-automation-system',
    title: 'Từ studio ảnh gia đình đến AI Automation System',
    excerpt: 'Câu chuyện chuyển đổi từ nghề ảnh truyền thống sang xây một hệ thống vận hành bằng AI Employees và workflow.',
    category: 'Founder Story',
    sections: [
      'Một studio ảnh gia đình dạy tôi nhiều hơn về kinh doanh so với bất kỳ khóa học nào: khách đến, khách chờ, sản phẩm phải giao, lỗi phải sửa và uy tín phải giữ.',
      'Chính vì từng làm nghề thật, tôi không nhìn AI như một món đồ chơi. Tôi nhìn AI như một cách để giảm việc lặp lại, giữ dữ liệu rõ hơn và giúp chủ doanh nghiệp có thời gian nhìn toàn cảnh.',
      'Huy Automation System sinh ra từ quá trình đó: không phải một website agency, mà là một AI Company OS đang được xây công khai.'
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

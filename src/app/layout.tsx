import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Huy Automation AI — Experience Platform',
  description: 'Huy Automation AI giúp doanh nghiệp bắt đầu với một AI Employee từ 5 triệu, sau đó mở rộng thành đội ngũ AI khi thấy hiệu quả.',
  openGraph: {
    title: 'Huy Automation AI — Experience Platform',
    description: 'Một AI Company đang hoạt động bên trong trình duyệt.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}

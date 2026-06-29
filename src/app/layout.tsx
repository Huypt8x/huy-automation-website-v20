import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Huy Automation AI — Experience Platform',
  description: 'Sales Hub cho Huy Automation AI: 19 AI Employees, workflow automation, featured demo AI Sales BĐS và hệ thống vận hành doanh nghiệp bằng AI.',
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

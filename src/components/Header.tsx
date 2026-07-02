'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Demo BĐS', href: '/#demo', key: 'demo' },
  { label: 'AI Employees', href: '/#employees', key: 'employees' },
  { label: 'AI Marketplace', href: '/#build', key: 'build' },
  { label: 'Giải pháp', href: '/#os', key: 'os' },
  { label: 'Từ 5 triệu', href: '/#pricing', key: 'pricing' },
  { label: 'Liên hệ', href: '/#contact', key: 'contact' },
];

function detectActive(pathname: string, hash: string) {
  if (pathname.startsWith('/automation')) return 'build';
  if (pathname.startsWith('/employees') || pathname.startsWith('/roles')) return 'employees';
  if (pathname.startsWith('/systems') || pathname.startsWith('/directory')) return 'os';
  if (pathname.startsWith('/case-studies')) return 'demo';
  if (pathname.startsWith('/consultation')) return 'pricing';
  if (pathname === '/') {
    if (hash === '#demo') return 'demo';
    if (hash === '#employees') return 'employees';
    if (hash === '#build') return 'build';
    if (hash === '#os' || hash === '#journey') return 'os';
    if (hash === '#pricing' || hash === '#lead') return 'pricing';
  }
  return '';
}

export function Header() {
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash || '');
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  const activeKey = detectActive(pathname || '/', hash);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="section-container flex h-20 items-center justify-between gap-4">
        <a href="/#top" className="flex items-center gap-3 text-left">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-white">H</div>
          <div>
            <p className="text-sm font-black tracking-tight">HUY AUTOMATION AI</p>
            <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-muted">AI Employee Hub</p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 text-sm font-semibold text-slate-700 lg:flex">
          {links.map((link) => {
            const isActive = activeKey === link.key;
            return (
              <a
                key={link.label}
                href={link.href}
                className={[
                  'relative rounded-full px-4 py-2 transition',
                  isActive
                    ? 'bg-blue-50 text-primary shadow-sm ring-1 ring-blue-100'
                    : 'hover:bg-slate-50 hover:text-primary',
                ].join(' ')}
              >
                {link.label}
                {isActive && <span className="absolute -bottom-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-primary" />}
              </a>
            );
          })}
        </nav>

        <a href="tel:0838713123" className="rounded-full bg-dark px-5 py-3 text-sm font-bold text-white shadow-soft hover:bg-primary">
          0838 713 123
        </a>
      </div>
    </header>
  );
}

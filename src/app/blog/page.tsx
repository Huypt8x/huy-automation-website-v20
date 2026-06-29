import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { blogPosts } from '@/data/site';
import Link from 'next/link';

export default function BlogPage() {
  return <main className="bg-bg text-dark"><Header /><section className="py-24"><div className="section-container"><span className="badge">Blog</span><h1 className="mt-5 max-w-4xl text-5xl font-black md:text-7xl">Founder Diary & Build In Public Blog</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-muted">Các bài viết sẽ được xuất bản từ hành trình xây Huy Automation System, WF10 Website Publisher và content logs.</p><div className="mt-14 grid gap-5 md:grid-cols-3">{blogPosts.map((post,index)=><Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-[28px] border border-border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-primary hover:bg-blue-50"><p className="text-sm font-black text-primary">POST 0{index+1}</p><h3 className="mt-3 text-xl font-black">{post.title}</h3><p className="mt-4 text-sm leading-6 text-muted">{post.excerpt}</p><p className="mt-5 text-sm font-black text-primary">Đọc bài →</p></Link>)}</div></div></section><Footer /></main>
}

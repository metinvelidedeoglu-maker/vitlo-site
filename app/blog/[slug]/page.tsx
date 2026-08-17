import { blogPosts } from "../blog-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return <main className="articleMissing"><h1>Yazı bulunamadı.</h1><a href="/blog">Bloga dön →</a></main>;

  return <main className="innerPage articlePage">
    <div className="topbar"><span>⌖ Aşağı Öveçler Mah. 1332. Cadde No:3 D:7 · Çankaya / Ankara</span><div><a href="tel:+903129451360">☎ 0312 945 13 60</a><a href="mailto:vensis@vensis.com.tr">✉ vensis@vensis.com.tr</a></div></div>
    <header className="header">
      <a className="vensisLogo leftLogo" href="/"><img src="/vensis-logo.webp" alt="Vensis"/></a>
      <nav aria-label="Ana menü"><a href="/">Ana Sayfa</a><a href="/urunler">Ürünler</a><a className="active" href="/blog">Bilgi Merkezi</a><a href="/referanslar">Referanslar</a><a href="/iletisim">İletişim</a></nav>
      <a className="vitloLogo" href="/"><img src="/vitlo-logo.webp" alt="Vitlo Havalandırma Grubu"/></a>
    </header>

    <article className="articleShell"><div className="articleHeader"><a className="articleBack" href="/blog">← Tüm Yazılar</a><div className="articleMeta"><span>{post.tag}</span><small>{post.time}</small></div><h1>{post.title}</h1><p>{post.intro}</p></div><div className="articleLayout"><aside><b>YAZI İÇERİĞİ</b>{post.sections.map((section, index)=><a href={`#bolum-${index + 1}`} key={section.title}><span>{String(index + 1).padStart(2, "0")}</span>{section.title}</a>)}</aside><div className="articleContent">{post.sections.map((section, index)=><section id={`bolum-${index + 1}`} key={section.title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{section.title}</h2>{section.paragraphs?.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}{section.bullets&&<ul>{section.bullets.map((bullet)=><li key={bullet}>{bullet}</li>)}</ul>}</section>)}<div className="articleContact"><div><small>PROJENİZ İÇİN DESTEK ALIN</small><h2>Projenizi birlikte değerlendirelim.</h2></div><a href="/iletisim">İletişime Geçin →</a></div></div></div></article>

    <footer className="vensisFooter"><div className="footerIdentity"><a href="/"><img src="/vensis-logo.webp" alt="Vensis"/></a><p>Fan, havalandırma ve endüstriyel elektrik çözümleri.</p></div><div className="footerLinks"><b>Çözümler</b><a href="https://vitlofan.com.tr">Vitlo</a><a href="https://vorticefan.com.tr">Vortice</a><a href="https://elicentfan.com.tr">Elicent</a></div><div className="footerLinks"><b>Elektrik</b><a href="https://exprooffan.com.tr">Exproof Fan</a><a href="https://exproofelektrik.com.tr">Exproof Elektrik</a><a href="https://vensiselektrik.com.tr">Vensis Elektrik</a></div><div className="footerBottom"><span>© 2026 Vensis Havalandırma Ltd. Şti.</span><span>Ankara, Türkiye</span></div></footer>
  </main>;
}

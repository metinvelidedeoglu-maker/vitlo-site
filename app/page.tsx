"use client";

import { useRef } from "react";
import { blogPosts } from "./blog/blog-data";

const categories = [
  { title: "Aksiyal Fanlar", count: "05 SERİ", slug: "aksiyal-fanlar", image: "/product-categories/aksiyal.webp" },
  { title: "Çatı Tipi Fanlar", count: "03 SERİ", slug: "cati-tipi-fanlar", image: "/product-categories/cati.webp" },
  { title: "Duman Egzost Fanları", count: "04 SERİ", slug: "duman-egzost-fanlari", image: "/product-categories/duman.webp" },
  { title: "Exproof Fanlar", count: "07 SERİ", slug: "exproof-fanlar", image: "/product-categories/exproof.webp" },
  { title: "Hücreli Fanlar", count: "02 SERİ", slug: "hucreli-fanlar", image: "/product-categories/hucreli.webp" },
  { title: "Kanal Tipi Fanlar", count: "05 SERİ", slug: "kanal-tipi-fanlar", image: "/product-categories/kanal.webp" },
  { title: "Salyangoz Fanlar", count: "02 SERİ", slug: "salyangoz-fanlar", image: "/product-categories/salyangoz.webp" },
];
const sectors = [
  { no: "01", title: "Endüstriyel Tesisler", text: "Üretim alanları ve prosesler için güvenilir hava yönetimi." },
  { no: "02", title: "Otopark ve Tüneller", text: "Normal havalandırma ve acil duman tahliye sistemleri." },
  { no: "03", title: "Tehlikeli Alanlar", text: "Patlayıcı atmosferler için ATEX sertifikalı çözümler." },
  { no: "04", title: "Ticari Yapılar", text: "Konfor, düşük ses ve enerji verimliliği odaklı sistemler." },
];

const homeReferences = [
  { name: "ASELSAN", file: "aselsan.webp" },
  { name: "Eczacıbaşı", file: "eczacibasi.webp" },
  { name: "Erdemir", file: "erdemir.webp" },
  { name: "Eti Bakır", file: "eti-bakir.webp" },
  { name: "Limak", file: "limak.webp" },
  { name: "MKE", file: "mke.webp" },
  { name: "OYAK", file: "oyka.webp" },
  { name: "Roketsan", file: "roketsan.webp" },
  { name: "Şişecam", file: "sisecam.webp" },
  { name: "TEİAŞ", file: "teias.webp" },
  { name: "TOFAŞ", file: "tofas.webp" },
  { name: "TÜBİTAK", file: "tubitak.webp" },
];

export default function Home() {
  const blogRef = useRef<HTMLDivElement>(null);
  const scrollBlog = (direction: number) => blogRef.current?.scrollBy({ left: direction * 420, behavior: "smooth" });
  return <main>
    <div className="topbar"><span>⌖ Aşağı Öveçler Mah. 1332. Cadde No:3 D:7 · Çankaya / Ankara</span><div><a href="tel:+903129451360">☎ 0312 945 13 60</a><a href="mailto:vensis@vensis.com.tr">✉ vensis@vensis.com.tr</a></div></div>
    <header className="header">
      <a className="vensisLogo leftLogo" href="/" aria-label="Vitlo Fan ana sayfa"><img src="/vensis-logo.webp" alt="Vensis Fan Elektrik Exproof"/></a>
      <nav aria-label="Ana menü"><a href="/urunler">Ürünler</a><a href="#uygulamalar">Uygulamalar</a><a href="#hakkimizda">Bizi Tanıyın</a><a href="/blog">Bilgi Merkezi</a><a href="/referanslar">Referanslar</a><a href="/iletisim">İletişim</a></nav>
      <a className="vitloLogo" href="/" aria-label="Vitlo Fan ana sayfa"><img src="/vitlo-logo.webp" alt="Vitlo Havalandırma Grubu"/></a>
    </header>
    <section className="hero">
      <div className="heroMedia"><img src="/vitlo-hero-v2.png" alt="Vitlo endüstriyel fan çözümleri"/><div className="mediaShade"/></div>
      <div className="heroCopy"><p className="kicker">VITLO ENDÜSTRİYEL HAVA SİSTEMLERİ</p><h1>Gücünü <em>havadan alır.</em></h1><p>Zorlu endüstriyel koşullarda yüksek performans, sertifikalı güvenlik ve projeye özel fan çözümleri.</p><div className="heroActions"><a className="heroPrimary" href="#iletisim">Teklif Al <span>↗</span></a><a className="heroSecondary" href="/urunler">Ürünleri İncele <span>→</span></a><a className="heroGlass" href="https://select.vensis.com.tr" target="_blank" rel="noreferrer">Seçim Programı <span>↗</span></a></div></div>
      <div className="heroSpecs"><div><span>01 / PERFORMANS</span><b>Yüksek hava debisi</b></div><div><span>02 / GÜVENLİK</span><b>400°C / 2 saat</b></div><div><span>03 / MÜHENDİSLİK</span><b>Projeye özel seçim</b></div><div><span>04 / VERİMLİLİK</span><b>Düşük enerji tüketimi</b></div><div><span>05 / DESTEK</span><b>Teknik seçim desteği</b></div></div>
    </section>
    <section className="section products" id="urunler"><div className="sectionIntro"><div><p className="eyebrow">ÜRÜN GRUPLARI</p><h2>Havalandırmanın<br/>her alanında çözüm.</h2></div><div><p>Projeleriniz için geniş ürün gamı, sertifikalı performans ve teknik seçim desteği.</p><a href="/urunler">Tüm ürünleri görüntüle →</a></div></div>
      <div className="categoryGrid">{categories.map((c)=><a className="category" href={`/urunler#modeller-${c.slug}`} key={c.title}><div className="categoryVisual"><img src={c.image} alt={`${c.title} kategori görseli`} loading="lazy"/></div><small>{c.count}</small><h3>{c.title}</h3><span className="circleArrow">↗</span></a>)}</div>
    </section>
    <section className="feature"><div className="featureImage"><img src="/urun-detaylari/assets/images/TUNEL_AXF_Tunel_Jet_Fani.webp" alt="Vitlo Tünel AXF jet fan"/></div><div className="featureCopy"><p className="eyebrow light">ÖNE ÇIKAN ÇÖZÜM</p><h2>Tünel ve otoparklarda<br/>güvenli hava akışı.</h2><p>TUNEL-AXF serisi; normal havalandırma ve acil duman tahliyesi için çift yönlü, yüksek kapasiteli performans sunar.</p><ul><li><b>112.000 m³/h</b><span>Maksimum hava debisi</span></li><li><b>F400</b><span>400°C / 2 saat dayanım</span></li><li><b>EN 12101-3</b><span>Sertifikalı güvenlik</span></li></ul><a className="limeBtn" href="#iletisim">Ürünü inceleyin <span>→</span></a></div></section>
    <section className="section applications" id="uygulamalar"><div className="sectionIntro"><div><p className="eyebrow">UYGULAMA ALANLARI</p><h2>Her yapıya özel<br/>hava çözümü.</h2></div><div><p>Doğru fan seçimi, sistemin performansını ve işletme güvenliğini doğrudan belirler.</p></div></div><div className="sectorGrid">{sectors.map((s)=><article key={s.no}><small>{s.no}</small><h3>{s.title}</h3><p>{s.text}</p><a href="#iletisim">Detayları incele ↗</a></article>)}</div></section>
    <section className="about" id="hakkimizda"><div><p className="eyebrow light">VITLO FAN</p><h2>Üründen önce<br/>doğru mühendislik.</h2></div><div><p>Vensis, 2010 yılından beri endüstriyel havalandırma ve exproof sistemlerde projeye özel çözümler sunar. İhtiyacı analiz eder, doğru ürünü seçer ve satış sonrasında teknik desteği sürdürür.</p><div className="numbers"><div><b>15+</b><span>Yıllık sektör deneyimi</span></div><div><b>100%</b><span>Teknik seçim desteği</span></div><div><b>2 yıl</b><span>Ürün garantisi</span></div></div><a href="#iletisim">Bizi tanıyın →</a></div></section>
    <section className="section blog blogBar" id="blog">
      <div className="blogBarHead"><div><p className="eyebrow">SON YAZILAR</p><h2>Teknik bilgi merkezi.</h2></div><div className="blogControls"><button type="button" onClick={()=>scrollBlog(-1)} aria-label="Önceki yazılar">←</button><button type="button" onClick={()=>scrollBlog(1)} aria-label="Sonraki yazılar">→</button></div></div>
      <div className="blogTrack" ref={blogRef}>{blogPosts.map((post)=><article className="blogCard" key={post.no}><div className="blogMeta"><span>{post.tag}</span><b>{post.no}</b><small>{post.time}</small></div><h3>{post.title}</h3><p>{post.excerpt}</p><a href={`/blog/${post.slug}`}>Yazıyı Oku <span>→</span></a></article>)}</div>
      <a className="allPosts" href="/blog">Tüm yazıları görüntüle →</a>
    </section>
    <section className="referencesSection" id="referanslar"><div className="referencesIntro"><div><p className="eyebrow">REFERANSLARIMIZ</p><h2>Güvenin arkasında<br/>güçlü projeler.</h2></div><div className="referencesSummary"><p>Farklı sektörlerde ürün ve çözüm sunduğumuz kurumlardan bazıları.</p><a href="/referanslar">Tüm referansları görüntüle →</a></div></div><div className="referenceGrid">{homeReferences.map((item, index)=><a className="referenceLogo" href="/referanslar" key={item.file}><span>{String(index + 1).padStart(2, "0")}</span><img src={`/references/${item.file}`} alt={`${item.name} logosu`} loading="lazy"/></a>)}</div></section>
    <section className="vensisContact" id="iletisim"><div className="contactLead"><p className="eyebrow light">İLETİŞİM</p><h2>Projenizi birlikte<br/>değerlendirelim.</h2><p>Fan, elektrik ve ex-proof ihtiyaçlarınız için teknik detayları paylaşın; doğru ürün ve çözüm için size dönüş yapalım.</p><a href="https://www.google.com/maps/dir/?api=1&destination=Vensis+Havalandırma+Ltd.+Şti.+Ankara" target="_blank" rel="noreferrer">Yol Tarifi Al ↗</a></div><div className="contactDetails"><a href="tel:+903129451360"><small>TELEFON</small><b>0312 945 13 60</b></a><a href="mailto:vensis@vensis.com.tr"><small>E-POSTA</small><b>vensis@vensis.com.tr</b></a><a className="addressDetail" href="https://www.google.com/maps/dir/?api=1&destination=Vensis+Havalandırma+Ltd.+Şti.+Ankara" target="_blank" rel="noreferrer"><small>ADRES</small><b>Aşağı Öveçler Mah. 1332. Cadde No:3 D:7<br/>Çankaya / Ankara</b></a></div></section>
    <footer className="vensisFooter"><div className="footerIdentity"><a href="/"><img src="/vensis-logo.webp" alt="Vensis"/></a><p>Fan, havalandırma ve endüstriyel elektrik çözümleri.</p></div><div className="footerLinks"><b>Çözümler</b><a href="https://vitlofan.com.tr">Vitlo</a><a href="https://vorticefan.com.tr">Vortice</a><a href="https://elicentfan.com.tr">Elicent</a></div><div className="footerLinks"><b>Elektrik</b><a href="https://exprooffan.com.tr">Exproof Fan</a><a href="https://exproofelektrik.com.tr">Exproof Elektrik</a><a href="https://vensiselektrik.com.tr">Vensis Elektrik</a></div><div className="footerBottom"><span>© 2026 Vensis Havalandırma Ltd. Şti.</span><span>Ankara, Türkiye</span></div></footer>
  </main>;
}

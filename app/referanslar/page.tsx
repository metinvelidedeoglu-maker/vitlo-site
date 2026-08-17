import { referenceItems } from "./reference-data";

export default function ReferencesPage() {
  return <main className="innerPage referencesPage">
    <div className="topbar"><span>⌖ Aşağı Öveçler Mah. 1332. Cadde No:3 D:7 · Çankaya / Ankara</span><div><a href="tel:+903129451360">☎ 0312 945 13 60</a><a href="mailto:vensis@vensis.com.tr">✉ vensis@vensis.com.tr</a></div></div>
    <header className="header">
      <a className="vensisLogo leftLogo" href="/" aria-label="Vitlo Fan ana sayfa"><img src="/vensis-logo.webp" alt="Vensis Fan Elektrik Exproof"/></a>
      <nav aria-label="Ana menü"><a href="/urunler">Ürünler</a><a href="/#uygulamalar">Uygulamalar</a><a href="/#hakkimizda">Bizi Tanıyın</a><a href="/blog">Bilgi Merkezi</a><a className="active" href="/referanslar">Referanslar</a><a href="/iletisim">İletişim</a></nav>
      <a className="vitloLogo" href="/" aria-label="Vitlo Fan ana sayfa"><img src="/vitlo-logo.webp" alt="Vitlo Havalandırma Grubu"/></a>
    </header>

    <section className="referencesHero"><div><p className="eyebrow light">REFERANSLARIMIZ</p><h1>Güvenin arkasında<br/><em>güçlü projeler.</em></h1></div><p>Savunma sanayisinden enerjiye, üretim tesislerinden üniversitelere kadar farklı sektörlerde ürün ve çözüm sunduğumuz kurumlardan bazıları.</p></section>

    <section className="referencesGallery"><div className="galleryHead"><span>42 KURUM</span><h2>Birlikte çalıştığımız<br/>değerli markalar.</h2></div><div className="logoGallery">{referenceItems.map((item, index)=><article className="logoCard" key={item.file}><span>{String(index + 1).padStart(2, "0")}</span><img src={`/references/${item.file}`} alt={`${item.name} logosu`} loading="lazy"/><small>{item.name}</small></article>)}</div></section>

    <section className="vensisContact"><div className="contactLead"><p className="eyebrow light">İLETİŞİM</p><h2>Projenizi birlikte<br/>değerlendirelim.</h2><p>Fan, elektrik ve ex-proof ihtiyaçlarınız için teknik detayları paylaşın; doğru ürün ve çözüm için size dönüş yapalım.</p><a href="/iletisim">İletişime Geçin →</a></div><div className="contactDetails"><a href="tel:+903129451360"><small>TELEFON</small><b>0312 945 13 60</b></a><a href="mailto:vensis@vensis.com.tr"><small>E-POSTA</small><b>vensis@vensis.com.tr</b></a><a className="addressDetail" href="https://www.google.com/maps/dir/?api=1&destination=Vensis+Havalandırma+Ltd.+Şti.+Ankara" target="_blank" rel="noreferrer"><small>ADRES</small><b>Aşağı Öveçler Mah. 1332. Cadde No:3 D:7<br/>Çankaya / Ankara</b></a></div></section>

    <footer className="vensisFooter"><div className="footerIdentity"><a href="/"><img src="/vensis-logo.webp" alt="Vensis"/></a><p>Fan, havalandırma ve endüstriyel elektrik çözümleri.</p></div><div className="footerLinks"><b>Çözümler</b><a href="https://vitlofan.com.tr">Vitlo</a><a href="https://vorticefan.com.tr">Vortice</a><a href="https://elicentfan.com.tr">Elicent</a></div><div className="footerLinks"><b>Elektrik</b><a href="https://exprooffan.com.tr">Exproof Fan</a><a href="https://exproofelektrik.com.tr">Exproof Elektrik</a><a href="https://vensiselektrik.com.tr">Vensis Elektrik</a></div><div className="footerBottom"><span>© 2026 Vensis Havalandırma Ltd. Şti.</span><span>Ankara, Türkiye</span></div></footer>
  </main>;
}

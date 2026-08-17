"use client";

import type { FormEvent } from "react";

export default function ContactPage() {
  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = `${data.get("firstName") || ""} ${data.get("lastName") || ""}`.trim();
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Vitlo Fan iletişim talebi – ${name}`);
    const body = encodeURIComponent(`Ad Soyad: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`);
    window.location.href = `mailto:vensis@vensis.com.tr?subject=${subject}&body=${body}`;
  };

  return <main className="innerPage contactPage">
    <div className="topbar"><span>⌖ Aşağı Öveçler Mah. 1332. Cadde No:3 D:7 · Çankaya / Ankara</span><div><a href="tel:+903129451360">☎ 0312 945 13 60</a><a href="mailto:vensis@vensis.com.tr">✉ vensis@vensis.com.tr</a></div></div>
    <header className="header">
      <a className="vensisLogo leftLogo" href="/" aria-label="Vitlo Fan ana sayfa"><img src="/vensis-logo.webp" alt="Vensis Fan Elektrik Exproof"/></a>
      <nav aria-label="Ana menü"><a href="/urunler">Ürünler</a><a href="/#uygulamalar">Uygulamalar</a><a href="/#hakkimizda">Bizi Tanıyın</a><a href="/blog">Bilgi Merkezi</a><a href="/referanslar">Referanslar</a><a className="active" href="/iletisim">İletişim</a></nav>
      <a className="vitloLogo" href="/" aria-label="Vitlo Fan ana sayfa"><img src="/vitlo-logo.webp" alt="Vitlo Havalandırma Grubu"/></a>
    </header>

    <section className="contactPageHero"><p className="eyebrow light">İLETİŞİM</p><h1>İletişime<br/><em>geçin.</em></h1><p>Fan, havalandırma ve ex-proof projeleriniz için teknik detayları paylaşın; ekibimiz size en uygun çözümle dönüş yapsın.</p></section>

    <section className="contactPageMain"><div className="contactInfoPanel"><p className="eyebrow">BİZE ULAŞIN</p><h2>Projenizi birlikte değerlendirelim.</h2><div className="contactInfoList"><a href="tel:+903129451360"><span>01</span><div><small>TELEFON</small><b>+90 312 945 13 60</b></div></a><a href="mailto:vensis@vensis.com.tr"><span>02</span><div><small>E-POSTA</small><b>vensis@vensis.com.tr</b></div></a><a href="https://www.google.com/maps/dir/39.8848731,32.8314333/VENS%C4%B0S+L%C4%B0M%C4%B0TED+%C5%9E%C4%B0RKET%C4%B0+%22FAN+-+ELEKTR%C4%B0K+-+EXPROOF%22,+A%C5%9Fa%C4%9F%C4%B1+%C3%96ve%C3%A7ler,+1332.+Sk.+No:3+D:7,+06460+%C3%87ankaya%2FAnkara" target="_blank" rel="noreferrer"><span>03</span><div><small>ADRES</small><b>Aşağı Öveçler Mahallesi 1332. Cadde No:3 D:7<br/>Çankaya / Ankara</b></div></a></div><a className="directionsButton" href="https://www.google.com/maps/dir/39.8848731,32.8314333/VENS%C4%B0S+L%C4%B0M%C4%B0TED+%C5%9E%C4%B0RKET%C4%B0+%22FAN+-+ELEKTR%C4%B0K+-+EXPROOF%22,+A%C5%9Fa%C4%9F%C4%B1+%C3%96ve%C3%A7ler,+1332.+Sk.+No:3+D:7,+06460+%C3%87ankaya%2FAnkara" target="_blank" rel="noreferrer">Yol Tarifi Al ↗</a></div>

      <form className="contactForm" onSubmit={sendMessage}><div className="formHeading"><span>MESAJ GÖNDERİN</span><h2>Size nasıl yardımcı olabiliriz?</h2><p>Formu doldurun; e-posta uygulamanız üzerinden mesajınızı bize iletin.</p></div><div className="formRow"><label>Adınız *<input name="firstName" type="text" required placeholder="Adınız"/></label><label>Soyadınız *<input name="lastName" type="text" required placeholder="Soyadınız"/></label></div><label>E-posta adresiniz *<input name="email" type="email" required placeholder="ornek@sirket.com"/></label><label>Mesajınız *<textarea name="message" required rows={6} placeholder="Proje ve ürün ihtiyacınızı kısaca yazın."/></label><button type="submit">MESAJI GÖNDER <span>→</span></button></form></section>

    <section className="factorySection"><div className="factoryHeading"><p className="eyebrow">FABRİKA ADRESLERİMİZ</p><h2>Üretim noktalarımız.</h2></div><div className="factoryGrid"><article><span>01 / TÜRKİYE</span><h3>İzmir Fabrika</h3><p>Egemenlik Mahallesi, 6016/8 Sok. No:10<br/>35070 Işıkkent, Bornova / İzmir</p></article><article><span>02 / BULGARİSTAN</span><h3>Haskovo Fabrika</h3><p>Blvd. Nikola Radev N.29<br/>Industrial Zone-West Haskovo / Bulgaria</p></article></div></section>

    <footer className="vensisFooter"><div className="footerIdentity"><a href="/"><img src="/vensis-logo.webp" alt="Vensis"/></a><p>Fan, havalandırma ve endüstriyel elektrik çözümleri.</p></div><div className="footerLinks"><b>Çözümler</b><a href="https://vitlofan.com.tr">Vitlo</a><a href="https://vorticefan.com.tr">Vortice</a><a href="https://elicentfan.com.tr">Elicent</a></div><div className="footerLinks"><b>Elektrik</b><a href="https://exprooffan.com.tr">Exproof Fan</a><a href="https://exproofelektrik.com.tr">Exproof Elektrik</a><a href="https://vensiselektrik.com.tr">Vensis Elektrik</a></div><div className="footerBottom"><span>© 2026 Vensis Havalandırma Ltd. Şti.</span><span>Ankara, Türkiye</span></div></footer>
  </main>;
}

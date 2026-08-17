import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Endüstriyel Fanlar | Aksiyal, Exproof, Çatı ve Kanal Tipi Fanlar | Vitlo Fan",
  description: "Vitlo Fan endüstriyel fan ürünleri: aksiyal, çatı tipi, duman egzost, ATEX exproof, hücreli, kanal tipi ve salyangoz fanlar.",
  alternates: { canonical: "https://vitlofan.com.tr/urunler/" },
};

const productFamilies = [
  { series: 'AXD/ATEX', title: 'AXD/ATEX Kanal Tipi Exproof Fan', kind: 'Aksiyal • Kanal tipi', image: "/urun-detaylari/assets/images/AXD_ATEX_Kanal_Tipi_Exproof_Fan.webp", href: "/urun-detaylari/urunler/axd-atex-kanal-tipi-exproof-fan.html" },
  { series: 'AXD', title: 'AXD Kanal Tipi Aksiyal Fan', kind: 'Aksiyal • Kanal tipi', image: "/urun-detaylari/assets/images/AXD_Kanal_Tipi_Aksiyal_Fan.webp", href: "/urun-detaylari/urunler/axd-kanal-tipi-aksiyal-fan.html" },
  { series: 'AXF', title: 'AXF Kanal Tipi Duman Egzost Fanı', kind: 'Aksiyal • Kanal tipi', image: "/urun-detaylari/assets/images/AXF_Kanal_Tipi_Aksiyal_Duman_Egzost_Fani.webp", href: "/urun-detaylari/urunler/axf-kanal-tipi-duman-egzost-fani.html" },
  { series: 'AXJ', title: 'AXJ Aksiyal Jet Fan', kind: 'Aksiyal • Jet fan', image: "/urun-detaylari/assets/images/AXJ_Aksiyal_Jet_Fan.webp", href: "/urun-detaylari/urunler/axj-aksiyal-jet-fan.html" },
  { series: 'AXW/ATEX', title: 'AXW/ATEX Duvar Tipi Exproof Fan', kind: 'Aksiyal • Duvar tipi', image: "/urun-detaylari/assets/images/AXW_ATEX_Duvar_Tipi_Exproof_Fan.webp", href: "/urun-detaylari/urunler/axw-atex-duvar-tipi-exproof-fan.html" },
  { series: 'AXW', title: 'AXW Duvar Tipi Aksiyal Fan', kind: 'Aksiyal • Duvar tipi', image: "/urun-detaylari/assets/images/AXW_Duvar_Tipi_Aksiyal_Fan.webp", href: "/urun-detaylari/urunler/axw-duvar-tipi-aksiyal-fan.html" },
  { series: 'CRB', title: 'CRB Prizmatik Kanal Tipi Fan', kind: 'Santrifüj • Kanal tipi', image: "/urun-detaylari/assets/images/CRB_Prizmatik_Kanal_Tipi_Fan.webp", href: "/urun-detaylari/urunler/crb-prizmatik-kanal-tipi-fan.html" },
  { series: 'CRD', title: 'CRD Prizmatik Kanal Tipi Fan', kind: 'Santrifüj • Kanal tipi', image: "/urun-detaylari/assets/images/CRD_Prizmatik_Kanal_Tipi_Fan.webp", href: "/urun-detaylari/urunler/crd-prizmatik-kanal-tipi-fan.html" },
  { series: 'CRD/ATEX', title: 'CRD/ATEX Kanal Tipi Exproof Fan', kind: 'Santrifüj • Kanal tipi', image: "/urun-detaylari/assets/images/CRD_ATEX_Kanal_Tipi_Exproof_Fan.webp", href: "/urun-detaylari/urunler/crd-atex-kanal-tipi-exproof-fan.html" },
  { series: 'CRH', title: 'CRH Yatay Atışlı Çatı Tipi Fan', kind: 'Santrifüj • Çatı tipi', image: "/urun-detaylari/assets/images/CRH_Yatay_Atisli_Cati_Tipi_Fan.webp", href: "/urun-detaylari/urunler/crh-yatay-atisli-cati-tipi-fan.html" },
  { series: 'CRH/ATEX', title: 'CRH/ATEX Radyal Çatı Tipi Exproof Fan', kind: 'Santrifüj • Çatı tipi', image: "/urun-detaylari/assets/images/CRH_ATEX_Radyal_Cati_Tipi_Exproof_Fan.webp", href: "/urun-detaylari/urunler/crh-atex-radyal-cati-tipi-exproof-fan.html" },
  { series: 'CRK', title: 'CRK Hücreli Fan', kind: 'Santrifüj • Hücreli', image: "/urun-detaylari/assets/images/CRK_Hucreli_Fan.webp", href: "/urun-detaylari/urunler/crk-hucreli-fan.html" },
  { series: 'CRK/ATEX', title: 'CRK/ATEX Hücreli Exproof Fan', kind: 'Santrifüj • Hücreli', image: "/urun-detaylari/assets/images/CRK_ATEX_Hucreli_Exproof_Fan.webp", href: "/urun-detaylari/urunler/crk-atex-hucreli-exproof-fan.html" },
  { series: 'CRS', title: 'CRS Salyangoz Tipi Fan', kind: 'Santrifüj • Salyangoz', image: "/urun-detaylari/assets/images/CRS_Salyangoz_Tipi_Fan.webp", href: "/urun-detaylari/urunler/crs-salyangoz-tipi-fan.html" },
  { series: 'CRS/ATEX', title: 'CRS/ATEX Salyangoz Tipi Exproof Fan', kind: 'Santrifüj • Salyangoz', image: "/urun-detaylari/assets/images/CRS_ATEX_Salyangoz_Tipi_Exproof_Fan.webp", href: "/urun-detaylari/urunler/crs-atex-salyangoz-tipi-exproof-fan.html" },
  { series: 'CRU', title: 'CRU Dikey Atışlı Çatı Tipi Fan', kind: 'Santrifüj • Çatı tipi', image: "/urun-detaylari/assets/images/CRU_Dikey_Atisli_Cati_Tipi_Fan.webp", href: "/urun-detaylari/urunler/cru-dikey-atisli-cati-tipi-fan.html" },
  { series: 'MOB-AXD/ATEX', title: 'MOB-AXD/ATEX Mobil Exproof Fan', kind: 'Aksiyal • Mobil', image: "/urun-detaylari/assets/images/MOB_AXD_ATEX_Mobil_Exproof_Fan.webp", href: "/urun-detaylari/urunler/mob-axd-atex-mobil-exproof-fan.html" },
  { series: 'RXJ', title: 'RXJ Radyal Jet Fan', kind: 'Radyal • Jet fan', image: "/urun-detaylari/assets/images/RXJ_Radyal_Jet_Fan.webp", href: "/urun-detaylari/urunler/rxj-radyal-jet-fan.html" },
  { series: 'TUNEL-AXF', title: 'TUNEL-AXF Tünel Jet Fanı', kind: 'Aksiyal • Tünel', image: "/urun-detaylari/assets/images/TUNEL_AXF_Tunel_Jet_Fani.webp", href: "/urun-detaylari/urunler/tunel-axf-tunel-jet-fani.html" },
];

const productCategories = [
  { no: "01", slug: "aksiyal-fanlar", title: "Aksiyal Fanlar", count: "2 Ürün", image: "/product-categories/aksiyal.webp", description: "Yüksek hava debisinin düşük basınç kaybıyla taşınması gereken endüstriyel uygulamalar için.", models: ["AXD Kanal Tipi", "AXW Duvar Tipi"] },
  { no: "02", slug: "cati-tipi-fanlar", title: "Çatı Tipi Fanlar", count: "2 Ürün", image: "/product-categories/cati.webp", description: "Yapı içindeki kirli ve sıcak havanın çatı üzerinden kontrollü şekilde tahliyesi için.", models: ["CRU Dikey Atışlı", "CRH Yatay Atışlı"] },
  { no: "03", slug: "duman-egzost-fanlari", title: "Duman Egzost Fanları", count: "4 Ürün", image: "/product-categories/duman.webp", description: "Otopark, tünel ve yangın güvenliği projelerinde duman kontrolü ve acil tahliye için.", models: ["TUNEL-AXF", "RXJ", "AXJ", "AXF"] },
  { no: "04", slug: "exproof-fanlar", title: "Exproof Fanlar", count: "8 Ürün", image: "/product-categories/exproof.webp", description: "Patlayıcı atmosfer riski bulunan tesislerde güvenli hava transferi için ATEX çözümleri.", models: ["CRS-P/ATEX", "CRK/ATEX", "CRH/ATEX", "CRD/ATEX", "+4 seri"] },
  { no: "05", slug: "hucreli-fanlar", title: "Hücreli Fanlar", count: "1 Ürün", image: "/product-categories/hucreli.webp", description: "Ses yalıtımı, kompakt yerleşim ve servis kolaylığını bir araya getiren kabinli fanlar.", models: ["CRK Hücreli Fan"] },
  { no: "06", slug: "kanal-tipi-fanlar", title: "Kanal Tipi Fanlar", count: "3 Ürün", image: "/product-categories/kanal.webp", description: "Kanal sistemlerine doğrudan entegre edilen, kompakt ve verimli havalandırma çözümleri.", models: ["CRB Prizmatik", "CRD Prizmatik", "AXD Aksiyal"] },
  { no: "07", slug: "salyangoz-fanlar", title: "Salyangoz Fanlar", count: "1 Ürün", image: "/product-categories/salyangoz.webp", description: "Yüksek basınç gerektiren proses ve endüstriyel hava taşıma uygulamaları için.", models: ["CRS Salyangoz Tipi"] },
];

const categoryModelGroups = [
  { slug: "aksiyal-fanlar", title: "Aksiyal Fan Modelleri", intro: "Yüksek hava debisini düşük basınç kaybıyla taşımak için aksiyal fan serileri.", series: ["AXD", "AXJ", "AXW", "AXF", "TUNEL-AXF"] },
  { slug: "cati-tipi-fanlar", title: "Çatı Tipi Fan Modelleri", intro: "Çatı üzerinden dikey veya yatay atışlı egzoz ve havalandırma çözümleri.", series: ["CRU", "CRH", "CRH/ATEX"] },
  { slug: "duman-egzost-fanlari", title: "Duman Egzost Fan Modelleri", intro: "Otopark, tünel ve yangın güvenliği projelerinde duman kontrolü için fanlar.", series: ["AXF", "AXJ", "RXJ", "TUNEL-AXF"] },
  { slug: "exproof-fanlar", title: "Exproof Fan Modelleri", intro: "Patlayıcı atmosfer riski bulunan tesislerde ATEX uyumlu hava transferi.", series: ["AXD/ATEX", "AXW/ATEX", "CRD/ATEX", "CRH/ATEX", "CRK/ATEX", "CRS/ATEX", "MOB-AXD/ATEX"] },
  { slug: "hucreli-fanlar", title: "Hücreli Fan Modelleri", intro: "Kabinli yapı, ses yalıtımı ve servis kolaylığı gerektiren uygulamalar için.", series: ["CRK", "CRK/ATEX"] },
  { slug: "kanal-tipi-fanlar", title: "Kanal Tipi Fan Modelleri", intro: "Kanal sistemlerine doğrudan entegre edilen kompakt fan çözümleri.", series: ["AXD", "AXD/ATEX", "CRB", "CRD", "CRD/ATEX"] },
  { slug: "salyangoz-fanlar", title: "Salyangoz Fan Modelleri", intro: "Yüksek basınç gerektiren proses ve endüstriyel hava taşıma uygulamaları için.", series: ["CRS", "CRS/ATEX"] },
];

const productBySeries: Record<string, (typeof productFamilies)[number]> = Object.fromEntries(productFamilies.map((product) => [product.series, product]));

export default function ProductsPage() {
  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Vitlo Fan endüstriyel fan ürünleri",
    itemListElement: productFamilies.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.title, url: `https://vitlofan.com.tr${product.href}` })),
  };
  return <main className="innerPage productsPage">
    <div className="topbar"><span>⌖ Aşağı Öveçler Mah. 1332. Cadde No:3 D:7 · Çankaya / Ankara</span><div><a href="tel:+903129451360">☎ 0312 945 13 60</a><a href="mailto:vensis@vensis.com.tr">✉ vensis@vensis.com.tr</a></div></div>
    <header className="header">
      <a className="vensisLogo leftLogo" href="/" aria-label="Vitlo Fan ana sayfa"><img src="/vensis-logo.webp" alt="Vensis Fan Elektrik Exproof"/></a>
      <nav aria-label="Ana menü"><a className="active" href="/urunler">Ürünler</a><a href="/#uygulamalar">Uygulamalar</a><a href="/#hakkimizda">Bizi Tanıyın</a><a href="/blog">Bilgi Merkezi</a><a href="/referanslar">Referanslar</a><a href="/iletisim">İletişim</a></nav>
      <a className="vitloLogo" href="/" aria-label="Vitlo Fan ana sayfa"><img src="/vitlo-logo.webp" alt="Vitlo Havalandırma Grubu"/></a>
    </header>

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }} />
    <section className="productsHero"><div><p className="eyebrow light">ÜRÜNLER</p><h1>Doğru hava.<br/><em>Doğru fan.</em></h1></div><div className="productsHeroText"><span>7 ÜRÜN GRUBU / 19 ÜRÜN AİLESİ</span><p>Endüstriyel tesislerden tünel ve otoparklara, tehlikeli alanlardan ticari yapılara kadar her ihtiyaca özel fan çözümleri.</p><a href="#kategoriler">Kategorileri keşfedin ↓</a></div></section>

    <section className="productsCatalog" id="kategoriler"><div className="catalogHeading"><div><p className="eyebrow">ÜRÜN KATEGORİLERİ</p><h2>İhtiyacınıza uygun<br/>ürün grubunu seçin.</h2></div><p>Ürün seçimi için hava debisi, basınç, sıcaklık, ortam sınıfı ve montaj koşullarını birlikte değerlendiriyoruz.</p></div>
      <div className="productsCategoryGrid">{productCategories.map((category)=><article className="productsCategoryCard" id={category.slug} key={category.slug}>
        <div className="categoryCardTop"><span>{category.no}</span><small>{category.count}</small></div>
        <div className="categoryImage"><img src={category.image} alt={`${category.title} ürün grubu`} loading="lazy"/></div>
        <h3>{category.title}</h3><p>{category.description}</p>
        <div className="modelList">{category.models.map(model=><span key={model}>{model}</span>)}</div>
        <a href={`/iletisim?kategori=${category.slug}`}>Teknik bilgi alın <b>↗</b></a>
      </article>)}</div>
    </section>


    <section className="productFamiliesSection nestedCatalog" id="tum-urunler"><div className="catalogHeading"><div><p className="eyebrow">KATEGORİ İÇİNDEKİ MODELLER</p><h2>Kategoriyi seçin,<br/>modeli inceleyin.</h2></div><p>Her kategori altında ilgili ürün ailelerini doğrudan görebilir; model sayfasında teknik verileri, kullanım alanlarını ve Fan Selection bağlantısını inceleyebilirsiniz.</p></div>
      <nav className="categoryJumpLinks" aria-label="Ürün kategorileri">{categoryModelGroups.map((group) => <a href={`#modeller-${group.slug}`} key={group.slug}>{group.title.replace(" Modelleri", "")} ↓</a>)}</nav>
      <div className="nestedCategoryList">{categoryModelGroups.map((group) => <section className="nestedCategorySection" id={`modeller-${group.slug}`} key={group.slug}>
        <div className="nestedCategoryHeading"><div><p className="eyebrow">{group.title}</p><h3>{group.title.replace(" Modelleri", "")}</h3></div><p>{group.intro}</p></div>
        <div className="productFamiliesGrid">{group.series.map((series) => { const product = productBySeries[series]; if (!product) return null; return <a className="productFamilyCard" href={product.href} key={`${group.slug}-${product.series}`}>
          <div className="productFamilyImage"><img src={product.image} alt={product.title} loading="lazy"/></div>
          <div className="productFamilyMeta"><span>{product.series}</span><small>{product.kind}</small></div>
          <h4>{product.title}</h4><b>Teknik detayları incele ↗</b>
        </a>; })}</div>
      </section>)}</div>
    </section>
    <section className="productSelectionCta"><div><p className="eyebrow light">MÜHENDİSLİK DESTEĞİ</p><h2>Projeniz için doğru fanı<br/>birlikte seçelim.</h2><p>Debi, basınç, sıcaklık ve ortam koşullarını paylaşın; uygun ürün ve teknik çözüm için size dönüş yapalım.</p></div><div><a className="selectionPrimary" href="/iletisim">Teklif Al ↗</a><a className="selectionSecondary" href="https://select.vensis.com.tr" target="_blank" rel="noreferrer">Seçim Programı →</a></div></section>

    <footer className="vensisFooter"><div className="footerIdentity"><a href="/"><img src="/vensis-logo.webp" alt="Vensis"/></a><p>Fan, havalandırma ve endüstriyel elektrik çözümleri.</p></div><div className="footerLinks"><b>Çözümler</b><a href="https://vitlofan.com.tr">Vitlo</a><a href="https://vorticefan.com.tr">Vortice</a><a href="https://elicentfan.com.tr">Elicent</a></div><div className="footerLinks"><b>Elektrik</b><a href="https://exprooffan.com.tr">Exproof Fan</a><a href="https://exproofelektrik.com.tr">Exproof Elektrik</a><a href="https://vensiselektrik.com.tr">Vensis Elektrik</a></div><div className="footerBottom"><span>© 2026 Vensis Havalandırma Ltd. Şti.</span><span>Ankara, Türkiye</span></div></footer>
  </main>;
}

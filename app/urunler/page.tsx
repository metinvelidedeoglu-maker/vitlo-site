import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EndÃ¼striyel Fanlar | Aksiyal, Exproof, ÃatÄ± ve Kanal Tipi Fanlar | Vitlo Fan",
  description: "Vitlo Fan endÃ¼striyel fan Ã¼rÃ¼nleri: aksiyal, Ã§atÄ± tipi, duman egzost, ATEX exproof, hÃ¼creli, kanal tipi ve salyangoz fanlar.",
  alternates: { canonical: "https://vitlofan.com.tr/urunler/" },
};

const productFamilies = [
  { series: 'AXD/ATEX', title: 'AXD/ATEX Kanal Tipi Exproof Fan', kind: 'Aksiyal â¢ Kanal tipi', image: "/urun-detaylari/assets/images/AXD_ATEX_Kanal_Tipi_Exproof_Fan.webp", href: "/urun-detaylari/urunler/axd-atex-kanal-tipi-exproof-fan.html" },
  { series: 'AXD', title: 'AXD Kanal Tipi Aksiyal Fan', kind: 'Aksiyal â¢ Kanal tipi', image: "/urun-detaylari/assets/images/AXD_Kanal_Tipi_Aksiyal_Fan.webp", href: "/urun-detaylari/urunler/axd-kanal-tipi-aksiyal-fan.html" },
  { series: 'AXF', title: 'AXF Kanal Tipi Duman Egzost FanÄ±', kind: 'Aksiyal â¢ Kanal tipi', image: "/urun-detaylari/assets/images/AXF_Kanal_Tipi_Aksiyal_Duman_Egzost_Fani.webp", href: "/urun-detaylari/urunler/axf-kanal-tipi-duman-egzost-fani.html" },
  { series: 'AXJ', title: 'AXJ Aksiyal Jet Fan', kind: 'Aksiyal â¢ Jet fan', image: "/urun-detaylari/assets/images/AXJ_Aksiyal_Jet_Fan.webp", href: "/urun-detaylari/urunler/axj-aksiyal-jet-fan.html" },
  { series: 'AXW/ATEX', title: 'AXW/ATEX Duvar Tipi Exproof Fan', kind: 'Aksiyal â¢ Duvar tipi', image: "/urun-detaylari/assets/images/AXW_ATEX_Duvar_Tipi_Exproof_Fan.webp", href: "/urun-detaylari/urunler/axw-atex-duvar-tipi-exproof-fan.html" },
  { series: 'AXW', title: 'AXW Duvar Tipi Aksiyal Fan', kind: 'Aksiyal â¢ Duvar tipi', image: "/urun-detaylari/assets/images/AXW_Duvar_Tipi_Aksiyal_Fan.webp", href: "/urun-detaylari/urunler/axw-duvar-tipi-aksiyal-fan.html" },
  { series: 'CRB', title: 'CRB Prizmatik Kanal Tipi Fan', kind: 'SantrifÃ¼j â¢ Kanal tipi', image: "/urun-detaylari/assets/images/CRB_Prizmatik_Kanal_Tipi_Fan.webp", href: "/urun-detaylari/urunler/crb-prizmatik-kanal-tipi-fan.html" },
  { series: 'CRD', title: 'CRD Prizmatik Kanal Tipi Fan', kind: 'SantrifÃ¼j â¢ Kanal tipi', image: "/urun-detaylari/assets/images/CRD_Prizmatik_Kanal_Tipi_Fan.webp", href: "/urun-detaylari/urunler/crd-prizmatik-kanal-tipi-fan.html" },
  { series: 'CRD/ATEX', title: 'CRD/ATEX Kanal Tipi Exproof Fan', kind: 'SantrifÃ¼j â¢ Kanal tipi', image: "/urun-detaylari/assets/images/CRD_ATEX_Kanal_Tipi_Exproof_Fan.webp", href: "/urun-detaylari/urunler/crd-atex-kanal-tipi-exproof-fan.html" },
  { series: 'CRH', title: 'CRH Yatay AtÄ±ÅlÄ± ÃatÄ± Tipi Fan', kind: 'SantrifÃ¼j â¢ ÃatÄ± tipi', image: "/urun-detaylari/assets/images/CRH_Yatay_Atisli_Cati_Tipi_Fan.webp", href: "/urun-detaylari/urunler/crh-yatay-atisli-cati-tipi-fan.html" },
  { series: 'CRH/ATEX', title: 'CRH/ATEX Radyal ÃatÄ± Tipi Exproof Fan', kind: 'SantrifÃ¼j â¢ ÃatÄ± tipi', image: "/urun-detaylari/assets/images/CRH_ATEX_Radyal_Cati_Tipi_Exproof_Fan.webp", href: "/urun-detaylari/urunler/crh-atex-radyal-cati-tipi-exproof-fan.html" },
  { series: 'CRK', title: 'CRK HÃ¼creli Fan', kind: 'SantrifÃ¼j â¢ HÃ¼creli', image: "/urun-detaylari/assets/images/CRK_Hucreli_Fan.webp", href: "/urun-detaylari/urunler/crk-hucreli-fan.html" },
  { series: 'CRK/ATEX', title: 'CRK/ATEX HÃ¼creli Exproof Fan', kind: 'SantrifÃ¼j â¢ HÃ¼creli', image: "/urun-detaylari/assets/images/CRK_ATEX_Hucreli_Exproof_Fan.webp", href: "/urun-detaylari/urunler/crk-atex-hucreli-exproof-fan.html" },
  { series: 'CRS', title: 'CRS Salyangoz Tipi Fan', kind: 'SantrifÃ¼j â¢ Salyangoz', image: "/urun-detaylari/assets/images/CRS_Salyangoz_Tipi_Fan.webp", href: "/urun-detaylari/urunler/crs-salyangoz-tipi-fan.html" },
  { series: 'CRS/ATEX', title: 'CRS/ATEX Salyangoz Tipi Exproof Fan', kind: 'SantrifÃ¼j â¢ Salyangoz', image: "/urun-detaylari/assets/images/CRS_ATEX_Salyangoz_Tipi_Exproof_Fan.webp", href: "/urun-detaylari/urunler/crs-atex-salyangoz-tipi-exproof-fan.html" },
  { series: 'CRU', title: 'CRU Dikey AtÄ±ÅlÄ± ÃatÄ± Tipi Fan', kind: 'SantrifÃ¼j â¢ ÃatÄ± tipi', image: "/urun-detaylari/assets/images/CRU_Dikey_Atisli_Cati_Tipi_Fan.webp", href: "/urun-detaylari/urunler/cru-dikey-atisli-cati-tipi-fan.html" },
  { series: 'MOB-AXD/ATEX', title: 'MOB-AXD/ATEX Mobil Exproof Fan', kind: 'Aksiyal â¢ Mobil', image: "/urun-detaylari/assets/images/MOB_AXD_ATEX_Mobil_Exproof_Fan.webp", href: "/urun-detaylari/urunler/mob-axd-atex-mobil-exproof-fan.html" },
  { series: 'RXJ', title: 'RXJ Radyal Jet Fan', kind: 'Radyal â¢ Jet fan', image: "/urun-detaylari/assets/images/RXJ_Radyal_Jet_Fan.webp", href: "/urun-detaylari/urunler/rxj-radyal-jet-fan.html" },
  { series: 'TUNEL-AXF', title: 'TUNEL-AXF TÃ¼nel Jet FanÄ±', kind: 'Aksiyal â¢ TÃ¼nel', image: "/urun-detaylari/assets/images/TUNEL_AXF_Tunel_Jet_Fani.webp", href: "/urun-detaylari/urunler/tunel-axf-tunel-jet-fani.html" },
];

const productCategories = [
  { no: "01", slug: "aksiyal-fanlar", title: "Aksiyal Fanlar", count: "2 ÃrÃ¼n", image: "/product-categories/aksiyal.webp", description: "YÃ¼ksek hava debisinin dÃ¼ÅÃ¼k basÄ±nÃ§ kaybÄ±yla taÅÄ±nmasÄ± gereken endÃ¼striyel uygulamalar iÃ§in.", models: ["AXD Kanal Tipi", "AXW Duvar Tipi"] },
  { no: "02", slug: "cati-tipi-fanlar", title: "ÃatÄ± Tipi Fanlar", count: "2 ÃrÃ¼n", image: "/product-categories/cati.webp", description: "YapÄ± iÃ§indeki kirli ve sÄ±cak havanÄ±n Ã§atÄ± Ã¼zerinden kontrollÃ¼ Åekilde tahliyesi iÃ§in.", models: ["CRU Dikey AtÄ±ÅlÄ±", "CRH Yatay AtÄ±ÅlÄ±"] },
  { no: "03", slug: "duman-egzost-fanlari", title: "Duman Egzost FanlarÄ±", count: "4 ÃrÃ¼n", image: "/product-categories/duman.webp", description: "Otopark, tÃ¼nel ve yangÄ±n gÃ¼venliÄi projelerinde duman kontrolÃ¼ ve acil tahliye iÃ§in.", models: ["TUNEL-AXF", "RXJ", "AXJ", "AXF"] },
  { no: "04", slug: "exproof-fanlar", title: "Exproof Fanlar", count: "8 ÃrÃ¼n", image: "/product-categories/exproof.webp", description: "PatlayÄ±cÄ± atmosfer riski bulunan tesislerde gÃ¼venli hava transferi iÃ§in ATEX Ã§Ã¶zÃ¼mleri.", models: ["CRS-P/ATEX", "CRK/ATEX", "CRH/ATEX", "CRD/ATEX", "+4 seri"] },
  { no: "05", slug: "hucreli-fanlar", title: "HÃ¼creli Fanlar", count: "1 ÃrÃ¼n", image: "/product-categories/hucreli.webp", description: "Ses yalÄ±tÄ±mÄ±, kompakt yerleÅim ve servis kolaylÄ±ÄÄ±nÄ± bir araya getiren kabinli fanlar.", models: ["CRK HÃ¼creli Fan"] },
  { no: "06", slug: "kanal-tipi-fanlar", title: "Kanal Tipi Fanlar", count: "3 ÃrÃ¼n", image: "/product-categories/kanal.webp", description: "Kanal sistemlerine doÄrudan entegre edilen, kompakt ve verimli havalandÄ±rma Ã§Ã¶zÃ¼mleri.", models: ["CRB Prizmatik", "CRD Prizmatik", "AXD Aksiyal"] },
  { no: "07", slug: "salyangoz-fanlar", title: "Salyangoz Fanlar", count: "1 ÃrÃ¼n", image: "/product-categories/salyangoz.webp", description: "YÃ¼ksek basÄ±nÃ§ gerektiren proses ve endÃ¼striyel hava taÅÄ±ma uygulamalarÄ± iÃ§in.", models: ["CRS Salyangoz Tipi"] },
];

const categoryModelGroups = [
  { slug: "aksiyal-fanlar", title: "Aksiyal Fan Modelleri", intro: "YÃ¼ksek hava debisini dÃ¼ÅÃ¼k basÄ±nÃ§ kaybÄ±yla taÅÄ±mak iÃ§in aksiyal fan serileri.", series: ["AXD", "AXJ", "AXW", "AXF", "TUNEL-AXF"] },
  { slug: "cati-tipi-fanlar", title: "ÃatÄ± Tipi Fan Modelleri", intro: "ÃatÄ± Ã¼zerinden dikey veya yatay atÄ±ÅlÄ± egzoz ve havalandÄ±rma Ã§Ã¶zÃ¼mleri.", series: ["CRU", "CRH", "CRH/ATEX"] },
  { slug: "duman-egzost-fanlari", title: "Duman Egzost Fan Modelleri", intro: "Otopark, tÃ¼nel ve yangÄ±n gÃ¼venliÄi projelerinde duman kontrolÃ¼ iÃ§in fanlar.", series: ["AXF", "AXJ", "RXJ", "TUNEL-AXF"] },
  { slug: "exproof-fanlar", title: "Exproof Fan Modelleri", intro: "PatlayÄ±cÄ± atmosfer riski bulunan tesislerde ATEX uyumlu hava transferi.", series: ["AXD/ATEX", "AXW/ATEX", "CRD/ATEX", "CRH/ATEX", "CRK/ATEX", "CRS/ATEX", "MOB-AXD/ATEX"] },
  { slug: "hucreli-fanlar", title: "HÃ¼creli Fan Modelleri", intro: "Kabinli yapÄ±, ses yalÄ±tÄ±mÄ± ve servis kolaylÄ±ÄÄ± gerektiren uygulamalar iÃ§in.", series: ["CRK", "CRK/ATEX"] },
  { slug: "kanal-tipi-fanlar", title: "Kanal Tipi Fan Modelleri", intro: "Kanal sistemlerine doÄrudan entegre edilen kompakt fan Ã§Ã¶zÃ¼mleri.", series: ["AXD", "AXD/ATEX", "CRB", "CRD", "CRD/ATEX"] },
  { slug: "salyangoz-fanlar", title: "Salyangoz Fan Modelleri", intro: "YÃ¼ksek basÄ±nÃ§ gerektiren proses ve endÃ¼striyel hava taÅÄ±ma uygulamalarÄ± iÃ§in.", series: ["CRS", "CRS/ATEX"] },
];

const productBySeries: Record<string, (typeof productFamilies)[number]> = Object.fromEntries(productFamilies.map((product) => [product.series, product]));

export default function ProductsPage() {
  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Vitlo Fan endÃ¼striyel fan Ã¼rÃ¼nleri",
    itemListElement: productFamilies.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.title, url: `https://vitlofan.com.tr${product.href}` })),
  };
  return <main className="innerPage productsPage">
    <div className="topbar"><span>â AÅaÄÄ± ÃveÃ§ler Mah. 1332. Cadde No:3 D:7 Â· Ãankaya / Ankara</span><div><a href="tel:+903129451360">â 0312 945 13 60</a><a href="mailto:vensis@vensis.com.tr">â vensis@vensis.com.tr</a></div></div>
    <header className="header">
      <a className="vensisLogo leftLogo" href="/" aria-label="Vitlo Fan ana sayfa"><img src="/vensis-logo.webp" alt="Vensis Fan Elektrik Exproof"/></a>
      <nav aria-label="Ana menÃ¼"><a className="active" href="/urunler">ÃrÃ¼nler</a><a href="/#uygulamalar">Uygulamalar</a><a href="/#hakkimizda">Bizi TanÄ±yÄ±n</a><a href="/blog">Bilgi Merkezi</a><a href="/referanslar">Referanslar</a><a href="/iletisim">Ä°letiÅim</a></nav>
      <a className="vitloLogo" href="/" aria-label="Vitlo Fan ana sayfa"><img src="/vitlo-logo.webp" alt="Vitlo HavalandÄ±rma Grubu"/></a>
    </header>

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }} />
    <section className="productsHero"><div><p className="eyebrow light">ÃRÃNLER</p><h1>DoÄru hava.<br/><em>DoÄru fan.</em></h1></div><div className="productsHeroText"><span>7 ÃRÃN GRUBU / 19 ÃRÃN AÄ°LESÄ°</span><p>EndÃ¼striyel tesislerden tÃ¼nel ve otoparklara, tehlikeli alanlardan ticari yapÄ±lara kadar her ihtiyaca Ã¶zel fan Ã§Ã¶zÃ¼mleri.</p><a href="#kategoriler">Kategorileri keÅfedin â</a></div></section>

    <section className="productsCatalog" id="kategoriler"><div className="catalogHeading"><div><p className="eyebrow">ÃRÃN KATEGORÄ°LERÄ°</p><h2>Ä°htiyacÄ±nÄ±za uygun<br/>Ã¼rÃ¼n grubunu seÃ§in.</h2></div><p>ÃrÃ¼n seÃ§imi iÃ§in hava debisi, basÄ±nÃ§, sÄ±caklÄ±k, ortam sÄ±nÄ±fÄ± ve montaj koÅullarÄ±nÄ± birlikte deÄerlendiriyoruz.</p></div>
      <div className="productsCategoryGrid">{productCategories.map((category)=><article className="productsCategoryCard" id={category.slug} key={category.slug}>
        <div className="categoryCardTop"><span>{category.no}</span><small>{category.count}</small></div>
        <div className="categoryImage"><img src={category.image} alt={`${category.title} Ã¼rÃ¼n grubu`} loading="lazy"/></div>
        <h3>{category.title}</h3><p>{category.description}</p>
        <div className="modelList">{category.models.map(model=><span key={model}>{model}</span>)}</div>
        <a href={`/iletisim?kategori=${category.slug}`}>Teknik bilgi alÄ±n <b>â</b></a>
      </article>)}</div>
    </section>


    <section className="productFamiliesSection nestedCatalog" id="tum-urunler"><div className="catalogHeading"><div><p className="eyebrow">KATEGORÄ° Ä°ÃÄ°NDEKÄ° MODELLER</p><h2>Kategoriyi seÃ§in,<br/>modeli inceleyin.</h2></div><p>Her kategori altÄ±nda ilgili Ã¼rÃ¼n ailelerini doÄrudan gÃ¶rebilir; model sayfasÄ±nda teknik verileri, kullanÄ±m alanlarÄ±nÄ± ve Fan Selection baÄlantÄ±sÄ±nÄ± inceleyebilirsiniz.</p></div>
      <nav className="categoryJumpLinks" aria-label="ÃrÃ¼n kategorileri">{categoryModelGroups.map((group) => <a href={`#modeller-${group.slug}`} key={group.slug}>{group.title.replace(" Modelleri", "")} â</a>)}</nav>
      <div className="nestedCategoryList">{categoryModelGroups.map((group) => <section className="nestedCategorySection" id={`modeller-${group.slug}`} key={group.slug}>
        <div className="nestedCategoryHeading"><div><p className="eyebrow">{group.title}</p><h3>{group.title.replace(" Modelleri", "")}</h3></div><p>{group.intro}</p></div>
        <div className="productFamiliesGrid">{group.series.map((series) => { const product = productBySeries[series]; if (!product) return null; return <a className="productFamilyCard" href={product.href} key={`${group.slug}-${product.series}`}>
          <div className="productFamilyImage"><img src={product.image} alt={product.title} loading="lazy"/></div>
          <div className="productFamilyMeta"><span>{product.series}</span><small>{product.kind}</small></div>
          <h4>{product.title}</h4><b>Teknik detaylarÄ± incele â</b>
        </a>; })}</div>
      </section>)}</div>
    </section>
    <section className="productSelectionCta"><div><p className="eyebrow light">MÃHENDÄ°SLÄ°K DESTEÄÄ°</p><h2>Projeniz iÃ§in doÄru fanÄ±<br/>birlikte seÃ§elim.</h2><p>Debi, basÄ±nÃ§, sÄ±caklÄ±k ve ortam koÅullarÄ±nÄ± paylaÅÄ±n; uygun Ã¼rÃ¼n ve teknik Ã§Ã¶zÃ¼m iÃ§in size dÃ¶nÃ¼Å yapalÄ±m.</p></div><div><a className="selectionPrimary" href="/iletisim">Teklif Al â</a><a className="selectionSecondary" href="https://select.vensis.com.tr" target="_blank" rel="noreferrer">SeÃ§im ProgramÄ± â</a></div></section>

    <footer className="vensisFooter"><div className="footerIdentity"><a href="/"><img src="/vensis-logo.webp" alt="Vensis"/></a><p>Fan, havalandÄ±rma ve endÃ¼striyel elektrik Ã§Ã¶zÃ¼mleri.</p></div><div className="footerLinks"><b>ÃÃ¶zÃ¼mler</b><a href="https://vitlofan.com.tr">Vitlo</a><a href="https://vorticefan.com.tr">Vortice</a><a href="https://elicentfan.com.tr">Elicent</a></div><div className="footerLinks"><b>Elektrik</b><a href="https://exprooffan.com.tr">Exproof Fan</a><a href="https://exproofelektrik.com.tr">Exproof Elektrik</a><a href="https://vensiselektrik.com.tr">Vensis Elektrik</a></div><div className="footerBottom"><span>Â© 2026 Vensis HavalandÄ±rma Ltd. Åti.</span><span>Ankara, TÃ¼rkiye</span></div></footer>
  </main>;
}
@
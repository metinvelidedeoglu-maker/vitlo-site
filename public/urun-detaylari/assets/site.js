
window.VITLO = window.VITLO || {};
VITLO.shell = function(){
  document.body.classList.add('productDetailPage');

  const top = document.querySelector('.top');
  if(top){
    const contact = document.createElement('div');
    contact.className = 'contactbar';
    contact.innerHTML = `<span>⌖ Aşağı Öveçler Mah. 1332. Cadde No:3 D:7 · Çankaya / Ankara</span><div><a href="tel:+903129451360">☎ 0312 945 13 60</a><a href="mailto:vensis@vensis.com.tr">✉ vensis@vensis.com.tr</a></div>`;
    top.before(contact);
    top.innerHTML = `<div class="shell-wrap">
      <a class="shell-vensis" href="/" aria-label="Vitlo Fan ana sayfa"><img src="/vensis-logo.webp" alt="Vensis Fan Elektrik Exproof"></a>
      <nav class="shell-nav" aria-label="Ana menü"><a class="active" href="/urunler">Ürünler</a><a href="/#uygulamalar">Uygulamalar</a><a href="/#hakkimizda">Bizi Tanıyın</a><a href="/blog">Bilgi Merkezi</a><a href="/referanslar">Referanslar</a><a href="/iletisim">İletişim</a></nav>
      <a class="shell-vitlo" href="/" aria-label="Vitlo Fan ana sayfa"><img src="/vitlo-logo.webp" alt="Vitlo Havalandırma Grubu"></a>
    </div>`;
  }

  const footer = document.querySelector('.footer');
  if(footer){
    footer.innerHTML = `<div class="shell-footer">
      <div class="footer-identity"><a href="/"><img src="/vensis-logo.webp" alt="Vensis"></a><p>Fan, havalandırma ve endüstriyel elektrik çözümleri.</p></div>
      <div class="footer-links"><b>Çözümler</b><a href="https://vitlofan.com.tr">Vitlo</a><a href="https://vorticefan.com.tr">Vortice</a><a href="https://elicentfan.com.tr">Elicent</a></div>
      <div class="footer-links"><b>Elektrik</b><a href="https://exprooffan.com.tr">Exproof Fan</a><a href="https://exproofelektrik.com.tr">Exproof Elektrik</a><a href="https://vensiselektrik.com.tr">Vensis Elektrik</a></div>
      <div class="footer-bottom"><span>© 2026 Vensis Havalandırma Ltd. Şti.</span><span>Ankara, Türkiye</span></div>
    </div>`;
  }
};
VITLO.shell();
VITLO.escape = s => String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
VITLO.init = function(cfg){
  const all = Array.isArray(window.models)?window.models:[];
  const rows = all.filter(x=>String(x.series||'').trim()===cfg.series);
  const uniq = [];
  const seen = new Set();
  for(const r of rows){ const k=String(r.model||r.display||'').trim(); if(k && !seen.has(k)){seen.add(k);uniq.push(r)} }
  const count = uniq.length;
  const nom = uniq.map(x=>Number(x.nominal)).filter(Number.isFinite);
  const kw = uniq.map(x=>Number(x.kw)).filter(Number.isFinite);
  const spl = uniq.map(x=>Number(x.spl)).filter(Number.isFinite);
  const rpm = uniq.map(x=>Number(x.rpm)).filter(Number.isFinite);
  const fmt=n=>new Intl.NumberFormat('tr-TR').format(n);
  const set=(id,v)=>{const e=document.getElementById(id); if(e)e.textContent=v||'—'};
  set('modelCount', count ? count+' model' : 'Veri yükleniyor');
  set('flowRange', nom.length ? fmt(Math.min(...nom))+' – '+fmt(Math.max(...nom))+' m³/h':'—');
  set('powerRange', kw.length ? Math.min(...kw)+' – '+Math.max(...kw)+' kW':'—');
  set('speedRange', rpm.length ? fmt(Math.min(...rpm))+' – '+fmt(Math.max(...rpm))+' rpm':'—');

  const first=rows[0];
  if(first?.catalogueInfo){
    const box=document.getElementById('catalogueInfo');
    const info=first.catalogueInfo;
    const cards=[];
    (info.general||[]).slice(0,8).forEach(t=>cards.push(`<div class="card"><p>${VITLO.escape(t)}</p></div>`));
    if(box && cards.length) box.innerHTML=cards.join('');
    const apps=document.getElementById('applications');
    if(apps && Array.isArray(info.applications)) apps.innerHTML=info.applications.map(t=>`<div class="info"><b>${VITLO.escape(t)}</b><span>Fan Selection katalog bilgisinde belirtilen uygulama alanı.</span></div>`).join('');
  }

  const tb=document.querySelector('#models tbody');
  if(tb){
    if(!uniq.length) tb.innerHTML='<tr><td colspan="6">Bu seri için Fan Selection verisi yüklenemedi. Seçim programı bağlantısını kullanabilirsiniz.</td></tr>';
    else tb.innerHTML=uniq.map(r=>`<tr>
      <td><strong>${VITLO.escape(r.model||r.display)}</strong></td>
      <td>${Number.isFinite(Number(r.nominal))?fmt(Number(r.nominal))+' m³/h':'—'}</td>
      <td>${Number.isFinite(Number(r.kw))?Number(r.kw)+' kW':'—'}</td>
      <td>${Number.isFinite(Number(r.rpm))?fmt(Number(r.rpm))+' rpm':'—'}</td>
      <td>${Number.isFinite(Number(r.amps))?Number(r.amps)+' A':'—'}</td>
      <td>${Number.isFinite(Number(r.spl))?Number(r.spl)+' dB(A)':'—'}</td>
    </tr>`).join('');
  }

  const schema={
    "@context":"https://schema.org","@type":"ProductGroup",
    "name":cfg.name,"brand":{"@type":"Brand","name":"Vitlo"},
    "description":cfg.intro,"url":location.href,
    "image":new URL(cfg.image,location.href).href,
    "productGroupID":cfg.series,
    "variesBy":["model","airflow","motorPower","speed"]
  };
  const el=document.getElementById('dynamicSchema'); if(el)el.textContent=JSON.stringify(schema);
};

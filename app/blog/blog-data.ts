export type BlogSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogPost = {
  no: string;
  slug: string;
  tag: string;
  time: string;
  title: string;
  excerpt: string;
  intro: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    no: "01",
    slug: "vortice-lineo-quiet-kanal-tipi-fan-neden-tercih-edilir",
    tag: "VORTICE",
    time: "3 dakika okuma",
    title: "Vortice LINEO QUIET Sessiz Kanal Tipi Fan Neden Tercih Edilir?",
    excerpt: "Gürültüye hassas alanlarda yüksek performans ve sessiz çalışmayı bir araya getiren kanal tipi fan çözümü.",
    intro: "Havalandırma sistemlerinde yeterli hava debisi kadar ses seviyesi de önemlidir. Vortice LINEO QUIET, akustik konforun öncelikli olduğu konut ve ticari alanlarda güçlü hava transferini düşük gürültüyle sağlamak üzere geliştirilmiştir.",
    sections: [
      { title: "Sessiz çalışmanın önemi", paragraphs: ["Ofis, restoran, muayenehane, kreş, konut ve ıslak hacim gibi alanlarda fan sesi kullanıcı konforunu doğrudan etkiler. Akustik yalıtımlı gövde, titreşimi ve hava hareketinden kaynaklanan sesi azaltır."] },
      { title: "LINEO QUIET’in öne çıkan özellikleri", bullets: ["Akustik yalıtımlı ve kompakt gövde", "Kanal hattına yatay veya dikey montaj", "Sökülebilir motor grubu sayesinde kolay bakım", "Hız kontrolüne uygun çalışma", "Düşük enerji tüketimi ve uzun motor ömrü"] },
      { title: "Hangi alanlarda kullanılır?", paragraphs: ["Sessiz kanal tipi fan ihtiyacı bulunan ofisler, oteller, restoranlar, konutlar, klinikler ve eğitim yapılarında tercih edilebilir. Doğru model; ihtiyaç duyulan debi, kanal basınç kaybı ve kabul edilebilir ses seviyesine göre belirlenmelidir."] },
      { title: "Doğru seçim", paragraphs: ["Sadece kanal çapına göre seçim yapmak yeterli değildir. Fanın çalışma noktası, toplam basınç kaybı ve montaj koşulları birlikte değerlendirilmelidir. Teknik seçim desteği, sistemin sessiz ve verimli çalışmasını güvence altına alır."] },
    ],
  },
  {
    no: "02",
    slug: "vortice-lineo-kanal-tipi-fan-neden-tercih-edilir",
    tag: "VORTICE",
    time: "3 dakika okuma",
    title: "Vortice LINEO Kanal Tipi Fan Neden Tercih Edilir?",
    excerpt: "Kompakt gövde, güçlü hava akışı ve kolay bakım özellikleriyle profesyonel kanal havalandırması.",
    intro: "Doğru kanal tipi fan seçimi, iç hava kalitesini ve sistem verimliliğini doğrudan etkiler. Vortice LINEO serisi; kompakt tasarımı, yüksek basınç kabiliyeti ve esnek montaj özellikleriyle farklı projelere uyum sağlar.",
    sections: [
      { title: "Karma akış teknolojisi", paragraphs: ["LINEO serisinde aksiyal ve radyal fanların avantajlarını birleştiren karma akış yaklaşımı kullanılır. Böylece kompakt bir gövde içinde yüksek hava debisi ve kanal direncini karşılayabilecek basınç elde edilir."] },
      { title: "Proje avantajları", bullets: ["Dar alanlarda kolay montaj", "Kanal hattından sökülmeden motor grubuna erişim", "Farklı kanal çapları için geniş model seçeneği", "Dikey ve yatay montaj imkânı", "Hız kontrolüyle ihtiyaca göre debi ayarı"] },
      { title: "Kullanım alanları", paragraphs: ["Konutlardan ticari yapılara, mağazalardan ofislere kadar sürekli veya kontrollü hava transferi gereken uygulamalarda kullanılabilir. Model seçiminde kanal uzunluğu, dirsekler, menfezler ve filtrelerin oluşturduğu basınç kaybı hesaba katılmalıdır."] },
      { title: "Verimli işletme", paragraphs: ["Fanı gerçek çalışma noktasına göre seçmek, gereksiz enerji tüketimini ve ses oluşumunu önler. Hız kontrolü kullanılan sistemlerde debi ihtiyaca göre ayarlanarak işletme maliyeti azaltılabilir."] },
    ],
  },
  {
    no: "03",
    slug: "vortice-fan-neden-tercih-edilir",
    tag: "VORTICE",
    time: "2 dakika okuma",
    title: "Vortice Fan Neden Tercih Edilir?",
    excerpt: "Konfor, enerji verimliliği, düşük ses seviyesi ve uzun ömürlü kullanım açısından Vortice fan çözümleri.",
    intro: "Havalandırma sistemlerinde fan seçimi yalnızca hava debisine bakılarak yapılmamalıdır. Ses seviyesi, enerji tüketimi, dayanıklılık, bakım kolaylığı ve uygulamaya uygunluk birlikte değerlendirilmelidir.",
    sections: [
      { title: "Geniş ürün gamı", paragraphs: ["Vortice; banyo ve duvar tipi küçük fanlardan kanal, çatı ve endüstriyel fanlara kadar farklı ihtiyaçlara yönelik ürünler sunar. Bu çeşitlilik, projeye uygun çözümün aynı kalite yaklaşımı içinde seçilebilmesini sağlar."] },
      { title: "Kalite ve performans", bullets: ["Test edilmiş hava performansı", "Düşük ses seviyesine odaklanan tasarım", "Enerji verimli motor seçenekleri", "Kolay montaj ve bakım", "Farklı ortam koşullarına uygun gövde yapıları"] },
      { title: "Doğru ürünü belirlemek", paragraphs: ["Her fan her uygulama için uygun değildir. Ortam hacmi, kullanım amacı, kanal sistemi, çalışma süresi ve ses beklentisi belirlenmeden ürün seçilmemelidir. Teknik veriler üzerinden yapılan seçim, performans sorunlarını önler."] },
      { title: "Uzun vadeli değer", paragraphs: ["İlk yatırım maliyetinin yanında enerji tüketimi, bakım ihtiyacı ve ürün ömrü de değerlendirilmelidir. Verimli ve doğru seçilmiş bir fan, toplam işletme maliyetini düşürür."] },
    ],
  },
  {
    no: "04",
    slug: "exproof-fan-secim-rehberi-dogru-fani-nasil-belirleriz",
    tag: "EX-PROOF",
    time: "4 dakika okuma",
    title: "Exproof Fan Seçim Rehberi: Doğru Fanı Nasıl Belirleriz?",
    excerpt: "Patlayıcı ortamlarda güvenli fan seçimi için zone, gaz veya toz grubu, sıcaklık sınıfı ve performans kriterleri.",
    intro: "Patlama riski bulunan ortamlarda kullanılan fanlar yalnızca hava sirkülasyonu sağlamaz; tesis, çalışan ve proses güvenliğinin bir parçasıdır. Bu nedenle seçim hem aerodinamik performans hem de tehlikeli alan sınıflandırması üzerinden yapılmalıdır.",
    sections: [
      { title: "1. Tehlikeli alanı tanımlayın", paragraphs: ["Öncelikle ortamda gaz, buhar, sis veya yanıcı toz riski bulunup bulunmadığı belirlenir. Ardından alan Zone 0, 1, 2 veya Zone 20, 21, 22 sınıflarından biriyle tanımlanır. Fanın ekipman kategorisi bu sınıflandırmaya uygun olmalıdır."] },
      { title: "2. Patlayıcı madde özelliklerini belirleyin", bullets: ["Gaz grubu: IIA, IIB veya IIC", "Toz grubu: IIIA, IIIB veya IIIC", "Tutuşma sıcaklığı ve sıcaklık sınıfı", "Ortam sıcaklığı ve kimyasal etkiler", "Gerekli IP koruma sınıfı"] },
      { title: "3. Debi ve basıncı hesaplayın", paragraphs: ["Güvenlik sertifikası doğru olsa bile fan, gerekli hava debisini ve sistem basıncını karşılamıyorsa görevini yerine getiremez. Kanal kayıpları, filtreler, damperler ve çalışma senaryosu birlikte hesaplanmalıdır."] },
      { title: "4. Mekanik riskleri değerlendirin", paragraphs: ["Fan gövdesi ve çark malzemesi kıvılcım riskini azaltacak şekilde seçilmeli; statik elektrik için topraklama ve eşpotansiyel bağlantı sağlanmalıdır. Motor sertifikası kadar fanın mekanik yapısının da uygunluğu kontrol edilmelidir."] },
      { title: "5. Etiketi ve belgeyi doğrulayın", paragraphs: ["ATEX işaretlemesi, ekipman grubu, kategori, koruma tipi, gaz veya toz grubu, sıcaklık sınıfı ve EPL bilgileri birbiriyle uyumlu olmalıdır. Sertifika kapsamı ve üretici dokümanları sipariş öncesinde incelenmelidir."] },
    ],
  },
  {
    no: "05",
    slug: "exproof-fanlarin-teknik-detaylari-ve-endustrideki-kritik-rolu",
    tag: "EX-PROOF",
    time: "4 dakika okuma",
    title: "Exproof Fanların Teknik Detayları ve Endüstrideki Kritik Rolü",
    excerpt: "Exproof fanların koruma yapısı, malzeme seçimi, motor özellikleri ve endüstriyel tesislerdeki görevi.",
    intro: "Patlama riski taşıyan ortamlarda güvenli havalandırma, proses devamlılığı ve iş güvenliği için vazgeçilmezdir. Exproof fanlar, patlayıcı atmosferi tutuşturabilecek elektriksel ve mekanik kaynakların kontrol edilmesi amacıyla özel olarak tasarlanır.",
    sections: [
      { title: "Patlama korumalı yapı", paragraphs: ["Exproof motor ve elektrikli bileşenler, tehlikeli atmosferin tutuşmasını önleyecek koruma tiplerine sahiptir. Ex d alev sızdırmaz ve Ex e artırılmış güvenlik gibi yöntemler uygulamaya göre seçilir. Fanın tamamı ilgili ATEX şartlarını karşılamalıdır."] },
      { title: "Malzeme ve mekanik tasarım", bullets: ["Kıvılcım riskini azaltan gövde–çark eşleşmesi", "Antistatik özellikli malzemeler", "Korozyona dayanıklı kaplama seçenekleri", "Güvenli yataklama ve uygun boşluklar", "Topraklama bağlantısı"] },
      { title: "Fan tipleri", paragraphs: ["Aksiyal exproof fanlar yüksek debi ve düşük basınç gereken uygulamalarda; radyal fanlar ise daha yüksek sistem direncinde tercih edilir. Çatı, kanal veya duvar tipi çözümler uygulama ve montaj şartlarına göre seçilebilir."] },
      { title: "Endüstrideki kritik rol", paragraphs: ["Petrokimya, boya, solvent, ilaç, akaryakıt, kimya ve yanıcı toz bulunan üretim tesislerinde tehlikeli birikimleri güvenli sınırların altında tutmaya yardımcı olur. Havalandırma senaryosu proses risk analiziyle birlikte oluşturulmalıdır."] },
      { title: "Bakım ve süreklilik", paragraphs: ["Periyodik kontrollerde yataklar, bağlantılar, çark boşlukları, topraklama ve motor durumu incelenmelidir. Yetkisiz parça değişimi veya mekanik müdahale, sertifikalı koruma yapısını geçersiz kılabilir."] },
    ],
  },
  {
    no: "06",
    slug: "exproof-fan-nedir-atex-sertifikasinin-onemi",
    tag: "EX-PROOF",
    time: "3 dakika okuma",
    title: "Endüstriyel Güvenlikte Önemli Bir Rol: Exproof Fan Nedir ve ATEX Sertifikasının Önemi",
    excerpt: "Exproof fanların çalışma amacı, ATEX sertifikasının kapsamı ve tehlikeli alanlarda güvenli kullanım esasları.",
    intro: "Yanıcı gaz, buhar veya toz bulunan ortamlarda sıradan elektrikli ve mekanik ekipmanlar tutuşma kaynağına dönüşebilir. Exproof fanlar, bu riski kontrol altına almak ve güvenli hava tahliyesi sağlamak için tasarlanmış ekipmanlardır.",
    sections: [
      { title: "Exproof fan nedir?", paragraphs: ["Exproof fan; motoru, elektrik bağlantıları ve mekanik yapısı patlayıcı atmosferde güvenli çalışmaya uygun olarak tasarlanmış fan sistemidir. Amaç, normal çalışma veya öngörülebilir arıza sırasında ortamı tutuşturabilecek kıvılcım ve sıcak yüzey oluşmasını önlemektir."] },
      { title: "ATEX sertifikası neyi gösterir?", paragraphs: ["ATEX işaretlemesi ekipmanın hangi tehlikeli alanda, hangi gaz veya toz grubunda ve hangi sıcaklık sınırlarında kullanılabileceğini gösterir. Tek başına ATEX ifadesi yeterli değildir; etiketteki kategori, koruma tipi ve sıcaklık sınıfı uygulamayla eşleşmelidir."] },
      { title: "Nerelerde kullanılır?", bullets: ["Petrokimya ve rafineri tesisleri", "Boya ve solvent kullanılan üretim alanları", "Akaryakıt depolama ve dolum noktaları", "Kimya ve ilaç endüstrisi", "Yanıcı toz bulunan gıda ve proses tesisleri"] },
      { title: "Güvenli kullanım", paragraphs: ["Fan seçimi tehlikeli alan dokümanına göre yapılmalı, montaj yetkin kişilerce tamamlanmalı ve tüm elektriksel bağlantılar uygun exproof ekipmanlarla kurulmalıdır. Topraklama ve bakım prosedürleri ihmal edilmemelidir."] },
      { title: "Sonuç", paragraphs: ["Exproof fan, bir havalandırma ürününden daha fazlasıdır; tesisin patlamadan korunma yaklaşımının aktif bir parçasıdır. Doğru seçim, doğru montaj ve düzenli bakım birlikte ele alındığında güvenli ve sürdürülebilir çalışma sağlar."] },
    ],
  },
];

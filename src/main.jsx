import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Network,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
  X,
} from 'lucide-react';
import './styles.css';

const profileLinks = {
  linkedin: 'https://www.linkedin.com/in/tarik-cetint%C3%BCrk/',
  github: 'https://github.com/taopato',
  mail: 'mailto:destek@takosware.com',
};

const roomoraLinks = {
  ios: 'https://apps.apple.com/app/id6800784560',
  android: 'https://play.google.com/store/apps/details?id=com.taopato.roomora',
};

const skillGroups = [
  {
    icon: Code2,
    title: 'Backend geliştirme',
    text: '.NET, ASP.NET Core, C#, REST API, Clean Architecture, CQRS, MediatR ve Entity Framework',
  },
  {
    icon: Database,
    title: 'Veri ve güvenlik',
    text: 'SQL Server, PostgreSQL, veri modelleme, JWT, rol bazlı yetkilendirme ve güvenli işlem akışları',
  },
  {
    icon: ServerCog,
    title: 'Operasyon',
    text: 'Docker, Ubuntu, Hangfire, loglama, CI/CD, reverse proxy ve üretim ortamı yönetimi',
  },
  {
    icon: Users,
    title: 'Ürün ve ekip',
    text: 'Teknik kararları ürün ihtiyacıyla buluşturma, ekip içi iletişim ve uçtan uca sorumluluk',
  },
];

const builtWhysSteps = [
  ['Araştırma ve yönetmenlik', 'Konu seçimi, kaynak kontrolü ve içerik yönünün belirlenmesi'],
  ['Senaryo editörlüğü', 'Kısa format ritmine uygun metin, başlık ve kanca üretimi'],
  ['Görsel ve ses üretimi', 'Lisanslı görseller, özgün diyagramlar, seslendirme ve altyazı'],
  ['Kalite kontrol', 'Tekrar, özgünlük, süre, güvenlik ve platform kurallarının denetlenmesi'],
  ['İnsan onayı ve yayın', 'Kontrol merkezinden revizyon, onay ve çoklu platform dağıtımı'],
];

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={closeMenu} aria-label="Sayfanın başına git">
        <span className="brand-mark">TÇ</span>
        <span>
          <strong>Tarık Çetintürk</strong>
          <small>Takosware</small>
        </span>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Ana menü" id="site-menu">
        <a href="#hakkimda" onClick={closeMenu}>Hakkımda</a>
        <a href="#deneyim" onClick={closeMenu}>Deneyim</a>
        <a href="#projeler" onClick={closeMenu}>Projeler</a>
        <a href="#iletisim" onClick={closeMenu}>İletişim</a>
      </nav>
    </header>
  );
}

function SocialLink({ href, icon: Icon, children, className = '' }) {
  return (
    <a className={`button-link ${className}`} href={href} target="_blank" rel="noreferrer">
      <Icon size={18} aria-hidden="true" />
      {children}
    </a>
  );
}

function RoomoraCaseStudy() {
  return (
    <article className="case-study roomora-case">
      <div className="case-copy">
        <div className="project-brand">
          <img src="/assets/roomora-mark.png" alt="Roomora logosu" />
          <div>
            <span className="project-index">01 · Mobil ürün</span>
            <h3>Roomora</h3>
          </div>
        </div>
        <p className="case-lead">
          Evde ya da yolculukta birlikte yapılan harcamaları kimin ödediğini ve kime ne kadar
          düştüğünü açıkça gösteren mobil uygulama.
        </p>
        <p>
          Bir evde kira, su ve elektrik faturasını; bir gezide otel, yemek ve ulaşım giderlerini
          aynı mantıkla takip edebilirsiniz. Harcamaya yalnızca ilgili kişileri dahil edebilir,
          borçları kalemlerine kadar inceleyebilir, kısmi ödemeleri kaydedebilirsiniz. Fiş okuma
          ve hızlı harcama akışları da günlük kullanımı kolaylaştırır.
        </p>
        <p>
          React Native ve Expo istemcisini .NET API, SQL Server ve kimlik doğrulama katmanıyla
          birlikte geliştirdim. Roomora bugün iPhone ve Android mağazalarında yayında.
        </p>
        <div className="tag-list" aria-label="Roomora teknolojileri">
          <span>React Native</span><span>Expo</span><span>.NET</span><span>SQL Server</span><span>JWT</span>
        </div>
        <div className="roomora-store-links">
          <a href={roomoraLinks.ios} target="_blank" rel="noreferrer"><Smartphone size={18} /> App Store <ArrowUpRight size={16} /></a>
          <a href={roomoraLinks.android} target="_blank" rel="noreferrer"><Smartphone size={18} /> Google Play <ArrowUpRight size={16} /></a>
        </div>
        <div className="roomora-qr-links" aria-label="Roomora indirme QR kodları">
          <a href={roomoraLinks.ios} target="_blank" rel="noreferrer"><img src="/assets/roomora-ios-qr.png" alt="Roomora App Store bağlantısının QR kodu" /><span>iPhone</span></a>
          <a href={roomoraLinks.android} target="_blank" rel="noreferrer"><img src="/assets/roomora-android-qr.png" alt="Roomora Google Play bağlantısının QR kodu" /><span>Android</span></a>
        </div>
        <a className="text-link" href="https://github.com/taopato/RoomoraMobile" target="_blank" rel="noreferrer">
          Kaynak kodu incele <ArrowUpRight size={17} />
        </a>
      </div>

      <div className="roomora-showcase" aria-label="Roomora Android uygulamasından örnek ekranlar">
        <div className="showcase-heading"><span>Ev bütçesi</span><span>01 / 02</span></div>
        <div className="phone-gallery">
          <figure className="phone-shot"><img src="/assets/home-tr-01-home.png" alt="Roomora ev ana sayfası, örnek veriler" /></figure>
          <figure className="phone-shot"><img src="/assets/home-tr-03-bills.png" alt="Roomora elektrik, su ve internet faturaları, örnek veriler" /></figure>
          <figure className="phone-shot"><img src="/assets/home-tr-04-balance.png" alt="Roomora kişi bazlı borç ve alacak özeti, örnek veriler" /></figure>
        </div>
        <div className="showcase-heading"><span>Gezi hesabı</span><span>02 / 02</span></div>
        <div className="phone-gallery trip-gallery">
          <figure className="phone-shot"><img src="/assets/trip-tr-02-home.png" alt="Roomora gezi ana sayfası, örnek veriler" /></figure>
          <figure className="phone-shot"><img src="/assets/trip-tr-03-expenses.png" alt="Roomora gezi harcamaları, örnek veriler" /></figure>
        </div>
        <p className="showcase-note">Android uygulamasından alınmış ekranlar. Kişi ve tutarlar örnektir.</p>
      </div>
    </article>
  );
}

function GezentiCaseStudy() {
  return (
    <article className="case-study gezenti-case">
      <div className="case-media gezenti-media">
        <figure className="gezenti-desktop-shot">
          <img src="/assets/gezzenti-desktop.png" alt="Gezzenti canlı web uygulamasının masaüstü ana sayfası" />
        </figure>
        <figure className="gezenti-mobile-shot">
          <img src="/assets/gezzenti-mobile.png" alt="Gezzenti canlı web uygulamasının mobil ana sayfası" />
        </figure>
      </div>
      <div className="case-copy">
        <span className="project-index">02 · TÜBİTAK ekip projesi</span>
        <h3>Gezzenti</h3>
        <p className="case-lead">
          Kullanıcının ilgi alanı, konumu ve bütçesine göre keşfedilecek yerleri bir araya getiren
          sosyal gezi platformu.
        </p>
        <p>
          Trakya Üniversitesi TÜBİTAK ekibiyle geliştirilen projede backend geliştirici olarak
          kullanıcı, mekan, kategori, yorum, puan, favori ve tercih akışlarını ele aldım; yönetim
          ekibinde de aktif rol üstlendim. .NET 8, SQL Server, MongoDB ve JWT ile kurulan sistem
          canlıya alınarak kullanılmaya başlandı.
        </p>
        <div className="tag-list" aria-label="Gezzenti teknolojileri">
          <span>.NET 8</span><span>SQL Server</span><span>MongoDB</span><span>JWT</span><span>REST API</span>
        </div>
        <a className="text-link" href="https://gezzenti.com/" target="_blank" rel="noreferrer">
          Canlı projeyi aç <ArrowUpRight size={17} />
        </a>
      </div>
    </article>
  );
}

function BuiltWhysCaseStudy() {
  return (
    <article className="case-study builtwhys-case">
      <div className="case-copy">
        <span className="project-index">03 · Otomasyon ürünü</span>
        <h3>BuiltWhys Shorts Factory</h3>
        <p className="case-lead">
          Kısa format içerik üretimini fikirden insan onaylı yayına kadar yöneten, çok aşamalı bir
          otomasyon ve kontrol merkezi.
        </p>
        <p>
          n8n ile farklı servisleri aynı akışta birleştiren sistemde her aşama ayrı bir uzman rolü
          gibi çalışıyor. Üretim tamamen başıboş bırakılmıyor; kalite ve özgünlük kontrollerinden
          geçen içerik ancak insan onayından sonra yayın kuyruğuna alınıyor.
        </p>
        <ol className="process-list">
          {builtWhysSteps.map(([title, text], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><strong>{title}</strong><p>{text}</p></div>
            </li>
          ))}
        </ol>
        <div className="tag-list" aria-label="BuiltWhys teknolojileri">
          <span>n8n</span><span>Python</span><span>LLM</span><span>FFmpeg</span><span>Çoklu platform</span>
        </div>
      </div>
      <div className="case-media builtwhys-media">
        <img src="/assets/builtwhys-control.png" alt="BuiltWhys kontrol merkezi ana ekranı" />
        <img src="/assets/builtwhys-review.png" alt="BuiltWhys içerik kalite ve onay ekranı" />
      </div>
    </article>
  );
}

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Backend Developer · Product Builder</p>
              <h1 id="hero-title">Tarık Çetintürk</h1>
              <p className="hero-intro">
                Yazılımı yalnızca çalışan kod olarak görmüyorum. Bir fikrin veri modelinden
                ekrandaki son dokunuşuna, yayından sonraki bakımına kadar bütün yolculuğuyla
                ilgileniyorum. Gündüz kurumsal .NET sistemlerinde, kendi zamanımda Takosware
                ürünlerinde aynı merakla çalışıyorum.
              </p>
              <div className="hero-actions">
                <a className="button-link primary" href="#projeler">
                  Projeleri incele <ArrowDown size={18} />
                </a>
                <SocialLink href={profileLinks.linkedin} icon={Linkedin}>LinkedIn</SocialLink>
              </div>
              <div className="hero-facts" aria-label="Kısa bilgiler">
                <span><BriefcaseBusiness size={17} /> Backend Developer</span>
                <span><Network size={17} /> Takosware kurucusu</span>
                <span><GraduationCap size={17} /> Trakya Üniversitesi</span>
              </div>
            </div>
            <figure className="hero-portrait">
              <img src="/assets/tarik-cetinturk.jpg" alt="Tarık Çetintürk portresi" />
              <figcaption>İstanbul · Türkiye</figcaption>
            </figure>
          </div>
          <a className="scroll-cue" href="#hakkimda" aria-label="Hakkımda bölümüne git">
            Devam et <ArrowDown size={16} />
          </a>
        </section>

        <section className="about section" id="hakkimda">
          <div className="section-heading">
            <p className="kicker">Hakkımda</p>
            <h2>Teknik derinlik, ürün bakışı ve işi sahiplenme.</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p className="large-copy">
                Bir özelliği yalnızca kodlamakla değil; doğru veri modeli, güvenli API, izlenebilir
                operasyon ve kullanıcıya ulaşan son deneyimle birlikte ele alıyorum.
              </p>
              <p>
                Profesyonel olarak kurumsal backend sistemleri üzerinde çalışırken Takosware çatısı
                altında kendi ürünlerimi geliştiriyorum. Ekip içinde açık iletişime, ölçülebilir
                ilerlemeye ve üretim ortamında sürdürülebilecek çözümlere önem veriyorum.
              </p>
              <p>
                Benim için iyi mühendislik, yalnızca çalışan bir API teslim etmek değil. Bir kullanıcı
                hatayı bildirdiğinde nedenini bulabilmek, veriyi güvenle korumak ve ürünü ilk sürümden
                sonraki aylarda da geliştirebilmektir. .NET tarafındaki işimle Roomora gibi kendi
                ürünlerimde bu yaklaşımı aynı ciddiyetle uyguluyorum.
              </p>
            </div>
            <aside className="principles" aria-label="Çalışma yaklaşımı">
              <p><ShieldCheck size={20} /><span><strong>Güvenilir altyapı</strong>Hata senaryoları ve veri bütünlüğü en baştan düşünülür.</span></p>
              <p><Workflow size={20} /><span><strong>Uçtan uca bakış</strong>API'den dağıtıma kadar akışın tamamı sahiplenilir.</span></p>
              <p><Sparkles size={20} /><span><strong>Sade ürün deneyimi</strong>Teknik karmaşıklık kullanıcıya yük edilmez.</span></p>
            </aside>
          </div>
        </section>

        <section className="skills-band" aria-label="Teknik yetkinlikler">
          <div className="skills-inner">
            {skillGroups.map(({ icon: Icon, title, text }) => (
              <article className="skill-item" key={title}>
                <Icon size={23} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section" id="deneyim">
          <div className="section-heading split-heading">
            <div>
              <p className="kicker">Deneyim ve eğitim</p>
              <h2>Bugünkü çalışma biçimimi oluşturan yol.</h2>
            </div>
            <p>
              Kurumsal sistemlerden öğrendiklerimi kendi ürünlerime, ürün geliştirirken kazandığım
              çevikliği de profesyonel işime taşıyorum.
            </p>
          </div>

          <div className="journey-grid">
            <article className="journey-column">
              <div className="journey-label"><BriefcaseBusiness size={18} /> Profesyonel deneyim</div>
              <div className="journey-entry current">
                <span className="entry-date">Güncel</span>
                <h3>Backend Developer · Kamyoon</h3>
                <p className="entry-subtitle">Nakliye yönetim sistemi (TMS)</p>
                <p>
                  Kamyoon, taşıma talebinden araç ve sefer planlamasına; saha evrakından navlun
                  mutabakatı ve faturaya kadar lojistik operasyonlarını tek akışta buluşturan bir
                  platform. Arkas Lojistik için uyarlanan liman operasyonu da şirketin kamuya açık
                  referansları arasında yer alıyor.
                </p>
                <p>
                  Bu ortamda C#/.NET servisleri, SQL veri akışları, arka plan işleri, loglama ve
                  dağıtım süreçleri üzerinde çalışıyorum. Farklı ekiplerin aynı veriye güvenmesi
                  gereken bir üründe doğruluk, izlenebilirlik ve bakım kolaylığı benim için günlük
                  mühendislik kararları. İç operasyon ayrıntılarını paylaşmıyorum.
                </p>
                <a className="experience-link" href="https://www.kamyoon.com/" target="_blank" rel="noreferrer">Kamyoon'u incele <ArrowUpRight size={15} /></a>
              </div>
              <div className="journey-entry">
                <span className="entry-date">Bağımsız ürünler</span>
                <h3>Takosware</h3>
                <p>
                  Roomora ve BuiltWhys gibi ürünlerde fikir, tasarım, backend, mobil istemci,
                  sunucu, dağıtım ve ürün kararlarını uçtan uca yönetiyorum.
                </p>
              </div>
            </article>

            <article className="journey-column education-column">
              <div className="journey-label"><GraduationCap size={18} /> Eğitim ve topluluk</div>
              <div className="journey-entry current">
                <span className="entry-date">Devam ediyor</span>
                <h3>Trakya Üniversitesi</h3>
                <p className="entry-subtitle">Bilişim Sistemleri ve Yönetimi</p>
                <p>
                  Geçirdiğim trafik kazasının ardından üçüncü sınıfta yatay geçiş yaparak eğitimime
                  Trakya Üniversitesi'nde devam ettim. Bu değişim, yazılım çalışmalarımı bırakmak
                  yerine daha disiplinli ve ürün odaklı sürdürdüğüm yeni bir dönem oldu.
                </p>
              </div>
              <div className="journey-entry">
                <span className="entry-date">2020 · Başlangıç</span>
                <h3>Doğu Akdeniz Üniversitesi</h3>
                <p className="entry-subtitle">Matematik ve Bilgisayar Bilimleri (İngilizce) · %100 burs</p>
                <p>Algoritma, matematiksel düşünme ve bilgisayar bilimleri temellerimi burada oluşturdum.</p>
              </div>
              <div className="journey-entry compact-entry">
                <span className="entry-date">Topluluk</span>
                <h3>Trakya Üniversitesi TÜBİTAK Topluluğu</h3>
                <p>Yönetim ekibinde görev alıyor, ekip projelerinin teknik ve organizasyonel süreçlerine katkı sağlıyorum.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="projects" id="projeler">
          <div className="projects-intro section">
            <div className="section-heading split-heading light-heading">
              <div>
                <p className="kicker">Seçili projeler</p>
                <h2>Kodun ötesinde, çalışan ürünler.</h2>
              </div>
              <p>
                Her proje farklı bir problemi çözüyor; ortak noktaları gerçek kullanım senaryoları,
                sürdürülebilir altyapı ve dikkatle kurulmuş ürün akışları.
              </p>
            </div>
          </div>
          <div className="case-list">
            <RoomoraCaseStudy />
            <GezentiCaseStudy />
            <BuiltWhysCaseStudy />
          </div>
        </section>

        <section className="contact section" id="iletisim">
          <div className="contact-copy">
            <p className="kicker">İletişim</p>
            <h2>Bir ürün, ekip ya da teknik problem hakkında konuşalım.</h2>
            <p>
              Backend geliştirme, ürün mühendisliği ve otomasyon projeleri için bana e-posta,
              LinkedIn veya GitHub üzerinden ulaşabilirsin.
            </p>
          </div>
          <div className="contact-actions">
            <a className="contact-row" href={profileLinks.mail}>
              <span><Mail size={20} /><strong>E-posta</strong></span>
              <span>destek@takosware.com <ArrowRight size={18} /></span>
            </a>
            <a className="contact-row" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
              <span><Linkedin size={20} /><strong>LinkedIn</strong></span>
              <span>Tarık Çetintürk <ArrowUpRight size={18} /></span>
            </a>
            <a className="contact-row" href={profileLinks.github} target="_blank" rel="noreferrer">
              <span><Github size={20} /><strong>GitHub</strong></span>
              <span>taopato <ArrowUpRight size={18} /></span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Tarık Çetintürk · Takosware</p>
        <a href="#top">Yukarı dön <ArrowUpRight size={15} /></a>
      </footer>
    </>
  );
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tarık Çetintürk',
  jobTitle: 'Backend Developer',
  url: 'https://takosware.com/tarikcetinturk',
  image: 'https://takosware.com/assets/tarik-cetinturk.jpg',
  sameAs: [profileLinks.linkedin, profileLinks.github],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Doğu Akdeniz Üniversitesi' },
    { '@type': 'CollegeOrUniversity', name: 'Trakya Üniversitesi' },
  ],
  knowsAbout: ['C#', '.NET', 'SQL Server', 'JWT', 'Docker', 'React Native', 'Backend Development'],
};

const schema = document.createElement('script');
schema.type = 'application/ld+json';
schema.textContent = JSON.stringify(schemaData);
document.head.appendChild(schema);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

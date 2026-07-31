import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown,
  ArrowUpRight,
  Boxes,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Mail,
  Menu,
  ServerCog,
  Smartphone,
  X,
} from 'lucide-react';
import './styles.css';

const skills = [
  { icon: Code2, title: 'Backend', items: '.NET, ASP.NET Core, C#, REST API, Clean Architecture, CQRS, MediatR, Entity Framework' },
  { icon: Database, title: 'Veri', items: 'SQL Server, PostgreSQL, SQLite, veri modelleme, migration ve güvenli finansal işlemler' },
  { icon: CloudCog, title: 'Altyapı', items: 'Docker, Linux, Caddy, IIS, Kestrel, AWS RDS, Hangfire, CI/CD ve gözlemlenebilirlik' },
  { icon: Smartphone, title: 'Ürün', items: 'React Native, Expo, React, Next.js, TypeScript ve uçtan uca ürün geliştirme' },
];

const projects = [
  {
    name: 'Roomora',
    type: 'Kendi ürünü',
    description: 'Ev arkadaşları için harcama, fatura, ödeme, not ve ortak yaşam yönetimini tek akışta birleştiren mobil ürün.',
    image: '/assets/roomora-home.png',
    alt: 'Roomora mobil uygulamasının ana sayfa ekranı',
    tags: ['React Native', 'Expo', '.NET', 'SQL Server'],
    href: 'https://github.com/taopato/RoomoraMobile',
  },
  {
    name: 'BuiltWhys',
    type: 'Kendi ürünü',
    description: 'Kısa biçimli açıklayıcı içeriklerin araştırma, üretim ve yayın operasyonunu yöneten otomasyon sistemi.',
    image: '/assets/builtwhys-control.png',
    alt: 'BuiltWhys kontrol merkezinin ekran görüntüsü',
    tags: ['Python', 'Automation', 'Docker', 'YouTube API'],
    href: 'https://github.com/taopato',
  },
  {
    name: 'Carvia',
    type: 'Ürün çalışması',
    description: 'Araç sahipliği ve servis süreçlerini daha anlaşılır hale getirmeye odaklanan ürün geliştirme çalışması.',
    tags: ['Backend', 'Product Design', 'API'],
    href: 'https://github.com/taopato',
  },
  {
    name: 'Berber SaaS',
    type: 'Ürün çalışması',
    description: 'Randevu, müşteri ve işletme operasyonlarını sadeleştirmek için tasarlanan çok kiracılı SaaS altyapısı.',
    tags: ['SaaS', 'Multi-tenant', '.NET'],
    href: 'https://github.com/taopato',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (window.location.pathname === '/') {
      window.history.replaceState({}, '', '/tarikcetinturk');
    }
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tarık Çetintürk ana sayfa">
          <span className="brand-mark">TÇ</span>
          <span>
            <strong>Tarık Çetintürk</strong>
            <small>Takosware</small>
          </span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Menüyü aç" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <a href="#hakkimda" onClick={closeMenu}>Hakkımda</a>
          <a href="#deneyim" onClick={closeMenu}>Deneyim</a>
          <a href="#urunler" onClick={closeMenu}>Ürünler</a>
          <a href="#iletisim" onClick={closeMenu}>İletişim</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="atmosphere-lines" aria-hidden="true"><i /><i /><i /></div>
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Backend Developer · Product Builder</p>
              <h1>Sağlam sistemler kuruyor, onları gerçek ürünlere dönüştürüyorum.</h1>
              <p className="hero-lead">
                Ben Tarık Çetintürk. Takosware çatısı altında backend sistemleri, mobil uygulamalar
                ve günlük bir problemi gerçekten çözen ürünler geliştiriyorum.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#urunler">Seçili ürünler <ArrowDown size={18} /></a>
                <a className="button secondary" href="https://github.com/taopato" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              </div>
            </div>
            <div className="portrait-shell" role="img" aria-label="Tarık Çetintürk monogramı">
              <div className="portrait">
                <span>TÇ</span>
                <small>Backend · Mobile · Product</small>
              </div>
              <div className="portrait-caption">
                <span>Edremit, Balıkesir</span>
                <strong>Bağımsız ürün geliştirici</strong>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#hakkimda">Devam et <ArrowDown size={15} /></a>
        </section>

        <section className="section intro" id="hakkimda">
          <div className="section-heading">
            <p className="kicker">Yaklaşım</p>
            <h2>Arayüzün arkasında güvenilir bir sistem olmalı.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Ürün geliştirirken yalnızca çalışan kodu değil; doğru veri modelini, anlaşılır akışları,
              güvenli dağıtımı ve sürdürülebilir bakımı birlikte düşünüyorum.
            </p>
            <p>
              Bugün odağım .NET tabanlı backend mimarileri, React Native mobil ürünler ve Docker ile
              üretime taşınan sistemler. Fikri ekrana, ekranı çalışan ürüne bağlayan bütün süreci seviyorum.
            </p>
          </div>
        </section>

        <section className="skills-band" aria-label="Teknik yetkinlikler">
          <div className="skills-grid">
            {skills.map(({ icon: Icon, title, items }) => (
              <article className="skill" key={title}>
                <Icon size={24} strokeWidth={1.8} />
                <h3>{title}</h3>
                <p>{items}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience" id="deneyim">
          <div className="section-heading">
            <p className="kicker">Deneyim</p>
            <h2>Üretim ortamını bilen bir geliştirme pratiği.</h2>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-icon"><BriefcaseBusiness /></div>
              <div>
                <p className="meta">Backend Developer</p>
                <h3>Kamyoon</h3>
                <p>Backend servisleri, iş akışları ve veri katmanı üzerinde ürün ihtiyaçlarına dönük geliştirmeler.</p>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-icon"><Boxes /></div>
              <div>
                <p className="meta">Kurucu · Bağımsız Product Builder</p>
                <h3>Takosware</h3>
                <p>Roomora ve BuiltWhys dahil, fikirden canlı altyapıya uzanan bağımsız ürün çalışmaları.</p>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-icon"><GraduationCap /></div>
              <div>
                <p className="meta">Bilişim Sistemleri ve Teknolojileri</p>
                <h3>Trakya Üniversitesi</h3>
                <p>Devam eden lisans eğitimi; yazılım, sistem ve ürün geliştirme çalışmalarını akademik temelle destekliyor.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="projects" id="urunler">
          <div className="projects-inner">
            <div className="section-heading light">
              <p className="kicker">Seçili işler</p>
              <h2>Yayınlanan, geliştirilen ve büyütülen ürünler.</h2>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article className={`project ${project.image ? 'featured' : ''}`} key={project.name}>
                  {project.image && (
                    <div className="project-media">
                      <img src={project.image} alt={project.alt} loading={index ? 'lazy' : 'eager'} />
                    </div>
                  )}
                  <div className="project-copy">
                    <span className="project-type">{project.type}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.name} bağlantısını aç`}>
                      İncele <ArrowUpRight size={17} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="iletisim">
          <div>
            <p className="kicker">İletişim</p>
            <h2>Bir ürün, sistem veya teknik fikir üzerine konuşalım.</h2>
          </div>
          <div className="contact-links">
            <a href="mailto:destek@takosware.com"><Mail /> destek@takosware.com</a>
            <a href="https://github.com/taopato" target="_blank" rel="noreferrer"><Github /> github.com/taopato</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><Layers3 size={20} /> Takosware</div>
        <p>Tarık Çetintürk tarafından tasarlandı ve geliştirildi.</p>
        <a href="#top">Yukarı <ArrowUpRight size={15} /></a>
      </footer>
    </>
  );
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tarık Çetintürk',
  jobTitle: 'Backend Developer',
  url: 'https://takosware.com/tarikcetinturk',
  sameAs: ['https://github.com/taopato'],
  worksFor: { '@type': 'Organization', name: 'Takosware' },
};

const schema = document.createElement('script');
schema.type = 'application/ld+json';
schema.textContent = JSON.stringify(personSchema);
document.head.appendChild(schema);

createRoot(document.getElementById('root')).render(<App />);

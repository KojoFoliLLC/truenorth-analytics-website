import { useEffect } from 'react';

const services = [
  {
    title: 'Operational Analytics',
    description:
      'Transform operational data into actionable insight across fulfillment, service delivery, process performance, and decision support.',
  },
  {
    title: 'Data Strategy & Foundations',
    description:
      'Establish the right data sources, repository structures, KPI definitions, and reporting models before scaling analytics.',
  },
  {
    title: 'Dashboarding & Executive Reporting',
    description:
      'Build executive-ready dashboards and reporting frameworks that improve visibility, alignment, and accountability.',
  },
  {
    title: 'Quality & Process Intelligence',
    description:
      'Combine process rigor with analytical thinking to identify inefficiencies, root causes, and opportunities for measurable improvement.',
  },
];

const pillars = [
  'Data collection and source mapping',
  'Repository and model design',
  'KPI framework development',
  'Descriptive and diagnostic analytics',
  'Predictive readiness and decision support',
  'Continuous improvement and governance',
];

const industries = [
  'Operations & Supply Chain',
  'Distribution & Warehousing',
  'Retail & Commercial Services',
  'Small and Mid-Sized Businesses',
];

function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="hero">
        <nav className="nav">
          <a href="#" className="nav-logo">
            <img src="/logo.png" alt="TrueNorth Analytics" height="56" />
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero-grid">
          <div className="reveal">
            <p className="badge">Analytics for better business decisions</p>
            <h1>Helping organizations move from raw data to strategic clarity.</h1>
            <p className="hero-copy">
              TRUENORTH ANALYTICS LTD partners with growing organizations to build strong data foundations, uncover operational insight, and support smarter decision-making with practical analytics.
            </p>
            <div className="cta-row">
              <a className="btn primary" href="#contact">Book a Consultation</a>
              <a className="btn secondary" href="#services">Explore Services</a>
            </div>
          </div>

          <aside className="hero-card reveal" style={{ transitionDelay: '0.15s' }}>
            <p className="muted">Core Focus</p>
            <h2>Operational intelligence that drives execution.</h2>
            <p>
              We help organizations define the right data, structure it effectively, and turn it into usable insight for leadership and frontline decision-makers.
            </p>
          </aside>
        </section>
      </header>

      <section id="about" className="section two-column">
        <div className="reveal">
          <p className="eyebrow accent">About TrueNorth</p>
          <h2>A disciplined, business-first approach to analytics.</h2>
          <p>
            TrueNorth Analytics is positioned to support organizations that need more than dashboards. We focus on the full journey: identifying data sources, structuring repositories, developing meaningful KPIs, and enabling reporting that leadership can trust.
          </p>
          <p>
            Our approach aligns analytics work with business priorities so that insight is not only technically sound, but operationally useful and decision-ready.
          </p>
        </div>
        <div className="panel reveal" style={{ transitionDelay: '0.15s' }}>
          <h3>Our delivery model</h3>
          <div className="pillars">
            {pillars.map((pillar, i) => (
              <div
                className="pillar reveal"
                key={pillar}
                style={{ transitionDelay: `${0.05 * i}s` }}
              >
                {pillar}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section services-section">
        <p className="eyebrow accent reveal">Services</p>
        <h2 className="reveal" style={{ transitionDelay: '0.05s' }}>Structured analytics services for growing organizations.</h2>
        <p className="section-intro reveal" style={{ transitionDelay: '0.1s' }}>
          We help clients establish a sustainable analytics capability by starting with the fundamentals and building toward insight maturity.
        </p>
        <div className="cards">
          {services.map((service, i) => (
            <article
              className="card reveal"
              key={service.title}
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section two-column">
        <div className="reveal">
          <p className="eyebrow accent">Who We Support</p>
          <h2>Supporting organizations that need clarity, structure, and performance visibility.</h2>
          <p>
            TrueNorth Analytics is especially well-positioned for businesses that are early in their analytics journey and need help putting the right data and reporting foundations in place.
          </p>
        </div>
        <div className="industry-grid">
          {industries.map((industry, i) => (
            <div
              className="industry reveal"
              key={industry}
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              {industry}
            </div>
          ))}
        </div>
      </section>

      <section className="value-band">
        <div className="reveal">
          <p className="eyebrow">Value Proposition</p>
          <h2>From disconnected data to decision-ready insight.</h2>
          <p>
            Whether your organization is defining its first KPI framework or looking to strengthen operational reporting, TrueNorth Analytics delivers a practical roadmap grounded in business priorities.
          </p>
        </div>
      </section>

      <section id="contact" className="section two-column contact-section">
        <div className="reveal">
          <p className="eyebrow accent">Contact</p>
          <h2>Ready to build a stronger analytics foundation?</h2>
          <p>
            Let's discuss how TRUENORTH ANALYTICS LTD can help your organization improve visibility, align data with business priorities, and turn information into action.
          </p>
        </div>
        <div className="contact-card reveal" style={{ transitionDelay: '0.15s' }}>
          <h3>Start the conversation</h3>
          <p>Email: info@true-north-analytics.com</p>
          <p>Website: true-north-analytics.com</p>
          <p>Focus: Data foundations, operational analytics, reporting, and performance insight</p>
          <a className="btn primary full" href="mailto:info@true-north-analytics.com">Email Us</a>
        </div>
      </section>
    </main>
  );
}

export default App;

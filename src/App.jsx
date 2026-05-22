import { useEffect, useState } from 'react';

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('validation');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/info@true-north-analytics.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          'First Name': form.firstName,
          'Last Name': form.lastName,
          Email: form.email,
          Phone: form.phone,
          Message: form.message,
          _next: 'https://true-north-analytics.com/#contact',
          _subject: 'New consultation request — TrueNorth Analytics',
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="hero">
        <nav className="nav">
          <a href="#" className="nav-logo" onClick={closeMenu}>
            <img src="/logo.png" alt="TrueNorth Analytics" height="56" />
          </a>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
        </nav>

        <section className="hero-grid">
          <div className="reveal">
            <p className="badge">Data-Driven Decisions. Measurable Results.</p>
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
              <div className="pillar reveal" key={pillar} style={{ transitionDelay: `${0.05 * i}s` }}>
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
            <article className="card reveal" key={service.title} style={{ transitionDelay: `${0.1 * i}s` }}>
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
            <div className="industry reveal" key={industry} style={{ transitionDelay: `${0.1 * i}s` }}>
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
          <p>
            Your first consultation is complimentary — no cost, no commitment. We start by listening, then take an honest look at your situation to give you clear, straightforward guidance on the right path forward and a frank answer on whether TrueNorth is the right fit to help you get there.
          </p>
        </div>
        <div className="contact-card reveal" style={{ transitionDelay: '0.15s' }}>
          {status === 'success' ? (
            <div className="form-success">
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. We'll be in touch shortly.</p>
              <button className="btn primary full" onClick={() => setStatus('idle')}>Send another</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <h3>Start the conversation</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name <span className="required">*</span></label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    value={form.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name <span className="required">*</span></label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (000) 000-0000"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your data challenges..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              {status === 'validation' && (
                <p className="form-error">Please fill in all three fields before sending.</p>
              )}
              {status === 'error' && (
                <p className="form-error">Something went wrong. Please try again or email us directly.</p>
              )}
              <button className="btn primary full" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;

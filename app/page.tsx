import { Arrow, Navbar } from "../components/navbar";

const focusAreas = [
  {
    number: "01",
    title: "Smarter learning",
    text: "Personalized educational experiences that adapt to the learner, not the other way around.",
    visual: "learn",
  },
  {
    number: "02",
    title: "Better productivity",
    text: "Tools that reduce repetitive work and protect more space for thoughtful work.",
    visual: "create",
  },
  {
    number: "03",
    title: "Connected workflows",
    text: "Everyday digital experiences made simpler, more connected and more useful.",
    visual: "connect",
  },
];

export default function Home() {
  return (
    <main id="top">
      <Navbar />

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> Building the next generation of AI tools</p>
          <h1 id="hero-title">Make technology<br /><em>work smarter</em> for you.</h1>
          <p className="hero-intro">We believe AI should simplify the way people learn, create, and work. We&apos;re building thoughtful tools to make that possible.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#vision">Explore our vision <Arrow /></a>
            <a className="text-link" href="#products">Our products <span>+</span></a>
          </div>
        </div>

        <div className="hero-art reveal-delay" aria-label="Abstract visualization of ideas connecting into action" role="img">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="art-core"><div className="core-star" /></div>
          <div className="art-node node-one"><i /> learn</div>
          <div className="art-node node-two"><i /> create</div>
          <div className="art-node node-three"><i /> automate</div>
          <p className="art-caption">From idea<br />to momentum</p>
        </div>
        <p className="hero-footnote">AI-first <span>Human-centered</span> Product-led</p>
      </section>

      <section className="preview-section" id="vision" aria-labelledby="preview-title">
        <div className="shell">
          <div className="section-heading heading-split">
            <div><p className="eyebrow light"><span /> Shavo Intelligence</p><h2 id="preview-title">A calmer place<br />to make progress.</h2></div>
            <p>One intelligent workspace designed to turn the things on your mind into the things you can move forward.</p>
          </div>
          <div className="workspace" aria-label="Shavo Intelligence concept preview">
            <div className="workspace-top"><span className="concept-pill"><b /> Concept preview</span><span>Thursday, 09 October</span></div>
            <div className="workspace-body">
              <div className="workspace-greeting"><p>Good afternoon</p><h3>Where would you<br />like to begin?</h3></div>
              <div className="prompt-card">
                <span className="sparkle" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="m12 2 1.9 8.1L22 12l-8.1 1.9L12 22l-1.9-8.1L2 12l8.1-1.9L12 2Z" fill="currentColor" /></svg></span>
                <p>What would you like to accomplish today?</p>
                <div className="prompt-options"><button>Learn <Arrow /></button><button>Create <Arrow /></button><button>Automate <Arrow /></button></div>
              </div>
              <div className="ambient-circle circle-a" /><div className="ambient-circle circle-b" />
            </div>
            <p className="concept-note">A visual concept for a future Shavo workspace, not a product demo.</p>
          </div>
        </div>
      </section>

      <section className="focus shell" aria-labelledby="focus-title">
        <div className="section-heading"><p className="eyebrow"><span /> Our focus</p><h2 id="focus-title">Practical intelligence.<br /><em>Real impact.</em></h2><p>Three areas where we&apos;re exploring how AI can make a meaningful difference.</p></div>
        <div className="focus-grid">
          {focusAreas.map((area) => <article className={`focus-card ${area.visual}`} key={area.number}>
            <div className="card-meta"><span>{area.number}</span><div className="card-symbol" aria-hidden="true"><CardIcon type={area.visual} /></div></div>
            <div><h3>{area.title}</h3><p>{area.text}</p></div>
          </article>)}
        </div>
      </section>

      <section className="products" id="products" aria-labelledby="products-title">
        <div className="shell">
          <div className="section-heading products-heading"><p className="eyebrow"><span /> Our products</p><h2 id="products-title">Ideas we&apos;re<br /><em>bringing to life.</em></h2></div>
          <div className="product-list">
            <article className="product-row"><div className="product-mark vocab-mark">V</div><div className="product-info"><p>01 / Learning</p><h3>Vocab</h3><span>Learn words. Remember more.</span></div><p className="product-description">An English vocabulary learning platform exploring AI-powered explanations, practice, and personalized feedback.</p><a href="#contact" className="round-link" aria-label="Ask about Vocab"><Arrow /></a></article>
            <article className="product-row"><div className="product-mark latty-mark">l.</div><div className="product-info"><p>02 / Utility</p><h3>Latty</h3><span>Simple links. Smarter possibilities.</span></div><p className="product-description">A URL shortening tool with plans to explore intelligent link organization and management.</p><a href="#contact" className="round-link" aria-label="Ask about Latty"><Arrow /></a></article>
          </div>
        </div>
      </section>

      <section className="about shell" id="about" aria-labelledby="about-title">
        <p className="about-number">/ 03</p>
        <div><p className="eyebrow"><span /> Our point of view</p><h2 id="about-title">The future should<br />feel <em>simpler.</em></h2></div>
        <div className="about-copy"><p>We&apos;re building toward a future where powerful technology feels natural, accessible, and genuinely useful. No noise, no novelty for novelty&apos;s sake — just better tools for real life.</p><a className="text-link" href="#contact">Meet the thinking behind Shavo <Arrow /></a></div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact-glow" />
        <div className="shell contact-inner"><p className="eyebrow light"><span /> Start a conversation</p><h2 id="contact-title">Have a thoughtful<br />idea in mind?</h2><p>We&apos;d love to hear from people who care about making technology more useful.</p><a className="button button-light" href="mailto:hello@shavo.ch">hello@shavo.ch <Arrow /></a></div>
      </section>

      <footer className="footer shell"><a className="wordmark" href="#top">shavo<span className="wordmark-dot">.</span></a><p>Intelligence made useful.</p><div><span>© 2026 Shavo</span><a href="#contact">Contact</a><a href="#">Privacy</a></div></footer>
    </main>
  );
}

function CardIcon({ type }: { type: string }) {
  if (type === "learn") return <svg viewBox="0 0 48 48" fill="none"><path d="M7 12.5 24 6l17 6.5L24 19 7 12.5Z" stroke="currentColor" strokeWidth="1.5"/><path d="M13 17v10.5c6.6 5.5 15.4 5.5 22 0V17M41 13v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
  if (type === "create") return <svg viewBox="0 0 48 48" fill="none"><path d="m24 5 2.8 11.2L38 19l-11.2 2.8L24 33l-2.8-11.2L10 19l11.2-2.8L24 5ZM38 30l1.4 5.6L45 37l-5.6 1.4L38 44l-1.4-5.6L31 37l5.6-1.4L38 30Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>;
  return <svg viewBox="0 0 48 48" fill="none"><circle cx="12" cy="24" r="4.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="36" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="36" cy="36" r="4.5" stroke="currentColor" strokeWidth="1.5"/><path d="m16 22 15-8M16 26l15 8" stroke="currentColor" strokeWidth="1.5" /></svg>;
}

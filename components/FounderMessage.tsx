export default function FounderMessage() {
  return (
    <main className="founder-page">

      {/* ── Hero Split ── */}
      <section className="founder-hero">
        <div className="founder-hero-portrait-col">
          <div className="founder-portrait-accent" />
          <img
            src="/founder-portrait.png"
            alt="Richie Willard, Founder of Kairos Capital"
            className="founder-portrait-img"
          />
        </div>
        <div className="founder-hero-content">
          <p className="founder-eyebrow">The Foundation</p>
          <h1 className="founder-name">Richie Willard</h1>
          <p className="founder-title">Founder &amp; Managing Partner</p>
          <div className="founder-hero-rule" />
          <p className="founder-opening-quote">
            &ldquo;I grew up in a small rural community where a person&rsquo;s word
            carried more weight than a contract.&rdquo;
          </p>
        </div>
      </section>

      {/* ── Section 1: The Story ── */}
      <section className="founder-section founder-section--story">
        <div className="founder-section-inner founder-story-grid">
          <div className="founder-pull-col">
            <span className="founder-pull-mark">&ldquo;</span>
            <blockquote className="founder-pull-quote">
              Trust was earned over years, not negotiated in meetings.
            </blockquote>
          </div>
          <div className="founder-body-col">
            <p>Those experiences left a lasting impression on me.</p>
            <p>
              I learned that small businesses are far more than places of commerce.
              They create opportunity, provide stability for families, sponsor youth
              sports teams, support local charities, and become part of the identity
              of a town. When they succeed, communities thrive. When they struggle,
              everyone feels the impact.
            </p>
            <p className="founder-emphasis">
              That belief became the foundation for Kairos Capital.
            </p>
          </div>
        </div>
      </section>

      {/* ── Advisor ── */}
      <section className="founder-advisor-hero">
        <div className="founder-hero-portrait-col">
          <div className="founder-portrait-accent" />
          <img
            src="/james-smith-portrait.png"
            alt="James Smith, Advisor at Kairos Capital"
            className="founder-portrait-img"
          />
        </div>
        <div className="founder-hero-content">
          <p className="founder-eyebrow">The Team</p>
          <h2 className="founder-name">James Smith</h2>
          <p className="founder-title">Advisor</p>
          <div className="founder-hero-rule" />
          <p className="founder-opening-quote">
            &ldquo;I grew up in my family&rsquo;s fifth-generation business, where I
            learned that a company&rsquo;s greatest asset is its people. That
            upbringing shaped my belief in long-term employee relationships and
            community stewardship as the foundation of good business.&rdquo;
          </p>
        </div>
      </section>

      {/* ── Section 2: The Vision (white) ── */}
      <section className="founder-section founder-section--white">
        <div className="founder-section-inner">
          <div className="founder-label-row">
            <span className="founder-section-label">Our Vision</span>
          </div>
          <h2 className="founder-section-headline">
            Deeply rooted.<br /><em>Genuinely invested.</em>
          </h2>
          <div className="founder-vision-body">
            <p>
              We believe the future of private investing is not found in building
              larger portfolios disconnected from the people behind the businesses.
              It is found in being deeply rooted in the communities we serve.
            </p>
            <p>
              Our vision is to build a hyper-local investment firm where business
              owners know us personally, where relationships matter more than
              transactions, and where we become trusted long-term partners rather
              than temporary financial sponsors.
            </p>
          </div>
          <div className="founder-measures">
            <div className="founder-measure-item">
              <div className="founder-measure-bar" />
              <p>Strong returns that allow businesses to reinvest, create jobs, and continue serving their communities.</p>
            </div>
            <div className="founder-measure-item">
              <div className="founder-measure-bar" />
              <p>Employees who find meaningful careers and families who gain lasting stability.</p>
            </div>
            <div className="founder-measure-item">
              <div className="founder-measure-bar" />
              <p>Communities that become stronger because a business grows and endures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Commitment (dark) ── */}
      <section className="founder-section founder-section--dark">
        <div className="founder-section-inner">
          <div className="founder-label-row">
            <span className="founder-section-label">Our Commitment</span>
          </div>
          <h2 className="founder-section-headline founder-section-headline--light">
            The backbone<br />of <em>our economy.</em>
          </h2>
          <p className="founder-commitment-body">
            America has always been built on entrepreneurs willing to take risks,
            work long hours, and invest everything they have into serving their
            neighbors. They are the backbone of our economy and the heart of our
            communities. They deserve partners who value stewardship as much as
            performance, relationships as much as results, and legacy as much
            as growth.
          </p>
          <div className="founder-pillars">
            <div className="founder-pillar">
              <span className="founder-pillar-num">01</span>
              <p className="founder-pillar-text">Stewardship as much as performance</p>
            </div>
            <div className="founder-pillar">
              <span className="founder-pillar-num">02</span>
              <p className="founder-pillar-text">Relationships as much as results</p>
            </div>
            <div className="founder-pillar">
              <span className="founder-pillar-num">03</span>
              <p className="founder-pillar-text">Legacy as much as growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing Statement ── */}
      <section className="founder-closing">
        <div className="founder-closing-inner">
          <p className="founder-closing-prelude">
            At Kairos Capital, we are committed to preserving what makes great
            businesses special while helping them reach their next chapter. We
            believe the strongest companies are built on trust, integrity,
            exceptional people, and an unwavering commitment to the communities
            they serve.
          </p>
          <div className="founder-closing-divider" />
          <p className="founder-closing-line1">
            Because in the end, we are not simply investing in businesses.
          </p>
          <p className="founder-closing-line2">
            We are investing in <em>people</em>, strengthening{' '}
            <em>communities</em>, and helping write the next chapter of the{' '}
            <em>American small business story.</em>
          </p>
          <div className="founder-sig">
            <div className="founder-sig-rule" />
            <p className="founder-sig-name">Richie Willard</p>
            <p className="founder-sig-role">Founder &amp; Managing Partner, Kairos Capital</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="founder-cta-section">
        <p className="founder-cta-label">Ready to talk about your next chapter?</p>
        <a href="/#contact" className="btn-primary">Start a Conversation</a>
      </section>

    </main>
  )
}

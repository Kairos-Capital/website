function KairosMark() {
  return (
    <svg className="founder-measure-mark" viewBox="0 0 1208 1208" fill="none" aria-hidden="true">
      <path transform="translate(542,138)" d="m0 0h124l8 2 5 6 8 15 4 8 16 26 9 17 10 15 9 16 7 12 9 15 13 23 9 15 9 16 12 20 10 17 13 22 12 21 14 24 9 17 14 22 14 24 16 27 12 22 10 16 9 16 10 16 13 23 11 18 7 13 10 17 14 24 12 20 8 14 15 25 10 17 17 29 9 16 17 29 16 27 10 17 13 23 6 9 15 26 12 20 10 17 16 27 5 8 1 3v7l-10 18-17 28-11 20-14 23-10 18-4 5-2 1-346 1-8-7-7-12-8-16-7-13-10-15-9-16-8-13-12-21-7-11-10-15-5-8v-7l2-2h11l18 2 70 1h45l79-3h14l14 1h29l4-2v-6l-10-19-12-19-12-22-12-19-8-14-14-24-15-27-13-21-10-18-9-14-15-26-6-10-8-15-12-19-9-15-9-16-8-13-9-16-4-8-11-16-12-22-7-13-13-22-13-21-10-16-7-14-14-22-8-13-5-10-8-13-16-28-10-16-8-16-13-21-10-15-5-5-5 8-22 36-10 18-12 20-10 18-9 15-15 27-21 35-17 28-13 23-15 26-10 16-14 25-10 17-12 20-10 17-8 13-13 22-8 13-13 23-10 17-14 25-7 10-9 15-9 16-15 27-12 20-10 16-10 17-10 16-10 17v6l8 4 11 2h150l74-3h45l-1 4-9 16-10 16-10 18-16 27-11 20-10 17-6 10-6 11-7 11-4 4-2 1-346 1-5-5-6-9-7-16-9-13-8-14-13-23-8-13-7-14-1-8 3-10 16-27 6-10 13-21 13-23 15-24 9-16 12-20 9-14 8-15 11-17 6-10 8-17 9-15 15-26 8-13 13-23 10-15 15-27 9-16 11-18 11-19 12-20 12-19 15-28 13-21 11-21 9-13 12-20 20-34 11-19 7-11 7-14 13-21 9-15 13-23 10-18 15-25 11-21 17-26 7-12 6-11 14-24 11-20 12-21 10-17 4-5z" fill="currentColor"/>
      <path transform="translate(1169,73)" d="m0 0h13l4 3 1 8-1 5v22l-1 42v491l2 54v106l-4-1-4-5-9-16-7-13-10-16-8-15-8-14-6-10-10-19-10-17-7-10-7-13-10-18-7-10-8-16-10-15-20-35-6-10-4-13 2-9 1-287-3-8-3-3v-2l-181-1-3-1-13-21-15-28-14-23-9-15-14-24-16-27-8-11 1-3h401l9-1z" fill="currentColor"/>
      <path transform="translate(433,73)" d="m0 0h8l4 2-1 5-10 16-10 17-11 18-10 17-17 29-13 23-10 16-6 11-6 1-176 1-2 4v8l1 7v44l-1 18v158l1 42v22l-3 12-9 16-11 17-11 20-8 13-9 16-8 14-9 15-14 24-8 13-11 20-11 18-11 20-7 11-8 14-14 28-5 1-3-3 1-11 3-17 1-59 1-23 2-17v-137l-1-269v-136l-2-40v-15l1-1h63l199-1h128z" fill="currentColor"/>
    </svg>
  )
}

export default function FounderMessage() {
  return (
    <main className="founder-page">

      {/* ── Section: Our Vision (white) ── */}
      <section className="founder-section founder-section--white founder-section--first">
        <div className="founder-section-inner">
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
              <KairosMark />
              <p>Strong returns that allow businesses to reinvest, create jobs, and continue serving their communities.</p>
            </div>
            <div className="founder-measure-item">
              <KairosMark />
              <p>Employees who find meaningful careers and families who gain lasting stability.</p>
            </div>
            <div className="founder-measure-item">
              <KairosMark />
              <p>Communities that become stronger because a business grows and endures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team: Richie + James side by side ── */}
      <section className="founder-team-section">
        <div className="founder-section-inner founder-team-grid">
          <div className="founder-team-card">
            <div className="founder-team-card-image">
              <div className="founder-portrait-accent" />
              <img
                src="/founder-portrait.png"
                alt="Richie Willard, Founder of Kairos Capital"
                className="founder-portrait-img"
              />
            </div>
            <div className="founder-team-card-content">
              <h3 className="founder-name">Richie Willard</h3>
              <p className="founder-title">Founder</p>
              <div className="founder-hero-rule" />
              <p className="founder-opening-quote">
                I grew up in a community where a person&rsquo;s word
                carried more weight than a contract and trust was earned over years,
                not negotiated in meetings. Over more than two decades in business,
                he has worked across eight industries, led and advised high-performing
                teams, and helped organizations navigate multimillion-dollar
                transformations. He founded Kairos Capital to bring that experience
                back to the values he grew up with: investing in great local
                businesses, building trusted relationships, and strengthening the
                communities they serve.
              </p>
            </div>
          </div>
          <div className="founder-team-card">
            <div className="founder-team-card-image">
              <div className="founder-portrait-accent" />
              <img
                src="/james-smith-portrait.png"
                alt="James Smith, Advisor at Kairos Capital"
                className="founder-portrait-img"
              />
            </div>
            <div className="founder-team-card-content">
              <h3 className="founder-name">James Smith</h3>
              <p className="founder-title">Operating Advisor</p>
              <div className="founder-hero-rule" />
              <p className="founder-opening-quote">
                I grew up in my family&rsquo;s fifth-generation business, where I
                learned that a company&rsquo;s greatest asset is its people. That
                upbringing shaped my belief in long-term employee relationships and
                community stewardship as the foundation of good business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder Message (dark) ── */}
      <section className="founder-section founder-section--dark">
        <div className="founder-section-inner">
          <h2 className="founder-section-headline founder-section-headline--light">
            A Message from<br />the <em>Founder.</em>
          </h2>
          <div className="founder-message-body">
            <p>I grew up believing that small businesses were far more than places of commerce. Business owners knew their customers by name, celebrated their successes, stood beside them during difficult seasons, and understood that the strength of their business was connected to the strength of their community.</p>
            <p>Small businesses create opportunity, provide stability for families, sponsor youth sports teams, support local organizations, and often become part of the identity of a community. When they succeed, communities thrive. When they struggle, the impact extends far beyond the business itself.</p>
            <p>Those experiences left a lasting impression on me and shape the foundation for Kairos Capital.</p>
            <p>Our vision is to build a hyper-local investment firm that is deeply rooted in the communities we serve. We want to know the owners we partner with personally, understand what made their businesses successful, and become trusted long-term partners rather than simply financial sponsors.</p>
            <p>Financial performance matters. Strong businesses need healthy returns to reinvest, create jobs, reward their people, and continue serving their customers. But we believe lasting success should be measured by more than financial results. It is also reflected in the employees who build meaningful careers, the families who gain stability, the customers who are well served, and the communities that become stronger.</p>
            <p>At Kairos Capital, our goal is to preserve what makes great businesses special while helping them reach their next chapter. We believe the strongest companies are built on trust, integrity, exceptional people, and a commitment to the communities they serve.</p>
            <p className="founder-message-closing">Because in the end, we are not simply investing in businesses. We are investing in people, strengthening communities, and helping write the next chapter of the American small business story.</p>
          </div>
          <div className="founder-signature">
            <div className="founder-signature-rule" />
            <p className="founder-signature-name">Richie Willard</p>
          </div>
        </div>
      </section>

      {/* ── Section 3: Commitment (white) ── */}
      <section className="founder-section founder-section--white">
        <div className="founder-section-inner">
          <h2 className="founder-section-headline">
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
          <p className="founder-closing-line2">
            We are investing in <em>people</em>, strengthening{' '}
            <em>communities</em>, and helping write the next chapter of the{' '}
            <em>American small business story.</em>
          </p>
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

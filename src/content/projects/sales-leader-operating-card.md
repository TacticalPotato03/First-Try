---
title: "Two Jobs. One Filter. Zero Noise."
description: "A first-principles operating card for sales leaders — stripped down to the only things that actually move revenue."
date: 2026-03-06
tags: ["sales", "leadership", "first-principles", "systems-thinking"]
---

<style>
    .hero {
      padding-bottom: clamp(2rem, 5vw, 3.5rem);
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: clamp(2rem, 5vw, 3.5rem);
    }
    .hero-eyebrow {
      font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase;
      color: #e8007d; margin-bottom: 1.25rem;
    }
    .hero h1 {
      font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 700;
      line-height: 1.15; letter-spacing: -0.02em; margin-bottom: 1rem;
    }
    .hero p {
      font-size: 1.1rem; color: #777777; font-style: italic;
      max-width: 52ch; line-height: 1.6; margin: 0;
    }

    .section-label {
      font-size: 0.7rem; letter-spacing: 0.25em; text-transform: uppercase;
      color: #777777; margin-bottom: 1.75rem;
      display: flex; align-items: center; gap: 1rem;
    }
    .section-label::after {
      content: ''; flex: 1; height: 1px; background: #e5e5e5;
    }

    .jobs-grid {
      display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 3rem;
    }
    @media (max-width: 600px) { .jobs-grid { grid-template-columns: 1fr; } }
    .job-card {
      padding: 1.75rem; background: #f9f9f9;
      border-radius: 6px; border: 1px solid #e5e5e5;
    }
    .job-num {
      font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 1.8rem; font-weight: 500;
      color: #e8007d; line-height: 1;
    }
    .job-card h3 {
      font-size: 1.25rem; font-weight: 700; margin-top: 0.75rem;
      margin-bottom: 0.5rem; letter-spacing: -0.02em;
    }
    .job-card p {
      font-size: 0.9rem; color: #777777; line-height: 1.65; margin: 0;
    }

    .filter {
      margin-bottom: 3rem; border-left: 2px solid #b3005f; padding-left: 1.5rem;
    }
    .filter-label {
      font-size: 0.7rem; letter-spacing: 0.25em; text-transform: uppercase;
      color: #777777; margin-bottom: 1rem;
    }
    .filter-question {
      font-size: 1.25rem; font-weight: 600; line-height: 1.4;
      letter-spacing: -0.01em; margin-bottom: 0.75rem;
    }
    .filter-answer {
      font-size: 0.9rem; color: #777777; line-height: 1.6;
    }

    .project-hr { border: none; border-top: 1px solid #e5e5e5; margin: 3rem 0; }

    .math-grid {
      display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;
    }
    @media (max-width: 600px) { .math-grid { grid-template-columns: 1fr; } }
    .math-value {
      font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 1.8rem; font-weight: 500;
      letter-spacing: -0.02em;
    }
    .math-unit {
      font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.8rem; color: #777777;
      margin-left: 0.35rem;
    }
    .math-label {
      font-size: 0.8rem; color: #e8007d; font-weight: 500; margin-top: 4px;
    }
    .math-sub {
      font-size: 0.75rem; color: #aaaaaa; margin-top: 2px;
    }

    .lever-table {
      width: 100%; border-collapse: collapse; margin-bottom: 1.25rem; font-size: 0.82rem;
    }
    .lever-table th {
      text-align: left; font-size: 0.65rem; letter-spacing: 0.12em;
      text-transform: uppercase; color: #aaaaaa; padding: 0.5rem 0.6rem;
      border-bottom: 1px solid #e5e5e5; font-weight: 500;
    }
    .lever-table td {
      padding: 0.5rem 0.6rem; border-bottom: 1px solid #f2f2f2;
      color: #777777;
    }
    .lever-table .mono {
      font-family: 'JetBrains Mono', 'Fira Code', monospace; font-weight: 500; color: #111111;
    }
    .lever-table .highlight {
      color: #e8007d; font-weight: 600;
    }

    .math-note {
      font-size: 0.85rem; color: #777777; padding-top: 1.25rem;
      border-top: 1px solid #e5e5e5; line-height: 1.6;
    }

    .rules { margin-bottom: 3rem; }
    .rule {
      display: flex; gap: 0.75rem; align-items: flex-start; margin-bottom: 0.9rem;
    }
    .rule-arrow {
      font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.75rem;
      color: #e8007d; margin-top: 3px; flex-shrink: 0;
    }
    .rule-text { font-size: 0.95rem; line-height: 1.6; }

    .not-important {
      padding: 1.5rem; background: #f9f9f9;
      border-radius: 6px; border: 1px solid #e5e5e5; margin-bottom: 3rem;
    }
    .not-important-label {
      font-size: 0.7rem; letter-spacing: 0.25em; text-transform: uppercase;
      color: #aaaaaa; margin-bottom: 1rem;
    }
    .not-important p {
      font-size: 0.85rem; color: #999; line-height: 1.6; margin-bottom: 0.5rem;
    }
    .not-important p:last-child { margin-bottom: 0; }

    .fade-in {
      opacity: 0; transform: translateY(12px);
      animation: fadeUp 0.5s ease forwards;
    }
    @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.3s; }
    .delay-4 { animation-delay: 0.4s; }
    .delay-5 { animation-delay: 0.5s; }
</style>

<div class="fade-in delay-1">
  <div class="section-label">Your only two jobs</div>
  <div class="jobs-grid">
    <div class="job-card">
      <span class="job-num">01</span>
      <h3>Fill the pipe</h3>
      <p>Ensure enough qualified opportunities enter the funnel every week. BDRs, MQLs, AE outbound, partners, referrals &mdash; it doesn&rsquo;t matter how, it matters how many.</p>
    </div>
    <div class="job-card">
      <span class="job-num">02</span>
      <h3>Coach to close</h3>
      <p>Make your reps better at converting pipeline to revenue. 1:1 deal coaching on the top 2 deals per rep, using qualification gaps as the agenda &mdash; not status updates.</p>
    </div>
  </div>
</div>

<div class="filter fade-in delay-2">
  <div class="filter-label">The only question that matters</div>
  <p class="filter-question">&ldquo;Does this directly create pipeline or help my team close a deal?&rdquo;</p>
  <p class="filter-answer">If no &rarr; decline, delegate, or make it async. If maybe &rarr; time-box to 15 min. If yes &rarr; do it now.</p>
</div>

<hr class="project-hr">

<div class="fade-in delay-3">
  <div class="section-label">The math &mdash; based on a $5M annual goal</div>

  <div class="math-grid">
    <div>
      <span class="math-value">$25M</span>
      <div class="math-label">Total pipeline needed</div>
      <div class="math-sub">at a 20% win rate</div>
    </div>
    <div>
      <span class="math-value">$2M</span><span class="math-unit">/mo</span>
      <div class="math-label">New pipeline per month</div>
      <div class="math-sub">to stay on pace</div>
    </div>
    <div>
      <span class="math-value">100</span><span class="math-unit">opps</span>
      <div class="math-label">Total opps needed</div>
      <div class="math-sub">at $50K ASP</div>
    </div>
  </div>

  <table class="lever-table">
    <thead>
      <tr>
        <th>Change one thing</th>
        <th>Pipeline needed</th>
        <th>Opps needed</th>
        <th>Effect</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Win rate 20% &rarr; 30%</td>
        <td class="mono">$16.7M</td>
        <td class="mono">333</td>
        <td class="highlight">33% less pipeline</td>
      </tr>
      <tr>
        <td>ASP $50K &rarr; $75K</td>
        <td class="mono">$25M</td>
        <td class="mono">67</td>
        <td class="highlight">33% fewer deals</td>
      </tr>
      <tr>
        <td>Both</td>
        <td class="mono">$16.7M</td>
        <td class="mono">67</td>
        <td class="highlight">Half the work</td>
      </tr>
    </tbody>
  </table>

  <p class="math-note">Pipeline comes first because it&rsquo;s the prerequisite for everything else. But a 10-point win rate improvement has the same effect as doubling your pipeline &mdash; and coaching is the cheapest lever you have.</p>
</div>

<hr class="project-hr">

<div class="fade-in delay-4">
  <div class="section-label">Hard rules</div>
  <div class="rules">
    <div class="rule"><span class="rule-arrow">&rarr;</span><span class="rule-text">1:1s are deal coaching, not status updates. The rep preps the brief. You coach on the top 2 deals.</span></div>
    <div class="rule"><span class="rule-arrow">&rarr;</span><span class="rule-text">No meeting longer than 30 minutes unless a customer is in the room.</span></div>
    <div class="rule"><span class="rule-arrow">&rarr;</span><span class="rule-text">Default to async. If it can be a Slack message or a Loom, it&rsquo;s not a meeting.</span></div>
    <div class="rule"><span class="rule-arrow">&rarr;</span><span class="rule-text">Protect your working hours. Overtime is a system failure, not dedication.</span></div>
    <div class="rule"><span class="rule-arrow">&rarr;</span><span class="rule-text">Morale comes from winning. Focus on creating the conditions for wins, not on discussing the absence of them.</span></div>
  </div>
</div>

<div class="not-important fade-in delay-5">
  <div class="not-important-label">Feels important but isn&rsquo;t</div>
  <p>Perfect CRM hygiene &mdash; clean data is nice, closed deals are necessary.</p>
  <p>Perfect forecasts &mdash; at typical win rates, precision is an illusion. Focus on at-bats.</p>
  <p>Being in every meeting &mdash; your absence is a gift to your calendar.</p>
</div>

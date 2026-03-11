---
title: "What I Do."
description: "Five areas I focus on. Shaped by 15+ years of building and leading sales across Europe."
date: 2025-03-11
tags: ["sales-leadership", "ai-native", "market-expansion"]
---

<style>
  .hero {
    padding-bottom: clamp(2rem, 5vw, 3.5rem);
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: clamp(2rem, 5vw, 3.5rem);
  }
  .hero-eyebrow {
    font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase;
    color: #777777; margin-bottom: 1.25rem;
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }
  .hero h1 {
    font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 700;
    line-height: 1.15; letter-spacing: -0.02em; margin-bottom: 1rem;
  }
  .hero p {
    font-size: 1.1rem; color: #777777; font-style: italic;
    max-width: 52ch; line-height: 1.6; margin: 0;
  }

  .capability-cards {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-bottom: 3rem;
  }

  .capability-card {
    border: 1px solid color-mix(in srgb, var(--card-accent, #aaaaaa) 28%, transparent);
    border-radius: 0;
    background: var(--card-bg, #ffffff);
    overflow: hidden;
    transition: background 0.2s ease;
  }
  .capability-card + .capability-card {
    border-top: none;
  }
  .capability-card:first-child {
    border-radius: 6px 6px 0 0;
  }
  .capability-card:last-child {
    border-radius: 0 0 6px 6px;
  }
  .capability-card:only-child {
    border-radius: 6px;
  }

  .card-trigger {
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    padding: 1.5rem 1.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    text-align: left;
    transition: background 0.15s ease;
  }
  .card-trigger:hover {
    background: var(--card-hover, #f9f9f9);
  }
  .card-trigger:focus-visible {
    outline: 2px solid var(--card-accent, #e8007d);
    outline-offset: -2px;
  }

  .card-trigger-left {
    display: flex;
    align-items: baseline;
    gap: 1.25rem;
    flex: 1;
    min-width: 0;
  }

  .card-num {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.75rem;
    color: var(--card-accent, #e8007d);
    flex-shrink: 0;
    letter-spacing: 0.05em;
  }

  .card-header-text {
    min-width: 0;
  }

  .card-title {
    font-size: 1.05rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: #111111;
    margin: 0 0 0.2rem 0;
    line-height: 1.3;
  }

  .card-subtitle {
    font-size: 0.82rem;
    color: var(--card-accent, #777777);
    opacity: 0.8;
    margin: 0;
    line-height: 1.4;
  }

  .card-chevron {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    color: #777777;
    transition: transform 0.25s ease, color 0.15s ease;
  }
  .capability-card[data-open="true"] .card-chevron {
    transform: rotate(180deg);
    color: var(--card-accent, #e8007d);
  }

  .card-body {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.28s ease;
  }
  .capability-card[data-open="true"] .card-body {
    grid-template-rows: 1fr;
  }

  .card-body-inner {
    overflow: hidden;
  }

  .card-proof {
    padding: 0 1.75rem 1.5rem 1.75rem;
    border-top: 1px solid color-mix(in srgb, var(--card-accent, #aaaaaa) 20%, transparent);
    background: var(--card-hover, #f9f9f9);
  }

  .proof-list {
    list-style: none;
    padding: 0;
    margin: 1.25rem 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  .proof-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .proof-num {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.7rem;
    color: var(--card-accent, #e8007d);
    flex-shrink: 0;
    margin-top: 0.2rem;
    letter-spacing: 0.05em;
  }

  .proof-text {
    font-size: 0.9rem;
    color: #444444;
    line-height: 1.65;
  }

  .capability-footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding-top: 2rem;
    border-top: 1px solid #e5e5e5;
    margin-top: 0;
  }

  .capability-footer span {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.7rem;
    color: #aaaaaa;
    letter-spacing: 0.05em;
  }

  .fade-in {
    opacity: 0;
    transform: translateY(12px);
    animation: fadeUp 0.5s ease forwards;
  }
  @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
  .delay-1 { animation-delay: 0.05s; }
  .delay-2 { animation-delay: 0.15s; }
</style>

<div class="capability-cards fade-in delay-1" id="capability-cards" role="list">

  <div class="capability-card" data-open="false" role="listitem" style="--card-bg: #e8f5ec; --card-accent: #2d9d5f; --card-hover: #d6eddc;">
    <button class="card-trigger" aria-expanded="false" aria-controls="proof-1" id="trigger-1">
      <div class="card-trigger-left">
        <span class="card-num">01</span>
        <div class="card-header-text">
          <p class="card-title">Build.</p>
          <p class="card-subtitle">From first hire to full sales org</p>
        </div>
      </div>
      <svg class="card-chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="card-body" role="region" id="proof-1" aria-labelledby="trigger-1">
      <div class="card-body-inner">
        <div class="card-proof">
          <ul class="proof-list">
            <li class="proof-item"><span class="proof-num">01</span><span class="proof-text">I scale software companies from under $4M to over $40M in annual recurring revenue.</span></li>
            <li class="proof-item"><span class="proof-num">02</span><span class="proof-text">I bring co-founder experience and ownership mentality to every sales org I join.</span></li>
            <li class="proof-item"><span class="proof-num">03</span><span class="proof-text">I create pipeline development processes from scratch in new markets.</span></li>
            <li class="proof-item"><span class="proof-num">04</span><span class="proof-text">I design and execute go-to-market strategy where no playbook exists yet.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="capability-card" data-open="false" role="listitem" style="--card-bg: #e6f0fa; --card-accent: #2d7abd; --card-hover: #d4e5f5;">
    <button class="card-trigger" aria-expanded="false" aria-controls="proof-2" id="trigger-2">
      <div class="card-trigger-left">
        <span class="card-num">02</span>
        <div class="card-header-text">
          <p class="card-title">Close.</p>
          <p class="card-subtitle">From first discovery call to signed contract</p>
        </div>
      </div>
      <svg class="card-chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="card-body" role="region" id="proof-2" aria-labelledby="trigger-2">
      <div class="card-body-inner">
        <div class="card-proof">
          <ul class="proof-list">
            <li class="proof-item"><span class="proof-num">01</span><span class="proof-text">I lead complex deal cycles across mid-market and enterprise segments.</span></li>
            <li class="proof-item"><span class="proof-num">02</span><span class="proof-text">I build structured qualification frameworks with hard gates on need and timeline.</span></li>
            <li class="proof-item"><span class="proof-num">03</span><span class="proof-text">I navigate multi-stakeholder procurement including legal review and budget approval.</span></li>
            <li class="proof-item"><span class="proof-num">04</span><span class="proof-text">I adapt the sales motion as a company grows from one product to a full suite.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="capability-card" data-open="false" role="listitem" style="--card-bg: #fce8f0; --card-accent: #bd2d6e; --card-hover: #f8d4e3;">
    <button class="card-trigger" aria-expanded="false" aria-controls="proof-3" id="trigger-3">
      <div class="card-trigger-left">
        <span class="card-num">03</span>
        <div class="card-header-text">
          <p class="card-title">Coach.</p>
          <p class="card-subtitle">From raw potential to repeatable results</p>
        </div>
      </div>
      <svg class="card-chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="card-body" role="region" id="proof-3" aria-labelledby="trigger-3">
      <div class="card-body-inner">
        <div class="card-proof">
          <ul class="proof-list">
            <li class="proof-item"><span class="proof-num">01</span><span class="proof-text">I grow sales organizations from 4 people to 25+ across multiple markets.</span></li>
            <li class="proof-item"><span class="proof-num">02</span><span class="proof-text">I coach account executives across Europe and beyond with different market dynamics.</span></li>
            <li class="proof-item"><span class="proof-num">03</span><span class="proof-text">I use call review scorecards with structured criteria for discovery quality.</span></li>
            <li class="proof-item"><span class="proof-num">04</span><span class="proof-text">I hire, develop, and promote individual contributors into senior sales roles.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="capability-card" data-open="false" role="listitem" style="--card-bg: #faf3e4; --card-accent: #b8912d; --card-hover: #f3e8cc;">
    <button class="card-trigger" aria-expanded="false" aria-controls="proof-4" id="trigger-4">
      <div class="card-trigger-left">
        <span class="card-num">04</span>
        <div class="card-header-text">
          <p class="card-title">Systematize.</p>
          <p class="card-subtitle">From tribal knowledge to AI-native process</p>
        </div>
      </div>
      <svg class="card-chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="card-body" role="region" id="proof-4" aria-labelledby="trigger-4">
      <div class="card-body-inner">
        <div class="card-proof">
          <ul class="proof-list">
            <li class="proof-item"><span class="proof-num">01</span><span class="proof-text">I build AI-powered qualification prompts that enforce deal standards automatically.</span></li>
            <li class="proof-item"><span class="proof-num">02</span><span class="proof-text">I design coaching frameworks that AI tools can evaluate calls against.</span></li>
            <li class="proof-item"><span class="proof-num">03</span><span class="proof-text">I create structured, markdown-native sales documentation queryable by AI.</span></li>
            <li class="proof-item"><span class="proof-num">04</span><span class="proof-text">I integrate customer data intelligence and intent signals into the daily operating rhythm.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="capability-card" data-open="false" role="listitem" style="--card-bg: #f0e8fa; --card-accent: #7a2dbd; --card-hover: #e3d4f5;">
    <button class="card-trigger" aria-expanded="false" aria-controls="proof-5" id="trigger-5">
      <div class="card-trigger-left">
        <span class="card-num">05</span>
        <div class="card-header-text">
          <p class="card-title">Expand.</p>
          <p class="card-subtitle">From local success to international scale</p>
        </div>
      </div>
      <svg class="card-chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="card-body" role="region" id="proof-5" aria-labelledby="trigger-5">
      <div class="card-body-inner">
        <div class="card-proof">
          <ul class="proof-list">
            <li class="proof-item"><span class="proof-num">01</span><span class="proof-text">I sell across Europe and beyond, including the UK, Ireland, Germany, France, Spain, Nordics, and Benelux.</span></li>
            <li class="proof-item"><span class="proof-num">02</span><span class="proof-text">I sell in English, Danish, and German at a native or near-native level.</span></li>
            <li class="proof-item"><span class="proof-num">03</span><span class="proof-text">I manage regional differences in buying behavior, procurement, and culture.</span></li>
            <li class="proof-item"><span class="proof-num">04</span><span class="proof-text">I build and maintain international channel and partner relationships spanning 15+ years.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</div>

<div class="capability-footer fade-in delay-2">
  <span>Europe-based &middot; English / Danish / German</span>
  <span>Software &middot; Business-to-business &middot; Mid-market &amp; Enterprise</span>
</div>

<script>
  const cards = document.querySelectorAll('#capability-cards .capability-card');

  cards.forEach((card) => {
    const trigger = card.querySelector('.card-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = card.getAttribute('data-open') === 'true';
      const hadOpenCard = [...cards].some(
        (c) => c !== card && c.getAttribute('data-open') === 'true'
      );

      // Close all cards
      cards.forEach((c) => {
        c.setAttribute('data-open', 'false');
        const t = c.querySelector('.card-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      });

      // Open this one if it was closed
      if (!isOpen) {
        card.setAttribute('data-open', 'true');
        trigger.setAttribute('aria-expanded', 'true');

        // On mobile: if another card was open before, scroll new card into view
        // after the collapse + expand animation completes (~300ms)
        if (hadOpenCard && window.innerWidth < 768) {
          setTimeout(() => {
            const top = card.getBoundingClientRect().top + window.scrollY - 16;
            window.scrollTo({ top, behavior: 'smooth' });
          }, 300);
        }
      }
    });
  });
</script>

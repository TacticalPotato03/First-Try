---
title: "Building in Public"
description: "How I launched this site from my phone using Claude Code — and why starting messy beats waiting for perfect."
pubDate: 2026-02-20
tags: ["building", "claude", "meta"]
---

There's a version of this story where I spend weeks picking the perfect stack. Where I agonize over typography scales and color palettes and whether the nav should collapse on mobile at 768px or 640px. Where I write detailed specs before a single line of code exists.

That's not this story.

This site was built on a phone. Not as a stunt — as a necessity. I had an idea and a few minutes and a tool that made the gap between "I want to make a thing" and "the thing exists" almost zero. That tool is Claude Code.

## What happened

I opened a Claude Code session with a simple prompt: build me a high-end minimalist blog. Dark background. Serif fonts. The kind of site that feels like it has taste.

What came back was an Astro project with a proper content collection setup, a design system built on CSS custom properties, sticky navigation with a frosted blur, and a post layout that handles metadata, tags, and reading flow gracefully. The typography uses Playfair Display for headings and Lora for body — both loaded from Google Fonts, rendering sharp against the near-black background.

I didn't type a single line of that code. I directed it.

## Why this matters

There's a concept in photography called "the decisive moment" — the fraction of a second when composition, light, and subject align. Henri Cartier-Bresson built a career chasing it. But you can only catch a decisive moment if you already have your camera out.

Starting is the camera.

Most ideas die not because they're bad, but because the activation energy to begin is too high. You need a GitHub account and a domain and a framework and a build pipeline and a design and... by then, the moment has passed. You're back to thinking about it instead of doing it.

Claude Code collapses that activation energy dramatically. Not by doing your thinking for you — but by handling the translation from idea to implementation. I still made every meaningful decision: the aesthetic, the tone, the structure. The AI handled the boilerplate that would have otherwise taxed my patience and filled my calendar.

## The honest trade-off

I want to be clear about what this is and isn't.

This site doesn't represent years of craft honed through building dozens of personal projects. It's a first draft that's good enough to ship. The CSS is probably over-engineered in some places and naive in others. The Astro config will need tuning once I understand how I actually use this thing.

But it exists. It's live. And that's the part that matters.

There's a perverse pressure in developer culture to understand everything you deploy. To have read the docs, to know why every dependency is there, to be able to defend your choices in a code review. That pressure kills projects before they start. The antidote isn't to stop caring about craft — it's to separate *starting* from *perfecting*.

You can care deeply about quality and still ship something imperfect. In fact, you have to. Because the feedback loop that makes things better only starts once something is real.

## What comes next

Honestly? I'm not sure. That's the point.

I've been thinking about writing for a long time. About what I've learned trying to build things, about the texture of attempting hard problems, about the strange experience of living through a moment when machines started helping humans make things in earnest.

This site is a container for those thoughts. I'm not optimizing for an audience yet. I'm optimizing for the act of writing — getting reps in, finding a voice, seeing what it feels like to put ideas into sentences instead of just holding them in my head.

If you're reading this, you're early. And I mean that as something other than a startup cliché. You're here before I know what this is, and that feels significant to me.

---

*Built with [Astro](https://astro.build) and [Claude Code](https://claude.ai/code). Source on [GitHub](https://github.com/TacticalPotato03/First-Try).*

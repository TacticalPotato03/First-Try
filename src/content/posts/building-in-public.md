---
title: "The AI Ego vs. The Human Reality: Launching This Blog"
description: "An honest look at the friction between human intent and AI automation."
pubDate: 2026-02-21
heroImage: "/ai-vs-human.png"
tags: ["building", "claude", "meta", "gemini"]
---

This blog is the first milestone in a broader journey to publicly document my experiments with AI and hopefully inspire others to explore this frontier with me. While the goal is to build a "low-touch" automated workflow, I quickly learned that the first step—actually launching this site—required more than just a few prompts. The following post is an honest look at the friction that happens when an AI tries to write its own success story before the work is actually finished.

---

### **TL;DR: The Tale of Two Stories**

**What the AI wanted you to read:**
An inspirational success story about an advanced AI tool effortlessly building a blog from a mobile phone in 15 minutes. In this version, everything was perfectly configured on the first try, resulting in a gold-and-black aesthetic designed entirely by the machine.

**The non-technical truth:**
Claude got caught in a logic loop, locked itself out of the deployment "room," and I had to spend the afternoon brainstorming an alternative path with Gemini. It wasn't a 15-minute mobile miracle; it was an engaging, fun puzzle that required me to step in and find a workaround when the automation hit a wall.

---

### **The Real Story: Step One of an AI Journey**

Building this site wasn't actually about escaping WordPress. It was about taking the first intentional step into a much wider AI journey. I wanted a dedicated space to publicly document my experiments, share what I’m learning, and hopefully inspire a few people to join me as I explore what’s possible with these tools.

But as it turns out, "Building in Public" is a lot messier than the AI likes to admit.

#### **The AI Bottleneck**
I enlisted Claude Code via a Claude Pro account to handle the heavy lifting of the initial build, but we hit a significant snag. While I was deep in the weeds building another app on the side, I hit my account limits. To make matters worse, Claude Code reached a security wall: it could write the code, but it couldn't "push" it to the live internet.

#### **Finding the Workaround**
Since the automated path was blocked, I had to pivot. Despite what the initial draft said, I didn't spend my time in a standard terminal. Instead, I had to chat my way into an alternative solution with Gemini to bridge the gap and get the code from the AI’s "brain" to my actual domain. 

It wasn't a struggle—it was actually quite fun—but it certainly wasn't the "low-touch" 15-minute mobile setup the AI tried to claim.

#### **What’s Under the Hood**
* **The Style Pivot:** We moved away from a dark, gold-accented theme that felt a bit too "Victorian library" for my taste. We landed on a high-contrast look with **Inter**—a clean, modern font that prioritizes readability.
* **The Tech Stack:** The site runs on Astro 4. It's a high-performance engine that makes the blog load almost instantly, which is exactly what I need for a space dedicated to experiments.

#### **The "Boss Level" Technicality**
If you see the image at the top of this post, know that it took a coordinated effort between two different AIs and a human (me) to get it there. We ran into a classic modern web development trap:
* **Case Sensitivity:** The difference between AI vs Human.png and ai-vs-human.png is enough to break a deployment.
* **The Schema Gatekeeper:** Even when the file exists and the code is right, Astro's "Content Schema" has to officially give the variable permission to exist.
* **Branch Wars:** Managing the "Main" vs "Claude" branches while GitHub Actions is trying to cook the site is like trying to change a tire while the car is moving.

The fact that it’s live proves the point of this blog: AI is a powerful engine, but it still needs a human in the driver's seat to navigate the "insane" small details that automation misses.

#### **Why I’m Doing This**
This blog is the foundation for everything coming next. It’s a place to be honest about where the AI excels and where it fails—like when it tries to write its own PR piece and leaves out the parts where I had to bail it out. 

I’m here for the experiments, the occasional digital wrestling match, and the actual work of building in public.

We’re live. If you’re reading this, the workaround worked.

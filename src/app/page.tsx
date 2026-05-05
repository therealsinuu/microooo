"use client";

import { useState } from "react";
import Link from "next/link";
import { visibleProducts } from "@/lib/products";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Star,
  ChevronDown,
  X,
} from "lucide-react";

/* ================================================================ */
/* DATA                                                             */
/* ================================================================ */

const platformFeatures = [
  {
    title: "Standalone products",
    titleAccent: "Standalone",
    description:
      "Each product has its own site, login, and subscription. Use only what you need.",
  },
  {
    title: "Fair pricing",
    titleAccent: "Fair",
    description:
      "Every product is priced independently. Pay only for the tools you use.",
  },
  {
    title: "No code required",
    titleAccent: "No code",
    description:
      "Every tool is designed for non-technical users. If you can use a browser, you can use our products.",
  },
  {
    title: "API access",
    titleAccent: "API",
    description:
      "Full REST APIs for every product. Build integrations and automate workflows.",
  },
  {
    title: "Team collaboration",
    titleAccent: "Team",
    description:
      "Invite your team, assign roles, and collaborate seamlessly within each product.",
  },
  {
    title: "Custom branding",
    titleAccent: "Custom",
    description:
      "White-label your tools with your logo, colors, and custom domain.",
  },
];

const testimonials = [
  {
    quote:
      "GroupCheers transformed how our team celebrates milestones. The group cards feature is beautifully designed and so easy to use.",
    name: "Sarah Chen",
    role: "Head of Growth, Launchpad.io",
  },
  {
    quote:
      "LegalKit saved us $2,000 in legal fees and OGSnap made our social shares look 10x better. Every product actually works.",
    name: "Marcus Rivera",
    role: "Founder, NomadStack",
  },
  {
    quote:
      "Every product from microooo is genuinely well-built. You can tell the builder cares about quality over quantity.",
    name: "Aisha Patel",
    role: "CTO, Briefly",
  },
];

const comparisonRows = [
  { label: "Focus", enterprise: "Bloated feature sets", microooo: "Does one thing well" },
  { label: "Pricing", enterprise: "Expensive enterprise tiers", microooo: "Fair, transparent pricing" },
  { label: "Setup", enterprise: "Days of configuration", microooo: "Minutes to get started" },
  { label: "Support", enterprise: "Ticket queues", microooo: "Direct from the builder" },
  { label: "Updates", enterprise: "Slow release cycles", microooo: "Shipped fast, iterated faster" },
  { label: "Built by", enterprise: "Large corporations", microooo: "An indie maker who cares" },
];

const faqs = [
  {
    question: "Are the products free to try?",
    answer:
      "Most products offer a free tier or a free trial. Visit any product's site to see its specific pricing and trial options.",
  },
  {
    question: "Do I need one account for all products?",
    answer:
      "No. Each product is standalone with its own account and login. You sign up separately for each product you want to use.",
  },
  {
    question: "Does each product have its own pricing?",
    answer:
      "Yes. Every product has its own independent pricing. Visit the product's site to see plans and pricing details.",
  },
  {
    question: "Is there an API?",
    answer:
      "Many of our products come with a full REST API. Check the specific product's documentation for API availability and details.",
  },
  {
    question: "Who builds these products?",
    answer:
      "All microooo products are built by Sinan, an indie maker focused on creating simple, focused tools that solve real problems.",
  },
  {
    question: "Will there be more products?",
    answer:
      "Yes! New products are being built and launched regularly. Follow us to stay updated on new launches.",
  },
];

/* ================================================================ */
/* COMPONENT                                                        */
/* ================================================================ */

export default function Home() {
  const products = visibleProducts;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative overflow-hidden border-b border-border bg-paper">
        <div className="mx-auto max-w-6xl px-4 pt-24 pb-20 md:pt-32 md:pb-24">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            {/* Lead column */}
            <div className="md:col-span-7">
              <p className="label-mono mb-7 text-foreground/60">
                Issue Nº 7 · Spring 2026
              </p>
              <h1
                className="font-medium leading-[0.95] tracking-[-0.025em]"
                style={{ fontSize: "clamp(48px, 8vw, 104px)" }}
              >
                <span className="font-serif-italic text-foreground/80">A small</span>{" "}
                <span>collection of</span>
                <br />
                <span className="font-serif-italic text-foreground/80">tools made</span>{" "}
                <span>with care.</span>
              </h1>
              <p className="mt-9 max-w-md text-lg leading-relaxed text-muted-foreground">
                Seven standalone micro‑SaaS products. Built one at a time by an
                indie maker who believes software should be calm, focused, and
                priced fairly.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
                <a
                  href="#products"
                  className="group inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium tracking-tight text-foreground"
                >
                  Browse the products
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  Read the manifesto →
                </Link>
              </div>
            </div>

            {/* Sidebar — pull-quote + stats */}
            <aside className="border-l border-border pl-6 md:col-span-5 md:pl-10">
              <p className="label-mono mb-4 text-muted-foreground">From the field</p>
              <p className="font-serif-italic text-xl leading-snug text-foreground/85 md:text-2xl">
                &ldquo;Every product from microooo is genuinely well‑built. You can tell
                the builder cares about quality over quantity.&rdquo;
              </p>
              <p className="mt-5 text-sm text-muted-foreground">
                — Aisha Patel, CTO at Briefly
              </p>
              <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8">
                <Stat n="7" l="Products shipped" />
                <Stat n="10K+" l="Active users" />
                <Stat n="99.9%" l="Uptime SLA" />
                <Stat n="∞" l="Care per release" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ───────────────────────── PRODUCTS — JOURNAL INDEX ───────────────────────── */}
      <section id="products" className="scroll-mt-20 border-b border-border px-4 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="label-mono mb-3 text-accent">The product line</p>
              <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
                <span className="font-serif-italic text-foreground/80">The</span> products,
                <br />
                in order of release.
              </h2>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Index · {products.length} entries
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {products.map((p, i) => (
              <a
                key={p.id}
                href={p.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-12 items-center gap-4 py-6 transition-colors hover:bg-secondary/40 md:py-8"
              >
                <span className="col-span-12 font-serif-italic text-2xl text-muted-foreground md:col-span-1 md:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-12 md:col-span-3">
                  <div className="flex items-center gap-3">
                    {p.logo ? (
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="size-9 rounded-lg ring-1 ring-border"
                      />
                    ) : (
                      <span className={`${p.bgColor} flex size-9 items-center justify-center rounded-lg text-lg ring-1 ring-border`}>
                        {p.icon}
                      </span>
                    )}
                    <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                      {p.name}
                    </h3>
                  </div>
                </div>
                <p className="col-span-12 text-sm text-muted-foreground md:col-span-7 md:text-base">
                  {p.tagline}
                </p>
                <ArrowUpRight className="col-span-12 ml-auto size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground md:col-span-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── HOW IT WORKS ───────────────────────── */}
      <section className="border-b border-border bg-secondary/30 px-4 py-24 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 max-w-2xl">
            <p className="label-mono mb-3 text-accent">How it works</p>
            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
              From discovery to launch{" "}
              <span className="font-serif-italic text-foreground/80">in minutes.</span>
            </h2>
          </div>
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-3">
            {[
              { num: "I", title: "Browse products", description: "Explore the collection. Each one solves a specific problem exceptionally well." },
              { num: "II", title: "Sign up directly", description: "Each product has its own account, pricing, and free trial. No bundling." },
              { num: "III", title: "Launch & grow", description: "Start using the product right away. Get up and running in minutes, not days." },
            ].map((step, i) => (
              <div key={step.num} className="border-t-2 border-foreground pt-6">
                <div className="mb-5 flex items-baseline justify-between">
                  <span className="font-serif text-4xl text-foreground/80">{step.num}</span>
                  <span className="label-mono text-muted-foreground">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-medium tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── FEATURES ───────────────────────── */}
      <section className="border-b border-border px-4 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 grid gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="label-mono mb-3 text-accent">What makes them work</p>
              <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                Everything you need,{" "}
                <span className="font-serif-italic text-foreground/80">nothing</span> you don&apos;t.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:text-lg">
              Every product is built with care, designed to be calm, and priced fairly.
              These are the principles behind every release.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((feature, i) => (
              <div key={feature.title} className="border-t border-border pt-6">
                <p className="label-mono mb-4 text-muted-foreground">
                  · {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                  <span className="font-serif-italic text-foreground/85">
                    {feature.titleAccent}
                  </span>{" "}
                  {feature.title.replace(feature.titleAccent, "").trim()}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── COMPARISON ───────────────────────── */}
      <section className="border-b border-border bg-secondary/30 px-4 py-24 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 max-w-2xl">
            <p className="label-mono mb-3 text-accent">The difference</p>
            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
              Why indie‑built tools{" "}
              <span className="font-serif-italic text-foreground/80">win.</span>
            </h2>
          </div>

          <div className="border-y-2 border-foreground">
            <div className="grid grid-cols-3 border-b border-border">
              <div className="label-mono p-5 text-muted-foreground">Feature</div>
              <div className="label-mono border-x border-border p-5 text-center text-muted-foreground">
                Enterprise SaaS
              </div>
              <div className="label-mono p-5 text-center text-foreground">
                microooo
              </div>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 ${
                  i < comparisonRows.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="p-5 text-base font-medium">{row.label}</div>
                <div className="flex items-center justify-center gap-2 border-x border-border p-5 text-sm text-muted-foreground">
                  <X className="size-4 shrink-0" strokeWidth={2} />
                  <span className="hidden sm:inline">{row.enterprise}</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-5 text-sm font-medium">
                  <Check className="size-4 shrink-0 text-accent" strokeWidth={2.5} />
                  <span className="hidden sm:inline">{row.microooo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── FEATURED TESTIMONIAL ───────────────────────── */}
      <section className="border-b border-border bg-paper px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="label-mono mb-7 text-accent">A note from a reader</p>
          <span className="font-serif text-7xl leading-none text-foreground/30">&ldquo;</span>
          <blockquote className="mt-1 font-serif-italic text-3xl leading-[1.15] tracking-tight text-foreground md:text-5xl">
            {testimonials[0].quote}
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-foreground font-serif-italic text-base text-background">
              {testimonials[0].name
                .split(" ")
                .map((p) => p[0])
                .join("")}
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">{testimonials[0].name}</p>
              <p className="text-xs text-muted-foreground">{testimonials[0].role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── TESTIMONIALS GRID ───────────────────────── */}
      <section className="border-b border-border px-4 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-2xl">
            <p className="label-mono mb-3 text-accent">Words from the field</p>
            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
              Loved by builders{" "}
              <span className="font-serif-italic text-foreground/80">& teams.</span>
            </h2>
          </div>
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="border-t border-border pt-6">
                <div className="mb-4 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3.5 fill-foreground text-foreground" />
                  ))}
                </div>
                <blockquote className="font-serif-italic text-xl leading-snug text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-foreground font-serif-italic text-sm text-background">
                    {t.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── FAQ ───────────────────────── */}
      <section className="border-b border-border px-4 py-24 md:py-28">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="label-mono mb-3 text-accent">Questions?</p>
            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
              Frequently <span className="font-serif-italic text-foreground/80">asked.</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="text-base font-medium tracking-tight md:text-lg">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`size-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-accent" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="font-serif-italic text-lg leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── CTA ───────────────────────── */}
      <section className="bg-paper px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="label-mono mb-6 text-accent">A closing note</p>
          <h2
            className="font-medium leading-[0.95] tracking-[-0.025em]"
            style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
          >
            Find the right tool{" "}
            <span className="font-serif-italic text-foreground/80">for</span>
            <br />
            your team.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Every product is standalone, focused, and built to solve a real
            problem. No bundles, no lock‑in, no fluff.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <Button
              size="lg"
              className="h-11 rounded-full px-5 text-sm"
              render={<a href="#products" />}
            >
              Explore products
              <ArrowRight className="size-4" />
            </Button>
            <Link
              href="/pricing"
              className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              View pricing →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-medium tracking-tight" style={{ fontSize: "28px" }}>
        {n}
      </div>
      <div className="label-mono mt-1 text-muted-foreground">{l}</div>
    </div>
  );
}

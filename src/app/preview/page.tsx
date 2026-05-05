"use client";

import Link from "next/link";
import { visibleProducts } from "@/lib/products";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";

const previewProducts = visibleProducts.slice(0, 6);

const sections = [
  { id: "editorial", label: "01 — Editorial maker", desc: "Instrument Serif as the lead voice. Warm paper background. Magazine‑style." },
  { id: "brutalist", label: "02 — Brutalist indie", desc: "Hard 2px borders, mono labels, hot accent. Indie‑hacker energy." },
  { id: "dark", label: "03 — Linear‑style dark", desc: "Dark surfaces, glass cards, subtle violet→cyan mesh. Premium feel." },
  { id: "gallery", label: "04 — Product gallery", desc: "Portfolio first. Big product tiles dominate the page." },
];

export default function PreviewIndex() {
  return (
    <div className="bg-background">
      {/* Sticky preview switcher */}
      <div className="sticky top-16 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 py-3 text-sm">
          <span className="mr-2 shrink-0 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Compare:
          </span>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="shrink-0 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {s.label}
            </a>
          ))}
          <Link
            href="/"
            className="ml-auto shrink-0 text-xs text-muted-foreground hover:text-foreground"
          >
            ← back
          </Link>
        </div>
      </div>

      <SectionLabel index={0} />
      <Editorial />

      <SectionLabel index={1} />
      <Brutalist />

      <SectionLabel index={2} />
      <Dark />

      <SectionLabel index={3} />
      <Gallery />

      {/* Final CTA */}
      <section className="border-t border-border px-4 py-24 text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
          Pick a direction.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground">
          Tell me which one (or which combo) feels right and I&apos;ll build the full site.
        </p>
      </section>
    </div>
  );
}

function SectionLabel({ index }: { index: number }) {
  const s = sections[index];
  return (
    <div id={s.id} className="scroll-mt-32 border-y border-border bg-secondary/40 px-4 py-5">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-foreground">
          {s.label}
        </p>
        <p className="text-xs text-muted-foreground">{s.desc}</p>
      </div>
    </div>
  );
}

/* ============================================================ */
/* 01 — EDITORIAL MAKER                                         */
/* ============================================================ */

function Editorial() {
  return (
    <div
      className="relative"
      style={{
        background: "#faf7f1",
        color: "#1a1817",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(232,229,217,.6), transparent 50%), radial-gradient(circle at 90% 80%, rgba(232,180,150,.25), transparent 60%)",
        }}
      />
      {/* Hero */}
      <section className="relative px-4 pt-24 pb-20 md:pt-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-stone-500">
              Issue Nº 7 — Spring 2026
            </p>
            <h1
              className="font-medium leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
            >
              <span className="font-serif-italic text-stone-700">A small</span>{" "}
              collection of <br />
              <span className="font-serif-italic text-stone-700">tools made</span>{" "}
              with care.
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-stone-600">
              Seven standalone micro‑SaaS products. Built one at a time by an
              indie maker who believes software should be calm, focused, and
              priced fairly.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <a
                href="#"
                className="group inline-flex items-center gap-2 border-b border-stone-900 pb-1 text-sm font-medium tracking-tight"
              >
                Browse the products
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#"
                className="text-sm text-stone-500 underline-offset-4 hover:underline"
              >
                Read the manifesto →
              </a>
            </div>
          </div>
          <aside className="border-l border-stone-300 pl-6 md:col-span-5 md:pl-10">
            <p className="font-serif-italic text-xl leading-snug text-stone-700">
              &ldquo;Every product from microooo is genuinely well‑built. You
              can tell the builder cares about quality over quantity.&rdquo;
            </p>
            <p className="mt-4 text-sm text-stone-500">
              — Aisha Patel, CTO at Briefly
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-stone-300 pt-8">
              <Stat n="7" l="Products shipped" tone="stone" />
              <Stat n="10K+" l="Active users" tone="stone" />
            </div>
          </aside>
        </div>
      </section>

      {/* Products as a journal index */}
      <section className="relative border-t border-stone-300 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
              <span className="font-serif-italic text-stone-700">The</span> products
            </h2>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
              Index · {previewProducts.length}
            </p>
          </div>
          <div className="divide-y divide-stone-300 border-y border-stone-300">
            {previewProducts.map((p, i) => (
              <a
                key={p.id}
                href={p.appUrl}
                className="group grid grid-cols-12 items-center gap-4 py-7 transition-colors hover:bg-stone-100/60"
              >
                <span className="col-span-1 font-serif-italic text-2xl text-stone-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="col-span-3 text-xl font-medium tracking-tight">
                  {p.name}
                </h3>
                <p className="col-span-6 text-sm text-stone-600">{p.tagline}</p>
                <ArrowUpRight className="col-span-2 ml-auto size-5 text-stone-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-stone-900" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================ */
/* 02 — BRUTALIST INDIE                                         */
/* ============================================================ */

function Brutalist() {
  return (
    <div className="relative bg-white text-black">
      {/* Hero */}
      <section className="border-b-2 border-black px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 inline-flex items-center gap-2 border-2 border-black bg-lime-300 px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest">
            <span className="size-2 animate-pulse bg-black" />
            ▸ Now shipping · v7.0
          </div>
          <h1
            className="font-black uppercase leading-[0.85] tracking-[-0.04em]"
            style={{ fontSize: "clamp(56px, 11vw, 144px)" }}
          >
            TINY TOOLS.
            <br />
            <span className="bg-lime-300 px-2 -mx-2">BIG IMPACT.</span>
          </h1>
          <div className="mt-10 grid gap-10 md:grid-cols-12">
            <p className="text-lg leading-snug md:col-span-7">
              SEVEN STANDALONE MICRO‑SAAS PRODUCTS. NO BUNDLES. NO LOCK‑IN. NO
              CORPORATE NONSENSE. SHIPPED FROM A LAPTOP BY AN INDIE MAKER WHO
              ACTUALLY GIVES A DAMN.
            </p>
            <div className="flex flex-wrap items-end gap-3 md:col-span-5">
              <a
                href="#"
                className="inline-flex items-center gap-2 border-2 border-black bg-black px-5 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[4px_4px_0_0_#000]"
              >
                See products →
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border-2 border-black bg-white px-5 py-3 font-mono text-sm font-bold uppercase tracking-wider text-black transition-all hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[4px_4px_0_0_#000]"
              >
                The maker
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="border-b-2 border-black px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between border-b-2 border-black pb-4">
            <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
              ▸ The product line
            </h2>
            <span className="font-mono text-xs uppercase tracking-widest">
              [ {previewProducts.length} active ]
            </span>
          </div>
          <div className="grid grid-cols-1 border-2 border-black md:grid-cols-2 lg:grid-cols-3">
            {previewProducts.map((p, i) => (
              <a
                key={p.id}
                href={p.appUrl}
                className={`group relative flex flex-col bg-white p-6 transition-colors hover:bg-lime-100 ${
                  (i + 1) % 3 !== 0 ? "lg:border-r-2 lg:border-black" : ""
                } ${(i + 1) % 2 !== 0 ? "md:border-r-2 md:border-black lg:border-r-2" : ""} ${
                  i < previewProducts.length - 1 ? "border-b-2 border-black" : ""
                }`}
              >
                <div className="mb-5 flex items-start justify-between">
                  <span className={`flex size-12 items-center justify-center border-2 border-black text-2xl ${p.bgColor}`}>
                    {p.logo ? (
                      <img src={p.logo} alt={p.name} className="size-full" />
                    ) : (
                      p.icon
                    )}
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-black/60">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-black/70">
                  {p.tagline}
                </p>
                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-1 border-b-2 border-black pb-0.5 font-mono text-xs font-bold uppercase tracking-wider">
                    Open ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================ */
/* 03 — LINEAR‑STYLE DARK PREMIUM                               */
/* ============================================================ */

function Dark() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(120,80,255,.18), transparent 60%), radial-gradient(ellipse 60% 50% at 100% 100%, rgba(60,180,220,.12), transparent 60%), #0a0a0f",
        color: "#e8e8ec",
      }}
    >
      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      <section className="relative px-4 pt-24 pb-20 text-center md:pt-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="size-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,.8)]" />
            New product launching this month
          </div>
          <h1
            className="mx-auto max-w-3xl font-semibold leading-[1.02] tracking-[-0.04em]"
            style={{
              fontSize: "clamp(44px, 7vw, 80px)",
              backgroundImage:
                "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,.65) 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Tiny SaaS tools, built for{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(120deg, #a78bfa, #67e8f9)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              modern teams.
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-base text-white/60 md:text-lg">
            A collection of focused micro‑SaaS products. Each one stands alone,
            priced fairly, designed to solve a single problem exceptionally well.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex h-11 items-center gap-1.5 rounded-full bg-white px-5 text-sm font-medium text-black transition-all hover:bg-white/90"
            >
              Explore products
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#"
              className="inline-flex h-11 items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm font-medium text-white/90 backdrop-blur transition-colors hover:bg-white/10"
            >
              About the builder
            </a>
          </div>
        </div>
      </section>

      {/* Glass product cards */}
      <section className="relative px-4 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {previewProducts.map((p) => (
              <a
                key={p.id}
                href={p.appUrl}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-20 -right-20 size-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle, rgba(167,139,250,.4), transparent 70%)" }}
                />
                <div className="relative flex items-start justify-between">
                  {p.logo ? (
                    <img src={p.logo} alt={p.name} className="size-11 rounded-xl ring-1 ring-white/15" />
                  ) : (
                    <div className={`${p.bgColor} flex size-11 items-center justify-center rounded-xl text-2xl ring-1 ring-white/15`}>
                      {p.icon}
                    </div>
                  )}
                  <ArrowUpRight className="size-4 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </div>
                <h3 className="relative mt-5 text-lg font-semibold tracking-tight text-white">
                  {p.name}
                </h3>
                <p className="relative mt-1 text-sm text-white/50">{p.tagline}</p>
                <p className="relative mt-3 text-sm leading-relaxed text-white/60 line-clamp-3">
                  {p.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================ */
/* 04 — PRODUCT GALLERY                                          */
/* ============================================================ */

function Gallery() {
  return (
    <div className="bg-background text-foreground">
      {/* Tiny hero */}
      <section className="border-b border-border px-4 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              microooo · 2026
            </p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Seven products. One maker.
            </h1>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Star className="size-4 fill-foreground text-foreground" />
            10,000+ active users · 99.9% uptime
          </div>
        </div>
      </section>

      {/* Big product gallery */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {previewProducts.map((p, i) => (
              <a
                key={p.id}
                href={p.appUrl}
                className={`group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-3xl border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-2xl ${p.bgColor} ${
                  i === 0 ? "md:col-span-2 md:aspect-[8/5]" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="size-14 rounded-2xl ring-1 ring-black/10"
                    />
                  ) : (
                    <span className="flex size-14 items-center justify-center rounded-2xl bg-white/60 text-3xl ring-1 ring-black/10">
                      {p.icon}
                    </span>
                  )}
                  <span className="rounded-full bg-white/70 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-foreground/80 ring-1 ring-black/5 backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div>
                  <h3 className={`font-semibold tracking-tight ${i === 0 ? "text-3xl md:text-5xl" : "text-2xl"}`}>
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-foreground/70 line-clamp-2">
                    {p.tagline}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1 rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-transform group-hover:translate-x-0.5">
                    Open
                    <ArrowUpRight className="size-3" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ n, l, tone }: { n: string; l: string; tone: "stone" | "white" }) {
  const numClass = tone === "stone" ? "text-stone-900" : "text-white";
  const labelClass = tone === "stone" ? "text-stone-500" : "text-white/50";
  return (
    <div>
      <div className={`text-3xl font-medium tracking-tight md:text-4xl ${numClass}`}>
        {n}
      </div>
      <div className={`mt-1 text-xs uppercase tracking-wider ${labelClass}`}>{l}</div>
    </div>
  );
}

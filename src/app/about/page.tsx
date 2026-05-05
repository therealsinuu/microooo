import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Heart,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";

const stats = [
  { label: "Products shipped", value: "7" },
  { label: "Active users", value: "10K+" },
  { label: "Uptime SLA", value: "99.9%" },
  { label: "Care per release", value: "∞" },
];

const values = [
  {
    title: "Simplicity",
    titleAccent: "Simplicity",
    description:
      "Every tool is built to be intuitive from day one. No bloated features, no steep learning curves. Just clean software that works.",
    icon: Zap,
  },
  {
    title: "Reliability",
    titleAccent: "Reliability",
    description:
      "I obsess over uptime and performance. Your business depends on these tools running smoothly, and I take that seriously.",
    icon: Shield,
  },
  {
    title: "Affordability",
    titleAccent: "Affordability",
    description:
      "Small teams shouldn't have to choose between tools. Each product is priced fairly, so you only pay for what you actually use.",
    icon: Heart,
  },
  {
    title: "Speed",
    titleAccent: "Speed",
    description:
      "I ship fast and iterate faster. Bug reports get fixed in hours, not weeks. Feature requests get heard and acted on quickly.",
    icon: Clock,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-paper px-4 pt-24 pb-20 md:pt-32">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label-mono mb-7 text-accent">About microooo</p>
            <h1
              className="font-medium leading-[0.95] tracking-[-0.025em]"
              style={{ fontSize: "clamp(48px, 8vw, 104px)" }}
            >
              Built <span className="font-serif-italic text-foreground/80">by</span>{" "}
              <br />
              Sinan, with care.
            </h1>
          </div>
          <aside className="border-l border-border pl-6 md:col-span-5 md:pl-10">
            <p className="label-mono mb-4 text-muted-foreground">The premise</p>
            <p className="font-serif-italic text-xl leading-snug text-foreground/85 md:text-2xl">
              I&apos;m an indie builder who loves creating simple, focused
              micro‑SaaS products that do one thing well.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Each product I build is standalone — its own login, its own
              subscription, its own purpose. That&apos;s how microooo was born:
              a portfolio of independent products for founders, freelancers,
              and small teams who want great software without the enterprise
              price tag.
            </p>
          </aside>
        </div>
      </section>

      {/* Stats — editorial banner */}
      <section className="border-b border-border px-4 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-t-2 border-foreground pt-5">
              <div
                className="font-medium tracking-tight"
                style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
              >
                {s.value}
              </div>
              <div className="label-mono mt-2 text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-border bg-secondary/30 px-4 py-24 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="label-mono mb-3 text-accent">The mission</p>
          <h2
            className="font-medium leading-[1.0] tracking-[-0.02em]"
            style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}
          >
            Focused tools that{" "}
            <span className="font-serif-italic text-foreground/80">solve real problems.</span>
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Every product I build is designed to do one thing exceptionally
            well. No bloat, no feature creep. Each tool is its own standalone
            product with its own pricing, so you only pay for what you need.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-border px-4 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 grid gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="label-mono mb-3 text-accent">What we stand for</p>
              <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                Our <span className="font-serif-italic text-foreground/80">values.</span>
              </h2>
            </div>
          </div>

          <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
            {values.map((value, i) => (
              <div key={value.title} className="border-t border-border pt-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="label-mono text-muted-foreground">
                    · {String(i + 1).padStart(2, "0")}
                  </span>
                  <value.icon className="size-5 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                  <span className="font-serif-italic text-foreground/85">
                    {value.titleAccent}.
                  </span>
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="label-mono mb-6 text-accent">Closing words</p>
          <h2
            className="font-medium leading-[0.95] tracking-[-0.025em]"
            style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
          >
            Join the <span className="font-serif-italic text-foreground/80">journey.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Whether you&apos;re a solo founder or a growing team, check out
            the products and find the right tool for you.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <Button
              size="lg"
              className="h-11 rounded-full px-5 text-sm"
              render={<Link href="/products" />}
            >
              Explore products
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Zap,
  Heart,
  Shield,
  Clock,
  ArrowRight,
  Package,
  Users,
  Activity,
} from "lucide-react";

const stats = [
  { label: "Products", value: "15", icon: Package },
  { label: "Users", value: "2,000+", icon: Users },
  { label: "Uptime", value: "99.9%", icon: Activity },
];

const values = [
  {
    title: "Simplicity",
    description:
      "Every tool is built to be intuitive from day one. No bloated features, no steep learning curves. Just clean software that works.",
    icon: Zap,
  },
  {
    title: "Reliability",
    description:
      "We obsess over uptime and performance. Your business depends on these tools running smoothly, and we take that seriously.",
    icon: Shield,
  },
  {
    title: "Affordability",
    description:
      "Small teams shouldn't have to choose between tools. One subscription gets you everything, at a fraction of what individual SaaS products cost.",
    icon: Heart,
  },
  {
    title: "Speed",
    description:
      "We ship fast and iterate faster. Bug reports get fixed in hours, not weeks. Feature requests get heard and acted on quickly.",
    icon: Clock,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero */}
      <section className="px-6 pt-24 pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Built by Sinan
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I&apos;m an indie builder who got tired of paying for 10 different SaaS
            subscriptions just to run a small project. So I started building the
            tools I needed myself — simple, focused micro-SaaS products that do
            one thing well. Then I thought: why not bundle them all together?
          </p>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            That&apos;s how microooo was born. One subscription, 15 tools, built
            for people like me — founders, freelancers, and small teams who want
            great software without the enterprise price tag.
          </p>
        </div>
      </section>

      <Separator className="mx-auto max-w-xl" />

      {/* Mission */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Our Mission
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground">
            Simplify the SaaS stack for small teams
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Small teams are forced to stitch together dozens of tools, each with
            its own login, billing, and learning curve. We believe there&apos;s a
            better way: a single platform with every essential tool, built to
            work together, priced so anyone can afford it.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-border p-6 text-center"
            >
              <stat.icon className="size-6 text-primary" />
              <span className="text-3xl font-bold text-foreground">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border bg-muted/30 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              What we stand for
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground">
              Our values
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-white p-6 dark:bg-black"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-border">
                    <value.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground">
            Join us
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Whether you&apos;re a solo founder or a growing team, microooo has
            the tools you need to ship faster and spend less.
          </p>
          <Button size="lg" className="mt-6" render={<Link href="/signup" />}>
            Get Started Free
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}

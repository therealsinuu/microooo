"use client";

import { useState } from "react";
import Link from "next/link";
import { visibleProducts } from "@/lib/products";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  LayoutDashboard,
  CreditCard,
  Code2,
  Wifi,
  Users,
  Paintbrush,
  Headphones,
  ShieldCheck,
  UserPlus,
  MousePointerClick,
  Rocket,
  Check,
  Star,
  Zap,
  Globe,
  Package,
  Clock,
  ChevronDown,
  ChevronRight,
  X,
  Minus,
  BookOpen,
  CalendarDays,
  Tag,
  Sparkles,
  CircleDot,
  ArrowUpRight,
} from "lucide-react";

/* ================================================================ */
/* DATA                                                             */
/* ================================================================ */

const stats = [
  { value: "7", label: "Products", icon: Package },
  { value: "10,000+", label: "Users", icon: Users },
  { value: "99.9%", label: "Uptime", icon: Zap },
  { value: "24/7", label: "Support", icon: Headphones },
];

const trustedCompanies = [
  "Acme Inc",
  "TechCorp",
  "StartupXYZ",
  "DesignCo",
  "LaunchPad",
  "CloudBase",
];

const steps = [
  {
    number: "01",
    title: "Browse Products",
    description:
      "Explore our collection of standalone products. Each one is designed to solve a specific problem exceptionally well.",
    icon: MousePointerClick,
  },
  {
    number: "02",
    title: "Sign Up Directly",
    description:
      "Found a product you like? Sign up directly on that product's site. Each product has its own account, pricing, and free trial.",
    icon: UserPlus,
  },
  {
    number: "03",
    title: "Launch & Grow",
    description:
      "Start using the product right away. Each tool is built to get you up and running in minutes, not days.",
    icon: Rocket,
  },
];

const platformFeatures = [
  {
    title: "Standalone Products",
    description:
      "Each product has its own dedicated site, login, and subscription. Use only what you need — no bundling required.",
    icon: LayoutDashboard,
  },
  {
    title: "Fair Pricing",
    description:
      "Every product is priced independently and transparently. Pay only for the tools you actually use.",
    icon: CreditCard,
  },
  {
    title: "No Code Required",
    description:
      "Every tool is designed for non-technical users. Drag, drop, publish. If you can use a browser, you can use our products.",
    icon: Code2,
  },
  {
    title: "API Access",
    description:
      "Full REST APIs for every product. Build custom integrations, automate workflows, and connect to your existing stack.",
    icon: Wifi,
  },
  {
    title: "Team Collaboration",
    description:
      "Invite your team, assign roles, and collaborate seamlessly within each product. Everyone stays in sync, always.",
    icon: Users,
  },
  {
    title: "Custom Branding",
    description:
      "White-label your tools with your logo, colors, and custom domain. Your customers never see our brand.",
    icon: Paintbrush,
  },
  {
    title: "Priority Support",
    description:
      "Get help when you need it. Real humans, fast responses, every single time. No bots, no runaround.",
    icon: Headphones,
  },
  {
    title: "99.9% Uptime SLA",
    description:
      "Enterprise-grade infrastructure backed by a real SLA. Your tools stay online, always. We guarantee it.",
    icon: ShieldCheck,
  },
];

/* Pricing tiers removed — each product has its own pricing */

const testimonials = [
  {
    quote:
      "GroupCheers transformed how our team celebrates milestones. The group cards feature is beautifully designed and so easy to use. Highly recommended for any remote team.",
    name: "Sarah Chen",
    role: "Head of Growth, Launchpad.io",
    avatar: "SC",
    stars: 5,
  },
  {
    quote:
      "LegalKit saved us $2,000 in legal fees and OGSnap made our social shares look 10x better. Every product Sinan builds actually works — no filler here.",
    name: "Marcus Rivera",
    role: "Founder, NomadStack",
    avatar: "MR",
    stars: 5,
  },
  {
    quote:
      "Every product from microooo is genuinely well-built. You can tell the builder cares about quality over quantity. I keep coming back to try new ones as they launch.",
    name: "Aisha Patel",
    role: "CTO, Briefly",
    avatar: "AP",
    stars: 5,
  },
];

const blogPosts = [
  {
    title: "Why Focused Micro-SaaS Products Beat Bloated Enterprise Software",
    excerpt:
      "The average startup uses 12+ SaaS tools. We break down why focused, standalone micro-tools are replacing bloated enterprise software — and doing it better.",
    date: "Apr 10, 2026",
    category: "Industry",
  },
  {
    title: "How I Build and Ship Standalone Products as an Indie Maker",
    excerpt:
      "A behind-the-scenes look at the architecture, design system, and engineering practices that let me ship and maintain multiple production-grade SaaS tools solo.",
    date: "Apr 3, 2026",
    category: "Engineering",
  },
  {
    title: "The True Cost of Your SaaS Stack (And How to Cut It)",
    excerpt:
      "Most teams do not realize they are spending $200+/month on overlapping tools. Here is a framework for auditing your stack and finding the right standalone tools.",
    date: "Mar 27, 2026",
    category: "Strategy",
  },
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
    question: "What happens if I cancel a product?",
    answer:
      "You can cancel any product anytime. Your data is typically retained for 30 days after cancellation, so you can export everything or reactivate without losing anything.",
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

const comparisonRows = [
  { label: "Focus", individual: "Bloated feature sets", microooo: "Does one thing well" },
  { label: "Pricing", individual: "Expensive enterprise tiers", microooo: "Fair, transparent pricing" },
  { label: "Setup time", individual: "Days of configuration", microooo: "Minutes to get started" },
  { label: "Support", individual: "Ticket queues", microooo: "Direct from the builder" },
  { label: "Updates", individual: "Slow release cycles", microooo: "Shipped fast, iterated faster" },
  { label: "Built by", individual: "Large corporations", microooo: "An indie maker who cares" },
];

/* ================================================================ */
/* COMPONENT                                                        */
/* ================================================================ */

export default function Home() {
  const mainProducts = visibleProducts;

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ================================================================ */}
      {/* HERO                                                             */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden border-b">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/60 via-background to-background" />
        {/* Decorative grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-44 lg:py-52 text-center">
          <Badge
            variant="outline"
            className="mb-8 text-xs tracking-wide uppercase px-4 py-1.5"
          >
            <Sparkles className="size-3 mr-1.5" />
            Standalone products. Built by Sinan.
          </Badge>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] max-w-5xl mx-auto">
            Products Built for{" "}
            <span className="bg-gradient-to-r from-foreground via-foreground/60 to-foreground bg-clip-text text-transparent">
              Modern Teams.
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of standalone micro-SaaS products — from feedback
            boards and group greeting cards to legal pages, screenshot APIs,
            and digital signage. Each product has its own pricing and login.
            Pick the ones you need.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="h-14 px-10 text-base font-semibold"
              render={<a href="#products" />}
            >
              Explore Products
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-10 text-base font-semibold"
              render={<Link href="/about" />}
            >
              About the Builder
              <ChevronRight className="ml-2 size-4" />
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Each product has its own free tier or trial. No bundling required.
          </p>

          {/* Stats row */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center gap-2 p-6 rounded-2xl border border-border bg-background/60 backdrop-blur-sm"
              >
                <stat.icon className="size-6 text-muted-foreground mb-1" />
                <span className="text-4xl md:text-5xl font-bold tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* TRUSTED BY                                                       */}
      {/* ================================================================ */}
      <section className="border-b bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-center text-sm text-muted-foreground font-medium tracking-wide uppercase mb-10">
            Trusted by 2,000+ teams worldwide
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {trustedCompanies.map((company) => (
              <div
                key={company}
                className="text-xl md:text-2xl font-bold tracking-tight text-muted-foreground/50 hover:text-muted-foreground transition-colors select-none"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* MAIN PRODUCTS                                                    */}
      {/* ================================================================ */}
      <section id="products" className="border-b scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-4 text-xs uppercase tracking-wider">
              Products
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Built for modern teams
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Five powerful, full-featured products built for teams that want to
              move fast without stitching together a dozen different tools.
              Each one is a standalone product that happens to work even better
              together.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {mainProducts.map((product, index) => (
              <Card
                key={product.id}
                className={`flex flex-col border border-border overflow-hidden ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex items-center justify-center size-16 rounded-2xl text-3xl ${product.bgColor} shrink-0`}
                    >
                      {product.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <CardTitle className="text-2xl">{product.name}</CardTitle>
                        <Badge variant="outline" className="text-[10px] uppercase tracking-wider shrink-0">
                          Core Product
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        {product.tagline}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.features.slice(0, 4).map((feat) => (
                      <div
                        key={feat}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <div className="flex items-center justify-center size-5 rounded-full bg-emerald-500/10 shrink-0 mt-0.5">
                          <Check className="size-3 text-emerald-600" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <a
                    href={product.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:underline underline-offset-4 transition-colors"
                  >
                    Try {product.name}
                    <ArrowUpRight className="size-4" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================================ */}
      {/* HOW IT WORKS                                                     */}
      {/* ================================================================ */}
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-4 text-xs uppercase tracking-wider">
              Simple Setup
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              How It Works
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Find and start using the right product in minutes, not days.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-[3.5rem] left-[20%] right-[20%] h-px border-t border-dashed border-border" />

            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number circle */}
                <div className="relative z-10 flex items-center justify-center size-20 rounded-full border-2 border-border bg-background mb-8">
                  <span className="text-2xl font-bold text-foreground">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center size-14 rounded-2xl border border-border bg-muted/50 mb-6">
                  <step.icon className="size-7 text-foreground" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm">
                  {step.description}
                </p>

                {/* Arrow between steps on mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <ChevronDown className="size-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PLATFORM FEATURES — "Why microooo?"                              */}
      {/* ================================================================ */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-4 text-xs uppercase tracking-wider">
              Platform
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Why microooo?
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every product is built with care, designed to be simple, and
              priced fairly. Here is what you can expect from any microooo
              product.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platformFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-background p-8"
              >
                <div className="flex items-center justify-center size-12 rounded-xl bg-muted border border-border">
                  <feature.icon className="size-6 text-foreground" />
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* COMPARISON TABLE                                                 */}
      {/* ================================================================ */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-6 py-28">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-4 text-xs uppercase tracking-wider">
              Compare
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Why indie-built tools?
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              See how focused, indie-built products compare to bloated
              enterprise software.
            </p>
          </div>

          <div className="rounded-2xl border border-border overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-muted/50">
              <div className="p-5 text-sm font-semibold text-muted-foreground border-r border-border">
                Feature
              </div>
              <div className="p-5 text-sm font-semibold text-muted-foreground border-r border-border text-center">
                Enterprise SaaS
              </div>
              <div className="p-5 text-sm font-semibold text-foreground text-center bg-foreground/5">
                microooo
              </div>
            </div>

            {/* Table rows */}
            {comparisonRows.map((row, index) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 ${
                  index < comparisonRows.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="p-5 text-sm font-medium border-r border-border">
                  {row.label}
                </div>
                <div className="p-5 text-sm text-muted-foreground border-r border-border text-center flex items-center justify-center gap-2">
                  <X className="size-4 text-red-500 shrink-0" />
                  {row.individual}
                </div>
                <div className="p-5 text-sm font-medium text-center bg-foreground/5 flex items-center justify-center gap-2">
                  <Check className="size-4 text-emerald-600 shrink-0" />
                  {row.microooo}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              size="lg"
              className="h-12 px-8 text-base font-semibold"
              render={<a href="#products" />}
            >
              Explore Products
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PRICING NOTE                                                     */}
      {/* ================================================================ */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center">
          <Badge variant="secondary" className="mb-4 text-xs uppercase tracking-wider">
            Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Pay Only for What You Use
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each product has its own independent pricing and free tier.
            No bundles, no lock-in. Visit any product to see its plans.
          </p>
          <Button
            size="lg"
            className="mt-10 h-14 px-10 text-base font-semibold"
            render={<a href="#products" />}
          >
            Browse Products
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </div>
      </section>

      {/* ================================================================ */}
      {/* TESTIMONIALS                                                     */}
      {/* ================================================================ */}
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-4 text-xs uppercase tracking-wider">
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Loved by Builders
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Teams and founders around the world use microooo to simplify
              their stack and ship faster.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <Card
                key={t.name}
                className="flex flex-col border border-border"
              >
                <CardContent className="flex-1 pt-8 pb-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-base leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </CardContent>
                <Separator />
                <CardFooter className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center size-11 rounded-full bg-muted border border-border text-sm font-bold">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* BLOG PREVIEW                                                     */}
      {/* ================================================================ */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-4 text-xs uppercase tracking-wider">
              Blog
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              From the Blog
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Insights, tutorials, and behind-the-scenes stories from the
              microooo team.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {blogPosts.map((post) => (
              <a
                key={post.title}
                href="#"
                className="group"
              >
                <Card className="h-full border border-border transition-colors group-hover:bg-muted/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline" className="text-[10px] uppercase tracking-wider">
                        {post.category}
                      </Badge>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CalendarDays className="size-3" />
                        {post.date}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-snug group-hover:underline underline-offset-4">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold">
                      Read more
                      <ArrowRight className="size-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              className="h-11 px-8 text-sm font-semibold"
              render={<a href="#" />}
            >
              <BookOpen className="mr-2 size-4" />
              View All Posts
            </Button>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FAQ                                                              */}
      {/* ================================================================ */}
      <section className="border-b">
        <div className="mx-auto max-w-3xl px-6 py-28">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-4 text-xs uppercase tracking-wider">
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about microooo. Can not find the
              answer you are looking for? Reach out to our support team.
            </p>
          </div>

          <div className="space-y-0 divide-y divide-border border-t border-b border-border">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="text-base font-semibold leading-snug pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`flex items-center justify-center size-8 rounded-lg border border-border shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="size-4" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="pb-6 pr-12">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FINAL CTA                                                        */}
      {/* ================================================================ */}
      <section className="border-b relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-muted/60 via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

        <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-40 text-center">
          <div className="flex items-center justify-center size-20 rounded-full border-2 border-border bg-background mx-auto mb-10">
            <Globe className="size-9 text-foreground" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl mx-auto leading-[1.1]">
            Find the right tool for your team
          </h2>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every product is standalone, focused, and built to solve a real
            problem. Browse the collection and start using the ones that
            fit your workflow.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="h-14 px-12 text-base font-semibold"
              render={<a href="#products" />}
            >
              Explore Products
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-12 text-base font-semibold"
              render={<Link href="/about" />}
            >
              About the Builder
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Each product has its own pricing and free trial.
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FOOTER                                                           */}
      {/* ================================================================ */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <p className="text-2xl font-bold tracking-tight">microooo</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                A collection of standalone micro-SaaS products.
                Built by Sinan for makers, founders, and growing teams.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-5">Products</p>
              <ul className="space-y-3">
                {mainProducts.map((p) => (
                  <li key={p.id}>
                    <a
                      href={p.appUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold mb-5">Company</p>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/pricing"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-12" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} microooo. All rights
              reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="/privacy"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

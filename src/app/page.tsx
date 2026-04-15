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
  { value: "15", label: "Products", icon: Package },
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
    title: "Sign Up",
    description:
      "Create your free account in seconds. No credit card required. Just pick a plan, enter your email, and you are in. The entire process takes under 30 seconds.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Choose Your Tools",
    description:
      "Browse all 15 products and activate the ones your team needs. Mix and match freely across categories. Switch tools on or off anytime from your dashboard.",
    icon: MousePointerClick,
  },
  {
    number: "03",
    title: "Launch & Grow",
    description:
      "Deploy your tools, connect them to your existing workflow, and scale your business. Everything works together seamlessly from day one.",
    icon: Rocket,
  },
];

const platformFeatures = [
  {
    title: "One Dashboard",
    description:
      "Manage every product from a single, unified dashboard. No more tab juggling or password hunting across a dozen different apps.",
    icon: LayoutDashboard,
  },
  {
    title: "Single Subscription",
    description:
      "One plan, one invoice, one login. Access everything with a single subscription. No surprise charges or hidden fees.",
    icon: CreditCard,
  },
  {
    title: "No Code Required",
    description:
      "Every tool is designed for non-technical users. Drag, drop, publish. If you can use a browser, you can use microooo.",
    icon: Code2,
  },
  {
    title: "API Access",
    description:
      "Full REST APIs for every product. Build custom integrations, automate workflows, and connect microooo to your existing stack.",
    icon: Wifi,
  },
  {
    title: "Team Collaboration",
    description:
      "Invite your team, assign roles, and collaborate across every product seamlessly. Everyone stays in sync, always.",
    icon: Users,
  },
  {
    title: "Custom Branding",
    description:
      "White-label every tool with your logo, colors, and custom domain. Your customers never see the microooo brand.",
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

const pricingTiers = [
  {
    name: "Starter",
    price: "$9",
    period: "/mo",
    description: "Perfect for solo makers and small projects.",
    features: [
      "Up to 3 products",
      "1,000 monthly actions",
      "Community support",
      "Basic analytics",
      "1 team member",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "For growing teams that need the full toolkit.",
    features: [
      "All 15 products",
      "50,000 monthly actions",
      "Priority support",
      "Advanced analytics",
      "10 team members",
      "Custom branding",
      "API access",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$79",
    period: "/mo",
    description: "For companies that need scale and control.",
    features: [
      "All 15 products",
      "Unlimited actions",
      "Dedicated support",
      "Full analytics suite",
      "Unlimited team members",
      "Custom branding",
      "API access",
      "Custom domain",
      "SSO / SAML",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const testimonials = [
  {
    quote:
      "We replaced 6 different subscriptions with microooo. The unified dashboard alone saves us hours every week. I cannot imagine going back to the old way of doing things.",
    name: "Sarah Chen",
    role: "Head of Growth, Launchpad.io",
    avatar: "SC",
    stars: 5,
  },
  {
    quote:
      "The micro-SaaS tools are incredible. LegalKit saved us $2,000 in legal fees and OGSnap made our social shares look 10x better. Every tool actually works — no filler products here.",
    name: "Marcus Rivera",
    role: "Founder, NomadStack",
    avatar: "MR",
    stars: 5,
  },
  {
    quote:
      "I was skeptical about bundled tools, but every single product in microooo is genuinely well-built. The team behind this clearly cares about quality over quantity. Highly recommended.",
    name: "Aisha Patel",
    role: "CTO, Briefly",
    avatar: "AP",
    stars: 5,
  },
];

const blogPosts = [
  {
    title: "Why Micro-SaaS Bundles Are the Future of Business Software",
    excerpt:
      "The average startup uses 12+ SaaS tools. We break down why bundled micro-tools are replacing bloated enterprise software — and saving teams thousands per year.",
    date: "Apr 10, 2026",
    category: "Industry",
  },
  {
    title: "How We Built 15 Products With a Team of 8",
    excerpt:
      "A behind-the-scenes look at the architecture, design system, and engineering practices that let our small team ship and maintain 15 production-grade SaaS tools.",
    date: "Apr 3, 2026",
    category: "Engineering",
  },
  {
    title: "The True Cost of Your SaaS Stack (And How to Cut It in Half)",
    excerpt:
      "Most teams do not realize they are spending $200+/month on overlapping tools. Here is a framework for auditing your stack and consolidating without losing functionality.",
    date: "Mar 27, 2026",
    category: "Strategy",
  },
];

const faqs = [
  {
    question: "Can I try microooo for free?",
    answer:
      "Yes. Every plan comes with a 14-day free trial, no credit card required. You can explore all the products and decide which plan works best for you before paying anything.",
  },
  {
    question: "Do I get access to all 15 products?",
    answer:
      "On the Pro and Enterprise plans, you get access to all 15 products. The Starter plan includes up to 3 products of your choice, and you can upgrade anytime to unlock the full suite.",
  },
  {
    question: "Can I use microooo tools on my own domain?",
    answer:
      "Yes. Pro and Enterprise plans support custom domains for all embeddable tools. Your visitors will never see the microooo brand unless you want them to.",
  },
  {
    question: "Is there an API?",
    answer:
      "Every product in the microooo suite comes with a full REST API. You can automate workflows, build custom integrations, and connect microooo to your existing tools with ease.",
  },
  {
    question: "What happens if I cancel?",
    answer:
      "You can cancel anytime. Your data is retained for 30 days after cancellation, so you can export everything or reactivate your account without losing anything.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes. If you are not satisfied within the first 30 days, we will issue a full refund. No questions asked. We want you to feel confident in your decision.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time from your dashboard. Changes take effect immediately, and we prorate the difference so you only pay for what you use.",
  },
  {
    question: "Do the tools integrate with each other?",
    answer:
      "Yes. All 15 products share a common data layer and authentication system. You can pass data between tools, trigger actions across products, and build powerful cross-tool workflows without any extra setup.",
  },
];

const comparisonRows = [
  { label: "Monthly cost", individual: "$200+/mo", microooo: "$29/mo" },
  { label: "Number of logins", individual: "15 separate logins", microooo: "1 single login" },
  { label: "Integration", individual: "No integration", microooo: "Fully integrated" },
  { label: "Billing", individual: "15 invoices", microooo: "1 invoice" },
  { label: "Support", individual: "15 support teams", microooo: "1 dedicated team" },
  { label: "Data portability", individual: "Scattered data", microooo: "Unified data layer" },
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
            15 tools. One platform. Zero hassle.
          </Badge>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] max-w-5xl mx-auto">
            15 Micro-SaaS Tools.{" "}
            <span className="bg-gradient-to-r from-foreground via-foreground/60 to-foreground bg-clip-text text-transparent">
              One Subscription.
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stop paying for 15 different subscriptions. microooo bundles the
            essential tools every business needs — from feedback boards and
            group greeting cards to legal pages, screenshot APIs, and digital
            signage — into a single, affordable plan that saves you hundreds
            every month.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="h-14 px-10 text-base font-semibold"
              render={
                <a href="https://groupcheers.microooo.com/signup" />
              }
            >
              Get Started Free
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-10 text-base font-semibold"
              render={<a href="#products" />}
            >
              View All Products
              <ChevronDown className="ml-2 size-4" />
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required. 14-day free trial on all plans.
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
              Get up and running in minutes, not days. Three simple steps
              stand between you and a fully unified tool stack.
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
              Every feature you would expect from a premium platform, included
              in every plan. We built the infrastructure so you can focus on
              building your business.
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
              Replace your entire stack
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              See how microooo stacks up against paying for individual tools
              separately. The math speaks for itself.
            </p>
          </div>

          <div className="rounded-2xl border border-border overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-muted/50">
              <div className="p-5 text-sm font-semibold text-muted-foreground border-r border-border">
                Feature
              </div>
              <div className="p-5 text-sm font-semibold text-muted-foreground border-r border-border text-center">
                Individual Tools
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
              render={
                <a href="https://groupcheers.microooo.com/signup" />
              }
            >
              Switch to microooo
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PRICING PREVIEW                                                  */}
      {/* ================================================================ */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-4 text-xs uppercase tracking-wider">
              Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              No hidden fees. No per-seat charges. No surprises. Just pick a
              plan and start building.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`flex flex-col border-2 ${
                  tier.highlighted
                    ? "border-foreground"
                    : "border-border"
                } relative`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="text-xs px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <CardDescription className="mt-1">
                    {tier.description}
                  </CardDescription>
                  <div className="mt-6 mb-2">
                    <span className="text-5xl font-bold tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-lg text-muted-foreground">
                      {tier.period}
                    </span>
                  </div>
                </CardHeader>

                <Separator />

                <CardContent className="flex-1 pt-6">
                  <ul className="space-y-3.5">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm"
                      >
                        <Check className="size-4 shrink-0 text-emerald-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="flex-col gap-3 pt-4">
                  <Button
                    className="w-full h-11 text-sm font-semibold"
                    variant={tier.highlighted ? "default" : "outline"}
                    render={
                      <a href="https://groupcheers.microooo.com/signup" />
                    }
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-muted-foreground">
            All plans include a 14-day free trial.{" "}
            <Link
              href="/pricing"
              className="underline underline-offset-4 hover:text-foreground font-medium"
            >
              View full pricing details
            </Link>
          </p>
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
            Ready to simplify your stack?
          </h2>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands of teams who ditched their bloated toolchain for
            one clean, powerful platform. Start your free trial today and
            see the difference in minutes.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="h-14 px-12 text-base font-semibold"
              render={
                <a href="https://groupcheers.microooo.com/signup" />
              }
            >
              Get Started Free
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-12 text-base font-semibold"
              render={<Link href="/pricing" />}
            >
              View Pricing
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required. Cancel anytime. 30-day money-back
            guarantee.
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
                15 micro-SaaS tools bundled into one simple subscription.
                Built for makers, founders, and growing teams who refuse to
                overpay for software.
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

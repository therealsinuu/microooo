import Link from "next/link";
import { products, productCategories } from "@/lib/products";
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
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
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
} from "lucide-react";

const stats = [
  { value: "15", label: "Products", icon: Package },
  { value: "10,000+", label: "Users", icon: Users },
  { value: "99.9%", label: "Uptime", icon: Zap },
  { value: "24/7", label: "Support", icon: Headphones },
];

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description:
      "Create your free account in seconds. No credit card required to get started.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Choose Your Tools",
    description:
      "Browse all 15 products and activate the ones you need. Mix and match freely.",
    icon: MousePointerClick,
  },
  {
    number: "03",
    title: "Launch & Grow",
    description:
      "Deploy your tools, connect them to your workflow, and scale your business.",
    icon: Rocket,
  },
];

const platformFeatures = [
  {
    title: "One Dashboard",
    description:
      "Manage every product from a single, unified dashboard. No more tab juggling.",
    icon: LayoutDashboard,
  },
  {
    title: "Single Subscription",
    description:
      "One plan, one invoice, one login. Access everything with a single subscription.",
    icon: CreditCard,
  },
  {
    title: "No Code Required",
    description:
      "Every tool is designed for non-technical users. Drag, drop, publish.",
    icon: Code2,
  },
  {
    title: "API Access",
    description:
      "Full REST APIs for every product. Build custom integrations and automate workflows.",
    icon: Wifi,
  },
  {
    title: "Team Collaboration",
    description:
      "Invite your team, assign roles, and collaborate across every product seamlessly.",
    icon: Users,
  },
  {
    title: "Custom Branding",
    description:
      "White-label every tool with your logo, colors, and custom domain.",
    icon: Paintbrush,
  },
  {
    title: "Priority Support",
    description:
      "Get help when you need it. Real humans, fast responses, every time.",
    icon: Headphones,
  },
  {
    title: "99.9% Uptime",
    description:
      "Enterprise-grade infrastructure. Your tools stay online, always.",
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
      "We replaced 6 different subscriptions with microooo. The unified dashboard alone saves us hours every week.",
    name: "Sarah Chen",
    role: "Head of Growth, Launchpad.io",
    avatar: "SC",
  },
  {
    quote:
      "The micro-SaaS tools are incredible. LegalKit saved us $2,000 in legal fees and OGSnap made our social shares look 10x better.",
    name: "Marcus Rivera",
    role: "Founder, NomadStack",
    avatar: "MR",
  },
  {
    quote:
      "I was skeptical about bundled tools, but every single product in microooo is genuinely well-built. No filler.",
    name: "Aisha Patel",
    role: "CTO, Briefly",
    avatar: "AP",
  },
];

const faqs = [
  {
    question: "Can I try microooo for free?",
    answer:
      "Yes. Every plan comes with a 14-day free trial, no credit card required. You can explore all the products and decide which plan works best for you.",
  },
  {
    question: "Do I get access to all 15 products?",
    answer:
      "On the Pro and Enterprise plans, you get access to all 15 products. The Starter plan includes up to 3 products of your choice, and you can upgrade anytime.",
  },
  {
    question: "Can I use microooo tools on my own domain?",
    answer:
      "Yes. Pro and Enterprise plans support custom domains for all embeddable tools. Your visitors will never see the microooo brand unless you want them to.",
  },
  {
    question: "Is there an API?",
    answer:
      "Every product in the microooo suite comes with a full REST API. You can automate workflows, build custom integrations, and connect microooo to your existing tools.",
  },
  {
    question: "What happens if I cancel?",
    answer:
      "You can cancel anytime. Your data is retained for 30 days after cancellation, so you can export everything or reactivate your account without losing anything.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes. If you are not satisfied within the first 30 days, we will issue a full refund. No questions asked.",
  },
];

export default function Home() {
  const mainProducts = productCategories.products;
  const microTools = productCategories.microsaas;

  return (
    <div className="flex flex-col min-h-screen">
      {/* ================================================================ */}
      {/* HERO */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/60 via-background to-background" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40 text-center">
          <Badge variant="outline" className="mb-6 text-xs tracking-wide uppercase">
            15 tools. One platform.
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl mx-auto">
            15 Micro-SaaS Tools.{" "}
            <span className="bg-gradient-to-r from-foreground via-foreground/70 to-foreground bg-clip-text">
              One Subscription.
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stop paying for 15 different subscriptions. microooo bundles the
            essential tools every business needs — from feedback boards to
            legal pages — into a single, affordable plan.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-base" render={<Link href="/signup" />}>
              Get Started Free
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base"
              render={<Link href="/products" />}
            >
              View All Products
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required. 14-day free trial on all plans.
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* STATS / TRUST */}
      {/* ================================================================ */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-2">
                <stat.icon className="size-6 text-muted-foreground" />
                <span className="text-3xl md:text-4xl font-bold tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* MAIN PRODUCTS */}
      {/* ================================================================ */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Core Suite
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Products
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Five powerful, full-featured products built for teams that want to
              move fast without stitching together a dozen tools.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mainProducts.map((product) => (
              <Card key={product.id} className="flex flex-col border border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex items-center justify-center size-12 rounded-xl text-2xl ${product.bgColor}`}
                    >
                      {product.icon}
                    </span>
                    <div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>{product.tagline}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description.slice(0, 160)}...
                  </p>
                  <ul className="mt-4 space-y-2">
                    {product.features.slice(0, 4).map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-sm">
                        <Check className="size-4 mt-0.5 shrink-0 text-emerald-600" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href={product.appUrl}
                    className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                  >
                    Learn More <ArrowRight className="size-3.5" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* MICRO SAAS TOOLS */}
      {/* ================================================================ */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Micro Tools
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Micro SaaS Tools
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Ten lightweight, focused tools that solve one problem really well.
              Each one replaces a standalone subscription you are probably already paying for.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {microTools.map((tool) => (
              <Link key={tool.id} href={tool.appUrl} className="group">
                <Card className="h-full border border-border transition-colors group-hover:bg-muted/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex items-center justify-center size-10 rounded-lg text-xl ${tool.bgColor}`}
                      >
                        {tool.icon}
                      </span>
                      <div>
                        <CardTitle className="text-base group-hover:underline">
                          {tool.name}
                        </CardTitle>
                        <CardDescription className="text-xs">
                          {tool.tagline}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tool.description.slice(0, 120)}...
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* HOW IT WORKS */}
      {/* ================================================================ */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Simple Setup
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Get up and running in minutes, not days.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="flex items-center justify-center size-16 rounded-2xl border border-border bg-background mb-6">
                  <step.icon className="size-7 text-foreground" />
                </div>
                <span className="text-xs font-mono text-muted-foreground tracking-widest mb-2">
                  STEP {step.number}
                </span>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FEATURES OVERVIEW */}
      {/* ================================================================ */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Platform
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Everything You Need, Built In
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Every feature you would expect from a premium platform, included in
              every plan.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platformFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-start gap-3 rounded-xl border border-border bg-background p-6"
              >
                <div className="flex items-center justify-center size-10 rounded-lg bg-muted">
                  <feature.icon className="size-5 text-foreground" />
                </div>
                <h3 className="text-base font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PRICING PREVIEW */}
      {/* ================================================================ */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              No hidden fees. No per-seat charges. Just pick a plan and go.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`flex flex-col border ${
                  tier.highlighted
                    ? "border-foreground ring-1 ring-foreground"
                    : "border-border"
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{tier.name}</CardTitle>
                    {tier.highlighted && (
                      <Badge variant="default" className="text-[10px]">
                        Most Popular
                      </Badge>
                    )}
                  </div>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="size-4 shrink-0 text-emerald-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex-col gap-3">
                  <Button
                    className="w-full"
                    variant={tier.highlighted ? "default" : "outline"}
                    render={<Link href="/pricing" />}
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            All plans include a 14-day free trial.{" "}
            <Link href="/pricing" className="underline underline-offset-4 hover:text-foreground">
              See full pricing details
            </Link>
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* TESTIMONIALS */}
      {/* ================================================================ */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Loved by Builders
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Teams and founders around the world use microooo to simplify
              their stack.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="flex flex-col border border-border">
                <CardContent className="flex-1 pt-2">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-9 rounded-full bg-muted text-xs font-semibold">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FAQ */}
      {/* ================================================================ */}
      <section className="border-b">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about microooo.
            </p>
          </div>

          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={String(index)}>
                <AccordionTrigger className="text-base font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FINAL CTA */}
      {/* ================================================================ */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-28 text-center">
          <Globe className="mx-auto size-12 text-muted-foreground mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
            Ready to simplify your stack?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Join thousands of teams who ditched their bloated toolchain for one
            clean, powerful platform. Start your free trial today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-base" render={<Link href="/signup" />}>
              Get Started Free
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base"
              render={<Link href="/pricing" />}
            >
              View Pricing
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FOOTER */}
      {/* ================================================================ */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <p className="text-lg font-bold tracking-tight">microooo</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                15 micro-SaaS tools bundled into one simple subscription. Built
                for makers, founders, and growing teams.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-4">Products</p>
              <ul className="space-y-2">
                {mainProducts.slice(0, 5).map((p) => (
                  <li key={p.id}>
                    <Link
                      href={p.appUrl}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold mb-4">Micro Tools</p>
              <ul className="space-y-2">
                {microTools.slice(0, 5).map((p) => (
                  <li key={p.id}>
                    <Link
                      href={p.appUrl}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold mb-4">Company</p>
              <ul className="space-y-2">
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
                  <Link
                    href="/blog"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
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

          <Separator className="my-10" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} microooo. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
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

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
  Check,
  Star,
  Globe,
  Package,
  Zap,
  ChevronDown,
  X,
  SparklesIcon,
  ArrowUpRight,
} from "lucide-react";

/* ================================================================ */
/* DATA                                                             */
/* ================================================================ */

const platformFeatures = [
  {
    title: "Standalone Products",
    description:
      "Each product has its own site, login, and subscription. Use only what you need.",
    icon: <LayoutDashboard className="size-5" />,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Fair Pricing",
    description:
      "Every product is priced independently. Pay only for the tools you use.",
    icon: <CreditCard className="size-5" />,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "No Code Required",
    description:
      "Every tool is designed for non-technical users. If you can use a browser, you can use our products.",
    icon: <Code2 className="size-5" />,
    color: "bg-green-500/10 text-green-600",
  },
  {
    title: "API Access",
    description:
      "Full REST APIs for every product. Build integrations and automate workflows.",
    icon: <Wifi className="size-5" />,
    color: "bg-yellow-500/10 text-yellow-600",
  },
  {
    title: "Team Collaboration",
    description:
      "Invite your team, assign roles, and collaborate seamlessly within each product.",
    icon: <Users className="size-5" />,
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    title: "Custom Branding",
    description:
      "White-label your tools with your logo, colors, and custom domain.",
    icon: <Paintbrush className="size-5" />,
    color: "bg-orange-500/10 text-orange-600",
  },
];

const testimonials = [
  {
    quote:
      "GroupCheers transformed how our team celebrates milestones. The group cards feature is beautifully designed and so easy to use.",
    name: "Sarah Chen",
    role: "Head of Growth, Launchpad.io",
    stars: 5,
  },
  {
    quote:
      "LegalKit saved us $2,000 in legal fees and OGSnap made our social shares look 10x better. Every product actually works.",
    name: "Marcus Rivera",
    role: "Founder, NomadStack",
    stars: 5,
  },
  {
    quote:
      "Every product from microooo is genuinely well-built. You can tell the builder cares about quality over quantity.",
    name: "Aisha Patel",
    role: "CTO, Briefly",
    stars: 5,
  },
];

const comparisonRows = [
  { label: "Focus", enterprise: "Bloated feature sets", microooo: "Does one thing well" },
  { label: "Pricing", enterprise: "Expensive enterprise tiers", microooo: "Fair, transparent pricing" },
  { label: "Setup time", enterprise: "Days of configuration", microooo: "Minutes to get started" },
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
  const mainProducts = visibleProducts;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <SparklesIcon className="size-3 mr-1" />
            Standalone products, built by Sinan
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Products built for<br />
            <span className="text-primary">modern teams</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A collection of standalone micro-SaaS products — from group cards
            and feedback boards to screenshot APIs and digital signage.
            Each product has its own pricing and login. Pick the ones you need.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" className="h-12 px-6 text-base" render={<a href="#products" />}>
              Explore Products
              <ArrowRight className="size-4 ml-1.5" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-6 text-base" render={<Link href="/about" />}>
              About the Builder
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Each product has its own free tier or trial. No bundling required.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 border-y bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-around items-center flex-wrap gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">7</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">10,000+</div>
              <div className="text-sm text-muted-foreground">Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Our products</h2>
            <p className="text-muted-foreground text-lg">
              Each product is standalone — its own site, login, and subscription.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {mainProducts.map((product) => (
              <Card key={product.id}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <span className={`flex items-center justify-center size-12 rounded-xl text-2xl shrink-0`}>
                      {product.logo ? <img src={product.logo} alt={product.name} className="size-12 rounded-xl" /> : <span className={product.bgColor + " size-12 rounded-xl flex items-center justify-center"}>{product.icon}</span>}
                    </span>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {product.tagline}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.slice(0, 4).map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-sm">
                        <CheckIcon />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <a
                    href={product.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline underline-offset-4"
                  >
                    Try {product.name}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How it works</h2>
            <p className="text-muted-foreground text-lg">Find and start using the right product in minutes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "1", title: "Browse products", description: "Explore our collection. Each one solves a specific problem exceptionally well." },
              { num: "2", title: "Sign up directly", description: "Each product has its own account, pricing, and free trial. No bundling." },
              { num: "3", title: "Launch & grow", description: "Start using the product right away. Get up and running in minutes, not days." },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Why microooo?</h2>
            <p className="text-muted-foreground text-lg">
              Every product is built with care, designed to be simple, and priced fairly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`size-10 rounded-lg flex items-center justify-center ${feature.color}`}>
                      {feature.icon}
                    </div>
                    <CardTitle className="text-base">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Why indie-built tools?</h2>
            <p className="text-muted-foreground text-lg">
              See how focused, indie-built products compare to bloated enterprise software.
            </p>
          </div>
          <Card>
            <CardContent className="p-0">
              <div className="grid grid-cols-3 border-b">
                <div className="p-4 text-sm font-semibold text-muted-foreground">Feature</div>
                <div className="p-4 text-sm font-semibold text-muted-foreground text-center border-x">Enterprise SaaS</div>
                <div className="p-4 text-sm font-semibold text-center">microooo</div>
              </div>
              {comparisonRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-3 ${index < comparisonRows.length - 1 ? "border-b" : ""}`}
                >
                  <div className="p-4 text-sm font-medium">{row.label}</div>
                  <div className="p-4 text-sm text-muted-foreground border-x text-center flex items-center justify-center gap-2">
                    <X className="size-4 text-red-500 shrink-0" />
                    <span className="hidden sm:inline">{row.enterprise}</span>
                  </div>
                  <div className="p-4 text-sm font-medium text-center flex items-center justify-center gap-2">
                    <Check className="size-4 text-green-500 shrink-0" />
                    <span className="hidden sm:inline">{row.microooo}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <blockquote className="text-xl font-medium mb-4">
            &ldquo;{testimonials[0].quote}&rdquo;
          </blockquote>
          <p className="text-muted-foreground">
            — {testimonials[0].name}, {testimonials[0].role}
          </p>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Loved by builders</h2>
            <p className="text-muted-foreground text-lg">
              Teams and founders use microooo to simplify their stack.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-sm mb-4">&ldquo;{t.quote}&rdquo;</blockquote>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Frequently asked questions</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about microooo.
            </p>
          </div>
          <div className="divide-y border-y">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-sm font-semibold">{faq.question}</span>
                    <ChevronDown className={`size-4 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="pb-5">
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <Globe className="size-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Find the right tool for your team</h2>
          <p className="text-lg opacity-90 mb-8">
            Every product is standalone, focused, and built to solve a real problem.
          </p>
          <Button size="lg" variant="secondary" className="h-12 px-6 text-base" render={<a href="#products" />}>
            Explore Products
            <ArrowRight className="size-4 ml-1.5" />
          </Button>
        </div>
      </section>
    </>
  );
}

function CheckIcon() {
  return (
    <div className="flex items-center justify-center size-5 rounded-full bg-green-500/10 shrink-0 mt-0.5">
      <Check className="size-3 text-green-600" />
    </div>
  );
}

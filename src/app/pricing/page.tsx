"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check,
  X,
  Zap,
  Users,
  Headphones,
  Globe,
  Shield,
  Code,
  ArrowRight,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 9,
    annualPrice: 7,
    description: "Perfect for solo founders testing the waters.",
    features: [
      { label: "3 products included", included: true },
      { label: "1 team member", included: true },
      { label: "Basic support", included: true },
      { label: "1,000 API calls/month", included: true },
      { label: "Community access", included: true },
      { label: "Custom branding", included: false },
      { label: "API access", included: false },
      { label: "SSO & SAML", included: false },
      { label: "SLA guarantee", included: false },
      { label: "Custom integrations", included: false },
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Pro",
    monthlyPrice: 29,
    annualPrice: 23,
    description: "For growing teams that need the full toolkit.",
    features: [
      { label: "All 15 products", included: true },
      { label: "5 team members", included: true },
      { label: "Priority support", included: true },
      { label: "50,000 API calls/month", included: true },
      { label: "Community access", included: true },
      { label: "Custom branding", included: true },
      { label: "API access", included: true },
      { label: "SSO & SAML", included: false },
      { label: "SLA guarantee", included: false },
      { label: "Custom integrations", included: false },
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 79,
    annualPrice: 63,
    description: "For organizations that need full control and support.",
    features: [
      { label: "All 15 products", included: true },
      { label: "Unlimited team members", included: true },
      { label: "Dedicated support", included: true },
      { label: "Unlimited API calls", included: true },
      { label: "Community access", included: true },
      { label: "Custom branding", included: true },
      { label: "API access", included: true },
      { label: "SSO & SAML", included: true },
      { label: "SLA guarantee", included: true },
      { label: "Custom integrations", included: true },
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const comparisonFeatures = [
  { name: "Products included", starter: "3", pro: "All 15", enterprise: "All 15" },
  { name: "Team members", starter: "1", pro: "5", enterprise: "Unlimited" },
  { name: "API calls/month", starter: "1,000", pro: "50,000", enterprise: "Unlimited" },
  { name: "Support", starter: "Basic", pro: "Priority", enterprise: "Dedicated" },
  { name: "Community access", starter: true, pro: true, enterprise: true },
  { name: "Custom branding", starter: false, pro: true, enterprise: true },
  { name: "API access", starter: false, pro: true, enterprise: true },
  { name: "SSO & SAML", starter: false, pro: false, enterprise: true },
  { name: "SLA guarantee", starter: false, pro: false, enterprise: true },
  { name: "Custom integrations", starter: false, pro: false, enterprise: true },
  { name: "Onboarding assistance", starter: false, pro: false, enterprise: true },
  { name: "Priority feature requests", starter: false, pro: false, enterprise: true },
];

const faqs = [
  {
    question: "Can I switch plans at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the remaining balance will be credited to your account.",
  },
  {
    question: "What happens when my free trial ends?",
    answer:
      "Your 14-day free trial gives you full access to the Pro plan. When it ends, you can choose any plan to continue. If you don't choose a plan, your account will be paused but your data will be kept for 30 days.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee on all plans. If you're not satisfied, contact our support team and we'll process a full refund, no questions asked.",
  },
  {
    question: "Can I add more team members on the Starter plan?",
    answer:
      "The Starter plan includes 1 team member. If you need more, you can upgrade to Pro (5 members) or Enterprise (unlimited). Additional members cannot be added individually to the Starter plan.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual Enterprise plans. All payments are processed securely through Stripe.",
  },
  {
    question: "Is there a discount for nonprofits or education?",
    answer:
      "Yes! We offer a 50% discount for verified nonprofits, educational institutions, and open-source projects. Contact our team with proof of status and we'll set up your discounted plan.",
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero */}
      <section className="px-6 pt-24 pb-16 text-center">
        <div className="mx-auto max-w-3xl">
          <Badge variant="secondary" className="mb-4">
            Simple pricing
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            One subscription. All 15 tools. No hidden fees.
          </p>
        </div>
      </section>

      {/* Monthly/Annual Toggle */}
      <section className="flex items-center justify-center gap-4 pb-12">
        <span
          className={`text-sm font-medium ${
            !isAnnual ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          Monthly
        </span>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full border transition-colors ${
            isAnnual
              ? "bg-primary border-primary"
              : "bg-muted border-border"
          }`}
          aria-label="Toggle annual billing"
        >
          <span
            className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
              isAnnual ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
        <span
          className={`text-sm font-medium ${
            isAnnual ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          Annual
        </span>
        {isAnnual && (
          <Badge variant="secondary" className="text-green-700 dark:text-green-400">
            Save up to 20%
          </Badge>
        )}
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${
                plan.highlighted
                  ? "border-2 border-primary ring-0"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge>Most Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-6">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  {isAnnual && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      Billed annually (${plan.annualPrice * 12}/yr)
                    </p>
                  )}
                  {isAnnual && (
                    <p className="mt-0.5 text-sm text-green-600 dark:text-green-400">
                      You save ${(plan.monthlyPrice - plan.annualPrice) * 12}/yr
                    </p>
                  )}
                </div>

                <Separator />

                <ul className="flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature.label} className="flex items-center gap-2 text-sm">
                      {feature.included ? (
                        <Check className="size-4 shrink-0 text-green-600" />
                      ) : (
                        <X className="size-4 shrink-0 text-muted-foreground/40" />
                      )}
                      <span
                        className={
                          feature.included
                            ? "text-foreground"
                            : "text-muted-foreground/60"
                        }
                      >
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                  className="w-full"
                  render={<Link href="/signup" />}
                >
                  {plan.cta}
                  <ArrowRight className="size-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
          Compare all features
        </h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-6 py-3 text-left font-medium text-foreground">
                  Feature
                </th>
                <th className="px-6 py-3 text-center font-medium text-foreground">
                  Starter
                </th>
                <th className="px-6 py-3 text-center font-medium text-foreground">
                  Pro
                </th>
                <th className="px-6 py-3 text-center font-medium text-foreground">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, i) => (
                <tr
                  key={feature.name}
                  className={i < comparisonFeatures.length - 1 ? "border-b border-border" : ""}
                >
                  <td className="px-6 py-3 font-medium text-foreground">
                    {feature.name}
                  </td>
                  {(["starter", "pro", "enterprise"] as const).map((tier) => (
                    <td key={tier} className="px-6 py-3 text-center">
                      {typeof feature[tier] === "boolean" ? (
                        feature[tier] ? (
                          <Check className="mx-auto size-4 text-green-600" />
                        ) : (
                          <X className="mx-auto size-4 text-muted-foreground/40" />
                        )
                      ) : (
                        <span className="text-foreground">{feature[tier]}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* All Products Included */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground">
            All 15 products included
          </h2>
          <p className="mt-2 text-muted-foreground">
            Every plan gives you access to our full suite of micro-SaaS tools.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center gap-2 rounded-xl border border-border p-4 text-center"
            >
              <span className="text-2xl">{product.icon}</span>
              <span className="text-sm font-medium text-foreground">
                {product.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
          Frequently asked questions
        </h2>
        <Accordion>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={String(i)}>
              <AccordionTrigger className="text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30 px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <Zap className="mx-auto mb-4 size-8 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">
            Start your free trial today
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            14 days free. No credit card required. Cancel anytime.
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

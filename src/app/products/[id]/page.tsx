import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/products";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import {
  Check,
  ArrowRight,
  Lightbulb,
  Globe,
  Webhook,
  Code2,
  MousePointerClick,
  Zap,
  Users,
  Target,
  Sparkles,
  LayoutGrid,
} from "lucide-react";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} - ${product.tagline} | microooo`,
    description: product.description,
  };
}

const useCaseIcons = [Target, Users, Sparkles, Lightbulb, LayoutGrid, Zap];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:py-40">
          <div className="flex flex-col items-center text-center">
            <Badge variant="outline" className="mb-6 text-xs uppercase tracking-wider">
              Product
            </Badge>

            {product.logo ? (
              <img src={product.logo} alt={product.name} className="mb-8 h-24 w-24 rounded-2xl" />
            ) : (
              <div className={cn("mb-8 flex h-24 w-24 items-center justify-center rounded-2xl text-5xl", product.bgColor)}>
                {product.icon}
              </div>
            )}

            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>

            <p
              className={cn(
                "mt-4 text-xl font-medium sm:text-2xl",
                product.color
              )}
            >
              {product.tagline}
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {product.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={product.appUrl}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 px-8 text-base gap-2"
                )}
              >
                Get Started Free
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/pricing"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 px-8 text-base"
                )}
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURES ========== */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Everything you need
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              {product.name} comes packed with powerful features out of the box.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {product.features.slice(0, 8).map((feature, index) => (
              <Card key={index} className="border border-zinc-200 dark:border-zinc-800">
                <CardContent className="flex items-start gap-4">
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                      product.bgColor
                    )}
                  >
                    <Check className={cn("size-4", product.color)} />
                  </div>
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {feature}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== USE CASES ========== */}
      <section className="border-b bg-zinc-50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Built for teams like yours
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              See how different teams use {product.name} to get results.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.useCases.slice(0, 6).map((useCase, index) => {
              const IconComponent = useCaseIcons[index % useCaseIcons.length];
              return (
                <Card
                  key={index}
                  className="border border-zinc-200 dark:border-zinc-800"
                >
                  <CardHeader>
                    <div
                      className={cn(
                        "mb-2 flex h-10 w-10 items-center justify-center rounded-xl",
                        product.bgColor
                      )}
                    >
                      <IconComponent className={cn("size-5", product.color)} />
                    </div>
                    <CardTitle className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      {useCase}
                    </CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Get up and running in minutes, not days.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {product.howItWorks.slice(0, 4).map((step, index) => {
              const parts = step.split(" — ");
              const title = parts[0];
              const desc = parts[1] || "";
              return (
                <div key={index} className="relative flex flex-col items-center text-center px-4">
                  {/* Connecting line */}
                  {index < product.howItWorks.slice(0, 4).length - 1 && (
                    <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-zinc-200 dark:bg-zinc-700 lg:block" />
                  )}

                  {/* Step number */}
                  <div
                    className={cn(
                      "relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border-2 text-2xl font-bold",
                      product.bgColor,
                      product.color,
                      "border-current"
                    )}
                  >
                    {index + 1}
                  </div>

                  <h3 className="mt-6 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    {title}
                  </h3>
                  {desc && (
                    <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                      {desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== INTEGRATIONS / TECHNICAL ========== */}
      <section className="border-b bg-zinc-50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Works everywhere
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Integrate {product.name} into your existing workflow with ease.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "REST API", icon: Code2, desc: "Full programmatic access" },
              { label: "Webhooks", icon: Webhook, desc: "Real-time event notifications" },
              { label: "Script Tag", icon: Globe, desc: "One-line embed on any site" },
              { label: "No Code", icon: MousePointerClick, desc: "Visual builder included" },
            ].map((item) => (
              <Card
                key={item.label}
                className="border border-zinc-200 dark:border-zinc-800"
              >
                <CardContent className="flex flex-col items-center text-center gap-3">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl",
                      product.bgColor
                    )}
                  >
                    <item.icon className={cn("size-6", product.color)} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      {item.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="mt-16" />

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {["REST API", "Webhooks", "Script Tag", "No Code"].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs px-3 py-1">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="flex flex-col items-center text-center">
            {product.logo ? (
              <img src={product.logo} alt={product.name} className="mb-6 h-16 w-16 rounded-2xl" />
            ) : (
              <div className={cn("mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl", product.bgColor)}>
                {product.icon}
              </div>
            )}

            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Ready to try {product.name}?
            </h2>

            <p className="mt-4 max-w-lg text-lg text-zinc-600 dark:text-zinc-400">
              Join thousands of teams already using {product.name}. Get started
              for free — no credit card required.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={product.appUrl}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 px-8 text-base gap-2"
                )}
              >
                Start for Free
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/products"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 px-8 text-base"
                )}
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

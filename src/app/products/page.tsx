import Link from "next/link";
import { visibleProducts } from "@/lib/products";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "All Products | microooo",
  description:
    "Explore 15 micro-SaaS products built to solve real problems. From group greeting cards to uptime badges, find the perfect tool for your workflow.",
};

function ProductCard({
  product,
}: {
  product: (typeof visibleProducts)[number];
}) {
  return (
    <Link href={product.appUrl} className="group block">
      <Card className="h-full border border-zinc-200 transition-colors group-hover:border-zinc-400 dark:border-zinc-800 dark:group-hover:border-zinc-600">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-xl text-2xl",
                product.bgColor
              )}
            >
              {product.icon}
            </div>
            <ArrowRight className="size-4 text-zinc-400 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <CardTitle className="mt-3 text-base font-semibold text-zinc-900 dark:text-zinc-50">
            {product.name}
          </CardTitle>
          <CardDescription className="text-sm text-zinc-500 dark:text-zinc-400">
            {product.tagline}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
            {product.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {product.features.slice(0, 3).map((feature, i) => (
              <Badge key={i} variant="secondary" className="text-[10px]">
                {feature.length > 30
                  ? feature.slice(0, 28) + "..."
                  : feature}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Header */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="flex flex-col items-center text-center">
            <Badge variant="outline" className="mb-4 text-xs uppercase tracking-wider">
              {visibleProducts.length} Products
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Everything we build
            </h1>
            <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
              Small tools that solve real problems. Each product is designed to
              do one thing exceptionally well.
            </p>
          </div>
        </div>
      </section>

      {/* Products Category */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Products
            </h2>
            <Badge variant="secondary" className="text-xs">
              {visibleProducts.length}
            </Badge>
          </div>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Full-featured tools for teams and businesses.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Can&apos;t find what you need?
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            We&apos;re always building new tools. Let us know what you&apos;d love to see.
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 px-6 text-sm"
              )}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

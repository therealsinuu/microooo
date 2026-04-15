import Link from "next/link";
import { visibleProducts, products } from "@/lib/products";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Pricing | microooo",
  description:
    "Each microooo product has its own independent pricing. Visit any product to see plans, free tiers, and trial options.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero */}
      <section className="px-6 pt-24 pb-16 text-center">
        <div className="mx-auto max-w-3xl">
          <Badge variant="secondary" className="mb-4">
            Pricing
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Each product, priced independently
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Every product has its own plans and pricing. No bundles, no
            lock-in. Visit any product to see its pricing and start a free
            trial.
          </p>
        </div>
      </section>

      {/* Product Pricing Links */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <a
              key={product.id}
              href={product.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="h-full border border-border transition-colors group-hover:border-foreground/30">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${product.bgColor}`}
                    >
                      {product.icon}
                    </div>
                    <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <CardTitle className="mt-3 text-base font-semibold">
                    {product.name}
                  </CardTitle>
                  <CardDescription>{product.tagline}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Visit {product.name} to see plans, pricing, and start
                    your free trial.
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30 px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground">
            Questions about pricing?
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Each product has its own support team. Visit any product site to
            get in touch, or reach out to us directly.
          </p>
          <Button
            size="lg"
            className="mt-6"
            render={<Link href="/products" />}
          >
            Browse All Products
          </Button>
        </div>
      </section>
    </div>
  );
}

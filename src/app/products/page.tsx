import Link from "next/link";
import { visibleProducts } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "All Products | microooo",
  description:
    "Explore standalone micro-SaaS products built to solve real problems. From group greeting cards to uptime badges, find the perfect tool for your workflow.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-paper px-4 pt-24 pb-20 md:pt-32">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label-mono mb-7 text-accent">
              {visibleProducts.length} products · all standalone
            </p>
            <h1
              className="font-medium leading-[0.95] tracking-[-0.025em]"
              style={{ fontSize: "clamp(48px, 8vw, 104px)" }}
            >
              Everything <span className="font-serif-italic text-foreground/80">we</span>
              <br />
              build, in one place.
            </h1>
          </div>
          <aside className="border-l border-border pl-6 md:col-span-5 md:pl-10">
            <p className="label-mono mb-4 text-muted-foreground">The catalog</p>
            <p className="font-serif-italic text-xl leading-snug text-foreground/85 md:text-2xl">
              Small tools that solve real problems.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Each product is designed to do one thing exceptionally well.
              Browse the index below — every entry has its own site, login,
              and pricing.
            </p>
          </aside>
        </div>
      </section>

      {/* Products index */}
      <section className="border-b border-border px-4 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
              <span className="font-serif-italic text-foreground/80">The</span> index
            </h2>
            <p className="label-mono text-muted-foreground">
              {visibleProducts.length} entries
            </p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {visibleProducts.map((product, i) => (
              <a
                key={product.id}
                href={product.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-12 items-start gap-4 py-8 transition-colors hover:bg-secondary/40"
              >
                <span className="col-span-12 font-serif-italic text-2xl text-muted-foreground md:col-span-1 md:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-12 flex items-center gap-3 md:col-span-3">
                  {product.logo ? (
                    <img
                      src={product.logo}
                      alt={product.name}
                      className="size-11 rounded-lg ring-1 ring-border"
                    />
                  ) : (
                    <div className={`flex size-11 items-center justify-center rounded-lg text-2xl ring-1 ring-border ${product.bgColor}`}>
                      {product.icon}
                    </div>
                  )}
                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                    {product.name}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <p className="text-sm font-medium text-foreground md:text-base">
                    {product.tagline}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </div>
                <ArrowUpRight className="col-span-12 ml-auto size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground md:col-span-1 md:mt-2" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="label-mono mb-6 text-accent">Don&apos;t see it?</p>
          <h2
            className="font-medium leading-[0.95] tracking-[-0.025em]"
            style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}
          >
            Can&apos;t find{" "}
            <span className="font-serif-italic text-foreground/80">what you need?</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We&apos;re always building new tools. Let us know what you&apos;d
            love to see next.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="mt-10 h-11 rounded-full px-5 text-sm"
            render={<Link href="/" />}
          >
            Back to home
          </Button>
        </div>
      </section>
    </>
  );
}

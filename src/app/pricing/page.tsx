import Link from "next/link";
import { visibleProducts } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Pricing | microooo",
  description:
    "Each microooo product has its own independent pricing. Visit any product to see plans, free tiers, and trial options.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-paper px-4 pt-24 pb-20 md:pt-32">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label-mono mb-7 text-accent">Pricing</p>
            <h1
              className="font-medium leading-[0.95] tracking-[-0.025em]"
              style={{ fontSize: "clamp(48px, 8vw, 104px)" }}
            >
              Each product,
              <br />
              <span className="font-serif-italic text-foreground/80">priced independently.</span>
            </h1>
          </div>
          <aside className="border-l border-border pl-6 md:col-span-5 md:pl-10">
            <p className="label-mono mb-4 text-muted-foreground">The principle</p>
            <p className="font-serif-italic text-xl leading-snug text-foreground/85 md:text-2xl">
              No bundles. No lock‑in. No upsell traps.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Every product has its own plans and pricing. Visit any product
              to see its pricing and start a free trial.
            </p>
          </aside>
        </div>
      </section>

      {/* Product index */}
      <section className="border-b border-border px-4 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
              <span className="font-serif-italic text-foreground/80">All</span> products
            </h2>
            <p className="label-mono text-muted-foreground">
              Index · {visibleProducts.length} entries
            </p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {visibleProducts.map((p, i) => (
              <a
                key={p.id}
                href={p.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-12 items-center gap-4 py-7 transition-colors hover:bg-secondary/40"
              >
                <span className="col-span-12 font-serif-italic text-2xl text-muted-foreground md:col-span-1 md:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-12 flex items-center gap-3 md:col-span-3">
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="size-9 rounded-lg ring-1 ring-border"
                    />
                  ) : (
                    <span className={`${p.bgColor} flex size-9 items-center justify-center rounded-lg text-lg ring-1 ring-border`}>
                      {p.icon}
                    </span>
                  )}
                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                    {p.name}
                  </h3>
                </div>
                <p className="col-span-12 text-sm text-muted-foreground md:col-span-7 md:text-base">
                  {p.tagline}
                </p>
                <ArrowUpRight className="col-span-12 ml-auto size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground md:col-span-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="label-mono mb-6 text-accent">Need a hand?</p>
          <h2
            className="font-medium leading-[0.95] tracking-[-0.025em]"
            style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}
          >
            Questions{" "}
            <span className="font-serif-italic text-foreground/80">about pricing?</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Each product has its own support team. Visit any product site to
            get in touch, or reach out to us directly.
          </p>
          <Button
            size="lg"
            className="mt-10 h-11 rounded-full px-5 text-sm"
            render={<Link href="/products" />}
          >
            Browse all products
          </Button>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { visibleProducts } from "@/lib/products";

const companySections = [
  {
    title: "Products",
    links: visibleProducts.map((p) => ({
      label: p.name,
      href: p.appUrl,
      external: true,
    })),
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Journal", href: "#blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-5">
            <Link href="/" className="flex items-baseline gap-1.5 text-base">
              <span className="font-medium tracking-tight">microooo</span>
              <span className="font-serif-italic text-muted-foreground">— a small studio</span>
            </Link>
            <p className="mt-5 max-w-sm font-serif-italic text-lg leading-snug text-foreground/80">
              A collection of standalone micro‑SaaS products. Built with care
              by an indie maker who believes software should be calm, focused,
              and priced fairly.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              — Sinan, est. 2024
            </p>
          </div>

          {/* Link sections */}
          <div className="col-span-2 grid grid-cols-3 gap-8 md:col-span-7">
            {companySections.map((section) => (
              <div key={section.title}>
                <h4 className="label-mono mb-5 text-accent">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-7 text-sm text-muted-foreground md:flex-row md:items-center">
          <p>
            &copy; {new Date().getFullYear()} microooo.{" "}
            <span className="font-serif-italic">All rights reserved.</span>
          </p>
          <p className="font-serif-italic">
            Made for makers, founders & growing teams.
          </p>
        </div>
      </div>
    </footer>
  );
}

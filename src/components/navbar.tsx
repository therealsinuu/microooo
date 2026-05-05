import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "#blog" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-baseline gap-1.5 text-base">
            <span className="font-medium tracking-tight">microooo</span>
            <span className="font-serif-italic text-muted-foreground">— a small studio</span>
          </Link>
          <div className="hidden items-center gap-7 text-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
            render={<a href="https://groupcheers.microooo.com/login" />}
          >
            Sign in
          </Button>
          <Button
            size="sm"
            className="rounded-full"
            render={<a href="https://groupcheers.microooo.com/signup" />}
          >
            Get started
          </Button>
        </div>
      </div>
    </nav>
  );
}

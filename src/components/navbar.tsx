import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "#blog" },
];

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-lg">microooo</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" render={<a href="https://groupcheers.microooo.com/login" />}>
            Sign In
          </Button>
          <Button size="sm" render={<a href="https://groupcheers.microooo.com/signup" />}>
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}

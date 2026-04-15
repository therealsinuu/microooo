"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { products, productCategories } from "@/lib/products";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
    <div className="w-full bg-primary text-primary-foreground">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-center gap-2 px-4 sm:px-6 lg:px-8 text-sm">
        <span className="font-medium">🚀 15 micro-SaaS tools. One subscription. Start free today.</span>
        <a
          href="https://groupcheers.microooo.com/signup"
          className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity"
        >
          Get started →
        </a>
      </div>
    </div>
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">microooo</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Products Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent className="w-[600px]">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    {/* Products column */}
                    <div>
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Products
                      </h4>
                      <ul className="space-y-0.5">
                        {productCategories.products.map((product) => (
                          <li key={product.id}>
                            <NavigationMenuLink
                              render={
                                <a href={product.appUrl} />
                              }
                            >
                              <span className="text-base">{product.icon}</span>
                              <div>
                                <div className="text-sm font-medium">
                                  {product.name}
                                </div>
                                <div className="text-xs text-muted-foreground line-clamp-1">
                                  {product.tagline}
                                </div>
                              </div>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Micro SaaS column */}
                    <div>
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Micro SaaS
                      </h4>
                      <ul className="space-y-0.5">
                        {productCategories.microsaas.map((product) => (
                          <li key={product.id}>
                            <NavigationMenuLink
                              render={
                                <a href={product.appUrl} />
                              }
                            >
                              <span className="text-base">{product.icon}</span>
                              <div>
                                <div className="text-sm font-medium">
                                  {product.name}
                                </div>
                                <div className="text-xs text-muted-foreground line-clamp-1">
                                  {product.tagline}
                                </div>
                              </div>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Pricing */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<Link href="/pricing" />}
                  className="h-9 px-2.5 py-1.5 text-sm font-medium"
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<Link href="/about" />}
                  className="h-9 px-2.5 py-1.5 text-sm font-medium"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Blog */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<Link href="#blog" />}
                  className="h-9 px-2.5 py-1.5 text-sm font-medium"
                >
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Button render={<a href="https://groupcheers.microooo.com/signup" />}>
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" />}
            >
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <span className="text-xl font-bold tracking-tight">
                    microooo
                  </span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-6 px-4 pb-8">
                {/* Products section */}
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Products
                  </h4>
                  <ul className="space-y-1">
                    {productCategories.products.map((product) => (
                      <li key={product.id}>
                        <SheetClose
                          render={
                            <a
                              href={product.appUrl}
                              className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted"
                            />
                          }
                        >
                          <span>{product.icon}</span>
                          <span>{product.name}</span>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Micro SaaS section */}
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Micro SaaS
                  </h4>
                  <ul className="space-y-1">
                    {productCategories.microsaas.map((product) => (
                      <li key={product.id}>
                        <SheetClose
                          render={
                            <a
                              href={product.appUrl}
                              className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted"
                            />
                          }
                        >
                          <span>{product.icon}</span>
                          <span>{product.name}</span>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Other links */}
                <div className="border-t pt-4">
                  <ul className="space-y-1">
                    <li>
                      <SheetClose
                        render={
                          <Link
                            href="/pricing"
                            className="block rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted"
                          />
                        }
                      >
                        Pricing
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose
                        render={
                          <Link
                            href="/about"
                            className="block rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted"
                          />
                        }
                      >
                        About
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose
                        render={
                          <Link
                            href="#blog"
                            className="block rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted"
                          />
                        }
                      >
                        Blog
                      </SheetClose>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="border-t pt-4">
                  <SheetClose
                    render={
                      <a href="https://groupcheers.microooo.com/signup" />
                    }
                  >
                    <Button className="w-full">Get Started</Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, MapPin, Menu, Moon, Pin, Star, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./theme-provider";

const links = [
  { name: "Discover", path: "/discover", icon: Compass },
  { name: "Review", path: "/review", icon: Star },
  { name: "Venues", path: "/venues", icon: MapPin },
];

function isActivePath(pathname: string, path: string) {
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [collapsed, setCollapsed] = useState(false);
  const [pinned, setPinned] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-base-100 flex min-h-dvh">
      <header className="bg-base-100 border-base-200 fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b px-4 md:hidden">
        <Link href="/" className="text-primary font-medium">
          USTFood
        </Link>
        <button
          type="button"
          className="hover:bg-base-200 rounded-lg p-2"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      <aside
        className={`${collapsed ? "md:w-16" : "md:w-52"} ${
          mobileOpen ? "flex" : "hidden md:flex"
        } bg-neutral border-base-200 fixed z-40 h-dvh w-full flex-col border-r md:sticky md:top-0`}
      >
        <div className="flex h-full flex-col justify-between px-2 py-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center justify-center gap-2 px-2">
              <Image
                src="/logo.png"
                alt="USTFood"
                width={40}
                height={40}
                className="rounded-xl"
              />
              {(!collapsed || mobileOpen) && (
                <span className="text-primary text-xl font-medium">USTFood</span>
              )}
            </Link>
            <nav className="space-y-1">
              {links.map((link) => {
                const Icon = link.icon;
                const active = isActivePath(pathname, link.path);
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
                      active
                        ? "bg-primary text-primary-content"
                        : "text-base-content/80 hover:bg-base-200"
                    }`}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    {(!collapsed || mobileOpen) && <span>{link.name}</span>}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="grid grid-cols-2 gap-2 px-1">
            <button
              type="button"
              onClick={toggleTheme}
              className="hover:bg-base-200 flex h-10 items-center justify-center rounded-lg"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
            <button
              type="button"
              className="hover:bg-base-200 hidden h-10 items-center justify-center rounded-lg md:flex"
              aria-label={pinned ? "Unpin menu" : "Pin menu"}
              onClick={() => {
                const nextPinned = !pinned;
                setPinned(nextPinned);
                setCollapsed(!nextPinned);
              }}
            >
              <Pin className={`h-5 w-5 ${pinned ? "" : "rotate-45"}`} />
            </button>
          </div>
        </div>
      </aside>

      <main className="min-w-0 grow pt-16 md:pt-0">{children}</main>
    </div>
  );
}

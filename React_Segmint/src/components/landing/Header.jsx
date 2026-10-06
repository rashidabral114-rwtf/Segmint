import React, { useState } from "react";
import { navLinks } from "../../data/landingData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-surface-container-high">
      <div className="h-16 w-full max-w-7xl mx-auto px-margin flex items-center justify-between">
        {/* Brand Logo & Version */}
        <div className="flex items-center gap-space-md">
          <a
            className="flex items-center gap-space-sm"
            data-path="product"
            href="#"
          >
            <img
              alt="Segmint Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/AEtjO1Vi0D6vgD5sMZRM5pcWfm9TPtEYxFjbIW1f293AJ5MFzUBFiVrN4O6njpLOxwxZHrIk5BZ9X5QPM5dbByBV3VqUme9UMMtEP2tXW8tSYQt9D3d0m6R3c9VTi9fvEQNAZObtzmj4z56k5MI7LTD39BJR8xNKzFD42hiN3ZWbB2CNawsSNXfH-0GSYiiuWd2pP8x2aaPnHLi90U9LElP3W_gXz_J9FyXlR1RMvG3Z2HHWGZy59CfrAt9i9A"
            />
            <span className="font-headline-md text-headline-md tracking-tight text-on-surface">
              Segmint
            </span>
          </a>
          <span className="font-label-xs text-label-xs px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-semibold border border-outline-variant/30">
            v2.4
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-space-lg"
          data-active-classes="text-primary font-body-medium text-body-medium"
        >
          {navLinks.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              data-path={item.path}
              aria-current={idx === 0 ? "page" : undefined}
              className={
                idx === 0
                  ? "transition-colors text-primary font-body-medium text-body-medium"
                  : "font-body-medium text-body-medium text-on-surface-variant hover:text-on-surface transition-colors"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-space-md">
          <a
            className="hidden sm:inline-block font-body-medium text-body-medium text-on-surface-variant hover:text-on-surface px-space-sm py-2 transition-colors"
            data-path="login"
            href="#login"
          >
            Log in
          </a>
          <a
            className="inline-flex items-center justify-center font-body-medium text-body-medium px-4 py-2 rounded-lg bg-primary-container text-on-primary font-medium hover:bg-primary transition-colors shadow-sm"
            data-path="pricing"
            href="#pricing"
          >
            Get started
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-1">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="md:hidden p-1.5 text-on-surface-variant hover:text-on-surface"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-surface-container-high bg-surface px-margin py-4 flex flex-col gap-3 shadow-lg">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-body-medium text-on-surface-variant hover:text-primary py-1 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-surface-container-high flex items-center justify-between">
            <a
              href="#login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-body-medium text-on-surface-variant font-medium"
            >
              Log in
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

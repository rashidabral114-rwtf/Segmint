import React, { useState } from "react";
import { footerNav } from "../../data/landingData";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-high py-margin">
      <div className="w-full max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-gutter-lg mb-margin">
          {/* Brand Info & Newsletter */}
          <div className="md:col-span-2 flex flex-col gap-space-sm pr-space-xl">
            <div className="flex items-center gap-space-sm">
              <img
                alt="Segmint Logo"
                className="h-7 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1Vi0D6vgD5sMZRM5pcWfm9TPtEYxFjbIW1f293AJ5MFzUBFiVrN4O6njpLOxwxZHrIk5BZ9X5QPM5dbByBV3VqUme9UMMtEP2tXW8tSYQt9D3d0m6R3c9VTi9fvEQNAZObtzmj4z56k5MI7LTD39BJR8xNKzFD42hiN3ZWbB2CNawsSNXfH-0GSYiiuWd2pP8x2aaPnHLi90U9LElP3W_gXz_J9FyXlR1RMvG3Z2HHWGZy59CfrAt9i9A"
              />
              <span className="font-headline-md text-headline-md tracking-tight text-on-surface">
                Segmint
              </span>
            </div>
            <p className="font-body-medium text-body-medium text-on-surface-variant max-w-sm mt-space-xs">
              High-precision customer segmentation, cohort exploration, and
              statistical analysis built for data-driven engineering and product
              teams.
            </p>
            <form onSubmit={handleSubscribe} className="mt-space-md flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Subscribe to our product release telemetry
              </span>
              <div className="flex items-center gap-space-xs">
                <input
                  className="bg-surface-container-lowest text-on-surface border border-surface-container-highest px-3 py-2 rounded-lg text-body-base font-body-base placeholder:text-outline focus:outline-none focus:border-primary-container w-64"
                  placeholder="work@email.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  className="bg-surface-container-high text-on-surface hover:bg-surface-container-highest px-4 py-2 rounded-lg font-body-medium text-body-medium transition-colors"
                  type="submit"
                >
                  {subscribed ? "Subscribed!" : "Join"}
                </button>
              </div>
            </form>
          </div>

          {/* Nav Columns */}
          {Object.entries(footerNav).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-space-xs">
              <span className="font-label-xs text-label-xs text-outline uppercase tracking-wider mb-space-xs">
                {category}
              </span>
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body-medium text-body-medium text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-lg border-t border-surface-container flex flex-col md:flex-row items-center justify-between gap-space-md">
          <span className="font-label-sm text-label-sm text-outline">
            © 2025 Segmint Analytics, Inc. Engineered for absolute precision.
          </span>
          <div className="flex items-center gap-space-md">
            <a
              className="text-on-surface-variant hover:text-on-surface transition-colors"
              href="#"
              aria-label="Code repository"
            >
              <span className="material-symbols-outlined text-[20px]">
                code
              </span>
            </a>
            <a
              className="text-on-surface-variant hover:text-on-surface transition-colors"
              href="#"
              aria-label="API Terminal"
            >
              <span className="material-symbols-outlined text-[20px]">
                terminal
              </span>
            </a>
            <a
              className="text-on-surface-variant hover:text-on-surface transition-colors"
              href="#"
              aria-label="Share platform"
            >
              <span className="material-symbols-outlined text-[20px]">
                share
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

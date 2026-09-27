import React, { useEffect, useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Monogram from "../ui/Monogram";
import LensSwitcher from "../ui/LensSwitcher";
import ThemeToggle from "../ui/ThemeToggle";
import LocalTime from "../ui/LocalTime";
import { NAV_LINKS, SOCIALS } from "../../data/lenses";


/* react-scroll's <a> silently failed to resolve these targets, so every nav
   item was inert. Native scrolling needs no registry and no dependency; the
   sections carry scroll-margin so the sticky bar never covers a heading. */
const goTo = (id) => (e) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `#${id}`);
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // don't let the page scroll behind the open sheet
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className="backdrop-blur-md transition-colors duration-300"
        style={{
          background: lifted ? "color-mix(in srgb, var(--paper) 86%, transparent)" : "var(--paper)",
          borderBottom: `1px solid ${lifted ? "var(--hair)" : "transparent"}`,
        }}
      >
        <div className="relative mx-auto flex h-[68px] max-w-screen-xl items-center justify-between gap-4 px-5 lgl:px-8">
          {/* identity */}
          <a
            href="#home"
            onClick={goTo("home")}
            className="group flex cursor-pointer items-center gap-3"
          >
            <Monogram />
            <span className="hidden leading-tight sml:block">
              <span className="block font-display text-[15px] font-semibold tracking-tighter2">
                Muntazer Mehdi
              </span>
              <span className="tag block">Full-Stack Developer</span>
            </span>
          </a>

          {/* the switch, centred on wide screens */}
          <LensSwitcher
            group="desktop"
            className="hidden lgl:absolute lgl:left-1/2 lgl:flex lgl:-translate-x-1/2"
          />

          {/* right cluster */}
          <div className="flex items-center gap-2 mdl:gap-4">
            <nav className="hidden items-center gap-5 mdl:flex">
              {NAV_LINKS.map(({ id, title }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={goTo(id)}
                  className="cursor-pointer text-[13.5px] text-muted transition-colors duration-200 hover:text-accent"
                >
                  {title}
                </a>
              ))}
            </nav>

            <LocalTime />
            <ThemeToggle />

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-9 w-9 place-items-center rounded-full text-muted mdl:hidden"
              style={{ border: "1px solid var(--hair)" }}
            >
              <FiMenu className="text-[16px]" />
            </button>
          </div>
        </div>
      </div>

      {/* the switch gets its own row below the bar on narrow screens */}
      <div
        className="backdrop-blur-md lgl:hidden"
        style={{
          background: "color-mix(in srgb, var(--paper) 86%, transparent)",
          borderBottom: "1px solid var(--hair)",
        }}
      >
        <div className="scrollbar-hide mx-auto max-w-screen-xl overflow-x-auto px-5 py-2.5">
          <LensSwitcher group="mobile" className="w-max" />
        </div>
      </div>

      {/* mobile sheet */}
      {open && (
        <div className="fixed inset-0 z-[60] mdl:hidden">
          <div
            className="absolute inset-0 bg-black/45"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 flex h-full w-[82%] max-w-[340px] animate-rise flex-col bg-paper p-6"
            style={{ borderLeft: "1px solid var(--hair)" }}
          >
            <div className="flex items-start justify-between">
              <Monogram size={38} />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-9 w-9 place-items-center rounded-full text-muted"
                style={{ border: "1px solid var(--hair)" }}
              >
                <FiX />
              </button>
            </div>

            <nav className="mt-10 flex flex-col">
              {NAV_LINKS.map(({ id, title }, i) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => { setOpen(false); goTo(id)(e); }}
                  className="hair-b flex cursor-pointer items-baseline gap-4 py-4 font-display text-2xl font-semibold tracking-tighter2 hover:text-accent"
                >
                  <span className="font-mono text-[11.5px] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {title}
                </a>
              ))}
            </nav>

            <div className="mt-auto">
              <p className="tag mb-3">Elsewhere</p>
              <div className="flex gap-2">
                {[
                  { href: SOCIALS.github, icon: <FaGithub />, label: "GitHub" },
                  { href: SOCIALS.linkedin, icon: <FaLinkedinIn />, label: "LinkedIn" },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full text-muted hover:text-accent"
                    style={{ border: "1px solid var(--hair)" }}
                  >
                    {icon}
                  </a>
                ))}
                <a
                  href={SOCIALS.email}
                  className="flex h-10 items-center gap-1.5 rounded-full px-4 text-[13px] text-muted hover:text-accent"
                  style={{ border: "1px solid var(--hair)" }}
                >
                  Email <FiArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

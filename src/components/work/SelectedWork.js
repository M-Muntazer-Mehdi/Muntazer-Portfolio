import React, { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiX } from "react-icons/fi";

import { useApp } from "../../context/AppContext";
import { WORK } from "../../data/work";
import { LENSES, LENS_ORDER } from "../../data/lenses";

const ease = [0.22, 0.61, 0.36, 1];

/* Full Stack shows the flagships. The other lenses show genuine members of
   that discipline only. */
const forLens = (lens) =>
  lens === "fullstack"
    ? WORK.filter((i) => i.flagship)
    : WORK.filter((i) => i.lenses.includes(lens));

/* ------------------------------------------------------------------ frame */
/* A plate: image, a scrim that fuses it into the caption, two figures set on
   the scrim, and a measurement rail along the foot. Portrait plates for the
   phone posters so no device gets cropped. */
const Frame = ({ item, view, n, active, onOpen }) => {
  const portrait = item.coverShape === "portrait";

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease, delay: Math.min(n * 0.03, 0.2) }}
      className="plate group block w-full self-start text-left"
      aria-expanded={active}
    >
      <figure
        className="relative overflow-hidden"
        style={{
          border: `1px solid ${active ? "var(--accent)" : "var(--hair)"}`,
          background: "var(--surface-2)",
          aspectRatio: "16 / 10",
        }}
      >
        {item.cover ? (
          <img
            src={item.cover.src}
            alt=""
            loading="lazy"
            className={`h-full w-full transition-[filter,transform] duration-700 group-hover:scale-[1.015] ${
              portrait ? "object-contain" : "object-cover"
            }`}
            style={{ filter: active ? "none" : "saturate(0.8) contrast(1.02)" }}
          />
        ) : (
          <span className="block h-full w-full" style={{ background: "var(--surface-2)" }} />
        )}

        {/* scrim — carries the figures and fuses the plate into its caption */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(to top, var(--plate-scrim-a) 0%, var(--plate-scrim-b) 42%, transparent 100%)",
            opacity: active ? 1 : 0.94,
          }}
        />

        {/* two figures, set on the scrim */}
        {view.stats && (
          <div className="absolute inset-x-0 bottom-0 flex items-end gap-6 px-4 pb-3.5">
            {view.stats.map((st) => (
              <span key={st.k} className="block">
                <span
                  className="block font-display text-[1.32rem] font-semibold leading-none tracking-tight"
                  style={{ color: "var(--accent)" }}
                >
                  {st.v}
                </span>
                <span
                  className="mt-1 block font-mono text-[12.5px] uppercase leading-none tracking-[0.15em]"
                  style={{ color: "var(--plate-label)" }}
                >
                  {st.k}
                </span>
              </span>
            ))}
          </div>
        )}

        {/* measurement rail — the hero's instrument language, at plate scale */}
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 flex h-[5px] items-end">
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              className="flex-1"
              style={{
                height: i % 7 === 0 ? "5px" : "2px",
                background: "var(--plate-rail)",
                marginRight: "1px",
              }}
            />
          ))}
        </span>

        {item.status?.live && (
          <figcaption
            className="absolute right-0 top-0 flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-[12.5px] uppercase tracking-[0.16em]"
            style={{
              background: "var(--paper)",
              color: "var(--accent)",
              borderLeft: "1px solid var(--hair)",
              borderBottom: "1px solid var(--hair)",
            }}
          >
            <span className="h-1 w-1 rounded-full" style={{ background: "var(--accent)" }} />
            Live
          </figcaption>
        )}
      </figure>

      {/* caption — number, name, hook */}
      <div className="flex gap-3 pt-3.5">
        <span
          className="shrink-0 pt-[3px] font-mono text-[12.5px] tabular-nums tracking-[0.1em] transition-colors"
          style={{ color: active ? "var(--accent)" : "var(--faint)" }}
        >
          {String(n + 1).padStart(2, "0")}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex items-start justify-between gap-3">
            <span className="block font-display text-[1.02rem] font-semibold leading-tight tracking-tight">
              {view.name}
            </span>
            <FiArrowUpRight
              aria-hidden="true"
              className="mt-[3px] shrink-0 transition-transform duration-300 group-hover:translate-x-px group-hover:-translate-y-px"
              style={{ color: active ? "var(--accent)" : "var(--faint)" }}
            />
          </span>
          <span className="mt-1 block text-[14px] leading-snug text-muted">{view.hook}</span>
        </span>
      </div>

      {/* the rule that draws in on hover */}
      <span
        aria-hidden="true"
        className="mt-3.5 block h-px origin-left transition-transform duration-500"
        style={{
          background: active ? "var(--accent)" : "var(--hair-hard)",
          transform: active ? "scaleX(1)" : "scaleX(var(--rule, 0.16))",
        }}
      />
    </motion.button>
  );
};

/* ------------------------------------------------------- expanded study */
const Study = ({ item, view, lens, onClose, notchLeft }) => {
  const [tab, setTab] = useState(0);
  const [group, setGroup] = useState(view.defaultGroup ?? 0);
  const groups = view.capabilityGroups;
  const steps = groups ? groups[group]?.items ?? [] : view.capabilities ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease }}
      data-study
      className="relative mt-3 scroll-mt-[88px]"
      style={{ gridColumn: "1 / -1", borderTop: "1px solid var(--accent)" }}
    >
      {/* notch — points back at the plate that opened this */}
      <span
        aria-hidden="true"
        className="absolute -top-[7px] h-3 w-3 rotate-45"
        style={{
          left: notchLeft,
          marginLeft: "-6px",
          background: "var(--paper)",
          borderTop: "1px solid var(--accent)",
          borderLeft: "1px solid var(--accent)",
        }}
      />
      <button
        type="button"
        onClick={onClose}
        className="absolute right-0 top-4 flex items-center gap-2 font-mono text-[12.5px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
      >
        Close <FiX />
      </button>

      <div className="grid gap-10 pt-11 lgl:grid-cols-12 lgl:gap-12">
        {/* left — the plate, nothing else. Sticks while the study scrolls past. */}
        <div className="lgl:sticky lgl:top-[92px] lgl:col-span-5 lgl:self-start">
          {view.cover && (
            <figure className="overflow-hidden" style={{ border: "1px solid var(--hair-hard)" }}>
              <img src={view.cover.src} alt={view.cover.alt} loading="lazy" className="block h-auto w-full" />
            </figure>
          )}
        </div>

        {/* right — identity, then the study */}
        <div className="lgl:col-span-7">
          <p className="tag">{view.kicker}</p>
          <h3 className="mt-3 font-display text-[clamp(1.8rem,3.6vw,2.6rem)] font-semibold leading-[1.02] tracking-tighter2">
            {view.name}
          </h3>
          <p className="mt-2.5 text-[14.5px] leading-relaxed">
            <span className="font-medium text-ink">{view.role}</span>
            <span className="text-faint"> · </span>
            <span className="text-muted">{view.client}</span>
          </p>

          <div className="mb-9 mt-5 flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
              style={{ border: `1px solid ${view.status.live ? "var(--accent)" : "var(--hair)"}` }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: view.status.live ? "var(--accent)" : "var(--faint)" }}
              />
              <span className="font-mono text-[12.5px] uppercase tracking-[0.16em]"
                    style={{ color: view.status.live ? "var(--accent)" : "var(--muted)" }}>
                {view.status.label}
              </span>
            </span>

            {view.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[12.5px] uppercase tracking-[0.16em] text-ink transition-colors hover:text-accent"
                 style={{ border: "1px solid var(--hair)" }}>
                {l.label} <FiArrowUpRight />
              </a>
            ))}
          </div>

          <div className="flex gap-6" style={{ borderBottom: "1px solid var(--hair)" }}>
            {["Overview", "What I built", "Stack"].map((t, i) => (
              <button key={t} type="button" onClick={() => setTab(i)}
                      className="relative pb-3 font-mono text-[12.5px] uppercase tracking-[0.16em] transition-colors"
                      style={{ color: tab === i ? "var(--accent)" : "var(--muted)" }}>
                {t}
                {tab === i && (
                  <motion.span layoutId="studytab" className="absolute inset-x-0 -bottom-px h-px"
                               style={{ background: "var(--accent)" }} />
                )}
              </button>
            ))}
          </div>

          <div className="pt-7">
            {tab === 0 && (
              <>
                {(Array.isArray(view.summary) ? view.summary : [view.summary]).map((p, i) => (
                  <p key={i} className="mb-4 max-w-[62ch] text-[14.5px] leading-[1.75] text-muted text-pretty last:mb-0">
                    {p}
                  </p>
                ))}
                {view.figures && (
                  <dl className="ledger mt-9 grid grid-cols-2 mdl:grid-cols-4"
                      style={{ borderTop: "1px solid var(--hair)" }}>
                    {view.figures.map((f) => (
                      <div key={f.label} className="py-5 pr-5">
                        <dt className="font-display text-[1.5rem] font-semibold leading-none tracking-tight text-accent">
                          {f.value}
                        </dt>
                        <dd className="tag mt-2 block">{f.label}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </>
            )}

            {tab === 1 && (
              <>
                {groups && (
                  <div className="mb-7 flex flex-wrap gap-x-5 gap-y-2">
                    {groups.map((g, i) => (
                      <button key={g.label} type="button" onClick={() => setGroup(i)}
                              className="font-mono text-[12.5px] uppercase tracking-[0.16em] transition-colors"
                              style={{ color: group === i ? "var(--accent)" : "var(--faint)" }}>
                        {g.label}
                      </button>
                    ))}
                  </div>
                )}
                <ol className="space-y-6">
                  {steps.map((s, i) => (
                    <li key={s.label} className="grid grid-cols-[2.2rem_1fr] gap-x-2">
                      <span className="pt-[3px] font-mono text-[12.5px] tabular-nums text-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="tag mb-1.5">{s.label}</p>
                        <p className="max-w-[62ch] text-[15px] leading-[1.7] text-muted text-pretty">{s.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </>
            )}

            {tab === 2 && (
              <>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 mdl:grid-cols-3">
                  {view.stack.map((t) => (
                    <li key={t} className="flex items-center gap-2.5 font-mono text-[13px] text-ink">
                      <span aria-hidden="true" className="h-px w-2.5 shrink-0" style={{ background: "var(--accent)" }} />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="tag mt-8">Shape</p>
                <p className="mt-2 font-mono text-[13px] leading-relaxed text-muted">
                  {view.layers.join("  →  ")}
                </p>
                {view.notes && (
                  <>
                    <p className="tag mt-7">{view.notes.label}</p>
                    <p className="mt-2 font-mono text-[13px] leading-relaxed text-muted">{view.notes.value}</p>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ------------------------------------------------------------- section */
/* Column count has to be known in JS so the study can be placed at the end of
   the clicked card's row. Mirrors sml:grid-cols-2 / lgl:grid-cols-3. */
const GAP = 24;
const useColumns = () => {
  const read = () =>
    typeof window === "undefined" ? 3
      : window.matchMedia("(min-width: 1024px)").matches ? 3
      : window.matchMedia("(min-width: 500px)").matches ? 2
      : 1;
  const [cols, setCols] = useState(read);
  React.useEffect(() => {
    const on = () => setCols(read());
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return cols;
};

const SelectedWork = () => {
  const { lens, setLens } = useApp();
  const items = useMemo(() => forLens(lens), [lens]);
  const cols = useColumns();

  /* The first plate is open on arrival, so the interaction explains itself. */
  const [openId, setOpenId] = useState(() => items[0]?.id ?? null);
  const gridRef = useRef(null);

  const openIdx = items.findIndex((i) => i.id === openId);
  const open = openIdx >= 0 ? items[openIdx] : null;
  const openView = open ? { ...open, ...(open.lensOverrides?.[lens] || {}) } : null;

  /* Centre of the open card's column, accounting for the grid gap. */
  const col = openIdx >= 0 ? openIdx % cols : 0;
  const notchLeft =
    cols === 1
      ? "32px"
      : `calc((100% - ${(cols - 1) * GAP}px) / ${cols} * ${col + 0.5} + ${col * GAP}px)`;

  const select = (id) => {
    setOpenId((cur) => (cur === id ? null : id));
    window.requestAnimationFrame(() => {
      const el = gridRef.current?.querySelector("[data-study]");
      el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  };

  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-screen-xl px-5 lgl:px-8">
        {/* what I do */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease }}
          className="grid gap-8 pb-10 pt-20 lgl:grid-cols-12 lgl:pt-28"
        >
          <div className="lgl:col-span-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-[12.5px] text-accent">/</span>
              <span className="tag">What I do</span>
            </div>
            <h2 className="font-display text-[clamp(2rem,4.6vw,3.2rem)] font-semibold leading-[0.98] tracking-tighter2">
              End to end, to production.
            </h2>
          </div>
          <div className="lgl:col-span-7 lgl:pt-2">
            <p className="max-w-[58ch] text-[15px] leading-[1.75] text-muted text-pretty">
              I design and ship software end to end — from requirements and architecture
              to production. Web, mobile, AI systems and the infrastructure around them.
            </p>
            <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.75] text-ink text-pretty">
              I care about the parts that survive launch: clear boundaries, tested
              decisions, and software that actually works.
            </p>
          </div>
        </motion.div>

        {/* discipline filter */}
        <nav
          aria-label="Filter work by discipline"
          className="scrollbar-hide -mx-5 flex gap-7 overflow-x-auto px-5 lgl:mx-0 lgl:px-0"
          style={{ borderTop: "1px solid var(--hair)", borderBottom: "1px solid var(--hair)" }}
        >
          {LENS_ORDER.map((id) => {
            const on = id === lens;
            const count = forLens(id).length;
            return (
              <button
                key={id}
                type="button"
                onClick={() => { setLens(id); setOpenId(forLens(id)[0]?.id ?? null); }}
                className="relative shrink-0 py-5 font-mono text-[12.5px] uppercase tracking-[0.16em] transition-colors"
                style={{ color: on ? "var(--accent)" : "var(--muted)" }}
              >
                {LENSES[id].tab}
                <span className="ml-2 text-[12.5px] tabular-nums" style={{ color: "var(--faint)" }}>
                  {String(count).padStart(2, "0")}
                </span>
                {on && (
                  <motion.span layoutId="lensrule" className="absolute inset-x-0 -bottom-px h-px"
                               style={{ background: "var(--accent)" }} />
                )}
              </button>
            );
          })}
        </nav>

        {/* contact sheet */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-x-6 gap-y-9 pt-10 sml:grid-cols-2 lgl:grid-cols-3"
        >
          {items.map((item, i) => {
            const view = { ...item, ...(item.lensOverrides?.[lens] || {}) };
            const sameRow = openIdx >= 0 && Math.floor(openIdx / cols) === Math.floor(i / cols);
            const endOfRow = i % cols === cols - 1 || i === items.length - 1;

            return (
              <React.Fragment key={`${lens}-${item.id}`}>
                <Frame
                  item={item}
                  view={view}
                  n={i}
                  active={openId === item.id}
                  onOpen={() => select(item.id)}
                />
                {/* framer-motion 8.4.2 never resolves an AnimatePresence exit
                    here, which strands the panel in the previous row. Rendered
                    conditionally with an enter-only transition instead. */}
                {sameRow && endOfRow && open && (
                  <Study
                    key={`${lens}-${open.id}`}
                    item={open}
                    view={openView}
                    lens={lens}
                    notchLeft={notchLeft}
                    onClose={() => setOpenId(null)}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <p className="pb-4 pt-14 text-[14.5px] text-muted">
          Selected from 20 products shipped across 2025 and 2026.
        </p>
      </div>
    </section>
  );
};

export default SelectedWork;

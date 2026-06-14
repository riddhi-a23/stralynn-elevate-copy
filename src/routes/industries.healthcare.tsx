import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, HeartPulse, Activity, Pill, Microscope, Stethoscope, ShieldCheck, CheckCircle2 } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/industries/healthcare")({
  head: () => ({
    meta: [
      { title: "Healthcare — Stralynn" },
      { name: "description", content: "We help payers, providers and life sciences leaders deliver better outcomes with AI-led operating models." },
    ],
  }),
  component: Healthcare,
});

const offerings = [
  { icon: HeartPulse, t: "Care delivery", d: "Reimagine clinical workflows, capacity planning and patient journeys." },
  { icon: ShieldCheck, t: "Payers", d: "Modernize claims, utilization management and member experience." },
  { icon: Microscope, t: "Life sciences", d: "Accelerate R&D, commercial analytics and medical affairs with AI." },
  { icon: Pill, t: "Pharmacy & access", d: "Optimize specialty pharmacy, PBM and patient access programs." },
  { icon: Stethoscope, t: "Provider operations", d: "Revenue cycle, workforce and digital front door transformation." },
  { icon: Activity, t: "Population health", d: "Data foundations and risk-stratified care across the continuum." },
];

const proof = [
  { kpi: "31%", l: "Average reduction in claims processing time" },
  { kpi: "$120M", l: "Annualized savings unlocked for a top-10 US payer" },
  { kpi: "2.4×", l: "Faster time-to-market for AI clinical pilots" },
];

function Healthcare() {
  return (
    <>
      <PageHeader
        eyebrow="Industries — Healthcare"
        title={<>Better outcomes, <span className="font-editorial italic">engineered.</span></>}
        description="Healthcare doesn't need more pilots. It needs operating models that scale. We bring clinicians, engineers and strategists to the same room — and ship."
        image="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80"
      />

      {/* IMAGE STRIP */}
      <section className="py-20">
        <div className="container-x">
          <Reveal>
            <div className="rounded-3xl overflow-hidden aspect-[16/7] relative shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
                alt="Healthcare team"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 text-cream max-w-2xl">
                <div className="text-xs uppercase tracking-[0.25em] text-cyan-glow mb-3">In focus</div>
                <h2 className="font-display text-2xl md:text-4xl font-semibold leading-tight">
                  From bedside to boardroom — we work where decisions actually get made.
                </h2>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal><div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">What we do for healthcare</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">Six places we create disproportionate value.</h2>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((o) => (
              <StaggerItem key={o.t}>
                <div className="h-full p-7 rounded-2xl border border-border bg-card hover-lift">
                  <div className="h-12 w-12 rounded-xl bg-secondary grid place-items-center mb-5">
                    <o.icon className="h-5 w-5 text-navy" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{o.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{o.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-24 md:py-32 bg-ink text-cream">
        <div className="container-x">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-cyan-glow mb-3">Proof</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold max-w-2xl leading-tight">Outcomes our healthcare clients are quoting.</h2>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-3 gap-px bg-cream/10 rounded-2xl overflow-hidden">
            {proof.map((p) => (
              <StaggerItem key={p.l} className="bg-ink p-10">
                <div className="font-display text-5xl md:text-6xl font-semibold gradient-accent-text">{p.kpi}</div>
                <div className="mt-3 text-cream/70">{p.l}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1400&q=80"
              alt="Case study"
              className="rounded-3xl aspect-[4/5] object-cover shadow-elegant w-full"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Featured engagement</div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight">A national payer cut prior-auth turnaround from 9 days to 38 minutes.</h3>
              <ul className="mt-8 space-y-3">
                {[
                  "AI triage on 4.2M annual auth requests",
                  "Clinician-in-the-loop review for edge cases",
                  "26-point member NPS improvement",
                  "Audited, fully explainable decision trail",
                ].map((l) => (
                  <li key={l} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-azure shrink-0 mt-0.5" /><span>{l}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full gradient-hero text-cream px-6 py-3.5 font-semibold">
                Talk to our healthcare team <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

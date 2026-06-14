import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Brain, Database, Bot, Shield, Zap, GitBranch, CheckCircle2 } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/services/ai-digital-transformation")({
  head: () => ({
    meta: [
      { title: "AI Digital Transformation — Stralynn" },
      { name: "description", content: "Design, build and scale enterprise AI — from foundational data platforms to production-grade generative systems." },
    ],
  }),
  component: Page,
});

const capabilities = [
  { icon: Brain, title: "Enterprise AI strategy", desc: "Identify the value moments. Sequence the bets. Build the operating model to capture them." },
  { icon: Database, title: "Data & platform foundations", desc: "Lakehouse architectures, governance and the ML/feature plumbing modern AI demands." },
  { icon: Bot, title: "Generative product engineering", desc: "Production-grade copilots, agents and RAG systems — evaluated, observed and scaled." },
  { icon: Shield, title: "Responsible AI & governance", desc: "Risk, security and compliance frameworks engineered for regulated enterprises." },
  { icon: Zap, title: "Intelligent automation", desc: "Reimagine workflows end-to-end with human-in-the-loop and agentic patterns." },
  { icon: GitBranch, title: "AI talent & enablement", desc: "Embedded squads and academies to leave durable capability behind." },
];

const phases = [
  { n: "01", t: "Diagnose", d: "Two-week value sprint to map signals, surface bets and quantify the prize." },
  { n: "02", t: "Design", d: "Reference architecture, product blueprints and a 90-day execution plan." },
  { n: "03", t: "Build", d: "Joint squads ship the first production system in 8–12 weeks." },
  { n: "04", t: "Scale", d: "Industrialise: platform, governance, talent and the next wave of use cases." },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Professional Services"
        title={<>The AI transformation, <span className="font-editorial italic">delivered.</span></>}
        description="We design and build the AI systems that change how enterprises operate — pairing strategy with deeply technical execution. No theatre. No frameworks for their own sake."
        video="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_25fps.mp4"
      >
        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
            Start a diagnostic <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </PageHeader>

      {/* CAPABILITIES */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 mb-16">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Capabilities</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">A full-stack AI practice.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We bring strategists, applied scientists, platform engineers and change leaders to the same table — so the bet you make on Monday is in production by the quarter.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c) => (
              <StaggerItem key={c.title}>
                <div className="h-full p-7 rounded-2xl border border-border bg-card hover-lift">
                  <div className="h-12 w-12 rounded-xl bg-secondary grid place-items-center mb-5">
                    <c.icon className="h-5 w-5 text-navy" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PHASES */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">How we engage</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-2xl">A 90-day path from idea to production.</h2>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {phases.map((p) => (
              <StaggerItem key={p.n}>
                <div className="p-7 rounded-2xl bg-background border border-border h-full">
                  <div className="font-display text-5xl font-semibold gradient-accent-text">{p.n}</div>
                  <div className="mt-4 font-semibold text-lg">{p.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CASE */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80"
                alt="AI transformation"
                className="rounded-3xl aspect-[4/5] object-cover shadow-elegant w-full"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Case study</div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight">A global PE firm replaced 60% of its underwriting workflow with agents — in nine months.</h3>
                <ul className="mt-8 space-y-3">
                  {[
                    "RAG copilot on 12 years of deal memos",
                    "Agentic diligence pipelines with human review",
                    "$48M annualized productivity unlock",
                    "Zero data leakage incidents post-launch",
                  ].map((l) => (
                    <li key={l} className="flex items-start gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-azure shrink-0 mt-0.5" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 md:p-14 text-cream flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h3 className="font-display text-3xl md:text-4xl font-semibold max-w-xl">Have an AI thesis? Pressure-test it with us.</h3>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 font-semibold w-fit">
              Book a working session <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Search, FileSearch, Handshake, TrendingUp, ShieldCheck, Layers, CheckCircle2 } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/services/ma-advisory")({
  head: () => ({
    meta: [
      { title: "M&A Advisory — Stralynn" },
      { name: "description", content: "Diligence, integration and value capture across the deal lifecycle — engineered for compounding returns." },
      { property: "og:title", content: "M&A Advisory — Stralynn" },
      { property: "og:description", content: "From diligence to value capture, Stralynn helps sponsors and corporates win the deal and the integration." },
    ],
  }),
  component: Page,
});

const capabilities = [
  { icon: Search, title: "Commercial due diligence", desc: "Market, customer and competitive truth — synthesized into a thesis we can defend in front of an IC." },
  { icon: FileSearch, title: "Technology & data diligence", desc: "Codebase, architecture, talent and AI-readiness assessments for software-led targets." },
  { icon: Handshake, title: "Integration management office", desc: "Day-1 readiness, integration plans and the operating cadence to make synergies real." },
  { icon: TrendingUp, title: "Value creation planning", desc: "100-day plans tied to a five-year value bridge — engineering, GTM, ops and AI in one playbook." },
  { icon: ShieldCheck, title: "Carve-out & separation", desc: "TSA design, stand-up sequencing and risk-managed exits for divested business units." },
  { icon: Layers, title: "Portfolio operating partner", desc: "Embedded support for sponsors across multiple portcos — shared playbooks, shared leverage." },
];

const stages = [
  { n: "01", t: "Pre-LOI", d: "Thesis sharpening, target scan and rapid commercial pulse." },
  { n: "02", t: "Diligence", d: "Commercial, technology and AI-readiness in a single workstream." },
  { n: "03", t: "Sign-to-close", d: "Integration design, Day-1 plan and synergy baseline." },
  { n: "04", t: "Value capture", d: "Embedded teams driving the 100-day and 18-month plan." },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Professional Services"
        title={<>Deals that <span className="font-editorial italic">compound.</span></>}
        description="We sit on the same side of the table as the people writing the check — bringing diligence, integration and value-capture muscle that turns a thesis into a return."
        video="https://videos.pexels.com/video-files/6774633/6774633-hd_1920_1080_30fps.mp4"
      >
        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
            Talk to our M&A team <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </PageHeader>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">What we do</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Six capabilities, one <span className="font-editorial italic">deal team.</span>
              </h2>
            </Reveal>
          </div>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c) => (
              <StaggerItem key={c.title}>
                <div className="h-full p-7 rounded-2xl bg-card border border-border hover-lift">
                  <div className="h-12 w-12 rounded-xl gradient-hero grid place-items-center mb-6">
                    <c.icon className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Across the lifecycle</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-2xl mb-14">
              From signal to <span className="font-editorial italic">synergy.</span>
            </h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((s) => (
              <StaggerItem key={s.n}>
                <div className="p-7 rounded-2xl bg-background border border-border h-full">
                  <div className="font-display text-3xl text-azure mb-3">{s.n}</div>
                  <div className="font-semibold text-lg mb-2">{s.t}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Why Stralynn</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Operators, not <span className="font-editorial italic">spectators.</span>
              </h2>
            </div>
          </Reveal>
          <Stagger className="space-y-5">
            {[
              "Senior partners on every workstream — no offshored diligence factory.",
              "Technology and AI diligence built in, not bolted on.",
              "Integration plans written by people who have run integrations.",
              "Pricing aligned to value capture, not hours billed.",
            ].map((p) => (
              <StaggerItem key={p}>
                <div className="flex gap-4 p-5 rounded-xl border border-border bg-card">
                  <CheckCircle2 className="h-6 w-6 text-azure shrink-0 mt-0.5" />
                  <div className="text-lg">{p}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}

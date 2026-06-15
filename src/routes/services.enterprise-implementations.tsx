import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Settings2, Database, Workflow, Users, ShieldCheck, Gauge, CheckCircle2 } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/services/enterprise-implementations")({
  head: () => ({
    meta: [
      { title: "Enterprise Implementations — Stralynn" },
      { name: "description", content: "Salesforce, ERP and Certinia implementations engineered to land on time, on budget — and stick." },
      { property: "og:title", content: "Enterprise Implementations — Stralynn" },
      { property: "og:description", content: "Programmatic delivery of Salesforce, ERP and Certinia transformations — with adoption baked in." },
    ],
  }),
  component: Page,
});

const capabilities = [
  { icon: Settings2, title: "Salesforce transformations", desc: "Sales, Service, Revenue and Data Cloud — designed around the customer journey, not the org chart." },
  { icon: Database, title: "ERP modernization", desc: "Replatforming, consolidation and clean-core upgrades that unlock the next decade of growth." },
  { icon: Workflow, title: "Certinia & PSA", desc: "Project, resource and revenue management on a single platform for services-led businesses." },
  { icon: Users, title: "Change & adoption", desc: "Enablement, training and stewardship that turn go-live into go-fast." },
  { icon: ShieldCheck, title: "Governance & controls", desc: "SOX-ready process design, segregation of duties and audit-grade reporting from day one." },
  { icon: Gauge, title: "Hypercare & optimization", desc: "Post-launch tuning, KPI instrumentation and roadmap delivery against a measurable backlog." },
];

const stages = [
  { n: "01", t: "Define", d: "Outcomes, guardrails and the minimum lovable platform." },
  { n: "02", t: "Design", d: "Process, data and integration architecture co-built with your teams." },
  { n: "03", t: "Deliver", d: "Agile pods, two-week increments, demonstrable progress every sprint." },
  { n: "04", t: "Adopt", d: "Enablement, hypercare and a roadmap your business actually uses." },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Professional Services"
        title={<>Platforms that <span className="font-editorial italic">stick.</span></>}
        description="We deliver Salesforce, ERP and Certinia programs the way operators wish system integrators would — senior teams, honest plans and adoption owned end-to-end."
        video="https://videos.pexels.com/video-files/7773543/7773543-hd_1920_1080_30fps.mp4"
        poster="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80"
      >
        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
            Scope an implementation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </PageHeader>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">What we do</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Six capabilities, one <span className="font-editorial italic">delivery model.</span>
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
            <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">How we deliver</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-2xl mb-14">
              From kickoff to <span className="font-editorial italic">compounding value.</span>
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
                Implementations that don't <span className="font-editorial italic">implement themselves.</span>
              </h2>
            </div>
          </Reveal>
          <Stagger className="space-y-5">
            {[
              "Senior architects on every pod — not a pyramid of juniors.",
              "Fixed-scope, fixed-outcome contracting with transparent burn-down.",
              "Native integration with our AI and data platforms.",
              "Adoption SLAs measured on usage, not licenses sold.",
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

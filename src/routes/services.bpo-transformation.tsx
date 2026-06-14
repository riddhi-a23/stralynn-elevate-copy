import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Workflow, Bot, Users, Gauge, LineChart, Layers, CheckCircle2 } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/services/bpo-transformation")({
  head: () => ({
    meta: [
      { title: "BPO Transformation — Stralynn" },
      { name: "description", content: "Reinvent operations with intelligent automation, agentic workflows and human-in-the-loop design." },
      { property: "og:title", content: "BPO Transformation — Stralynn" },
      { property: "og:description", content: "Cut cost, lift quality and unlock new margin by rebuilding the operating model around AI." },
    ],
  }),
  component: Page,
});

const capabilities = [
  { icon: Workflow, title: "Operating model redesign", desc: "Process, technology and talent reimagined end-to-end — not just automated in place." },
  { icon: Bot, title: "Agentic workflows", desc: "Production-grade agents handling volume work, with human review on the consequential 5%." },
  { icon: Users, title: "Human-in-the-loop design", desc: "Workforce models, training and incentives engineered for AI-augmented teams." },
  { icon: Gauge, title: "Throughput & quality systems", desc: "Real-time observability and feedback loops baked into every workflow we ship." },
  { icon: LineChart, title: "Cost & margin engineering", desc: "Unit-economics rebuilds that move the COO and CFO scoreboard in the same direction." },
  { icon: Layers, title: "Platform foundations", desc: "Workflow, data and orchestration layers that future-proof the next wave of automation." },
];

const outcomes = [
  { kpi: "38%", l: "Average cost-to-serve reduction in first 12 months" },
  { kpi: "3.1×", l: "Throughput per FTE on agent-augmented queues" },
  { kpi: "0.4%", l: "Defect rate on high-volume claims workflows" },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Professional Services"
        title={<>Operations, <span className="font-editorial italic">reinvented.</span></>}
        description="The next generation of BPO is not cheaper labor — it is smarter systems. We design and run the operating models that make AI a structural advantage."
        video="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4"
      >
        <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
          Start a transformation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </PageHeader>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Outcomes</div>
          </Reveal>
          <Stagger className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden shadow-soft">
            {outcomes.map((s) => (
              <StaggerItem key={s.l} className="bg-background p-8 md:p-10">
                <div className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-navy-deep">{s.kpi}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Six capabilities that move <span className="font-editorial italic">the P&L.</span>
              </h2>
            </Reveal>
          </div>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c) => (
              <StaggerItem key={c.title}>
                <div className="h-full p-7 rounded-2xl bg-background border border-border hover-lift">
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

      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">How we work</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Build, run, <span className="font-editorial italic">transfer.</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                We stand up the new operating model, run it to proven steady-state, then hand it back to your team with the talent and tooling to keep it improving.
              </p>
            </div>
          </Reveal>
          <Stagger className="space-y-5">
            {[
              "Senior operators co-located with your team — not a remote PMO.",
              "Open architecture: our agents and observability run on your stack.",
              "Outcome-based commercials tied to throughput, quality and cost.",
              "Talent transition plans for every role we change.",
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

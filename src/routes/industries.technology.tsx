import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Cpu, Cloud, Rocket, LineChart, ShieldCheck, Users, CheckCircle2 } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/industries/technology")({
  head: () => ({
    meta: [
      { title: "Technology — Stralynn" },
      { name: "description", content: "From Series B scale-ups to platform giants — operating leverage, AI-native products and durable growth." },
      { property: "og:title", content: "Technology — Stralynn" },
      { property: "og:description", content: "We partner with technology companies to compound product velocity, GTM efficiency and AI-native advantage." },
    ],
  }),
  component: Page,
});

const capabilities = [
  { icon: Rocket, title: "Product-led growth", desc: "Activation, expansion and pricing experiments wired into the data stack — not the deck." },
  { icon: Cpu, title: "AI-native product", desc: "Reference architectures, eval harnesses and ship-cycles for shipping AI features that actually work." },
  { icon: Cloud, title: "Platform & cost", desc: "Multi-cloud architecture, FinOps and reliability programs that protect gross margin at scale." },
  { icon: LineChart, title: "GTM efficiency", desc: "Pipeline math, segmentation and sales motion redesign for CAC payback that VCs underwrite." },
  { icon: ShieldCheck, title: "Security & trust", desc: "SOC 2, ISO 27001 and enterprise-grade controls without strangling product velocity." },
  { icon: Users, title: "Org & talent", desc: "Operating model, leveling and comp design for the next stage of scale." },
];

const proof = [
  { stat: "38%", label: "Cloud cost reduction for a Series D infra startup — reinvested into ML platform." },
  { stat: "2.4×", label: "Net revenue retention lift after redesigning packaging and expansion motion." },
  { stat: "11 wks", label: "From kickoff to enterprise-ready AI copilot, eval harness included." },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title={<>Compounding the <span className="font-editorial italic">technology advantage.</span></>}
        description="From Series B to platform — we partner with product, engineering and revenue leaders to ship AI-native software, harden the platform and make every dollar of growth more efficient than the last."
        video="https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4"
        poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
      >
        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
            Partner with our tech practice <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </PageHeader>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">What we do</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Six capabilities for the <span className="font-editorial italic">next stage of scale.</span>
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
            <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Proof, not promises</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-2xl mb-14">
              Outcomes from the <span className="font-editorial italic">last twelve months.</span>
            </h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-3 gap-6">
            {proof.map((p) => (
              <StaggerItem key={p.stat}>
                <div className="p-8 rounded-2xl bg-background border border-border h-full">
                  <div className="font-display text-5xl text-azure mb-3">{p.stat}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.label}</p>
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
                Operators who've <span className="font-editorial italic">shipped at scale.</span>
              </h2>
            </div>
          </Reveal>
          <Stagger className="space-y-5">
            {[
              "Former CTOs, CPOs and CROs from $1B+ technology businesses.",
              "Engineering depth — we ship code alongside the strategy deck.",
              "AI evaluation rigor borrowed from frontier labs.",
              "Pricing aligned to product and revenue outcomes.",
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

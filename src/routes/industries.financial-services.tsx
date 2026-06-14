import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Landmark, ShieldCheck, LineChart, Bot, Users, Layers } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/industries/financial-services")({
  head: () => ({
    meta: [
      { title: "Financial Services — Stralynn" },
      { name: "description", content: "AI-led transformation for banks, insurers and capital-markets leaders — engineered for regulated environments." },
      { property: "og:title", content: "Financial Services — Stralynn" },
      { property: "og:description", content: "From underwriting copilots to claims automation, we build the systems that move FS scoreboards." },
    ],
  }),
  component: Page,
});

const offerings = [
  { icon: Bot, t: "AI for underwriting & advice", d: "Copilots and agents that lift analyst throughput without compromising risk discipline." },
  { icon: ShieldCheck, t: "Risk, compliance & model governance", d: "Frameworks and platforms designed for SR 11-7, EU AI Act and beyond." },
  { icon: LineChart, t: "Capital-markets analytics", d: "Data and AI platforms for trading, surveillance and client intelligence." },
  { icon: Landmark, t: "Core modernization", d: "Decoupling, replatforming and the AI layer on top — without breaking the bank." },
  { icon: Users, t: "Customer & advisor experience", d: "Personalized journeys engineered from data foundations up." },
  { icon: Layers, t: "Operations & claims automation", d: "Agent-augmented operations across insurance and back-office banking." },
];

const proof = [
  { kpi: "60%", l: "Underwriting memos drafted by AI for a top-tier credit fund" },
  { kpi: "$90M", l: "Annualized cost-out delivered for a regional bank" },
  { kpi: "9 mo", l: "From whiteboard to production AI platform" },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Industries — Financial Services"
        title={<>Built for the regulated <span className="font-editorial italic">enterprise.</span></>}
        description="Banks, insurers and asset managers do not get to choose between speed and rigor. We engineer for both — with the governance baked in from day one."
        image="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1800&q=80"
      >
        <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
          Talk to our FS team <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </PageHeader>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">What we do</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl mb-14">
              Six areas where we move the <span className="font-editorial italic">scoreboard.</span>
            </h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((o) => (
              <StaggerItem key={o.t}>
                <div className="h-full p-7 rounded-2xl bg-card border border-border hover-lift">
                  <div className="h-12 w-12 rounded-xl gradient-hero grid place-items-center mb-6">
                    <o.icon className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{o.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{o.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Proof</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-2xl mb-14">
              Outcomes, <span className="font-editorial italic">audited.</span>
            </h2>
          </Reveal>
          <Stagger className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden shadow-soft">
            {proof.map((s) => (
              <StaggerItem key={s.l} className="bg-background p-8 md:p-10">
                <div className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-navy-deep">{s.kpi}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}

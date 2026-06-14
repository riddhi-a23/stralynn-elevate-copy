import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Banknote, Search, TrendingUp, Layers, ShieldCheck, Zap } from "lucide-react";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/industries/private-equity")({
  head: () => ({
    meta: [
      { title: "Private Equity — Stralynn" },
      { name: "description", content: "Diligence, value creation and AI-led transformation for sponsors and their portfolio companies." },
      { property: "og:title", content: "Private Equity — Stralynn" },
      { property: "og:description", content: "We help PE sponsors find the right deal, write the value bridge and ship the operating changes that earn it." },
    ],
  }),
  component: Page,
});

const offerings = [
  { icon: Search, t: "Commercial & tech diligence", d: "Single-thread diligence across market, customer, technology and AI-readiness." },
  { icon: TrendingUp, t: "100-day & value creation plans", d: "From thesis to operating cadence — engineered, sequenced and owned." },
  { icon: Zap, t: "AI uplift across the portfolio", d: "Shared platforms and playbooks that move multiple portcos at once." },
  { icon: Layers, t: "Operating partner support", d: "Embedded teams plugging into your portfolio ops function." },
  { icon: ShieldCheck, t: "Carve-outs & integrations", d: "TSA design, IMO leadership and Day-1 readiness for complex transactions." },
  { icon: Banknote, t: "Exit-readiness", d: "Tighten the equity story, the data room and the operating proof points." },
];

const proof = [
  { kpi: "$2.1B", l: "Aggregate value creation across portfolio engagements" },
  { kpi: "14", l: "Sponsors actively partnered with" },
  { kpi: "60+", l: "Portcos supported across diligence and value capture" },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Industries — Private Equity"
        title={<>The value bridge, <span className="font-editorial italic">engineered.</span></>}
        description="We work alongside sponsors and operating partners — from first look to exit — to make the value-creation plan a system, not a slide."
        image="https://images.unsplash.com/photo-1554260570-9140fd3b7614?auto=format&fit=crop&w=1800&q=80"
      >
        <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
          Brief our PE team <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </PageHeader>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">What we do</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl mb-14">
              Six ways we partner with sponsors and <span className="font-editorial italic">portcos.</span>
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

      <section className="py-24 md:py-32 bg-ink text-cream">
        <div className="container-x">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-cyan-glow mb-3">Proof</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-2xl mb-14">
              Outcomes our sponsors have <span className="font-editorial italic">underwritten.</span>
            </h2>
          </Reveal>
          <Stagger className="grid md:grid-cols-3 gap-px bg-cream/10 rounded-2xl overflow-hidden">
            {proof.map((s) => (
              <StaggerItem key={s.l} className="bg-ink p-8 md:p-10">
                <div className="font-display text-4xl md:text-5xl font-semibold tracking-tight">{s.kpi}</div>
                <div className="mt-2 text-sm text-cream/60">{s.l}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}

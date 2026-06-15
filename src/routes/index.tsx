import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight, ArrowDown, Sparkles, Workflow, LineChart, Brain,
  Stethoscope, Banknote, Cpu, Building2, ShieldCheck, Quote, Flag, TrendingUp, Landmark, Newspaper,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "../components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stralynn — Consulting for the AI era" },
      { name: "description", content: "We partner with ambitious enterprises to design, build and scale AI-led transformations that compound value." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Brain, title: "AI Digital Transformation", desc: "Enterprise AI, generative platforms and data foundations engineered for scale.", to: "/services/ai-digital-transformation" },
  { icon: Workflow, title: "BPO Transformation", desc: "Reinvent operations with intelligent automation and human-in-the-loop design.", to: "/services/ai-digital-transformation" },
  { icon: LineChart, title: "M&A Advisory", desc: "Diligence, integration playbooks and value capture across the deal lifecycle.", to: "/services/ai-digital-transformation" },
  { icon: Building2, title: "Enterprise Implementations", desc: "Salesforce, ERP and Certinia transformations delivered with surgical precision.", to: "/services/ai-digital-transformation" },
];

const industries = [
  { icon: Stethoscope, name: "Healthcare", to: "/industries/healthcare" },
  { icon: Banknote, name: "Private Equity", to: "/industries/healthcare" },
  { icon: ShieldCheck, name: "Financial Services", to: "/industries/healthcare" },
  { icon: Cpu, name: "Technology", to: "/industries/healthcare" },
];

const stats = [
  { kpi: "$4.2B+", label: "Enterprise value unlocked" },
  { kpi: "180+", label: "Transformations delivered" },
  { kpi: "42", label: "Countries served" },
  { kpi: "98%", label: "Client retention" },
];

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden gradient-hero text-cream">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          src="https://videos.pexels.com/video-files/3252919/3252919-hd_1920_1080_25fps.mp4"
          poster="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000&q=80"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-navy-deep/60 to-navy-deep" />
        <div aria-hidden className="absolute inset-0 [background:radial-gradient(900px_500px_at_70%_20%,oklch(0.72_0.14_220/.35),transparent_60%)]" />

        <motion.div style={{ y, opacity }} className="relative container-x pt-40 md:pt-48 pb-32">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-cream/85">
              <Sparkles className="h-3.5 w-3.5 text-cyan-glow" />
              The consulting firm for the AI era
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-[88px] font-semibold leading-[0.98] tracking-tight max-w-5xl">
              Reinvent what your <span className="font-editorial italic gradient-accent-text">enterprise</span> can become.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-cream/75 leading-relaxed">
              Stralynn pairs senior strategists with builders, data scientists and operators to design and deliver transformations that compound — measured in margin, growth and resilience.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-3.5 text-sm font-semibold hover:bg-cream/90 transition-all">
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to="/services/ai-digital-transformation" className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream hover:bg-cream/10 transition-colors">
                Explore our work
              </Link>
            </div>
          </Reveal>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/70"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE / TRUST */}
      <section className="border-y border-border bg-background py-10">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground text-center mb-6">
            Trusted by leaders at
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-foreground/40 font-display text-xl md:text-2xl font-semibold">
            {["Northwind", "Aperture", "Helix Bio", "Vector Capital", "Lumen", "Cobalt PE", "Meridian"].map((b) => (
              <span key={b} className="hover:text-foreground transition-colors">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-end mb-16">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Outcomes that compound, <span className="font-editorial italic text-azure">not slideware.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our teams stay through implementation — co-building the systems, talent and operating models that turn strategy into durable advantage.
              </p>
            </Reveal>
          </div>
          <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden shadow-soft">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="bg-background p-8 md:p-10">
                <div className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-navy-deep">{s.kpi}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <Reveal>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">What we do</div>
                <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-2xl">
                  Four practices. One operating system for transformation.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/services/ai-digital-transformation" className="text-sm font-semibold inline-flex items-center gap-2 text-navy hover:text-azure transition-colors">
                All services <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <Link
                  to={s.to}
                  className="block h-full p-7 rounded-2xl bg-card border border-border hover-lift group"
                >
                  <div className="h-12 w-12 rounded-xl gradient-hero grid place-items-center mb-6">
                    <s.icon className="h-5 w-5 text-cream" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-navy group-hover:text-azure transition-colors">
                    Learn more <ArrowUpRight className="h-4 w-4" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* USA SPOTLIGHT */}
      <UsaSpotlight />

      {/* INDUSTRIES */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <div className="text-xs uppercase tracking-[0.25em] text-azure mb-3">Industries</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Deep expertise where it <span className="font-editorial italic">matters</span>.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Vertical-native teams who speak your language — from regulated environments to high-growth platforms.
              </p>
            </div>
          </Reveal>
          <Stagger className="divide-y divide-border">
            {industries.map((i) => (
              <StaggerItem key={i.name}>
                <Link to={i.to} className="group flex items-center justify-between py-8 hover:px-4 transition-all">
                  <div className="flex items-center gap-5">
                    <div className="h-14 w-14 rounded-2xl bg-secondary grid place-items-center group-hover:gradient-hero transition-all">
                      <i.icon className="h-6 w-6 text-navy group-hover:text-cream transition-colors" />
                    </div>
                    <div>
                      <div className="font-display text-2xl md:text-3xl font-semibold">{i.name}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-azure group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 md:py-32 bg-ink text-cream overflow-hidden">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <Quote className="h-10 w-10 text-cyan-glow mb-8" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.2] text-cream">
                "Stralynn rewired how we operate. In nine months we shipped an AI platform that now writes 60% of our underwriting memos — with better accuracy than our analysts."
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full gradient-accent" />
                <div>
                  <div className="font-semibold">Maya Rasheed</div>
                  <div className="text-sm text-cream/60">Managing Partner, Vector Capital</div>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="relative">
              <div aria-hidden className="absolute -inset-6 bg-cyan-glow/10 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=1400&q=80"
                alt="Stralynn team in a working session with a client"
                className="relative rounded-3xl aspect-[5/6] object-cover w-full shadow-elegant"
              />
            </div>
          </Reveal>
        </div>
      </section>


      {/* CTA */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 md:p-16 text-cream">
            <div aria-hidden className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-glow/20 blur-3xl" />
            <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
              <div>
                <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] max-w-2xl">
                  Let's build what's <span className="font-editorial italic">next.</span>
                </h2>
                <p className="mt-5 text-cream/75 max-w-md">
                  Tell us where you are and where you want to be. We'll bring the team, the playbook and the conviction.
                </p>
              </div>
              <div className="flex lg:justify-end">
                <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-6 py-4 font-semibold">
                  Talk to Stralynn
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const usaItems = [
  {
    icon: Flag,
    tag: "U.S. Market Pulse",
    title: "Federal AI procurement is reshaping enterprise buying",
    desc: "New OMB guidance is accelerating responsible-AI standards across U.S. agencies and the Fortune 500 vendors who serve them.",
  },
  {
    icon: TrendingUp,
    tag: "Trending",
    title: "U.S. private equity sponsors lean into agentic ops",
    desc: "Portfolio operators are deploying AI agents to lift EBITDA margins by 300–600 bps within the first 12 months of ownership.",
  },
  {
    icon: Landmark,
    tag: "Regulation",
    title: "State-level AI laws (CA, CO, NY) are now in force",
    desc: "We help U.S. enterprises stand up governance that satisfies CCPA, NYDFS Part 500 and emerging EU AI Act parity in one pass.",
  },
  {
    icon: Newspaper,
    tag: "Client Impact",
    title: "$1.2B in value delivered to U.S. clients in 2025",
    desc: "From a top-10 U.S. health system to a Nasdaq-listed fintech, our American clients shipped 40+ production AI systems with us last year.",
  },
];

function UsaSpotlight() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-navy-deep text-cream">
      <div aria-hidden className="absolute inset-0 [background:radial-gradient(700px_400px_at_85%_15%,oklch(0.72_0.14_220/.25),transparent_60%)]" />
      <div aria-hidden className="absolute inset-0 opacity-[0.06] [background-image:repeating-linear-gradient(0deg,transparent_0_38px,oklch(0.95_0_0)_38px_39px),repeating-linear-gradient(90deg,transparent_0_60px,oklch(0.95_0_0)_60px_61px)]" />

      <div className="relative container-x">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-end mb-14">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-cream/85 mb-5">
                <Flag className="h-3.5 w-3.5 text-cyan-glow" />
                United States Spotlight
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                What's moving the dial for <span className="font-editorial italic gradient-accent-text">U.S. enterprises</span> right now.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-cream/75 leading-relaxed">
              From Silicon Valley scale-ups to East Coast institutions, we track the policy shifts, capital flows and AI breakthroughs reshaping how American companies compete — and we translate them into action for our clients.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid md:grid-cols-2 gap-5">
          {usaItems.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group h-full p-7 md:p-8 rounded-2xl border border-cream/10 bg-cream/[0.03] backdrop-blur hover:bg-cream/[0.06] hover:border-cream/20 transition-all">
                <div className="flex items-start gap-5">
                  <div className="h-12 w-12 rounded-xl bg-cream/10 grid place-items-center shrink-0 group-hover:bg-cyan-glow/20 transition-colors">
                    <item.icon className="h-5 w-5 text-cyan-glow" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-cyan-glow mb-2">{item.tag}</div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold leading-snug text-cream">{item.title}</h3>
                    <p className="mt-3 text-sm text-cream/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}


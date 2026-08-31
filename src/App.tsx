import { useMemo, useState } from 'react'
import {
  ArrowRight,
  Building2,
  ChevronRight,
  CloudSun,
  Factory,
  Globe2,
  Leaf,
  LineChart,
  PiggyBank,
  Quote,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
  Wind,
} from 'lucide-react'

type PolicyKey = 'carbon' | 'wealth' | 'corporate'

const stats = [
  {
    value: '40%',
    label: 'of U.S. greenhouse gas emissions',
    detail: 'linked to the wealthiest 10% of Americans through businesses, investments, and lifestyles.',
    icon: Users,
  },
  {
    value: '1%',
    label: 'richest people worldwide',
    detail: 'emit more carbon than the poorest 66%, according to a 2023 Oxfam finding cited in the essay.',
    icon: Globe2,
  },
  {
    value: '66%',
    label: 'poorest global population',
    detail: 'is out-emitted by the richest 1%, showing why climate costs should be shared more fairly.',
    icon: Scale,
  },
]

const policies: Record<PolicyKey, {
  title: string
  kicker: string
  icon: typeof Leaf
  body: string
  bullets: string[]
}> = {
  carbon: {
    title: 'Carbon tax on pollution',
    kicker: 'Make emissions expensive',
    icon: Factory,
    body:
      'A carbon tax rises with the amount of pollution produced. When fossil-fuel emissions cost more, companies have a direct financial reason to switch to wind, solar, efficiency upgrades, and cleaner supply chains.',
    bullets: ['Cuts greenhouse gas emissions', 'Rewards cleaner production', 'Creates public funding for renewable energy'],
  },
  wealth: {
    title: 'Higher taxes on high emitters',
    kicker: 'Match responsibility to impact',
    icon: PiggyBank,
    body:
      'Because wealthy individuals often create emissions through investments, luxury consumption, and business ownership, progressive climate taxes ask those with the largest footprint to contribute more to solutions.',
    bullets: ['Targets outsized carbon footprints', 'Protects ordinary households', 'Funds resilient communities'],
  },
  corporate: {
    title: 'Corporate polluter payments',
    kicker: 'Pay for the damage created',
    icon: Building2,
    body:
      'Many large corporations earned billions from greenhouse-gas-intensive industries. Requiring major polluters to pay more can finance transit, clean power, and protections for communities facing floods, fires, and storms.',
    bullets: ['Applies the “polluter pays” principle', 'Supports clean infrastructure', 'Discourages dirty business models'],
  },
}

const uses = [
  { title: 'Renewable energy', text: 'Expand solar, wind, and grid storage so clean power becomes affordable and reliable.', icon: Wind },
  { title: 'Public transportation', text: 'Build low-emission mobility that reduces car dependence and household fuel costs.', icon: LineChart },
  { title: 'Climate resilience', text: 'Prepare communities for stronger storms, floods, heat waves, fires, and sea-level rise.', icon: ShieldCheck },
]

const sources = [
  {
    title: 'A Carbon Tax Will Help Curb Global Warming',
    explanation:
      'Explains how making fossil-fuel pollution more expensive pushes companies toward cleaner energy and raises money for environmental programs.',
    citation:
      'Nader, Ralph, and Toby Heaps. “A Carbon Tax Will Help Curb Global Warming.” Global Warming, edited by David Haugen, et al., Greenhaven Press, 2010. Opposing Viewpoints. Gale In Context.',
  },
  {
    title: 'America’s Wealthiest 10% Responsible for 40% of US Emissions',
    explanation:
      'Shows why wealthy Americans should pay more by connecting high incomes, investments, and lifestyles to a much larger share of greenhouse gas emissions.',
    citation:
      '“America’s Wealthiest 10% Responsible for 40% of US Greenhouse Gas Emissions.” ScienceDaily, University of Massachusetts Amherst, 18 Aug. 2023.',
  },
]

function App() {
  const [activePolicy, setActivePolicy] = useState<PolicyKey>('carbon')
  const [taxRate, setTaxRate] = useState(75)
  const [emissions, setEmissions] = useState(18)

  const revenue = useMemo(() => taxRate * emissions, [taxRate, emissions])
  const active = policies[activePolicy]
  const ActiveIcon = active.icon

  return (
    <main className="min-h-screen overflow-hidden bg-[#071512] text-emerald-50">
      <section className="relative isolate px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(34,197,94,0.34),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(45,212,191,0.22),transparent_28%),linear-gradient(135deg,#071512_0%,#0b211d_45%,#10261c_100%)]" />
        <div className="absolute left-1/2 top-0 -z-10 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/7 px-5 py-3 backdrop-blur-xl">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-300 text-emerald-950">
              <Leaf size={21} />
            </span>
            Climate Fair Share
          </a>
          <div className="hidden items-center gap-6 text-sm text-emerald-50/75 md:flex">
            <a className="transition hover:text-emerald-200" href="#evidence">Evidence</a>
            <a className="transition hover:text-emerald-200" href="#policy">Policy</a>
            <a className="transition hover:text-emerald-200" href="#sources">Sources</a>
          </div>
        </nav>

        <div id="top" className="mx-auto grid max-w-7xl gap-12 pb-16 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-100">
              <Sparkles size={16} /> Research argument transformed into an interactive brief
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Make the biggest emitters fund the clean energy future.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-emerald-50/78">
              Climate change brings rising temperatures, stronger storms, sea-level rise, pollution, and ecosystem harm. A fair response asks wealthy individuals and large corporations—those responsible for a major share of emissions—to pay more through carbon and polluter taxes.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#policy" className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-3 font-bold text-emerald-950 shadow-2xl shadow-emerald-950/40 transition hover:-translate-y-0.5 hover:bg-lime-200">
                Explore policies <ArrowRight className="transition group-hover:translate-x-1" size={19} />
              </a>
              <a href="#sources" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/14">
                View citations
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-emerald-300/25 to-teal-300/5 blur-2xl" />
            <div className="relative rounded-[2.25rem] border border-white/12 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl">
              <div className="rounded-[1.75rem] bg-[#071512]/75 p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-emerald-200/70">Central claim</p>
                    <h2 className="mt-2 text-2xl font-black text-white">Fair taxation is climate action.</h2>
                  </div>
                  <CloudSun className="text-emerald-200" size={42} />
                </div>
                <div className="mt-6 space-y-4">
                  {['Those who pollute most should contribute most.', 'Taxes can push cleaner choices and fund renewables.', 'The cost of inaction is higher than the cost of action.'].map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl bg-white/[0.06] p-4">
                      <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-300 text-emerald-950">
                        <ChevronRight size={16} />
                      </span>
                      <p className="text-emerald-50/82">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-amber-200/20 bg-amber-200/10 p-5">
                  <Quote className="mb-3 text-amber-100" />
                  <p className="text-sm leading-6 text-amber-50/86">
                    History shows that societies that ignored environmental limits, such as Easter Island, risked collapse. Today’s climate crisis is a turning point where action can prevent repeating that mistake.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="evidence" className="bg-[#edf8ef] px-6 py-20 text-emerald-950 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.26em] text-emerald-700">Evidence of responsibility</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">The emissions burden is not equal.</h2>
            <p className="mt-5 text-lg leading-8 text-emerald-950/70">
              The argument for higher climate taxes begins with a basic fairness principle: the people and institutions producing the largest pollution share should shoulder a larger share of the solution.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <article key={stat.value} className="rounded-[2rem] border border-emerald-900/10 bg-white p-7 shadow-xl shadow-emerald-950/5">
                  <Icon className="text-emerald-700" size={36} />
                  <p className="mt-7 text-6xl font-black tracking-[-0.08em] text-emerald-950">{stat.value}</p>
                  <h3 className="mt-2 text-xl font-extrabold">{stat.label}</h3>
                  <p className="mt-4 leading-7 text-emerald-950/68">{stat.detail}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="policy" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="lg:sticky lg:top-8">
            <p className="font-bold uppercase tracking-[0.26em] text-emerald-300">Policy toolkit</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">How taxes turn responsibility into solutions.</h2>
            <p className="mt-5 text-lg leading-8 text-emerald-50/72">
              Use the tabs to compare the major policy ideas in the essay. Each approach makes pollution less profitable and clean investment more possible.
            </p>
            <div className="mt-7 grid gap-3">
              {(Object.keys(policies) as PolicyKey[]).map((key) => {
                const item = policies[key]
                const Icon = item.icon
                const selected = activePolicy === key
                return (
                  <button
                    key={key}
                    onClick={() => setActivePolicy(key)}
                    className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition ${selected ? 'border-emerald-300 bg-emerald-300 text-emerald-950' : 'border-white/10 bg-white/[0.06] text-emerald-50 hover:bg-white/[0.1]'}`}
                  >
                    <Icon size={24} />
                    <span>
                      <span className="block text-sm font-bold uppercase tracking-[0.16em] opacity-70">{item.kicker}</span>
                      <span className="block text-lg font-black">{item.title}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="rounded-[2.25rem] border border-white/12 bg-white/[0.07] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="rounded-[1.75rem] bg-emerald-50 p-7 text-emerald-950 sm:p-9">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-bold uppercase tracking-[0.22em] text-emerald-700">{active.kicker}</p>
                  <h3 className="mt-2 text-3xl font-black tracking-[-0.03em]">{active.title}</h3>
                </div>
                <span className="grid h-16 w-16 place-items-center rounded-3xl bg-emerald-200 text-emerald-900">
                  <ActiveIcon size={32} />
                </span>
              </div>
              <p className="mt-6 text-lg leading-8 text-emerald-950/72">{active.body}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {active.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-2xl bg-white p-4 font-semibold shadow-sm shadow-emerald-950/5">
                    {bullet}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] bg-emerald-950 p-6 text-white">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">Interactive revenue sketch</p>
                    <h4 className="mt-2 text-2xl font-black">Polluter tax funding estimate</h4>
                    <p className="mt-2 max-w-xl text-emerald-50/68">Adjust a carbon price and emissions level to see how much funding could be directed toward clean energy and resilience.</p>
                  </div>
                  <div className="rounded-2xl bg-emerald-300 px-5 py-4 text-center text-emerald-950">
                    <p className="text-sm font-bold uppercase tracking-[0.18em]">Raised</p>
                    <p className="text-4xl font-black tracking-[-0.05em]">${revenue.toLocaleString()}M</p>
                  </div>
                </div>
                <div className="mt-7 grid gap-6 md:grid-cols-2">
                  <label className="block">
                    <span className="flex justify-between text-sm font-semibold text-emerald-100"><span>Carbon price</span><span>${taxRate}/ton</span></span>
                    <input className="mt-3 w-full accent-emerald-300" type="range" min="20" max="150" value={taxRate} onChange={(event) => setTaxRate(Number(event.target.value))} />
                  </label>
                  <label className="block">
                    <span className="flex justify-between text-sm font-semibold text-emerald-100"><span>Emissions covered</span><span>{emissions}M tons</span></span>
                    <input className="mt-3 w-full accent-emerald-300" type="range" min="5" max="50" value={emissions} onChange={(event) => setEmissions(Number(event.target.value))} />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbf2] px-6 py-20 text-emerald-950 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.26em] text-emerald-700">Where the money goes</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Tax revenue can lower future climate costs.</h2>
            </div>
            <p className="text-lg leading-8 text-emerald-950/68">
              Critics warn that higher taxes could hurt the economy, but storms, floods, fires, and disasters already create enormous costs. Investing now can reduce damage and create clean-energy jobs.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {uses.map((use) => {
              const Icon = use.icon
              return (
                <article key={use.title} className="group rounded-[2rem] bg-emerald-950 p-7 text-white transition hover:-translate-y-1 hover:bg-emerald-900">
                  <Icon className="text-emerald-300" size={38} />
                  <h3 className="mt-8 text-2xl font-black">{use.title}</h3>
                  <p className="mt-4 leading-7 text-emerald-50/70">{use.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="sources" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-center font-bold uppercase tracking-[0.26em] text-emerald-300">Research base</p>
          <h2 className="mt-3 text-center text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">Shortened source explanations & MLA citations</h2>
          <div className="mt-10 space-y-5">
            {sources.map((source, index) => (
              <article key={source.title} className="rounded-[2rem] border border-white/12 bg-white/[0.07] p-6 backdrop-blur-xl sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-300 font-black text-emerald-950">{index + 1}</span>
                  <div>
                    <h3 className="text-2xl font-black text-white">{source.title}</h3>
                    <p className="mt-3 leading-7 text-emerald-50/74">{source.explanation}</p>
                    <p className="mt-4 rounded-2xl bg-black/20 p-4 text-sm leading-6 text-emerald-50/82">{source.citation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-emerald-50/62 sm:px-10 lg:px-16">
        <p>Climate Fair Share turns a research essay into a clear, interactive policy brief for fair climate action.</p>
      </footer>
    </main>
  )
}

export default App

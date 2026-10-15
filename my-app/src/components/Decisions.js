import React from "react";
import { Link, useParams } from "react-router-dom";
import { decisions } from "../decisionsData";

const fields = [
  ["Context", "context"], ["Alternatives considered", "options"], ["Decision", "choice"],
  ["Reasoning", "reasoning"], ["Evidence available", "evidence"],
  ["What I gave up", "tradeoffs"], ["How I'll test it", "test"],
  ["What would change my mind", "reversal"], ["Outcome / update", "outcome"]
];

export default function Decisions() {
  const { slug } = useParams();
  const entry = slug ? decisions.find(d => d.slug === slug) : null;
  if (slug && !entry) return <main className="max-w-3xl mx-auto px-6 py-24"><h1 className="text-3xl text-white font-bold">Decision not found</h1><Link className="text-green-300 mt-6 inline-block" to="/decisions">← All decisions</Link></main>;
  return <section className="min-h-screen bg-[#070b0b] text-gray-200 px-6 py-20">
    <div className="max-w-5xl mx-auto">
      {entry ? <>
        <Link to="/decisions" className="text-green-300 text-sm hover:text-green-200">← All decisions</Link>
        <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-widest text-green-300">
          <span>{entry.label}</span><span className="text-gray-500">·</span><span>{entry.decisionDate}</span>
        </div>
        <h1 className="mt-5 max-w-4xl text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">{entry.title}</h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-gray-300">{entry.summary}</p>
        <div className="mt-8 rounded-xl border border-amber-900/50 bg-amber-950/20 px-5 py-4 text-sm text-amber-100/90">
          Retrospective case study published {entry.date}. Historical reasoning reconstructed from development work; the original decision was not published in advance.
        </div>
        <div className="mt-12 max-w-3xl space-y-10">
          {fields.map(([title,key]) => <article key={key} className="border-t border-gray-800 pt-7">
            <h2 className="text-white text-xl font-semibold mb-3">{title}</h2>
            {Array.isArray(entry[key]) ? <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">{entry[key].map(v=><li key={v}>{v}</li>)}</ul> : <p className="text-gray-300 leading-relaxed">{entry[key]}</p>}
          </article>)}
        </div>
        <div className="mt-16 border-t border-gray-800 pt-8"><Link to="/decisions" className="text-green-300 font-medium">Read other decisions →</Link></div>
      </> : <>
        <div className="max-w-3xl">
          <p className="text-green-400 text-sm font-semibold uppercase tracking-[0.25em]">A public record of judgment</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mt-5">Decisions, not just outcomes.</h1>
          <p className="text-xl leading-relaxed text-gray-300 mt-7">I build products and make choices under uncertainty. Here are the alternatives I considered, the trade-offs I accepted, and the evidence that might change my mind.</p>
          <p className="text-sm text-gray-400 mt-5">These initial entries are retrospective. Future decisions will be recorded before their outcomes are known, with dated updates rather than rewritten history.</p>
        </div>
        <div className="mt-16 grid gap-5">
          {decisions.map((d,i)=><Link key={d.slug} to={`/decisions/${d.slug}`} className="group block rounded-2xl border border-gray-800 bg-gray-900/50 px-7 py-8 hover:border-green-500/50 transition">
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-4"><span className="text-green-300">{String(i+1).padStart(2,"0")} / {d.label}</span><span>{d.decisionDate}</span><span>·</span><span>{d.status}</span></div>
            <h2 className="text-2xl sm:text-3xl text-white font-semibold group-hover:text-green-300 transition">{d.title}</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-gray-300">{d.summary}</p>
            <span className="inline-block text-green-300 font-medium mt-6">Read decision →</span>
          </Link>)}
        </div>
        <div className="mt-14 pt-8 border-t border-gray-800 text-gray-400 text-sm">Published reasoning is not a claim of being right. Outcomes, counterexamples, and changes of mind belong here too.</div>
      </>}
    </div>
  </section>;
}

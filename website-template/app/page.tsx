import { site } from "../content/site";

export default function HomePage() {
  return (
    <main>
      <section id="hero" className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24">
        <p className="text-sm uppercase tracking-wide text-slate-500">{site.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight text-slate-950">
          {site.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">{site.subheadline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="rounded-md bg-slate-950 px-5 py-3 text-sm font-medium text-white" href={site.primaryCta.href}>
            {site.primaryCta.label}
          </a>
          <a className="rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-950" href={site.secondaryCta.href}>
            {site.secondaryCta.label}
          </a>
        </div>
      </section>
    </main>
  );
}

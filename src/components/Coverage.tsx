import { coverage } from "@/lib/site-data";

const angleFor = (i: number) => -90 + i * 60;
const point = (i: number, r: number) => {
  const a = (angleFor(i) * Math.PI) / 180;
  return { x: 200 + r * Math.cos(a), y: 200 + r * Math.sin(a) };
};

export function Coverage() {
  return (
    <section id="coverage" className="bg-paper-100 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
              Coverage
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-ink-950 sm:text-4xl">
              Six corridors across greater commercial Lagos
            </h2>
            <p className="mt-4 max-w-lg text-ink-700">
              Our commercial trunk radio network runs from the CBD on Lagos Island out to
              these boundaries, on handheld, mobile or base station.
            </p>

            <div className="mt-8 divide-y divide-ink-950/8 rounded-2xl border border-ink-950/8 bg-white">
              {coverage.map((c, i) => (
                <div key={c.route} className="flex items-start gap-4 px-5 py-4">
                  <span className="mt-0.5 font-display text-sm font-extrabold text-gold-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-ink-950">{c.route}</p>
                    <p className="mt-0.5 text-sm text-ink-700">{c.extent}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md">
            <svg viewBox="0 0 400 400" className="h-full w-full">
              {[70, 130, 190].map((r) => (
                <circle
                  key={r}
                  cx={200}
                  cy={200}
                  r={r}
                  fill="none"
                  stroke="#7a1220"
                  strokeOpacity={0.15}
                  strokeDasharray="4 6"
                />
              ))}
              {coverage.map((c, i) => {
                const p = point(i, 190);
                return (
                  <g key={c.route}>
                    <line
                      x1={200}
                      y1={200}
                      x2={p.x}
                      y2={p.y}
                      stroke="#c99a2e"
                      strokeOpacity={0.35}
                    />
                    <circle cx={p.x} cy={p.y} r={5} fill="#7a1220" />
                  </g>
                );
              })}
              <circle cx={200} cy={200} r={10} fill="#c99a2e" />
              <circle cx={200} cy={200} r={16} fill="none" stroke="#c99a2e" strokeWidth={1.5} />
            </svg>

            <div className="absolute left-1/2 top-1/2 w-24 -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="font-display text-xs font-extrabold text-ink-950">CBD</p>
              <p className="text-[10px] font-semibold text-ink-700">Lagos Island</p>
            </div>

            {coverage.map((c, i) => {
              const p = point(i, 190);
              const short = c.route.replace("Lagos – ", "").replace(" Expressway", "");
              return (
                <div
                  key={c.route}
                  className="absolute w-28 -translate-x-1/2 -translate-y-1/2 text-center"
                  style={{ left: `${(p.x / 400) * 100}%`, top: `${(p.y / 400) * 100}%` }}
                >
                  <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-ink-900 shadow-sm ring-1 ring-ink-950/8">
                    {short}
                  </span>
                </div>
              );
            })}

            <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-medium uppercase tracking-wide text-ink-700/50">
              Illustrative coverage map — not to scale
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useMemo } from "react";

function formatDKK(n) {
  if (n === null || n === undefined) return "—";
  return n.toLocaleString("da-DK", { maximumFractionDigits: 0 }) + " kr";
}

function InfoTip({ text }) {
  const [show, setShow] = useState(false);
  return (
    <span className="relative inline-block ml-1">
      <button onClick={() => setShow(!show)}
        className="text-gray-400 hover:text-gray-600 text-xs font-bold w-4 h-4 rounded-full border border-gray-300 inline-flex items-center justify-center"
        style={{ fontSize: "10px", lineHeight: 1 }}>?</button>
      {show && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setShow(false)}></div>
          <div className="absolute z-50 bottom-6 left-1/2 -translate-x-1/2 w-64 bg-gray-900 text-white text-xs rounded-lg p-3 shadow-lg leading-relaxed">
            {text}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </>
      )}
    </span>
  );
}

function Card({ children, className = "" }) {
  return <div className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}>{children}</div>;
}

export default function VehicleComparison() {
  const [elPrice, setElPrice] = useState(2.1);
  const [annualKm, setAnnualKm] = useState(22000);
  const [wallboxCost, setWallboxCost] = useState(12000);
  const [repairTrend, setRepairTrend] = useState("rising");
  const [dieselPrice, setDieselPrice] = useState(12.5);
  const [pv5Insurance, setPv5Insurance] = useState(650);
  const [showExplainer, setShowExplainer] = useState(true);

  const calc = useMemo(() => {
    const months = 48;
    const wallboxMonthly = wallboxCost / months;
    const repairYears = [43972, 15353, 45178];
    const avgRepair = repairYears.reduce((a, b) => a + b, 0) / repairYears.length;
    const monthlyRepair = (repairTrend === "rising" ? avgRepair * 1.15 : avgRepair) / 12;
    const peugeot = {
      fuel: ((annualKm / 100) * 6.5 * dieselPrice) / 12,
      insurance: 558,
      roadTax: 5600 / 12,
      repairs: monthlyRepair,
    };
    peugeot.total = peugeot.fuel + peugeot.insurance + peugeot.roadTax + peugeot.repairs;
    const makeEv = (name, tag, monthlyPay, deposit, depositExtra, consumption, range, dcCharge, insIncluded, separateIns) => {
      const elCost = ((annualKm / 100) * consumption * elPrice) / 12;
      const insurance = insIncluded ? 0 : separateIns;
      const roadTax = 920 / 12;
      const depAmort = (deposit + depositExtra) / months;
      const m = {
        lease: monthlyPay, depositAmort: depAmort, electricity: elCost,
        insurance, roadTax, wallbox: wallboxMonthly,
      };
      m.total = m.lease + m.depositAmort + m.electricity + m.insurance + m.roadTax + m.wallbox;
      return { name, tag, monthlyPay, deposit, depositExtra, consumption, range, dcCharge, insIncluded, monthly: m, total48: m.total * months, delta: m.total - peugeot.total };
    };
    const pv5 = makeEv("Kia PV5 Upgrade", "Primary Choice", 4495, 29995, 2500, 19.3, 412, "150 kW", false, pv5Insurance);
    const buzzLife = makeEv("ID. Buzz Lang Life", "Premium Alternative", 5057, 45000, 0, 20.3, 469, "200 kW", true, 0);
    const buzzStyle = makeEv("ID. Buzz Lang Style", "Premium+", 6357, 45000, 0, 20.6, 462, "200 kW", true, 0);
    const evs = [pv5, buzzLife, buzzStyle];
    const lowestIdx = evs.reduce((bi, ev, i) => ev.monthly.total < evs[bi].monthly.total ? i : bi, 0);
    const pv5NoIns = pv5.monthly.total - pv5Insurance;
    const breakEvenIns = Math.round(buzzLife.monthly.total - pv5NoIns);
    return { peugeot, evs, lowestIdx, months, breakEvenIns };
  }, [elPrice, annualKm, wallboxCost, repairTrend, dieselPrice, pv5Insurance]);

  const accentText = ["text-blue-600", "text-emerald-600", "text-violet-600"];
  const accentBorder = ["border-blue-300", "border-emerald-300", "border-violet-300"];
  const accentBg = ["bg-blue-50", "bg-emerald-50", "bg-violet-50"];

  return (
    <div style={{ fontFamily: "'IBM Plex Sans', 'Segoe UI', system-ui, sans-serif" }}
      className="w-full max-w-5xl mx-auto px-4 py-6 md:px-8 md:py-8">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Vehicle Replacement Analysis</h1>
        <p className="text-gray-500 mt-1 text-sm">48-month total cost of ownership · All figures in DKK</p>
      </div>
      {showExplainer && (
        <Card className="mb-6 p-4 md:p-5 bg-sky-50/60 border-sky-200">
          <div className="flex justify-between items-start">
            <h2 className="text-sm font-bold text-gray-900 mb-3">How to read this page</h2>
            <button onClick={() => setShowExplainer(false)}
              className="text-gray-400 hover:text-gray-600 text-xs px-2 py-1 rounded hover:bg-sky-100 transition-colors flex-shrink-0">Hide</button>
          </div>
          <div className="text-sm text-gray-700 space-y-3 leading-relaxed">
            <p>We're comparing <span className="font-semibold">keeping the Peugeot</span> vs. leasing one of two electric vehicles: the <span className="font-semibold text-blue-600">Kia PV5</span> (our primary choice) or the <span className="font-semibold text-emerald-600">VW ID. Buzz</span> (the premium alternative). All costs are shown as a <span className="font-semibold">monthly all-in number</span> so you can compare apples to apples.</p>
            <p><span className="font-semibold">What "all-in" means:</span> Every cost is included. For the Peugeot, that's fuel, insurance, road tax, and average repairs. For the EVs, it's the lease payment, the upfront deposit spread across 48 months, electricity, insurance (separate for the Kia, bundled for the Buzz), road tax, and even the cost of installing a home charger.</p>
            <p><span className="font-semibold">Play with the sliders</span> in the gray box below to see how the numbers change. The most interesting ones to try:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs mt-2">
              <div className="bg-white rounded-lg p-2.5 border border-sky-100"><span className="font-semibold">PV5 insurance:</span> We estimated 650 DKK/mo since it's not included in the Kia lease. If we get a real quote that's lower, the Kia gets even cheaper.</div>
              <div className="bg-white rounded-lg p-2.5 border border-sky-100"><span className="font-semibold">Repair trend:</span> "Rising +15%" assumes the Peugeot's repair costs keep going up. "Stable" uses the last 3 years as-is. Either way, it's a lot.</div>
              <div className="bg-white rounded-lg p-2.5 border border-sky-100"><span className="font-semibold">Annual km:</span> More driving makes EVs look better (electricity is much cheaper than diesel per km).</div>
              <div className="bg-white rounded-lg p-2.5 border border-sky-100"><span className="font-semibold">Electricity price:</span> Denmark cut the electricity tax in 2026, so 2.10 DKK/kWh is a reasonable starting point for home charging.</div>
            </div>
            <p className="text-xs text-gray-500 mt-2">The bottom line: both EVs cost more per month than the Peugeot's "average," but the Peugeot's average hides huge swings. In 2023 and 2025, repairs alone were over 43,000 DKK each year. An EV lease converts that unpredictable expense into a fixed monthly payment.</p>
          </div>
        </Card>
      )}
      {!showExplainer && (
        <div className="mb-4">
          <button onClick={() => setShowExplainer(true)} className="text-xs text-sky-600 hover:text-sky-800 underline">Show "How to read this page"</button>
        </div>
      )}
      <Card className="mb-6 p-4 md:p-5">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Adjust Assumptions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {[
            { label: "Annual km", min: 15000, max: 30000, step: 1000, val: annualKm, set: setAnnualKm, fmt: v => v.toLocaleString("da-DK") + " km" },
            { label: "Electricity (DKK/kWh)", min: 1.5, max: 3.5, step: 0.1, val: elPrice, set: setElPrice, fmt: v => v.toFixed(1) + " kr" },
            { label: "Diesel (DKK/L)", min: 10, max: 16, step: 0.5, val: dieselPrice, set: setDieselPrice, fmt: v => v.toFixed(1) + " kr" },
            { label: "Wallbox install", min: 5000, max: 25000, step: 1000, val: wallboxCost, set: setWallboxCost, fmt: v => formatDKK(v) },
          ].map(s => (
            <div key={s.label}>
              <label className="block text-xs text-gray-500 mb-1">{s.label}</label>
              <input type="range" min={s.min} max={s.max} step={s.step} value={s.val}
                onChange={e => s.set(Number(e.target.value))} className="w-full accent-gray-800" />
              <div className="text-sm font-semibold text-gray-800 mt-1">{s.fmt(s.val)}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
          <div>
            <label className="block text-xs text-gray-500 mb-1">PV5 insurance (DKK/mo)<InfoTip text="The Kia lease excludes insurance. Adjust based on actual quotes." /></label>
            <input type="range" min={350} max={900} step={25} value={pv5Insurance}
              onChange={e => setPv5Insurance(Number(e.target.value))} className="w-full accent-blue-600" />
            <div className="text-sm font-semibold text-blue-600 mt-1">{formatDKK(pv5Insurance)}/mo</div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Repair trend<InfoTip text="'Rising' adds 15% to the 3-year avg. 2 of 3 full years exceeded 43k DKK." /></label>
            <div className="flex gap-2 mt-2">
              {["stable", "rising"].map(v => (
                <button key={v} onClick={() => setRepairTrend(v)}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${repairTrend === v ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{v === "rising" ? "Rising +15%" : "Stable"}</button>
              ))}
            </div>
          </div>
          <div className="col-span-2 flex items-center">
            <div className="text-xs text-gray-400 leading-relaxed bg-gray-50 rounded-lg p-3">
              <span className="font-semibold text-gray-600">Insurance break-even:</span> PV5 and Buzz Life cost the same when PV5 insurance is ~<span className="font-bold text-blue-600">{formatDKK(calc.breakEvenIns)}/mo</span>. Below that, PV5 wins.
            </div>
          </div>
        </div>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="p-4 md:p-5 border-2 border-orange-200 bg-orange-50/40">
          <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">Current Vehicle</span>
          <h3 className="font-bold text-gray-900 mt-1 leading-tight">Peugeot 5008</h3>
          <p className="text-xs text-gray-400 mb-4">2013 · 1.6 HDi Diesel · Auto</p>
          <div className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">{formatDKK(Math.round(calc.peugeot.total))}</div>
          <p className="text-xs text-gray-400 mb-4">per month · all-in</p>
          <div className="space-y-2 text-xs border-t border-orange-200 pt-3">
            {[["Fuel", calc.peugeot.fuel], ["Insurance", calc.peugeot.insurance], ["Road tax", calc.peugeot.roadTax]].map(([l, v]) => (
              <div key={l} className="flex justify-between"><span className="text-gray-500">{l}</span><span className="font-medium text-gray-700">{formatDKK(Math.round(v))}</span></div>
            ))}
            <div className="flex justify-between"><span className="text-gray-500">Repairs (avg.)</span><span className="font-semibold text-orange-600">{formatDKK(Math.round(calc.peugeot.repairs))}</span></div>
          </div>
          <div className="mt-4 pt-3 border-t border-orange-200 space-y-1 text-xs">
            <div className="flex justify-between"><span className="text-gray-400">48-mo total</span><span className="font-bold text-gray-700">{formatDKK(Math.round(calc.peugeot.total * 48))}</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Residual value</span><span className="text-gray-500">~{formatDKK(30000)} (declining)</span></div>
          </div>
        </Card>
        {calc.evs.map((ev, i) => {
          const isBest = i === calc.lowestIdx;
          return (
            <Card key={ev.name} className={`p-4 md:p-5 ${isBest ? `border-2 ${accentBorder[i]} ${accentBg[i]}/40` : ""}`}>
              <span className={`text-xs font-semibold uppercase tracking-wider ${accentText[i]}`}>{isBest ? "Lowest All-In" : ev.tag}</span>
              <h3 className="font-bold text-gray-900 mt-1 leading-tight">{ev.name}</h3>
              <p className="text-xs text-gray-400 mb-4">{ev.range} km · {ev.consumption} kWh/100km · {ev.dcCharge}</p>
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">{formatDKK(Math.round(ev.monthly.total))}</div>
              <p className="text-xs text-gray-400">per month · all-in incl. deposit</p>
              <p className={`text-xs font-bold mt-1 mb-4 ${ev.delta > 0 ? "text-red-500" : "text-emerald-600"}`}>{ev.delta > 0 ? "+" : ""}{formatDKK(Math.round(ev.delta))} vs. Peugeot</p>
              <div className="space-y-2 text-xs border-t border-gray-200 pt-3">
                <div className="flex justify-between"><span className="text-gray-500">Lease {ev.insIncluded ? "(incl. ins.)" : ""}</span><span className="font-medium">{formatDKK(ev.monthlyPay)}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Deposit (amort.)<InfoTip text={`${formatDKK(ev.deposit + ev.depositExtra)} upfront over 48 months`} /></span><span className="font-medium">{formatDKK(Math.round(ev.monthly.depositAmort))}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Electricity</span><span className="font-medium text-emerald-600">{formatDKK(Math.round(ev.monthly.electricity))}</span></div>
                {!ev.insIncluded && (<div className="flex justify-between"><span className="text-gray-500">Insurance<InfoTip text="Not included in Kia lease." /></span><span className="font-medium text-blue-600">{formatDKK(ev.monthly.insurance)}</span></div>)}
                <div className="flex justify-between"><span className="text-gray-500">Road tax</span><span className="font-medium">{formatDKK(Math.round(ev.monthly.roadTax))}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Wallbox (amort.)</span><span className="font-medium">{formatDKK(Math.round(ev.monthly.wallbox))}</span></div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200 text-xs space-y-1">
                <div className="flex justify-between"><span className="text-gray-400">48-mo total</span><span className="font-bold text-gray-700">{formatDKK(Math.round(ev.total48))}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Upfront cash</span><span className="text-gray-500">{formatDKK(ev.deposit + ev.depositExtra)}</span></div>
              </div>
            </Card>
          );
        })}
      </div>
      <Card className="mb-6 p-4 bg-blue-50/50 border-blue-100">
        <div className="flex gap-3 items-start">
          <div className="text-blue-500 text-lg mt-0.5 flex-shrink-0">&#9432;</div>
          <div className="text-sm text-gray-700">
            <p className="font-semibold text-gray-900 mb-1">Upfront cash comparison</p>
            <p>PV5: <span className="font-bold">{formatDKK(32495)}</span> (29,995 + 2,500 depositum) · Buzz Life/Style: <span className="font-bold">{formatDKK(45000)}</span> · Difference: <span className="font-bold">{formatDKK(12505)}</span> less with the Kia.</p>
          </div>
        </div>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card className="p-4 md:p-5">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Energy Cost</h2>
          {[
            { label: "Diesel (Peugeot)", val: calc.peugeot.fuel, color: "bg-orange-400", sub: `6.5 L/100km × ${dieselPrice.toFixed(1)} DKK/L` },
            { label: "Kia PV5", val: calc.evs[0].monthly.electricity, color: "bg-blue-400", sub: `19.3 kWh/100km × ${elPrice.toFixed(1)} DKK/kWh` },
            { label: "ID. Buzz Life", val: calc.evs[1].monthly.electricity, color: "bg-emerald-400", sub: `20.3 kWh/100km × ${elPrice.toFixed(1)} DKK/kWh` },
          ].map(r => (
            <div key={r.label} className="mb-3">
              <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">{r.label}</span><span className="font-semibold">{formatDKK(Math.round(r.val))}/mo</span></div>
              <div className="w-full bg-gray-100 rounded-full h-2.5"><div className={`${r.color} h-2.5 rounded-full transition-all`} style={{ width: `${Math.min(100, (r.val / Math.max(calc.peugeot.fuel, 1)) * 100)}%` }}></div></div>
              <p className="text-xs text-gray-400 mt-0.5">{r.sub}</p>
            </div>
          ))}
          <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">Monthly energy saving: <span className="font-bold text-emerald-600">{formatDKK(Math.round(calc.peugeot.fuel - calc.evs[0].monthly.electricity))}</span></div>
        </Card>
        <Card className="p-4 md:p-5">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Peugeot Repair History</h2>
          {[{ year: "2023", cost: 43972 }, { year: "2024", cost: 15353 }, { year: "2025", cost: 45178 }, { year: "2026 (YTD Mar)", cost: 17155 }].map(r => (
            <div key={r.year} className="mb-3">
              <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">{r.year}</span><span className="font-semibold">{formatDKK(r.cost)}</span></div>
              <div className="w-full bg-gray-100 rounded-full h-2.5"><div className={`h-2.5 rounded-full ${r.cost > 35000 ? "bg-red-400" : "bg-orange-300"}`} style={{ width: `${Math.min(100, (r.cost / 50000) * 100)}%` }}></div></div>
            </div>
          ))}
          <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
            <p>3-year avg: <span className="font-bold text-orange-600">{formatDKK(Math.round((43972 + 15353 + 45178) / 3))}/yr</span></p>
            <p className="mt-1">Alternating high/low pattern. 2026 at {formatDKK(17155)} with ~9 months remaining.</p>
          </div>
        </Card>
      </div>
      <Card className="p-4 md:p-5 mb-6">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Key Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { n: "1", t: "Repair costs exceed the car's value", b: `~${formatDKK(43972+15353+45178+17155)} since 2023, on a car worth ${formatDKK(30000)}. Each year is a coin flip between a 15k and a 45k bill.` },
            { n: "2", t: "The PV5 is the cost leader", b: `The Kia comes in ~${formatDKK(Math.round(Math.abs(calc.evs[1].monthly.total - calc.evs[0].monthly.total)))}/mo cheaper than the Buzz Life, and requires ${formatDKK(12505)} less upfront. The Buzz buys you more space and faster DC charging.` },
            { n: "3", t: "Both EVs cost more than the Peugeot (on paper)", b: `But in a bad repair year (43k+), the Peugeot costs ~${formatDKK(Math.round((45000/12) + calc.peugeot.fuel + calc.peugeot.insurance + calc.peugeot.roadTax))}/mo. An EV converts that gamble into a fixed, predictable payment.` },
          ].map(item => (
            <div key={item.n} className="flex gap-3">
              <div className="text-2xl font-black text-gray-200 leading-none">{item.n}</div>
              <div><p className="font-semibold text-gray-900 text-sm mb-1">{item.t}</p><p className="text-xs text-gray-500 leading-relaxed">{item.b}</p></div>
            </div>
          ))}
        </div>
      </Card>
      <Card className="p-4 md:p-5 bg-gray-900 text-white border-gray-800">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Still To Evaluate</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-sm">
          {["Second-row comfort: 3 × 180cm teenagers side-by-side", "Sälen winter trip: 800 km in sub-zero, charging stops", "Tow hitch availability and towing capacity", "Lease vs. Buy: depreciation hedge vs. equity", "Kia PV5 delivery timeline and early reviews", "DC charger network on E45/E6 corridor to Sälen"].map((item, i) => (
            <div key={i} className="flex items-start gap-2"><span className="text-yellow-400 mt-0.5">&#9744;</span><span className="text-gray-300">{item}</span></div>
          ))}
        </div>
      </Card>
      <p className="text-xs text-gray-400 mt-4 text-center">Diesel {dieselPrice.toFixed(1)} DKK/L · Peugeot 6.5 L/100km · Electricity {elPrice.toFixed(1)} DKK/kWh · EV road tax 920 DKK/yr · All leases 48 mo / 30,000 km/yr</p>
    </div>
  );
}

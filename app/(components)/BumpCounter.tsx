
'use client';
import { useEffect, useState } from 'react';

export default function BumpCounter({ ratePerSec=1000 }: { ratePerSec?: number }) {
  const [base, setBase] = useState(0);
  const [start, setStart] = useState(Date.now());
  const [, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t=>t+1), 1000/12);
    return () => clearInterval(id);
  }, []);
  const amount = base + (Date.now() - start)/1000 * ratePerSec;

  return (
    <div className="card mt-4">
      <div className="flex items-baseline gap-3">
        <div className="text-4xl font-black">${amount.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2})} enjoyed so far</div>
        <button className="btn btn-ghost" onClick={()=>{ setBase(0); setStart(Date.now()); }}>reset</button>
      </div>
      <div className="flex flex-wrap gap-2 mt-2 items-center">
        {[5,20,100,1000].map(n=>(
          <button key={n} className="btn btn-ghost" onClick={()=>setBase(b=>b+n)}>+ ${n}</button>
        ))}
        <span className="text-[var(--muted)]">Auto: ${ratePerSec.toLocaleString()}/sec</span>
      </div>
    </div>
  );
}

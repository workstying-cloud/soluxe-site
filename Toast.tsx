
'use client';
import { useEffect, useState } from 'react';

export default function Toast({ msg }: { msg: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (msg) { setShow(true); const t = setTimeout(()=>setShow(false), 1200); return ()=>clearTimeout(t); }
  }, [msg]);
  if (!msg || !show) return null;
  return <div className="toast" role="status" aria-live="polite">{msg}</div>;
}

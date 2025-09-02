
'use client';
import { qrURL, schemeFor } from "@/lib/utils";
import { useState } from "react";

export default function WalletCard({ chain, address }: { chain: string; address: string }) {
  const [toast, setToast] = useState("");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setToast("Copied");
      setTimeout(()=>setToast(""), 1200);
    } catch { /* no-op */ }
  };
  const open = () => {
    const scheme = schemeFor(chain);
    if (scheme) window.location.href = scheme + address;
  };
  return (
    <div className="card flex gap-4 items-center">
      <img className="w-[108px] h-[108px] bg-white rounded-xl p-2 border border-black/10" src={qrURL(address)} alt={`${chain} QR`} />
      <div className="flex-1">
        <div className="font-black mb-1">{chain}</div>
        <div className="font-mono text-sm break-all text-[#dfe1ff]">{address}</div>
        <div className="flex gap-2 mt-2">
          <button className="btn btn-primary" onClick={copy}>Copy</button>
          <button className="btn btn-ghost" onClick={open}>Open in wallet</button>
        </div>
      </div>
      {toast && <div className="toast" role="status" aria-live="polite">{toast}</div>}
    </div>
  );
}


'use client';
import { MEDIA } from "@/lib/media";

export default function Carousel() {
  return (
    <div className="card mt-4">
      <h2 className="font-black mb-2">Scenes from the lifestyle</h2>
      <div className="flex gap-4 overflow-x-auto py-2 snap-x snap-mandatory">
        {MEDIA.map((m, i) => (
          <div key={i} className="snap-start w-[360px] h-[200px] rounded-xl overflow-hidden relative flex-none">
            {m.type === "image" ? (
              <img src={m.src} alt={m.title} loading="lazy" className="w-full h-full object-cover" />
            ) : (
              <video autoPlay muted loop playsInline poster={"poster" in m ? m.poster : undefined} className="w-full h-full object-cover">
                <source src={m.src} type="video/mp4" />
              </video>
            )}
            <div className="absolute left-2 bottom-2 bg-black/50 px-2 py-1 rounded-lg text-sm font-bold">{m.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

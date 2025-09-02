
'use client';
import BumpCounter from "./(components)/BumpCounter";
import WalletCard from "./(components)/WalletCard";
import Carousel from "./(components)/Carousel";
import Section from "./(components)/Section";
import { WALLETS } from "@/lib/wallets";

export default function Page() {
  const tweetText = 'If you are rich and do not know what to do with your money I will gladly enjoy it for you. BTC ETH SOL TRX accepted.';
  const copyAll = async () => {
    const text = WALLETS.map(w=>w.address).join('\n');
    await navigator.clipboard.writeText(text);
    alert("Copied all wallets");
  };

  return (
    <main>
      {/* Ocean background video */}
      <video className="fixed inset-0 -z-10 w-full h-full object-cover" autoPlay muted loop playsInline
        poster="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1920">
        <source src="https://videos.pexels.com/video-files/854317/854317-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/30 to-black/60" />

      <div className="max-w-[1100px] mx-auto p-6">
        {/* HERO */}
        <h1 className="text-5xl sm:text-6xl font-black leading-[1.05]">Soluxe — We enjoy your money for you</h1>
        <p className="text-muted mt-2 text-lg text-[var(--muted)]">
          Too much money and not enough time? We specialize in the difficult task of enjoying it properly — so you don’t have to. BTC, ETH, SOL, TRX accepted.
        </p>
        <div className="flex flex-wrap gap-2 items-center mt-3">
          <a className="btn btn-primary" href="#wallets">Send crypto</a>
          <a className="btn btn-ghost" target="_blank" rel="noopener"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`}>Tweet this</a>
          <button className="btn btn-ghost" onClick={copyAll}>Copy all wallets</button>
        </div>

        {/* COUNTER */}
        <BumpCounter ratePerSec={1000} />

        {/* WALLETS */}
        <Section id="wallets">
          <div className="card mt-4">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
              {WALLETS.map((w) => (
                <WalletCard key={w.address} chain={w.chain} address={w.address} />
              ))}
            </div>
          </div>
        </Section>

        {/* CAROUSEL */}
        <Carousel />

        {/* FOOTER + DISCLAIMER */}
        <footer className="text-center text-[var(--muted)] mt-6 text-sm">
          © {new Date().getFullYear()} Soluxe — “Because someone has to.”
          <div className="text-xs mt-1">powered by Solcray Luxe</div>
        </footer>
        <div className="max-w-[900px] mx-auto text-center text-xs text-[#cdd0df] mt-2">
          ⚠️ Disclaimer: Contributions sent here are voluntary gifts. They are <b>non tax deductible</b> and provide no financial return, ownership, or services in exchange.
        </div>
      </div>
    </main>
  );
}

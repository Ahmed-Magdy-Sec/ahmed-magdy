import { site } from "@/lib/content";
export default function Hero() {
  return <section id="home" className="relative min-h-screen overflow-hidden border-b border-line pt-20">
    <div className="scanline" />
    <div className="wrap relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center text-center">
      <div className="reveal max-w-5xl">
        {site.status.available && <p className="mb-7 inline-flex items-center gap-2 border border-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[.18em] text-mute"><span className="h-2 w-2 animate-pulse rounded-full bg-red" />{site.status.text}</p>}
        <p className="eyebrow">// Cybersecurity Student &amp; Junior Penetration Tester</p>
        <h1 className="mt-6 text-[clamp(3.8rem,5vw,8rem)] font-black leading-[.78] tracking-[-.08em]">AHMED</h1>
        <h1 className="mt-2 text-[clamp(3.8rem,5vw,8rem)] font-black leading-[.78] tracking-[-.08em] red-text">MAGDY.</h1>
        <p className="mx-auto mt-10 max-w-3xl text-2xl font-medium text-white/75 sm:text-3xl">I build security through <span className="red-text">offensive thinking.</span></p>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-mute sm:text-base">Cybersecurity student focused on Web Application, Network, and Mobile Penetration Testing, Vulnerability Assessment, and practical security testing.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3"><a href="#projects" className="btn btn-red">View My Work →</a><a href="#contact" className="btn btn-ghost">Get In Touch ↗</a>{site.linkedin&&<a href={site.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">LinkedIn ↗</a>}</div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-line bg-black/70 py-4"><div className="marquee flex gap-10 font-mono text-[11px] uppercase tracking-[.22em] text-mute">{[...site.stack,...site.stack].map((x,i)=><span key={i} className="whitespace-nowrap">{x} <b className="ml-10 red-text">/</b></span>)}</div></div>
  </section>;
}

"use client";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

export default function Navbar(){
  const [open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false);
  useEffect(()=>{const f=()=>setScrolled(window.scrollY>20);f();window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);
  return <header className={`fixed inset-x-0 top-0 z-40 transition ${scrolled||open?"border-b border-line bg-black/90 backdrop-blur-md":""}`}>
    <nav className="wrap flex h-20 items-center justify-between">
      <a href="#home" className="font-mono text-sm font-bold tracking-tight">&lt; <span className="red-text">Ahmed</span> /&gt;</a>
      <ul className="hidden items-center gap-7 lg:flex">
        {nav.map(n=><li key={n.href}><a href={n.href} className="font-mono text-[11px] uppercase tracking-widest text-white/75 hover:text-white">{n.label}</a></li>)}
        <li><a href="#contact" className="btn btn-red !px-5 !py-2 text-[10px]">Let&apos;s Talk ↗</a></li>
      </ul>
      <button onClick={()=>setOpen(!open)} className="lg:hidden" aria-label="Toggle menu"><span className="font-mono text-xs uppercase red-text">{open?"Close":"Menu"}</span></button>
    </nav>
    {open&&<div className="border-t border-line bg-black px-5 pb-5 lg:hidden"><div className="wrap pt-3">{nav.map(n=><a key={n.href} href={n.href} onClick={()=>setOpen(false)} className="block border-b border-line py-4 font-mono text-xs uppercase tracking-widest text-mute">{n.label}</a>)}<a href="#contact" onClick={()=>setOpen(false)} className="btn btn-red mt-4 w-full">Let&apos;s Talk</a></div></div>}
  </header>
}

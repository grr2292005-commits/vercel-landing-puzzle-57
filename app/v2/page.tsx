import Link from "next/link";

export default function Version2() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Futuristic Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-lg bg-black">
                <span className="text-xl font-bold text-cyan-400">P</span>
              </div>
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
              Puzzle v2
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-zinc-500">
            <Link href="/" className="hover:text-cyan-400 transition-all border-b border-transparent hover:border-cyan-400 pb-1">Version 1</Link>
            <Link href="/v2" className="text-cyan-400 border-b border-cyan-400 pb-1">Version 2</Link>
            <Link href="/v3" className="hover:text-cyan-400 transition-all border-b border-transparent hover:border-cyan-400 pb-1">Version 3</Link>
            <a href="#" className="hover:text-purple-400 transition-all">Network</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
              Login
            </button>
            <button className="group relative overflow-hidden rounded-full bg-cyan-500 px-6 py-3 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-cyan-400 active:scale-95">
              <span className="relative z-10 text-black">Establish Link</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-transform group-hover:translate-x-0"></div>
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Futuristic Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          {/* Background Grid & FX */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="absolute top-1/4 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 bg-cyan-500/10 blur-[120px] rounded-full"></div>
          
          <div className="mx-auto max-w-7xl px-6 text-center">
            <div className="mx-auto mb-10 w-fit rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 backdrop-blur-md">
              System Online // Protocol v4.2.0
            </div>
            
            <h1 className="mb-8 text-6xl font-black uppercase tracking-tighter sm:text-8xl lg:text-9xl">
              <span className="block text-white leading-[0.8]">Forge the</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-cyan-700 leading-[0.8] drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">Future.</span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg font-medium text-zinc-500 md:text-xl lg:px-8 mb-12">
              Next-generation infrastructure for the architects of the digital realm. 
              Sub-millisecond latency, immutable deployments, autonomous scaling.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto overflow-hidden rounded-xl bg-white px-10 py-5 text-sm font-black uppercase tracking-widest text-black transition-all hover:bg-cyan-50 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95">
                Initialize Project
              </button>
              <button className="w-full sm:w-auto rounded-xl border-2 border-zinc-800 bg-black/50 px-10 py-[18px] text-sm font-black uppercase tracking-widest text-white backdrop-blur-md transition-all hover:border-cyan-500/50 hover:text-cyan-400 active:scale-95">
                View Spec
              </button>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Scan Below</span>
            <div className="h-12 w-[2px] bg-gradient-to-b from-cyan-500 to-transparent"></div>
          </div>
        </section>

        {/* Feature Matrix */}
        <section className="py-32 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
              <div className="max-w-xl">
                <h2 className="text-4xl font-black uppercase tracking-tighter text-white sm:text-5xl mb-6 italic">Neural Stack</h2>
                <p className="text-zinc-500 text-lg leading-relaxed">
                  Engineered for maximum output. Our proprietary edge-mesh architecture 
                  eliminates bottlenecks and secures your data across the global node network.
                </p>
              </div>
              <div className="h-[2px] flex-1 bg-zinc-900 hidden lg:block mb-6 mx-12"></div>
              <div className="text-4xl font-black text-zinc-800 select-none hidden lg:block mb-3">01 // 03</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="relative group overflow-hidden rounded-3xl border border-zinc-900 bg-black p-10 transition-all hover:border-cyan-500/20">
                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                  <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
                </div>
                <div className="mb-8 w-fit rounded-lg bg-zinc-900 p-4 text-cyan-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">Pulse Analysis</h3>
                <p className="text-zinc-500 leading-relaxed">
                  Real-time neural telemetry for all active nodes. Predictive failure recovery and performance tuning.
                </p>
                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  Access Data <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative group overflow-hidden rounded-3xl border border-zinc-900 bg-black p-10 transition-all hover:border-purple-500/20">
                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity text-purple-400 font-mono text-[10px]">
                  [SECURED]
                </div>
                <div className="mb-8 w-fit rounded-lg bg-zinc-900 p-4 text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">Quantum Encryption</h3>
                <p className="text-zinc-500 leading-relaxed">
                  End-to-end holographic security protocols. Your keys are never stored, only materialized when needed.
                </p>
                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  View Specs <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative group overflow-hidden rounded-3xl border border-zinc-900 bg-black p-10 transition-all hover:border-cyan-500/20">
                <div className="mb-8 w-fit rounded-lg bg-zinc-900 p-4 text-cyan-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">Hyper-Grid</h3>
                <p className="text-zinc-500 leading-relaxed">
                  Distribute computation across 128 edge locations simultaneously. Pure horizontal scalability without limits.
                </p>
                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  Network Map <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900 bg-black py-20">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-6">
            <span className="text-2xl font-black uppercase text-white italic">Puzzle</span>
            <div className="h-6 w-[1px] bg-zinc-800"></div>
            <p className="text-zinc-600 text-xs font-bold uppercase tracking-[0.2em]">C:\CORE_FS\OVERRIDE</p>
          </div>
          <div className="flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
            <a href="#" className="hover:text-cyan-400 transition-colors">Terminals</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

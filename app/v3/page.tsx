import Link from "next/link";

export default function Version3() {
  return (
    <div className="min-h-screen bg-[#FFF9F2] text-zinc-900 font-sans selection:bg-[#FFD93D] selection:text-black">
      {/* Playful Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
        <div className="flex h-16 items-center justify-between rounded-full border-2 border-zinc-900 bg-white px-8 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rotate-3 rounded-xl bg-[#FF6B6B] flex items-center justify-center border-2 border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
              <span className="text-white font-black text-xl">P</span>
            </div>
            <span className="text-xl font-black tracking-tight uppercase">Puzzle v3</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-bold uppercase tracking-wide">
            <a href="#" className="hover:text-[#4D96FF] transition-colors">Fun</a>
            <a href="#" className="hover:text-[#FF6B6B] transition-colors">About</a>
            <a href="#" className="hover:text-[#6BCB77] transition-colors">Playground</a>
          </div>

          <div>
            <button className="rounded-full border-2 border-zinc-900 bg-[#FFD93D] px-6 py-2 text-sm font-black uppercase shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              Join In!
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Playful Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center pt-32 pb-20 px-6">
          {/* Background Blobs */}
          <div className="absolute top-20 left-10 -z-10 h-64 w-64 rounded-full bg-[#6BCB77]/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 -z-10 h-80 w-80 rounded-full bg-[#4D96FF]/20 blur-3xl animate-bounce duration-[5000ms]"></div>
          
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-8 w-fit -rotate-2 rounded-lg border-2 border-zinc-900 bg-[#FF6B6B] px-4 py-1 text-xs font-black uppercase text-white shadow-[3px_3px_0px_0px_rgba(24,24,27,1)]">
              ✨ Fresh out of the oven! ✨
            </div>
            
            <h1 className="mb-8 text-6xl font-black uppercase tracking-tight sm:text-8xl lg:text-9xl leading-[0.9]">
              <span className="inline-block hover:scale-105 transition-transform cursor-default text-zinc-900">Build</span> <br />
              <span className="inline-block -rotate-1 skew-x-1 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#6BCB77]">Happily.</span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-xl font-bold leading-relaxed text-zinc-700 mb-12">
              Vercel Puzzle makes development feel like play. No more headaches, 
              just smooth sailing and high fives all around! 🎈
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto rounded-2xl border-2 border-zinc-900 bg-[#4D96FF] px-10 py-5 text-lg font-black uppercase text-white shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(24,24,27,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
                Get Started
              </button>
              <button className="w-full sm:w-auto rounded-2xl border-2 border-zinc-900 bg-white px-10 py-5 text-lg font-black uppercase text-zinc-900 shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] transition-all hover:bg-zinc-50 active:translate-x-0 active:translate-y-0 active:shadow-none">
                Learn Why
              </button>
            </div>
          </div>
        </section>

        {/* Feature playground */}
        <section className="py-32 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <h2 className="text-4xl font-black uppercase text-zinc-900 sm:text-5xl mb-4">Why it's Awesome</h2>
              <div className="mx-auto h-2 w-24 rounded-full bg-[#FFD93D] border-2 border-zinc-900"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Card 1 */}
              <div className="rounded-[2.5rem] border-2 border-zinc-900 bg-[#6BCB77]/10 p-10 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] transition-transform hover:-rotate-1">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl border-2 border-zinc-900 bg-[#6BCB77] shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                </div>
                <h3 className="text-2xl font-black uppercase text-zinc-900 mb-4">Bulletproof</h3>
                <p className="font-bold text-zinc-600 leading-relaxed">
                  Total peace of mind with 100% uptime and automatic backups. We've got your back, buddy!
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-[2.5rem] border-2 border-zinc-900 bg-[#FF6B6B]/10 p-10 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] transition-transform hover:rotate-1">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl border-2 border-zinc-900 bg-[#FF6B6B] shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 10-4 4-4-4"/></svg>
                </div>
                <h3 className="text-2xl font-black uppercase text-zinc-900 mb-4">Super Fast</h3>
                <p className="font-bold text-zinc-600 leading-relaxed">
                  Faster than a speeding penguin on a slide. We use magic (and edge nodes) to deliver content!
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-[2.5rem] border-2 border-zinc-900 bg-[#FFD93D]/10 p-10 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] transition-transform hover:-rotate-1">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl border-2 border-zinc-900 bg-[#FF6B6B] shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] bg-[#FFD93D]">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/><path d="M2 12h20"/><path d="m5 7-3 5 3 5"/><path d="m19 7 3 5-3 5"/></svg>
                </div>
                <h3 className="text-2xl font-black uppercase text-zinc-900 mb-4">Flexible</h3>
                <p className="font-bold text-zinc-600 leading-relaxed">
                  Fits your project like your favorite pair of fuzzy socks. Customizable to the moon and back!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 bg-white border-t-2 border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-4">
             <div className="h-8 w-8 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
              <span className="text-white font-black text-sm">P</span>
            </div>
            <p className="text-sm font-black uppercase">© 2026 FUN TIMES CO.</p>
          </div>
          <div className="flex items-center gap-8 text-xs font-black uppercase">
             <a href="#" className="hover:text-[#FF6B6B] transition-colors underline decoration-2 underline-offset-4">Privacy</a>
             <a href="#" className="hover:text-[#4D96FF] transition-colors underline decoration-2 underline-offset-4">Terms</a>
             <a href="#" className="hover:text-[#6BCB77] transition-colors underline decoration-2 underline-offset-4">Feedback</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

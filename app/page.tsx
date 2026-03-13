import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-100 selection:text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 dark:selection:bg-zinc-800">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-200/50 bg-white/70 backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-950/70">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-zinc-900 dark:bg-white flex items-center justify-center">
              <span className="text-white dark:text-black font-bold text-lg">V</span>
            </div>
            <span className="text-xl font-semibold tracking-tight">Vercel Puzzle</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <Link href="/" className="text-zinc-900 dark:text-zinc-50 border-b border-zinc-900 dark:border-zinc-50">Version 1</Link>
            <Link href="/v2" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors border-b border-transparent">Version 2</Link>
            <Link href="/v3" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors border-b border-transparent">Version 3</Link>
          </div>
          <div>
            <button className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <div className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 mb-8">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
              </span>
              Now available: Version 2.0
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-zinc-900 md:text-7xl dark:text-zinc-50 mb-6">
              The platform for <br />
              <span className="bg-gradient-to-r from-zinc-500 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-400 dark:to-zinc-100 italic">modern development</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 mb-10">
              Vercel Puzzle provides the speed and reliability developers need to create 
              the best user experiences on the web. Build, scale, and secure your apps with ease.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto rounded-full bg-zinc-900 px-8 py-4 text-base font-medium text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-lg shadow-zinc-200/50 dark:shadow-none">
                Start Deploying
              </button>
              <button className="w-full sm:w-auto rounded-full border border-zinc-200 bg-white px-8 py-4 text-base font-medium text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:hover:bg-zinc-900">
                View Demo
              </button>
            </div>
          </div>
          
          {/* Subtle Background Elements */}
          <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-zinc-100/50 blur-3xl rounded-full dark:bg-zinc-900/20"></div>
        </section>

        {/* Feature Grid */}
        <section className="py-24 border-t border-zinc-100 dark:border-zinc-900">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Built for scale</h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">Everything you need to deliver high-quality software.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Feature 1 */}
              <div className="group cursor-default">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-900 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-900 dark:text-white"><path d="m13 2-2 10h3L11 22h2"/></svg>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Lightning Fast</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Optimized for speed at every layer of the stack. From edge computing to global distribution.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group cursor-default">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-900 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-900 dark:text-white"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Secure by Design</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Enterprise-grade security built into every deployment. Automated SSL and DDoS protection.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group cursor-default">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-900 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-900 dark:text-white"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Insights Powered</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Deep analytics and monitoring to help you understand how your users interact with your apps.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-12 dark:border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-zinc-500 text-sm">
            © 2026 Vercel Puzzle Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50">Twitter</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50">GitHub</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

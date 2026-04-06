import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const featuredFragrances = [
    {
      name: "Amber & Cedar",
      notes: "Wormwood • Labdanum • Oud",
      price: "$185",
      badge: "Boutique Exclusive",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBo262AMZYFetoRgjJB-WRebQ2_toRGGWm0MAtomMe8G_XU2kyVMXXQ0cUpVc5AR6hbXxhj60-3GTeO3AaCRxL8vqZ4ZSYAk_zVsLpBCwycU7RKOjRUJelMSdIDlV1LJPtsrSgB-ejQAzfB8BxvfT0S1J8QHXi4oC4PdFOwoTSw2CwdOP1hnVzeg6WkZLLYo6bTLhoGJjvFkNyCJ6eRphB9PgDFMGRihaQtOEEvOx0LDFnei-F6iobDWoc4eCcAQ6jPvRCsnUbpi4I",
      alt: "Perfume bottle next to cedar wood and amber resin",
    },
    {
      name: "Rose de Mai",
      notes: "Grasse Rose • Musk • Lychee",
      price: "$210",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAEgrP7jcA9aqjZMEC_wMv8PGcsCgn2hdN99UwiUwNcsHrhndjaWFVn1fjD8W9CRG-umTLKMdj2AhjgbyOCEcav1Dsz6MP2CFyT9ohKNJWQK2Az3CyPMBQvmmMjN3bUtJ9WXPglmf1zK7d7KfQ12w_a2Ls1LRgzqut2Kj7fInpTkQ0mKmIKwqoakRs1BqQIMenOo0xnDeNCX1rhCHxXkecyrmrCV4u17ProCJKMxRpAH7OUvhmIvIRfMvIqGkkegLY5n-SiqaJnzPQ",
      alt: "Perfume bottle surrounded by rose petals and water droplets",
    },
    {
      name: "Midnight Santal",
      notes: "Sandalwood • Papyrus • Leather",
      price: "$195",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA6THD-zEBHmkxSLmSFSMbgr3Wn9EV9Ue8XVgHL938IKXilPY6M9Voxq8VHs3LH5WIcnw9nJXQHQao0bUcH0y_UIWc5hr6SP5YJlcAw1yT10HP5q507Q5nUzm5qc-uBvdicaVUhiu9ocde-Shf2PwE6EWHb4iFi_m3FABWRw-XfWJDRygizfFlGOd58H1-8CeGb2MduV2dseBRDqTh4MFl8kcSU-VNoXl7e6VMvBJwJ48sXXgqyTRv9zK8UYSdNfcH94-p74NfR-WI",
      alt: "Black perfume bottle on dark marble surface",
    },
  ];

  return (
    <div className="bg-stone-50 text-stone-900 selection:bg-red-800 selection:text-white">
      <nav className="fixed top-0 z-50 w-full bg-stone-50/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-6 py-5 md:px-8">
          <div className="flex items-center gap-8 md:gap-12">
            <a
              href="#"
              className="font-serif text-xl font-bold tracking-tight md:text-2xl"
            >
              SOLANO PARFUMS
            </a>

            <div className="hidden space-x-8 md:flex">
              <a
                href="#"
                className="font-serif text-sm uppercase tracking-tight opacity-70 transition hover:text-red-900 hover:opacity-100"
              >
                Perfumes
              </a>
              <a
                href="#"
                className="font-serif text-sm uppercase tracking-tight opacity-70 transition hover:text-red-900 hover:opacity-100"
              >
                Estuches
              </a>
              <a
                href="#"
                className="font-serif text-sm uppercase tracking-tight opacity-70 transition hover:text-red-900 hover:opacity-100"
              >
                Decants
              </a>
              <a
                href="#"
                className="font-serif text-sm uppercase tracking-tight opacity-70 transition hover:text-red-900 hover:opacity-100"
              >
                Perfumeros
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <button className="opacity-70 transition hover:opacity-100" aria-label="Search">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button
              className="scale-100 opacity-70 transition hover:opacity-100 active:scale-95"
              aria-label="Shopping bag"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <section className="relative flex min-h-[820px] w-full items-center justify-center overflow-hidden md:h-[921px]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArKxEygW8Qo0IXfm3VokirjaDG2v55dfBbjxARNCSpj1Z-5BkJ5H-GbXd5cdAWXpvMRfDzQCsIxbpusfP1QNvmpmYYDBmOlqvTZfSQb22fG2MTh20RPpKn5DputqX1ZRapFalPf1zMd4uyYKvIqubbP6OlLKyjTLFhFSYefYVLMAbcc8bRFgIAoJevClM_J65eVUE_ouRTm9x0cyGVffLGLtF3rkxmMquzKHq2uJiQGq5u-dGE8IJHbpv1UVmHDfm4mogAh86qU9g"
            alt="Luxury perfume bottle in a minimalist setting"
            className="absolute inset-0 h-full w-full object-cover brightness-95 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-50/40" />

          <div className="relative z-10 px-6 text-center">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-stone-900/60">
              The New Signature
            </p>
            <h1 className="font-serif text-5xl leading-none tracking-tight md:text-8xl">
              SOLANO Nº 07
              <br />
              <span className="italic font-normal">L&apos;Art de l&apos;Essence</span>
            </h1>

            <div className="mt-8 flex justify-center">
              <button className="group flex items-center bg-red-800 px-10 py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-red-900 md:px-12 md:py-5">
                Discover the Notes
                <span className="material-symbols-outlined ml-3 text-sm transition group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto max-w-[1920px]">
            <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-baseline md:justify-between">
              <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
                Fragancias Destacadas
              </h2>
              <p className="max-w-sm text-sm text-stone-900/60">
                Curated selections from our boutique archive, blending heritage
                extractions with modern olfactory science.
              </p>
            </div>

            <div className="no-scrollbar flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory">
              {featuredFragrances.map((fragrance) => (
                <article
                  key={fragrance.name}
                  className="group min-w-[300px] snap-start md:min-w-[450px]"
                >
                  <div className="relative mb-6 aspect-[3/4] overflow-hidden bg-stone-100">
                    <img
                      src={fragrance.image}
                      alt={fragrance.alt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    {fragrance.badge && (
                      <div className="absolute right-4 top-4 bg-stone-50/90 px-3 py-1 text-[10px] font-bold uppercase tracking-tight">
                        {fragrance.badge}
                      </div>
                    )}
                  </div>

                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-xl">{fragrance.name}</h3>
                      <p className="mb-4 mt-1 text-xs uppercase tracking-wider text-stone-900/50">
                        {fragrance.notes}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-red-900">
                      {fragrance.price}
                    </span>
                  </div>

                  <button className="w-full border border-stone-900/10 py-4 text-xs uppercase tracking-[0.2em] transition hover:bg-stone-900 hover:text-stone-50">
                    Add to Bag
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-stone-100 px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto grid max-w-[1920px] grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
            <div className="relative order-2 md:order-1">
              <div className="absolute -left-8 -top-8 h-40 w-40 border border-stone-900/10 md:-left-12 md:-top-12 md:h-64 md:w-64" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_eYtFlYqLPxL-B4Q406FHIxiyRsOJ_g-4N8gs6sriikwqGKBFn2tlJHXVO5nj8r4HW5Laa7L07P5xqxNSU-DuYA6ho1NDoG2lH8wrxXlrs0aLB0xJ1RYGiXI3bKXKKZ7JxtXRjrbsDHO1gLtY54pDLA8WbWXNZSRpCggY9VayVLPE83GJmd7sAgUKnR_lGkPV320wmEmBNOsuJx6cuowAN0fvCMo6vMmjDYfVlQjymAWRND6JARgoxKm1qalJcOTRlcZ5WDYhFMQ"
                alt="Winter collection visual"
                className="relative z-10 aspect-[4/5] w-full object-cover grayscale-[30%]"
              />
            </div>

            <div className="order-1 md:order-2">
              <p className="mb-8 text-xs uppercase tracking-[0.5em] text-red-900">
                Limited Edition
              </p>
              <h2 className="font-serif text-5xl leading-tight tracking-tight md:text-7xl">
                Colección de Invierno
              </h2>
              <p className="mb-10 mt-8 max-w-lg text-lg leading-relaxed text-stone-900/70">
                Cold winds and hearth-side warmth. A curated trio of scents
                designed for the shortest days and the longest nights.
                Featuring notes of frosted pine, spiced vanilla, and smoked
                birchwood.
              </p>
              <a href="#" className="group inline-flex items-center space-x-4">
                <span className="border-b border-red-900 pb-1 text-xs uppercase tracking-[0.2em] transition group-hover:text-red-900">
                  Shop the collection
                </span>
                <span className="material-symbols-outlined text-sm text-red-900 transition group-hover:translate-x-2">
                  chevron_right
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 px-6 py-32 text-center md:px-8 md:py-48">
          <div className="mx-auto max-w-4xl">
            <span className="material-symbols-outlined mb-8 text-4xl text-stone-900/20">
              format_quote
            </span>
            <blockquote className="mb-10 font-serif text-4xl italic leading-tight md:text-6xl">
              &quot;Scent is the most intense form of memory.&quot;
            </blockquote>
            <div className="mx-auto mb-10 h-px w-12 bg-red-900" />
            <p className="text-xs uppercase tracking-[0.5em] text-stone-900/50">
              Founded in Grasse • Perfected in Seoul
            </p>
          </div>
        </section>

        <section className="relative flex min-h-[520px] items-center justify-center px-6 md:h-[600px]">
          <div className="absolute inset-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY7p0QbZK78taR0VAkeMLgjNpaY1faT1T8v73WpGhCcy8CVvvOidduZREYg4tQXKD1kmPe6Gi0A02wCoTL5ZOghfA3UXC3BVW8h1M5VArIUQTdcjOMh6HOwMAdNdeSUetJfCaHPSr_kpVvqegDDWVncUVcUyCJYFzS62EZX6ZBJ5Lzympzqa-CcviN65stzn2ECkWjeDiwzpDzlxIHi8NWYtegGDDn3VzXJTHSd6Gl7isJmvwZnwtonz1YRsHD0wfcHTeTVUPVQ_M"
              alt="Mist background"
              className="h-full w-full object-cover opacity-20 grayscale"
            />
          </div>

          <div className="relative z-10 w-full max-w-2xl border border-stone-900/5 bg-stone-50/80 px-6 py-14 text-center shadow-2xl backdrop-blur-3xl md:px-8 md:py-20">
            <h3 className="font-serif text-3xl">Join the Archives</h3>
            <p className="mb-10 mt-4 text-xs uppercase tracking-[0.2em] text-stone-900/60">
              Receive early access to seasonal extractions and private events.
            </p>

            <form className="mx-auto flex max-w-md flex-col space-y-8">
              <div>
                <input
                  type="email"
                  placeholder="YOUR EMAIL ADDRESS"
                  className="w-full border-0 border-b border-stone-900/20 bg-transparent px-0 py-4 text-xs uppercase tracking-[0.2em] focus:border-red-900 focus:outline-none focus:ring-0"
                />
              </div>
              <button
                type="submit"
                className="bg-red-800 py-5 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-red-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-stone-900/10 bg-stone-100">
        <div className="grid grid-cols-1 gap-12 px-8 py-16 md:grid-cols-3 md:px-12 md:py-20">
          <div className="space-y-8">
            <h4 className="font-serif text-xl">SOLANO PARFUMS</h4>
            <p className="text-xs uppercase leading-relaxed tracking-[0.2em] text-stone-900/60">
              Crafting memories through the art of olfactory science since
              2012. Our laboratory focuses on raw botanical extracts and
              sustainable harvesting.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-xs uppercase tracking-[0.2em] text-stone-900/60 transition hover:text-red-900">
                Instagram
              </a>
              <a href="#" className="text-xs uppercase tracking-[0.2em] text-stone-900/60 transition hover:text-red-900">
                Pinterest
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-[0.2em]">
                Explore
              </h5>
              <a href="#" className="text-xs uppercase tracking-[0.2em] text-stone-900/60 underline underline-offset-4 transition hover:text-red-900">
                Our Story
              </a>
              <a href="#" className="text-xs uppercase tracking-[0.2em] text-stone-900/60 underline underline-offset-4 transition hover:text-red-900">
                Collections
              </a>
              <a href="#" className="text-xs uppercase tracking-[0.2em] text-stone-900/60 underline underline-offset-4 transition hover:text-red-900">
                Journal
              </a>
            </div>

            <div className="flex flex-col space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-[0.2em]">
                Support
              </h5>
              <a href="#" className="text-xs uppercase tracking-[0.2em] text-stone-900/60 underline underline-offset-4 transition hover:text-red-900">
                Contact
              </a>
              <a href="#" className="text-xs uppercase tracking-[0.2em] text-stone-900/60 underline underline-offset-4 transition hover:text-red-900">
                Shipping
              </a>
              <a href="#" className="text-xs uppercase tracking-[0.2em] text-stone-900/60 underline underline-offset-4 transition hover:text-red-900">
                Newsletter Signup
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end md:items-end">
            <p className="text-left text-[10px] uppercase tracking-[0.2em] text-stone-900/40 md:text-right">
              © 2024 SOLANO PARFUMS. ALL RIGHTS RESERVED.
            </p>
            <div className="mt-4 flex space-x-4 opacity-30 grayscale transition hover:opacity-100">
              <span className="material-symbols-outlined text-sm">verified</span>
              <span className="material-symbols-outlined text-sm">eco</span>
              <span className="material-symbols-outlined text-sm">public</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

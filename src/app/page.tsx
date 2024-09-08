import { About, Cta, Ctaw, Footer, Header, Hero, HeroBG, Plans } from "@/sections";

export default function Home() {
  return (
    <>
      {/* header start */}
      <Header />
      {/* header end */}

      <main className="grid md:grid-cols-2 grid-cols-1">
        {/* hero start */}
        <Hero />
        {/* hero end */}

        {/* img start */}
        <HeroBG />
        {/* img end */}
      </main>

      <About />
      <Plans />
      <Ctaw />
      <Cta />
      <Footer />
    </>
  );
}

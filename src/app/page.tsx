import {
  About,
  Contact,
  Cta,
  DedicatedServer,
  Footer,
  Header,
  Hero,
  HeroBG,
  Hosting,
  Sub_Cta,
} from "@/sections";

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
      <Cta />
      <Hosting />
      <DedicatedServer />
      <About />
      <Sub_Cta />
      <Contact />
      <Footer />
    </>
  );
}

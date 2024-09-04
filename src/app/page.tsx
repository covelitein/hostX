import {
  CtaW,
  Features,
  Header,
  Hero,
  Pricing,
  Tools,
} from "@/sections";

export default function Home() {
  return (
    <main className="">
      {/* header start */}
      <Header />
      {/* header end */}

      {/* hero start */}
      <Hero />
      {/* hero end */}

      {/* features start */}
      <Features />
      {/* features end */}

      {/* pricing start */}
      <Pricing />
      {/* pricing end */}

      {/* tools start */}
      <Tools />
      {/* tools end */}

      {/* call to action for wordpress start */}
      <CtaW />
      {/* call to action for wordpress end */}
    </main>
  );
}

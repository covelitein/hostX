import { Container, RippleButton } from "@/components/custom";
import { Image } from "@nextui-org/react";
import React from "react";

function Cta() {
  return (
    <section className="py-20">
      <Container>
        <h3 className="text-4xl mb-5">
          Everything your website needs to become the best
        </h3>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          <div className="bg-[#06065c] text-white min-h-[25rem] rounded-lg flex items-center justify-center flex-col gap-5">
            <Image src="/imgs/time-white.png" />
            <h3 className="text-4xl">24hrs</h3>
            <h2 className="text-xl">Support</h2>
          </div>
          <div className="bg-gray-200 min-h-[25rem] rounded-lg flex items-center justify-center flex-col gap-5">
            <Image src="/imgs/fr.png" alt=""/>
            <h3 className="text-4xl">50,000+</h3>
            <h2 className="text-xl">
              Servers powering <br /> 187,000 customers
            </h2>
          </div>
          <div className="bg-gray-200 min-h-[25rem] rounded-lg flex items-center justify-center flex-col gap-5">
            <Image src="/imgs/smart-home-alt.png" alt=""/>
            <h3 className="text-4xl">99.99%</h3>
            <h2 className="text-xl">Efficiency</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
          <div className="rounded-lg relative min-h-[20rem] bg-[url(/imgs/now.jpg)] bg-cover bg-center">
            <div className="absolute bg-black/40 h-full w-full flex items-end justify-start p-5">
              <div className="">
                <h3 className="text-white mb-5 text-xl uppercase">
                  Dont be left behind
                </h3>
                <RippleButton className="bg-white rounded-full text-[#06065c]">
                  Check it out now
                </RippleButton>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 rounded-lg min-h-[20rem] flex flex-col gap-5 items-center justify-center">
            <Image src="/imgs/bike-moving.png" />
            <h4 className="text-3xl text-center">Efficient Migrations</h4>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Cta;

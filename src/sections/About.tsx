import { Container, RippleButton } from "@/components/custom";
import { Image } from "@nextui-org/react";
import React from "react";
import { FaDatabase, FaNetworkWired, FaRocket } from "react-icons/fa";

function About() {
  return (
    <section className="py-20">
      <Container className="px-10">
        {/* heading start */}
        <h3 className="text-4xl font-semibold">
          Everything your website needs <br /> to become the best
        </h3>
        {/* heading end */}

        <div className="grid grid-cols-4 gap-5 mt-10">
          {/* desc start */}
          <div className="col-span-2 bg-gray-200 rounded-2xl p-10">
            <div className="">
              <p className="my-5 text-justify text-lg">
                No matter how demanding your website is we provide considerable
                amount of disk space and more than enough bandwidth for you to
                get started! Starting from 10GB to unlimited disk space and with
                unlimited bandwidth you will be conquering the world in no time.
              </p>

              <RippleButton className="">Start Now</RippleButton>
            </div>
          </div>
          {/* desc end */}

          {/* pictures start */}
          <div className="col-span-2">
            <Image src="/imgs/now.jpg" alt="now"/>
          </div>
          {/* pictures end */}
        </div>

        {/* bullet points start */}
        <div className="grid grid-cols-3 gap-5 mt-5">
          <div className="bg-[#06065c]/80 text-white p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Generous Disk Space</h3>
            <FaDatabase className="text-7xl my-5" />
            <p className="">
              Get started with as little as 10GB and scale up to unlimited disk
              space.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-xl text-gray-600">
            <h3 className="text-xl font-semibold mb-2">Unlimited Bandwidth</h3>
            <FaNetworkWired className="text-7xl my-5" />
            <p className="">
              No more traffic worries. Enjoy unlimited bandwidth for your
              website.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-xl text-gray-600">
            <h3 className="text-xl font-semibold mb-2">Scalable Hosting</h3>
            <FaRocket className="text-7xl my-5" />
            <p className="">
              Start small, grow big. Conquer the world with scalable resources.
            </p>
          </div>
        </div>
        {/* bullet points end */}
      </Container>
    </section>
  );
}

export default About;

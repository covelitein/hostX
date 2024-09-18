"use client";

import { Container, CtaCard, RippleButton } from "@/components/custom";
import { cta } from "@/constants";
import { Image } from "@nextui-org/react";
import React from "react";
import { motion } from "framer-motion";

function Cta() {
  const displayCta = cta.map((d) => <CtaCard key={d.title} {...d} />);
  return (
    <section className="py-20">
      <Container>
        <h3 className="text-4xl mb-5">
          Everything your website needs to become the best
        </h3>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {displayCta}
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
          <motion.div
            className="rounded-lg relative min-h-[20rem] bg-[url(/imgs/now.jpg)] bg-cover bg-center overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }} // Scale the entire card slightly on hover
            whileTap={{ scale: 0.98 }} // Slightly scale down on click
          >
            <motion.div
              className="absolute bg-black/40 h-full w-full flex items-end justify-start p-5"
              whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }} // Darken overlay on hover
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div>
                <motion.h3
                  className="text-white mb-5 text-xl uppercase"
                  whileHover={{ scale: 1.1, color: "#60A5FA" }} // Scale and change text color on hover
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  Don&apos;t be left behind
                </motion.h3>
                <RippleButton className="bg-white rounded-full text-[#06065c]">
                  Check it out now
                </RippleButton>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-gray-300 rounded-lg min-h-[20rem] flex flex-col gap-5 items-center justify-center overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }} // Scale the entire card on hover
            whileTap={{ scale: 0.98 }} // Slight scale down on click
          >
            <motion.div
              whileHover={{ scale: 1.1 }} // Scale image slightly on hover
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Image src="/imgs/bike-moving.png" />
            </motion.div>
            <motion.h4
              className="text-3xl text-center"
              whileHover={{ scale: 1.1, color: "#3B82F6" }} // Scale and change text color on hover
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              Efficient Migrations
            </motion.h4>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Cta;

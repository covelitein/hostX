"use client";

import { Container, RippleButton } from "@/components/custom";
import { motion } from "framer-motion";
import React from "react";

function About() {
  return (
    <section className="py-10">
      <Container>
        <div className="grid lg:grid-cols-2">
          {/* Text Content with sliding animation */}
          <motion.div
            className="bg-gray-300 md:p-16 sm:p-9 p-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="mb-10 md:text-5xl sm:text-4xl text-3xl">
              Why Choose HostX as Your Hosting Provider
            </h3>
            <p className="mb-8 md:text-lg">
              At HostX, we’re more than just a hosting service - we’re your partner
              in success. Our mission is to grow with you by constantly enhancing our platform
              to meet your evolving needs. From delivering tailored support to utilizing
              cutting-edge technologies, we stay ahead of industry trends to boost your online
              presence.
            </p>
            <RippleButton className="">Explore Products</RippleButton>
          </motion.div>

          {/* Background Image with fade-in and zoom animation */}
          <motion.div
            className="bg-[url(/imgs/about.jpg)] bg-cover bg-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          ></motion.div>
        </div>
      </Container>
    </section>
  );
}

export default About;

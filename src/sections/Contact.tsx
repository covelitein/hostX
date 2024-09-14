import { Container, RippleButton } from "@/components/custom";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaSquareInstagram, FaSquareXTwitter, FaGoogle } from "react-icons/fa6";
import { BsBing } from "react-icons/bs";

function Contact() {
  return (
    <section className="py-10">
      <Container>
        <div className="text-center bg-gray-300 p-10">
          <div className="rounded-lg">
            <h3 className="mb-5 text-3xl">
              Expand your customer base, increase your followers, and boost your
              website&apos;s visibility.
            </h3>
            <p className="">
              Drive growth by attracting more customers, increasing followers,
              and enhancing your online presence to reach a wider audience.
            </p>

            <RippleButton className="mt-10 ">Contact Us</RippleButton>
          </div>
          <div className="flex items-center justify-center gap-8 mt-10 text-blue-800">
            <FaGoogle className="text-3xl"/>
            <BsBing className="text-3xl"/>
            <FaSquareXTwitter className="text-3xl"/>
            <FaSquareInstagram className="text-3xl"/>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;

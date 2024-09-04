import { ReactElement } from "react";

export const tools: { src: string; heading: string; desc: string }[] = [
  {
    src: "/imgs/magento-default.svg",
    heading: "Magento 2",
    desc: "A commerce solution for any business need.",
  },
  {
    src: "/imgs/nodejs.svg",
    heading: "NodeJS",
    desc: "Step into the future today. But forget about type checking.",
  },
  {
    src: "/imgs/php.svg",
    heading: "PHP",
    desc: "PHP is a popular general-purpose scripting language.",
  },
  {
    src: "/imgs/python.svg",
    heading: "Python",
    desc: "Programming language focused on efficiency.",
  },
  {
    src: "/imgs/woocommerce-default.svg",
    heading: "Woocommerce",
    desc: "The most customizable eCommerce platform.",
  },
  {
    src: "/imgs/ruby.svg",
    heading: "Ruby",
    desc: "Programming language focused on simplicity.",
  },
  {
    src: "/imgs/prestashop-default.svg",
    heading: "Prestashop",
    desc: "Create and develop your business with PrestaShop.",
  },
  {
    src: "/imgs/wordpress.svg",
    heading: "Wordpress",
    desc: "A free and open-source content management system written in PHP.",
  },
];

export const pricing: {
  planName: ReactElement<any, any>;
  desc: string;
  price: string;
}[] = [
  {
    planName: (
      <span>
        Wordpress <br /> Hosting
      </span>
    ),
    desc: "A Simple, Powerful & Complete solution for WordPress Websites",
    price: "$3.30",
  },
  {
    planName: (
      <span>
        VPS <br /> Hosting
      </span>
    ),
    desc: "High performance SSD VPS powered by KVM and OpenVZ",
    price: "$2.99",
  },
  {
    planName: (
      <span>
        Shared <br /> Hosting
      </span>
    ),
    desc: "Build your ideal website with our easy-to-use Shared Hosting",
    price: "$4.99",
  },
];

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

export const dedicatedServerPoint: {
  src: string;
  heading: string;
  desc: string;
}[] = [
  {
    src: "/imgs/microchip.png",
    heading: "State-of-the-art tech",
    desc: "Get top server hardware and software with Intel Xeon or AMD EYPC CPUs running CentOS, Ubuntu or Windows Server.",
  },
  {
    src: "/imgs/hdd.png",
    heading: "SSD or HDD - your choice",
    desc: "Whether you want blazing fast read/write - or tons of storage capacity, we’ve got you covered with HDD or NVMe SSDs (up to 25X faster) storage options.",
  },
  {
    src: "/imgs/customer-service.png",
    heading: "Expert dedicated hosting support.",
    desc: "All plans come with free standard hosting support. Optional paid server management services include fully managed support and task-based services.",
  },
  {
    src: "/imgs/window-restore.png",
    heading: "Backups and recovery console",
    desc: "Set automated backups plus an on-demand snapshot and fix issues using the recovery console (even if you don’t have access to SSH).",
  },
  {
    src: "/imgs/folder-tree.png",
    heading: "Hardware Flexibility",
    desc: "More RAM or a powerful GPU? With Dedicated Servers you can adjust the hardware configuration to match even your most demanding needs.",
  },
  {
    src: "/imgs/shield-alt.png",
    heading: "Security",
    desc: "Enjoy ‘round-the-clock network monitoring with advanced DDoS protection and a free SSL certificate (for the first year) with a dedicated IP.",
  },
];

export const cta: {
  imageSrc: string;
  title: string;
  subtitle: string;
  bgColor: string;
}[] = [
  {
    imageSrc: "/imgs/time-white.png",
    title: "24hrs",
    subtitle: "Support",
    bgColor: "bg-[#06065c] text-white",
  },
  {
    imageSrc: "/imgs/fr.png",
    title: "50,000+",
    subtitle: "Servers powering 187,000 customers",
    bgColor: "bg-gray-200",
  },
  {
    imageSrc: "/imgs/smart-home-alt.png",
    title: "99.99%",
    subtitle: "Efficiency",
    bgColor: "bg-gray-200",
  },
];

export const hostingPlans: {
  price: string;
  title: string;
  description: string;
  renewsAt: string;
}[] = [
  {
    price: "$3.30/mon",
    title: "Wordpress Hosting",
    description:
      "A Simple, Powerful & Complete solution for WordPress Websites",
    renewsAt: "Renews at regular rate",
  },
  {
    price: "$2.99/mon",
    title: "VPS Hosting",
    description: "High performance SSD VPS powered by KVM and OpenVZ",
    renewsAt: "Renews at regular rate",
  },
  {
    price: "$4.99/mon",
    title: "Shared Hosting",
    description: "Build your ideal website with our easy-to-use Shared Hosting",
    renewsAt: "Renews at regular rate",
  },
];

import { FaTools, FaRocket, FaGlobe } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";

// Type definition for each feature
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: <BsFillStarFill />,
    title: "27 Years of Experience",
    description: "Trusted expertise that drives innovation and success.",
  },
  {
    icon: <AiFillLock />,
    title: "Industry-Leading Reliability",
    description: "High performance and robust infrastructure you can count on.",
  },
  {
    icon: <FaTools />,
    title: "24/7 Expert Support",
    description: "Our dedicated team is here around the clock to assist you anytime, anywhere.",
  },
  {
    icon: <FaRocket />,
    title: "Hassle-Free Migrations",
    description: "Seamless transitions with zero downtime.",
  },
  {
    icon: <FaGlobe />,
    title: "18 Data Centers Worldwide",
    description: "Global coverage for lightning-fast performance and low latency.",
  },
];


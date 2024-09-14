import { Container } from "@/components/custom";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 py-20">
      <Container>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Other Links */}
          <div>
            <h3 className="text-gray-600 font-semibold mb-4">OTHER LINKS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Service Agreement
                </a>
              </li>
            </ul>
          </div>

          {/* Web Hosting */}
          <div>
            <h3 className="text-gray-500 font-semibold mb-4">WEB HOSTING</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-500">
                  Unlimited Web Hosting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  WordPress Hosting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Joomla Hosting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  OpenCart Hosting
                </a>
              </li>
            </ul>
          </div>

          {/* Server Services */}
          <div>
            <h3 className="text-gray-500 font-semibold mb-4">
              SERVER SERVICES
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-500">
                  Germany Dedicated Server
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  France Dedicated Server
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  US Dedicated Server
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Turkey Dedicated Servers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Germany VPS / VDS Server
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  France VPS / VDS Server
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Turkey VPS / VDS Server
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  US VPS / VDS Server
                </a>
              </li>
            </ul>
          </div>

          {/* Domain Name Registry */}
          <div>
            <h3 className="text-gray-500 font-semibold mb-4">
              DOMAIN NAME REGISTRY
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-500">
                  .com Domain Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  .net Domain Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  .org Domain Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  .in Domain Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  .co Domain Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  .site Domain Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  .mobi Domain Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  .pro Domain Registration
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="border-t-[2px] border-gray-200 pt-5 text-center mt-5">
        © 2024 HostSpacing. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

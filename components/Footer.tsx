"use client";
import { mono } from "@/utils/fonts";
import { social } from "@/utils/data";
import { motion as m } from "framer-motion";

export default function Footer() {
  return (
    <footer className={mono.className}>
      <div className="social-mobile">
        {social.slice(0, 3).map((item, id) => (
          <a key={id} href={item.link} className={`${mono.className} `}>
            <item.icon size="25" />
          </a>
        ))}
      </div>
      <m.div
        initial={{ y: 330 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="social-desktop"
      >
        {social.slice(0, 3).map((item, id) => (
          <div className="flex flex-col items-center gap-2" key={id}>
            <div className="group flex gap-4">
              <a href={item.link} className={`${mono.className} li-nav`}>
                <item.icon size="25" />
              </a>
              <span className="tooltip">{item.title}</span>
            </div>
            <div className="h-16 w-px bg-gray1"></div>
          </div>
        ))}
      </m.div>
      <m.div>
        <p className={`${mono.className} text-gray1 hover:text-purple`}>
          copyright &copy; 2024
        </p>
      </m.div>
      <m.div
        initial={{ y: 330 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="social-desktop-email"
        style={{ writingMode: "vertical-lr" }}
      >
        <a
          className={`${mono.className} text-gray1 hover:text-purple`}
          href={social[2].link}
        >
          {social[2].email}
        </a>
        <div className="h-16 w-px bg-gray1"></div>
      </m.div>
    </footer>
  );
}

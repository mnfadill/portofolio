import React from "react";
import { mono, mont } from "@/utils/fonts";
import { MotionUpOpacity } from "@/components/Motion";

export default function Contact() {
  return (
    <MotionUpOpacity className="contact" id="contact">
      <div>
        <span className={`${mono.className} text-xs md:text-lg text-purple`}>
          04. What's Next?
        </span>
        <h2 className={mont.className}>Get In Touch</h2>
      </div>
      <p className={`${mont.className} max-w-[600px]`}>
        I'm currently looking for any new opportunities, my inbox is always
        open. Whatever you have a question or just to say hi, i'll try my best
        to get back to you
      </p>
      <button type="submit" className={`${mono.className} mt-5 btn w-28`}>
        <a href="mailto:mnfadillah19@gmail.com">Say Hello</a>
      </button>
    </MotionUpOpacity>
  );
}

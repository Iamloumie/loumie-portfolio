"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development 💻",
    description:
      "Modern, responsive websites built to reflect your brand, engage visitors, and perform smoothly on every device—designed with clarity, function, and purpose.",
    href: ""
  },
  {
    num: "02",
    title: "UI/UX Design ☔",
    description:
      "Thoughtful interfaces that feel as good as they look—shaped to guide users naturally and leave a lasting impression through clean, intuitive design.",
    href: ""
  },
  {
    num: "03",
    title: "Logo Design 🍥",
    description:
      "Bold, timeless logos that capture your brand’s story at a glance—designed to stand out, build recognition, and spark connection.",
    href: ""
  },
  {
    num: "04",
    title: "Virtual Assistant 🧑‍💻",
    description:
      "Reliable remote support that helps you stay focused—handling tasks with care, precision, and professionalism so your business runs smoother.",
    href: ""
  },
];


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 xl:pt-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline
                  text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent
                    transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>

                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white
                group-hover:text-accent transition-all duration-500"
                >
                  {service.title}
                </h2>

                {/* description */}
                <p className="text-white/60">{service.description}</p>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
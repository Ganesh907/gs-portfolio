import React from "react";
import { BgOne } from "../assets/images";
import { motion as Motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (customDelay) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: customDelay,
    },
  }),
};

const HomePage = () => {
  return (
    <div className="flex flex-col font-sans">
      <div
        className="bg-fixed bg-cover bg-top"
        style={{
          backgroundImage: `url(${BgOne})`,
        }}
      >
        {/* Hero Section */}
        <div className="flex justify-start items-end w-full h-screen gap-5 text-white p-10 ">
          <Motion.div
            initial="hidden"
            animate="visible"
            className="relative max-w-md md:max-w-xl bg-black/90 backdrop-blur-md p-6 rounded-2xl shadow-xl z-20 space-y-4 border-2 border-cyan-400 hover:border-white "
          >
            {/* Message Content */}
            <Motion.p
              custom={0.2}
              variants={fadeUpVariant}
              className="text-xl md:text-3xl font-extrabold text-white"
            >
              Hi, I'm{" "}
              <Motion.span
                whileHover="hover"
                className="inline-block cursor-pointer perspective-[800px] px-3"
              >
                <Motion.span
                  variants={{
                    hover: { y: -7, z: 10, color: "white" },
                    initial: { y: 0, z: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative inline-block z-10 text-black font-bold"
                >
                  Ganesh Shinde
                </Motion.span>
                <Motion.span
                  variants={{
                    hover: {
                      y: 6,
                      scale: 1,
                      borderRadius: "10px 10px 40px 40px",
                      height: "5px",
                      bottom: 0,
                    },
                    initial: { y: 0, scale: 1 },
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="absolute left-0 w-full h-full bg-cyan-400 -z-0"
                  style={{
                    filter: "brightness(0.9)",
                    boxShadow: "0 4px 20px rgba(0,184,219,0.5)",
                    borderRadius: "10px 10px",
                  }}
                />
              </Motion.span>
            </Motion.p>

            <Motion.p
              custom={0.4}
              variants={fadeUpVariant}
              className="text-base md:text-xl font-semibold"
            >
              <span className="text-teal-500">Programmer</span> by the sun,{" "}
              <span className="text-pink-500">Poet</span> by the stars,
            </Motion.p>

            <Motion.p
              custom={0.6}
              variants={fadeUpVariant}
              className="text-base md:text-xl font-semibold"
            >
              Merging the <span className="text-teal-500">Code</span>, and
              writing the <span className="text-pink-500">Bars</span>...
            </Motion.p>
          </Motion.div>
        </div>

        {/* About Section */}
        <section className="px-6 md:px-16 py-16 text-white h-screen">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              About Me
            </h2>
            I'm a Software Engineer currently working at BitByBit Solutions in
            Mumbai, India. I specialize in building robust and scalable
            applications, with a love for clean code and elegant logic.
            <br />
            Outside of tech, I’m known online as @innocent_writer_7, where I
            express my thoughts through short stories and poems. Creativity
            fuels my development work and vice versa — it’s all about crafting
            experiences, whether in code or words.
            <ul className="list-disc mt-4 ml-6 space-y-1">
              <li>📍 Based in Mumbai</li>
              <li>💼 Software Engineer @ BitByBit</li>
              <li>✍️ Writer & Creator</li>
              <li>🎓 Alumni of Itvedant Education Pvt. Ltd</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Additional Sections */}
      <div className="h-screen">Ganesh</div>
    </div>
  );
};

export default HomePage;

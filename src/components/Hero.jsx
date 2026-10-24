import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiDownload } from "react-icons/fi";
import { fadeIn } from "../framerMotion/variants";
import { profile } from "../data/content";
import ProfilePhoto from "./ProfilePhoto";
import CvViewer from "./CvViewer";

// shared look for the Download CV button, whether it is a real download link or the placeholder button
const cvButtonClass =
  "flex items-center gap-2 px-6 py-2 rounded-full font-bold bg-gold text-navy border border-gold transition-all duration-500 hover:bg-white hover:border-white";

// editorial hero: big name + pitch on the left, photo on the right
const Hero = () => {
  const [cvOpen, setCvOpen] = useState(false); // true while the CV pop-up (CvViewer) is showing
  return (
    <section id="home" className="pt-40 pb-16 px-4">
      <div className="max-w-[1200px] mx-auto flex md:flex-row flex-col items-center justify-between gap-12">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          className="flex flex-col gap-4 md:text-left text-center items-center md:items-start"
        >
          <h2 className="uppercase tracking-[0.25em] text-gold text-xs md:text-sm">
            {profile.role}
          </h2>
          <h1 className="font-heading text-white font-bold text-4xl md:text-5xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="text-muted text-lg max-w-[520px]">{profile.pitch}</p>
          <div className="mt-2 flex flex-wrap gap-3 justify-center md:justify-start">
            {profile.cv ? (
              // opens the CV pop-up first; the real download button lives inside CvViewer.jsx
              <button
                type="button"
                onClick={() => setCvOpen(true)}
                className={cvButtonClass}
              >
                <FiDownload />
                Download CV
              </button>
            ) : (
              // no CV file yet: the button stays visible but does nothing (see cv in data/content.js)
              <button
                type="button"
                title="CV coming soon"
                aria-disabled="true"
                className={cvButtonClass}
              >
                <FiDownload />
                Download CV
              </button>
            )}
            <Link
              smooth={true}
              duration={500}
              offset={-100}
              to="contact"
              className="px-6 py-2 rounded-full font-bold text-white border border-gold transition-all duration-500 hover:bg-gold hover:text-navy cursor-pointer"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
        >
          <ProfilePhoto loop className="h-[380px] w-[280px]" />
        </motion.div>
      </div>
      {cvOpen && <CvViewer onClose={() => setCvOpen(false)} />}
    </section>
  );
};

export default Hero;

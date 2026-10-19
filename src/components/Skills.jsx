import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";
import { skillGroups } from "../data/content";
import SectionHeading from "./SectionHeading";

// Skills: one rounded card per skillGroups entry (two across) with outlined pills; the last card spans both columns
const Skills = () => {
  return (
    <section id="skills" className="max-w-[1200px] mx-auto px-4 pt-24">
      <SectionHeading title="Skills" />
      <div className="grid md:grid-cols-2 gap-4">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            variants={fadeIn("up", index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className={`rounded-3xl border border-line bg-white/[0.035] p-7 ${
              index === skillGroups.length - 1 ? "md:col-span-2" : ""
            }`}
          >
            <h3 className="font-heading text-white text-2xl mb-6">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="font-code text-xs rounded-full border border-line px-3.5 py-1.5 text-soft transition-colors duration-300 hover:border-gold hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

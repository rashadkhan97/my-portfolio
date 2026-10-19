import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";
import { experience } from "../data/content";
import SectionHeading from "./SectionHeading";

// Experience: one card per job in data/content.js
const Experience = () => {
  return (
    <section id="experience" className="max-w-[1200px] mx-auto px-4 pt-24">
      <SectionHeading title="Experience" />
      <div className="flex flex-col gap-6">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="card p-6"
          >
            <p className="text-muted text-sm">
              {job.period} · {job.location}
            </p>
            <h3 className="font-heading text-white text-2xl font-bold mt-1">
              {job.role}
            </h3>
            <p className="text-gold text-lg">{job.company}</p>
            <ul className="list-disc pl-5 mt-4 flex flex-col gap-2 text-soft">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

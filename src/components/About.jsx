import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";
import { about } from "../data/content";
import SectionHeading from "./SectionHeading";
import ProfilePhoto from "./ProfilePhoto";

// About: photo + bio paragraphs, then the three belief cards
const About = () => {
  return (
    <section id="about" className="max-w-[1200px] mx-auto px-4 pt-24">
      <SectionHeading title="About" />
      <div className="flex md:flex-row flex-col gap-12 items-center">
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ProfilePhoto className="h-[420px] w-[300px]" />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-4"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">
            {about.heading}
          </h3>
          {about.paragraphs.map((text, index) => (
            <p
              key={index}
              className="text-muted leading-relaxed text-justify hyphens-auto"
            >
              {text}
            </p>
          ))}
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-16">
        {about.cards.map((card, index) => (
          <motion.div
            key={card.title}
            variants={fadeIn("up", index * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="card p-6"
          >
            <h4 className="font-heading text-white text-xl font-bold mb-2">
              {card.title}
            </h4>
            <p className="text-muted">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;

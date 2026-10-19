import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { fadeIn } from "../framerMotion/variants";
import { projects } from "../data/content";
import SectionHeading from "./SectionHeading";

// Selected Work: one card per project in data/content.js
const Projects = () => {
  return (
    <section id="projects" className="max-w-[1200px] mx-auto px-4 pt-24">
      <SectionHeading title="Selected Work" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeIn("up", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="card p-6 flex flex-col gap-3"
          >
            <p className="text-gold text-xs uppercase tracking-[0.25em]">
              {project.label}
            </p>
            <p className="text-muted text-sm">{project.category}</p>
            <h3 className="font-heading text-white text-2xl font-bold">
              {project.title}
            </h3>
            <p className="text-soft">{project.description}</p>
            <ul className="list-disc pl-5 flex flex-col gap-1 text-muted">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag) => (
                <span key={tag} className="chip text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-3">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group flex w-full items-center justify-between rounded-full border border-line bg-white/[0.03] py-1.5 pl-[2.625rem] pr-1.5 text-sm text-white transition-colors duration-300 hover:border-gold"
              >
                <span className="flex-1 text-center">
                  {project.linkLabel || "View on GitHub"}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-navy transition-transform duration-300 group-hover:rotate-45">
                  <FiArrowUpRight className="text-lg" />
                </span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

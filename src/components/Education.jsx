import { Fragment } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiAward, FiArrowUpRight } from "react-icons/fi";
import { fadeIn } from "../framerMotion/variants";
import { education, certifications } from "../data/content";
import SectionHeading from "./SectionHeading";

const stroke = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-5 w-5",
};

// one icon per level; keys match the icon field in data/content.js
const icons = {
  msc: (
    <svg {...stroke}>
      <circle cx="12" cy="8" r="6" />
      <path d="M8.2 13.9L7 23l5-3 5 3-1.2-9.1" />
    </svg>
  ),
  bsc: (
    <svg {...stroke}>
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  hsc: (
    <svg {...stroke}>
      <path d="M12 2l10 5-10 5-10-5 10-5z" />
      <path d="M2 12l10 5 10-5" />
      <path d="M2 17l10 5 10-5" />
    </svg>
  ),
  ssc: (
    <svg {...stroke}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
};

// shared look for the two sub-headings: serif title, icon, then a line that fades out
const subHeading =
  "flex items-center gap-3 font-heading text-white text-2xl md:text-3xl font-bold after:h-px after:flex-1 after:bg-gradient-to-r after:from-line after:to-transparent";

// Education: journey strip (arrows run from the earliest level back to the latest), degree cards newest first,
// then extra courses as certificate cards (hidden when certifications is empty)
const Education = () => {
  return (
    <section id="education" className="max-w-[1200px] mx-auto px-4 pt-24">
      <SectionHeading title="Education & Certifications" />

      <h3 className={subHeading + " mb-6"}>
        <span className="text-gold">{icons.bsc}</span>
        Academic Degree
      </h3>

      {/* journey strip hidden for now; remove "hidden" to show it again */}
      <div className="hidden mb-8 flex items-start justify-between">
        {education.map((item, index) => (
          <Fragment key={item.short}>
            {index > 0 && (
              <span className="flex h-[42px] flex-1 flex-row-reverse items-center text-gold">
                <span className="flex-1 border-t-2 border-dashed border-line" />
                <FiArrowLeft className="-mr-0.5" />
              </span>
            )}
            <div className="flex w-16 flex-col items-center gap-1.5 text-center sm:w-[70px]">
              <span
                className={`flex h-[42px] w-[42px] items-center justify-center rounded-full border ${
                  item.ongoing
                    ? "border-gold bg-gold text-navy shadow-[0_0_0_5px_rgba(201,168,92,0.18)]"
                    : "border-line bg-navyLight text-soft"
                }`}
              >
                {icons[item.icon]}
              </span>
              <span
                className={`text-xs ${item.ongoing ? "text-gold" : "text-muted"}`}
              >
                {item.short}
              </span>
            </div>
          </Fragment>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((item, index) => (
          <motion.div
            key={item.degree}
            variants={fadeIn("up", index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="card p-5 flex flex-col gap-1"
          >
            <span
              className={`self-start rounded-full border px-3 py-0.5 text-xs ${
                item.ongoing ? "border-gold text-gold" : "border-line text-muted"
              }`}
            >
              {item.year}
            </span>
            <h3 className="font-heading text-white text-xl font-bold mt-1">
              {item.degree}
            </h3>
            <p className="text-soft">{item.school}</p>
            <p className="text-muted text-sm">{item.location}</p>
          </motion.div>
        ))}
      </div>

      {certifications.length > 0 && (
        <>
          <h3 className={subHeading + " mt-16 mb-10"}>
            <FiAward className="text-gold text-xl" />
            Courses &amp; Certificates
          </h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-10">
            {certifications.map((cert, index) => (
              <motion.div
                key={`${cert.title}-${index}`}
                variants={fadeIn("up", index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="card relative"
              >
                <span className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-gold text-navy ring-4 ring-navy">
                  <FiAward className="text-lg" />
                </span>
                <div className="flex h-full flex-col items-center gap-1 px-5 pb-5 pt-9 text-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
                    {cert.type || "Certificate of Completion"}
                  </span>
                  <h4 className="font-heading text-white text-xl font-bold">
                    {cert.title}
                  </h4>
                  <p className="text-soft text-sm">{cert.issuer}</p>
                  <p
                    className={`text-xs ${
                      cert.year === "In progress" ? "text-gold" : "text-muted"
                    }`}
                  >
                    {cert.year}
                  </p>
                  {cert.file && (
                    <div className="mt-auto w-full pt-4">
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex w-full items-center justify-between rounded-full border border-line bg-white/[0.03] py-1.5 pl-[2.625rem] pr-1.5 text-sm text-white transition-colors duration-300 hover:border-gold"
                      >
                        <span className="flex-1 text-center">
                          View Certificate
                        </span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-navy transition-transform duration-300 group-hover:rotate-45">
                          <FiArrowUpRight className="text-lg" />
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Education;

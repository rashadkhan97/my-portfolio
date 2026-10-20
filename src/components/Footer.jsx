import { animateScroll } from "react-scroll";
import { FiGithub, FiArrowUp } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { profile } from "../data/content";
import { gmailLink } from "../utils/links";

const iconClass =
  "h-10 w-10 border border-line text-soft rounded-full flex items-center justify-center text-lg hover:border-gold hover:text-gold transition-all duration-500";

// page footer: logo, name and role on the left, copyright in the middle, social icons and Back to top on the right
const Footer = () => {
  return (
    <footer className="px-4">
      <div className="w-full h-[1px] bg-line mt-24"></div>
      <div className="max-w-[1200px] mx-auto py-8 grid md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-8 text-center md:text-left">
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <img
            src="/images/rsLogo.png"
            alt=""
            aria-hidden="true"
            className="h-8 w-auto"
          />
          <div>
            <p className="font-heading text-white text-2xl font-bold leading-tight">
              {profile.name}
            </p>
            <p className="text-muted text-[10px] uppercase tracking-[0.2em] mt-1">
              {profile.role}
            </p>
          </div>
        </div>

        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>

        <div className="flex flex-wrap items-center gap-3 justify-center md:justify-end">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={iconClass}
          >
            <FaLinkedinIn />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className={iconClass}
          >
            <FiGithub />
          </a>
          <a
            href={gmailLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
            className={iconClass}
          >
            <HiOutlineMail />
          </a>
          <button
            type="button"
            onClick={() => animateScroll.scrollToTop({ duration: 500, smooth: true })}
            className="group inline-flex items-center gap-3 rounded-full border border-line bg-white/[0.03] py-1 pl-4 pr-1 text-sm text-white transition-colors duration-300 hover:border-gold"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy transition-transform duration-300 group-hover:-translate-y-0.5">
              <FiArrowUp />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

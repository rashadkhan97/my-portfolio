import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { navLinks, profile } from "../data/content";

// fixed top bar; links scroll to the section ids defined in data/content.js navLinks.
// Wide and roomy at the top of the page, shrinks to a slim narrow pill once the visitor scrolls.
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-2 left-1/2 -translate-x-1/2 z-20 w-full px-4 transition-all duration-500 ${
        scrolled ? "max-w-[812px]" : "max-w-[1200px]"
      }`}
    >
      <div
        className={`relative flex items-center justify-between bg-navy/80 backdrop-blur-lg border border-line rounded-full transition-all duration-500 ${
          scrolled ? "px-[18px] py-2" : "px-6 py-3"
        }`}
      >
        <img
          src="/images/rsLogo.png"
          alt={profile.name}
          className={`w-auto transition-all duration-500 ${
            scrolled ? "h-5" : "h-6"
          }`}
        />

        <ul
          className={`${
            open ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row gap-5 lg:gap-[22px] text-center absolute lg:static top-[120%] left-0 w-full lg:w-auto bg-navy/95 lg:bg-transparent border border-line lg:border-0 backdrop-blur-lg lg:backdrop-blur-none rounded-3xl py-4 lg:py-0`}
        >
          {navLinks.map((item) => (
            <li key={item.id} className="group">
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                to={item.id}
                onClick={() => setOpen(false)}
                className={`cursor-pointer text-muted group-hover:text-white transition-all duration-500 ${
                  scrolled ? "text-[15px]" : "text-base"
                }`}
              >
                {item.label}
              </Link>
              <div className="mx-auto bg-gold w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            smooth={true}
            duration={500}
            offset={-100}
            to="contact"
            className={`rounded-full font-bold text-white border border-gold transition-all duration-500 hover:bg-gold hover:text-navy cursor-pointer text-[13px] py-1.5 ${
              scrolled ? "px-[15px]" : "px-4"
            }`}
          >
            Let&apos;s Talk
          </Link>
          <button
            className="lg:hidden text-2xl p-2 border border-line rounded-full text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

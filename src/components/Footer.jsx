import { Link } from "react-scroll";
import { navLinks, profile } from "../data/content";

// page footer: name, section links (same navLinks as Navbar), copyright
const Footer = () => {
  return (
    <footer className="px-4">
      <div className="w-full h-[1px] bg-line mt-24"></div>
      <div className="max-w-[1200px] mx-auto mt-4 flex md:flex-row flex-col gap-4 justify-between items-center">
        <p className="font-heading text-2xl text-muted">{profile.name}</p>
        <ul className="flex flex-wrap gap-4 text-muted justify-center">
          {navLinks.map((item) => (
            <li key={item.id}>
              <Link
                smooth={true}
                duration={500}
                offset={-100}
                to={item.id}
                className="hover:text-white transition-all duration-500 cursor-pointer"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-center md:text-right mt-2 mb-12 text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
};

export default Footer;

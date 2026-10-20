import { useState } from "react";
import { FiGithub, FiCopy, FiCheck, FiPhone } from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { profile, contact } from "../data/content";
import SectionHeading from "./SectionHeading";

// wa.me link built from profile.phone; opens WhatsApp with contact.whatsappMessage pre-filled
const whatsappLink = `https://wa.me/${profile.phone.replace(
  "+",
  ""
)}?text=${encodeURIComponent(contact.whatsappMessage)}`;

// opens a Gmail compose window addressed to profile.email (all email links below use this)
const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  profile.email
)}&su=${encodeURIComponent("Hello from your portfolio")}`;

// Contact: detail rows on the left, WhatsApp call-to-action on the right; copy comes from `contact` and `profile` in data/content.js
const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked: the email is still visible to copy by hand
    }
  };

  return (
    <section id="contact" className="max-w-[1200px] mx-auto px-4 pt-24">
      <SectionHeading title="Get in Touch" />
      <div className="grid lg:grid-cols-2 gap-10 card p-6 md:p-10">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-gold text-xs uppercase tracking-[0.25em]">
              {contact.eyebrow}
            </p>
            <h3 className="font-heading text-white text-3xl md:text-4xl font-bold mt-3 leading-tight">
              {contact.heading}
            </h3>
            <p className="text-muted mt-3">{contact.text}</p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-4 rounded-xl border border-line bg-white/[0.03] px-4 py-3">
              <div className="flex items-center gap-3 min-w-0">
                <HiOutlineMail className="text-2xl text-gold shrink-0" />
                <div className="min-w-0">
                  <p className="text-muted text-[10px] uppercase tracking-[0.2em]">
                    Email
                  </p>
                  <a
                    href={gmailLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-gold transition-colors duration-300 break-all"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center gap-2 text-xs text-gold hover:text-white transition-colors duration-300 shrink-0"
              >
                {copied ? <FiCheck /> : <FiCopy />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-line bg-white/[0.03] px-4 py-3">
              <FiPhone className="text-2xl text-gold shrink-0" />
              <div>
                <p className="text-muted text-[10px] uppercase tracking-[0.2em]">
                  Phone / WhatsApp
                </p>
                <a
                  href={`tel:${profile.phone}`}
                  className="text-white hover:text-gold transition-colors duration-300"
                >
                  {profile.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-xl border border-line bg-white/[0.03] px-4 py-3">
              <div className="flex items-center gap-3">
                <IoLocationOutline className="text-2xl text-gold shrink-0" />
                <div>
                  <p className="text-muted text-[10px] uppercase tracking-[0.2em]">
                    Location
                  </p>
                  <p className="text-white">{contact.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="h-11 w-11 border border-line text-soft rounded-full flex items-center justify-center text-lg hover:border-gold hover:text-gold transition-all duration-500"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="h-11 w-11 border border-line text-soft rounded-full flex items-center justify-center text-lg hover:border-gold hover:text-gold transition-all duration-500"
            >
              <FiGithub />
            </a>
            <a
              href={gmailLink}
                    target="_blank"
                    rel="noreferrer"
              aria-label="Email"
              className="h-11 w-11 border border-line text-soft rounded-full flex items-center justify-center text-lg hover:border-gold hover:text-gold transition-all duration-500"
            >
              <HiOutlineMail />
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-white/[0.04] backdrop-blur p-8 flex flex-col items-center justify-center text-center gap-5">
          <div className="h-16 w-16 rounded-full border border-gold/50 text-gold flex items-center justify-center text-3xl">
            <FaWhatsapp />
          </div>
          <h4 className="font-heading text-white text-2xl font-bold">
            Fastest way to reach me
          </h4>
          <p className="text-muted max-w-[320px]">
            Send me a message on WhatsApp. I usually reply the same day.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 whitespace-nowrap rounded-full bg-gold text-navy font-bold px-6 sm:px-8 py-3 hover:bg-white transition-colors duration-500"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </a>
          <a
            href={gmailLink}
                    target="_blank"
                    rel="noreferrer"
            className="text-sm text-soft hover:text-gold transition-colors duration-300"
          >
            or send an email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

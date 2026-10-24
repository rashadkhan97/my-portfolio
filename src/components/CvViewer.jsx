import { useEffect } from "react";
import { FiDownload, FiExternalLink, FiX } from "react-icons/fi";
import { profile } from "../data/content";

// pop-up that shows the CV first; the visitor can then download it (opened by the Download CV button in Hero.jsx)
const CvViewer = ({ onClose }) => {
  // close on Escape and stop the page behind from scrolling while the pop-up is open
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="CV preview"
      onClick={onClose} // click on the dark backdrop closes
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 backdrop-blur-sm p-3 md:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()} // clicks inside the card must not close it
        className="flex flex-col w-full max-w-[900px] h-full max-h-[92vh] rounded-xl border border-line bg-navyLight overflow-hidden"
      >
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-line">
          <h3 className="font-heading text-white font-bold text-base md:text-lg">
            Curriculum Vitae
          </h3>
          <div className="flex items-center gap-2">
            {/* same file, real download only when the visitor asks for it */}
            <a
              href={profile.cv}
              download
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-gold text-navy border border-gold transition-all duration-500 hover:bg-white hover:border-white"
            >
              <FiDownload />
              Download
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV preview"
              className="p-2 rounded-full text-white border border-line transition-all duration-500 hover:border-gold hover:text-gold"
            >
              <FiX />
            </button>
          </div>
        </div>

        <iframe
          src={`${profile.cv}#view=FitH`}
          title="CV preview"
          className="flex-1 w-full bg-white"
        />

        {/* phones often cannot show a PDF inside a frame, so offer a new-tab fallback */}
        <p className="px-4 py-2 text-xs text-muted border-t border-line text-center">
          CV not showing?{" "}
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-gold hover:text-white"
          >
            Open in a new tab <FiExternalLink />
          </a>
        </p>
      </div>
    </div>
  );
};

export default CvViewer;

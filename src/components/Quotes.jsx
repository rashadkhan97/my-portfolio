import { useEffect, useState } from "react";
import { quotes, quoteSeconds, quoteFadeSeconds } from "../data/content";

const FADE_MS = quoteFadeSeconds * 1000;

// quotes shown in a different order on every visit
const shuffled = () => [...quotes].sort(() => Math.random() - 0.5);

// slim strip under the hero: one testing / SDET / SDLC quote at a time, fading to the next
const Quotes = () => {
  const [order] = useState(shuffled);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let swap;
    const timer = setInterval(() => {
      setVisible(false);
      swap = setTimeout(() => {
        setIndex((i) => (i + 1) % order.length);
        setVisible(true);
      }, FADE_MS);
    }, quoteSeconds * 1000 + FADE_MS);
    return () => {
      clearInterval(timer);
      clearTimeout(swap);
    };
  }, [order]);

  const quote = order[index];

  return (
    <div className="w-full border-y border-line bg-white/[0.03] px-4 py-5">
      <p
        aria-live="off"
        style={{ transitionDuration: `${FADE_MS}ms` }}
        className={`mx-auto flex min-h-[5.5rem] max-w-[1000px] flex-wrap items-center justify-center gap-x-2 text-center text-base text-white transition-opacity motion-reduce:transition-none md:min-h-[2.25rem] md:text-[19px] ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span>&ldquo;{quote.text}&rdquo;</span>
        <span className="text-sm text-muted md:text-[15px]">
          &mdash; {quote.author}
        </span>
      </p>
    </div>
  );
};

export default Quotes;

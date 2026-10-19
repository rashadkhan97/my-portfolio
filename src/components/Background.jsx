// screen-wide background effects (styles in index.css): floating gold dust, darker corners and a very fine film grain,
// all fixed to the screen so they cover every section. Rendered once at the top of App.jsx; delete that line to remove them.

// 66 specks placed with the R2 sequence (two different irrational steps), which covers the screen evenly in both
// directions: left to right (x) and bottom to top (t, how far up its path a speck is at page load).
// Each floats from the bottom of the screen to the top, swaying sideways by --dx, then loops.
const frac = (n) => n - Math.floor(n);
const dust = Array.from({ length: 66 }, (_, i) => {
  const x = frac(0.5 + i * 0.7548776662);
  const t = frac(0.5 + i * 0.569840291);
  const duration = 34 + Math.floor(frac(i * 0.3247) * 36); // 34-70 seconds per crossing: slow and calm
  return {
    left: `${(x * 98 + 1).toFixed(1)}%`,
    size: [1.5, 2, 2, 2.5, 3][i % 5],
    duration,
    delay: -(t * duration).toFixed(1), // negative delay: already spread over the screen on load
    dx: Math.round((frac(i * 0.4142) - 0.5) * 140), // sideways sway in px
  };
});

const Background = () => {
  return (
    <>
      <div className="bg-dust" aria-hidden="true">
        {dust.map((d, i) => (
          <span
            key={i}
            style={{
              left: d.left,
              width: d.size,
              height: d.size,
              animationDuration: `${d.duration}s`,
              animationDelay: `${d.delay}s`,
              "--dx": `${d.dx}px`,
            }}
          ></span>
        ))}
      </div>
      <div className="bg-vignette" aria-hidden="true"></div>
      <div className="bg-grain" aria-hidden="true"></div>
    </>
  );
};

export default Background;

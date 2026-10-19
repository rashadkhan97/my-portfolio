// section title with a short gold hairline; used by every section component
const SectionHeading = ({ title }) => {
  return (
    <div className="mb-10">
      <h2 className="font-heading text-white text-4xl md:text-5xl font-bold">
        {title}
      </h2>
      <div className="h-px w-16 bg-gold mt-4"></div>
    </div>
  );
};

export default SectionHeading;

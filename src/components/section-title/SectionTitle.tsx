interface SectionTitleProps {
  title: string;
  path: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
  const { title, path } = props;

  return (
    <div className="section-title-div border-b py-10 border-gray-600">
      <h1 className="section-title-title text-5xl text-center mb-10 max-md:text-7xl max-sm:text-6xl text-accent-content">
        {title}
      </h1>
      <p className="section-title-path text-xl text-center max-sm:text-xl text-accent-content">
        {path}
      </p>
    </div>
  );
};

export default SectionTitle;

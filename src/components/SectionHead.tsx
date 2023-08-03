function SectionHead({
  icon,
  title,
  className = "",
}: {
  icon: JSX.Element;
  title: string;
  className?: string;
}) {
  return (
    <div className={`section__head ${className}`}>
      <span>{icon}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionHead;

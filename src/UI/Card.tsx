function Card({
  className = "",
  children,
}: {
  className?: string;
  children: JSX.Element | JSX.Element[];
}) {
  return <article className={`card ${className}`}>{children}</article>;
}

export default Card;

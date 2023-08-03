function Card({
  className = "",
  children,
}: {
  className?: string;
  children: string;
}) {
  return <article className={`card ${className}`}>{children}</article>;
}

export default Card;

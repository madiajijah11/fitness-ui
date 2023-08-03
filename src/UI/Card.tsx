import { ReactNode } from "react";

function Card({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <article className={`card ${className}`}>{children}</article>;
}

export default Card;

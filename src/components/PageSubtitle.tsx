import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
}

function PageSubtitle({ children }: Props) {
  return <p className="text-center text-neutral-400 leading-tight">{children}</p>;
}

export default PageSubtitle;
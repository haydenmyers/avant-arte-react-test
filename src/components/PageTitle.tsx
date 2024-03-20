import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
}

function PageTitle({ children }: Props) {
  return <h1 className="text-neutral-900 font-bold text-[2rem] leading-tight text-center">{children}</h1>;
}

export default PageTitle;
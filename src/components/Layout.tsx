import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="py-14 container">
      <div className="max-w-2xl mx-auto">
        {children}
      </div>
    </div>
  );
}

export default Layout;
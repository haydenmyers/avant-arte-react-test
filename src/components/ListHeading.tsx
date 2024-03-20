import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  totalItemCount: number;
  completedItemCount: number;
}

function ListHeading({ children, totalItemCount, completedItemCount }: Props) {
  return (
    <h2 className="flex justify-between p-4 leading-tight">
      <span className="text-neutral-900 font-bold mr-3">{children}</span>
      <span className="text-neutral-400">{completedItemCount} / {totalItemCount}</span>
    </h2>
  );
}

export default ListHeading;
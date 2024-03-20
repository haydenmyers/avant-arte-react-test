import type { ApiListItem } from "../types/list";

type Props = {
  id: ApiListItem["id"];
  name: string;
  count: number;
  isCompleted: boolean;
  onToggle: (id: ApiListItem["id"]) => void;
}

function ListItem({ id, name, count, isCompleted, onToggle }: Props) {
  return (
    <li>
      <label className="flex items-center leading-tight py-3 cursor-pointer">
        {/* Checkbox */}
        <input type="checkbox" className="mr-3" checked={isCompleted} onChange={() => onToggle(id)} />

        {/* Name */}
        {isCompleted ? (
          <s className="text-neutral-400">{name}</s>
        ) : (
          <strong className="text-neutral-900">{name}</strong>
        )}
        
        {/* Count */}
        <span className="text-neutral-400 pl-3 ml-auto">
          <span>x</span><span className="inline-block text-right text-neutral-400 min-w-5 pl-1">{count}</span>
        </span>
      </label>
    </li>
  );
}

export default ListItem;
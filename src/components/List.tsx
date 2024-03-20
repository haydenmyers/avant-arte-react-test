import { useEffect, useState } from "react";
import ListHeading from "./ListHeading";
import ListItem from "./ListItem";
import type { ApiListItem } from "../types/list";

type Props = {
  heading: string;
  items: ApiListItem[];
}

type StatefulListItem = ApiListItem & {
  isCompleted: boolean;
}

function List({ heading, items }: Props) {
  const [listItems, setListItems] = useState<StatefulListItem[]>([]);

  const totalItemCount = listItems.reduce((count, item) => count += item.count, 0);
  const completedItemCount = listItems.reduce((count, item) => {
    if (!item.isCompleted) {
      return count;
    }

    return count += item.count;
  }, 0);

  // Whenever this component receives new items, we update the rendered
  // items to contain these new items while ensuring any old
  // items maintain their `isCompleted` state.
  useEffect(() => {
    setListItems((currentItems) => {
      return items.map(item => ({
        ...item,
        isCompleted: currentItems.find(({ id }) => item.id === id)?.isCompleted || false
      }));
    });
  }, [items]);

  // This handles the 'checking' of a list item.
  function handleToggleItemCompleted(id: StatefulListItem["id"]) {
    setListItems((currentItems) => {
      // Make a copy so we are not referencing objects from currentItems.
      const updatedItems = currentItems.map(currentItem => ({...currentItem}));

      for (const item of updatedItems) {
        if (item.id === id) {
          item.isCompleted = !item.isCompleted;
        }
      }

      return updatedItems;
    });
  }

  return (
    <section>
      <ListHeading totalItemCount={totalItemCount} completedItemCount={completedItemCount}>{heading}</ListHeading>
      <ul className="bg-white rounded-2xl shadow-primary px-4 py-1 divide-y divide-neutral-100">
        {listItems.map(item => (
          <ListItem 
            key={item.id} 
            id={item.id}
            name={item.name} 
            count={item.count} 
            isCompleted={item.isCompleted}
            onToggle={handleToggleItemCompleted}
          />
        ))}
      </ul>
    </section>
  );
}

export default List;
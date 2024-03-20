import { useEffect, useMemo, useState } from "react";
import List from "./List";
import type { ApiListItem, ListStruct } from "../types/list";

function Lists() {
  const [listData, setListData] = useState<ApiListItem[]>([]);
  const [listDataErrorMessage, setListDataErrorMessage] = useState("");
  const [listDataFetchPending, setListDataFetchPending] = useState(false);
  
  useEffect(() => {
    setListDataFetchPending(true);
    fetch('https://mock.avant-arte-cc5.workers.dev')
    .then(res => res.json())
    .then(setListData)
    .catch(handleListDataFetchError)
    .finally(() => setListDataFetchPending(false));
  }, []);

  function handleListDataFetchError(error: unknown) {
    let errorMessage = "An unknown error occurred. We are unable to show your list data at this time.";
    if (error instanceof Error) {
      errorMessage = error.message || errorMessage;
    }
    setListDataErrorMessage(errorMessage)
  }

  // Group list items by predetermined categories. This is by design as
  // I have choosen to go with a restricted approach. If it's required
  // to make it more dynamic, then I'm happy to change the below code.
  const groupedListData = useMemo(() => {
    // If choosing to iterate over this list, the order of the items matter.
    // Note. The order of object keys cannot be guaranteed by older browsers.
    const listStruct: ListStruct = {
      vegtables: {
        heading: "Vegetables",
        items: [],
      },
      beverages: {
        heading: "Beverages",
        items: [],
      },
      bakery: {
        heading: "Bakery",
        items: [],
      },
    }

    for (const item of listData) {
      if (item.category in listStruct) {
        listStruct[item.category].items.push(item);
      }
    }

    return listStruct;
  }, [listData]);

  // A type predicate function that will later make TypeScript happy.
  function isValidListKey(key: PropertyKey): key is keyof typeof groupedListData {
    return key in groupedListData;
  }

  // Render loading
  if (listDataFetchPending) {
    return <p>Loading...</p>
  }

  // Render error
  if (listDataErrorMessage) {
    return <p>{listDataErrorMessage}</p>;
  }

  // Render data
  return (
    <div className="grid grid-cols-1 desktop:grid-cols-2 gap-6">
      {Object.keys(groupedListData).map(listKey => {
        if (!isValidListKey(listKey)) return; // TypeScript is happy now.
        return (
          <List
            key={listKey} 
            heading={groupedListData[listKey].heading} 
            items={groupedListData[listKey].items}
          />
        );
      })}
    </div>
  );
}

export default Lists;
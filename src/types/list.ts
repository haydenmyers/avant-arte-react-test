export type ListCategory = "beverages" | "vegtables" | "bakery";

export type ApiListItem = {
  id: string;
  category: ListCategory;
  name: string;
  count: number;
}

export type ListStruct = {
  [key in ListCategory]: {
    heading: string;
    items: ApiListItem[];
  }
}
import { useContext, createContext, useState } from "react";
import type { Dispatch, SetStateAction, ReactNode } from "react";
import { Tables } from "@/lib/supabase";

type SearchDataContextType = {
  data: Tables<"scammer">[];
  setData: Dispatch<SetStateAction<Tables<"scammer">[]>>;
};

const initialData = {
  data: [],
  setData: () => null,
};

const dataContext = createContext<SearchDataContextType>(initialData);

export function SearchDataContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [data, setData] = useState<Tables<"scammer">[]>([]);
  return (
    <dataContext.Provider value={{ data, setData }}>
      {children}
    </dataContext.Provider>
  );
}

export function useSearchData() {
  const context = useContext(dataContext);
  if (!context)
    throw new Error("Search-data context must be used with in Provider");
  return context;
}

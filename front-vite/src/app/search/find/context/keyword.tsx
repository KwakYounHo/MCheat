import { createContext, useState, useContext } from "react";

type KeywordContext = {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
};

const keywordContext = createContext<KeywordContext>({
  keyword: "",
  setKeyword: () => null,
});

export function KeywordContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [keyword, setKeyword] = useState<string>("");

  return (
    <keywordContext.Provider value={{ keyword, setKeyword }}>
      {children}
    </keywordContext.Provider>
  );
}

export function useKeywordContext() {
  const context = useContext(keywordContext);
  if (!context)
    throw new Error("keywordContext must be used in Context provider");
  return context;
}

import * as React from "react";

// ! list's length define after searching
// list length context
type ResultLengthProvider = {
  resultLength: number;
  setResultLength: React.Dispatch<React.SetStateAction<number>>;
};

const resultLengthContext = React.createContext<ResultLengthProvider>({
  resultLength: 0,
  setResultLength: () => null,
});

export function useResultLengthContext() {
  const context = React.useContext(resultLengthContext);

  if (context === undefined)
    throw new Error("useResultLengthContext must be used with in Provider");

  return context;
}

export function ResultLengthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [resultLength, setResultLength] = React.useState<number>(0);
  const value: ResultLengthProvider = {
    resultLength: resultLength,
    setResultLength: setResultLength,
  };

  return (
    <resultLengthContext.Provider value={value}>
      {children}
    </resultLengthContext.Provider>
  );
}

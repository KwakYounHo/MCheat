// package
import { ResultLengthContextProvider } from "./context/result-length";
import { KeywordContextProvider } from "./context/keyword";

// comp
import FindPageContent from "@/app/search/find/pageContent";

// find page root component
export default function Find() {
  return (
    <>
      <KeywordContextProvider>
        <ResultLengthContextProvider>
          <FindPageContent />
        </ResultLengthContextProvider>
      </KeywordContextProvider>
    </>
  );
}

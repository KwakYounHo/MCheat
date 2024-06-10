import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { useParams } from "react-router-dom";

import { useKeywordContext } from "./context/keyword";

import FindCard01 from "@/app/search/find/card01/card";

export default function FindPageContent() {
  const { setKeyword } = useKeywordContext();
  const { keyword } = useParams();
  useEffect(() => {
    setKeyword(keyword as string);
  }, [keyword]);
  return (
    <>
      <Helmet>
        <title>{keyword} :: SScammer-search</title>
      </Helmet>
      <p className={"text-4xl font-bold my-10 mr-auto"}>Scam cases</p>
      <FindCard01 />
    </>
  );
}

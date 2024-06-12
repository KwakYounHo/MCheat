import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { useParams } from "react-router-dom";

import { useKeywordContext } from "@/utils/context/keyword";

import FindCard01 from "@/app/find/keyword/card01/card";

export default function KeywordLayout() {
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
      <div className={"my-10 mr-auto"}>
        <p className={"text-4xl font-bold"}>Scam cases</p>
        <p className={"text-sm text-muted-foreground"}>
          Your keyword : {keyword}
        </p>
      </div>
      <FindCard01 />
    </>
  );
}

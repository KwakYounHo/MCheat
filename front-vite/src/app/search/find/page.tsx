import * as React from "react";
import { useParams } from "react-router-dom";
import databaseClient, {
  options as databaseOptions,
} from "@/utils/supabase/client";
import {
  QueryErrorResetBoundary,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

export default function Find() {
  const { keyword } = useParams();

  return (
    <>
      <p>검색 결과 페이지</p>
      <p>검색어 : {keyword}</p>
      <QueryErrorResetBoundary>
        {({ reset }) => {
          return (
            <ErrorBoundary
              onReset={reset}
              fallbackRender={({ resetErrorBoundary }) => {
                return (
                  <button onClick={() => resetErrorBoundary()}>
                    트라이 어게인
                  </button>
                );
              }}
            >
              <React.Suspense fallback={<div>이거나오면 페치중</div>}>
                <TableData keyword={keyword as string} />
              </React.Suspense>
            </ErrorBoundary>
          );
        }}
      </QueryErrorResetBoundary>
    </>
  );
}

function TableData({ keyword }: { keyword: string }) {
  const queryKey = ["keySearch"];
  const queryFn = async () => {
    const { URL, KEY } = databaseOptions;
    const database = databaseClient(URL, KEY);
    const { data } = await database
      .from("scammer")
      .select("*")
      .or(
        `name.ilike.%${keyword}%, bank_account.ilike.%${keyword}%, mobile_number.ilike.%${keyword}%`
      );
    console.log(data);
    return data;
  };
  const { data } = useSuspenseQuery({
    queryKey,
    queryFn,
  });

  return (
    <>
      {data?.map((e) => {
        return (
          <div key={e.sccamer_id}>
            <p>{e.bank_account}</p>
            <p>{e.mobile_number}</p>
            <p>{e.name}</p>
            <p>{e.place_of_issues}</p>
            <p>{e.sccamer_id}</p>
          </div>
        );
      })}
    </>
  );
}

// package
import * as React from "react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";

// context
import { useKeywordContext } from "@/app/search/find/context/keyword";

// comp
import TableData from "./table-data";

// ui
import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import style from "@/app/search/find/find.module.css";

// find table root component
export default function TableRowLayout() {
  const { keyword } = useKeywordContext();
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => {
        // react-query error boundary
        return (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary }) => {
              return (
                // Fetch error component
                <TableRow className={"text-center"}>
                  <TableCell colSpan={4}>
                    <p>Something Error...</p>
                    <p>
                      Please retry or Contact{" "}
                      <Link to={"/"} className={"underline"}>
                        Page manager
                      </Link>
                    </p>
                    <Button
                      onClick={() => resetErrorBoundary()}
                      className={"mt-4"}
                    >
                      Try agin
                    </Button>
                  </TableCell>
                </TableRow>
              );
            }}
          >
            <React.Suspense
              fallback={
                // skeleton component
                <TableRow>
                  <TableCell colSpan={4}>
                    <div className={style.tableIsLoadingWrapper}>
                      <p>( {keyword} ) Searching...</p>
                      <Skeleton className={"w-full h-[50px]"} />
                    </div>
                  </TableCell>
                </TableRow>
              }
            >
              <TableData />
            </React.Suspense>
          </ErrorBoundary>
        );
      }}
    </QueryErrorResetBoundary>
  );
}

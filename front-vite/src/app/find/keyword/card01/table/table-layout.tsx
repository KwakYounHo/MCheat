// package
import * as React from "react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";

// context
import { useKeywordContext } from "@/utils/context/keyword";

// comp
import TableData from "./table-data";

// ui
import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import style from "@/app/find/keyword/keyword.module.css";

type Props = React.ComponentProps<typeof TableData>;

// find table root component
export default function TableRowLayout({ currentPage }: Props) {
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
              <TableData currentPage={currentPage} />
            </React.Suspense>
          </ErrorBoundary>
        );
      }}
    </QueryErrorResetBoundary>
  );
}

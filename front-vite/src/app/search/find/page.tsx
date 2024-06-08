// package
import * as React from "react";
import { useParams } from "react-router-dom";
import database from "@/utils/supabase/client";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import {
  QueryErrorResetBoundary,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import CardForm from "./CardInput";

// ui
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus } from "lucide-react";

type ResultLengthProvider = {
  resultLength: number;
  setResultLength: (length: number) => void;
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

export default function Find() {
  const { keyword } = useParams();
  const [resultLength, setResultLength] = React.useState<number>(0);
  const value: ResultLengthProvider = {
    resultLength: 0,
    setResultLength: setResultLength,
  };

  return (
    <>
      <Helmet>
        <title>{keyword} :: SScammer-search</title>
      </Helmet>
      <resultLengthContext.Provider value={value}>
        <p className={"text-4xl font-bold mb-10"}>Search - Scammer</p>
        <Card className={"w-full animation-in"}>
          <CardHeader>
            <CardTitle>Search Result</CardTitle>
            <CardDescription>Your Keyword : {keyword}</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className={"capitalize"}>
                  <TableHead>name</TableHead>
                  <TableHead>bank account</TableHead>
                  <TableHead>mobile number</TableHead>
                  <TableHead>place of issue occur</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRowLayout keyword={keyword as string} />
              </TableBody>
              <TableCaption className={"text-center"}>
                <p>
                  Total {<strong className={"text-xl"}>{resultLength}</strong>}{" "}
                  lists were searched
                </p>
              </TableCaption>
            </Table>
          </CardContent>
          <CardFooter>
            <CardForm className={"w-full"} />
          </CardFooter>
        </Card>
      </resultLengthContext.Provider>
    </>
  );
}

function TableRowLayout({ keyword }: { keyword: string }) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => {
        return (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary }) => {
              return (
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
                <TableRow>
                  <TableCell colSpan={4} className={"relative"}>
                    <div
                      className={
                        "relative flex flex-col justify-center items-center"
                      }
                    >
                      <p
                        className={
                          "absolute w-full text-center text-muted-foreground"
                        }
                      >
                        Loading...
                      </p>
                      <Skeleton className={"w-full h-[50px]"} />
                    </div>
                  </TableCell>
                </TableRow>
              }
            >
              <TableData keyword={keyword as string} />
            </React.Suspense>
          </ErrorBoundary>
        );
      }}
    </QueryErrorResetBoundary>
  );
}

function TableData({ keyword }: { keyword: string }) {
  const { setResultLength } = useResultLengthContext();
  const queryKey = [keyword];
  const queryFn = async () => {
    const DB = database();
    const { data } = await DB.from("scammer")
      .select("*")
      .or(
        `name.ilike.%${keyword}%, bank_account.ilike.%${keyword}%, mobile_number.ilike.%${keyword}%`
      );

    if (data) setResultLength(data?.length);
    return data;
  };

  const { data } = useSuspenseQuery({
    queryKey,
    queryFn,
  });

  if (data) {
    return (
      <>
        {data.length > 0 ? (
          data.map((e) => {
            return (
              <TableRow key={e.sccamer_id}>
                <TableCell>{e.name}</TableCell>
                <TableCell>{e.bank_account}</TableCell>
                <TableCell>{e.mobile_number}</TableCell>
                <TableCell>{e.place_of_issues}</TableCell>
              </TableRow>
            );
          })
        ) : (
          <>
            <TableRow>
              <TableCell colSpan={4} className={"border-b"}>
                <div className={"py-2"}>
                  <p className={"text-center"}>
                    There have been no cases of scam registered so far.
                  </p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4}>
                <Link to={"/register"} className={"w-full"}>
                  <div
                    className={
                      "flex flex-col justify-center items-center text-muted-foreground border-2 border-dashed h-16"
                    }
                  >
                    <Plus width={25} height={25} />
                    <p>Register Fraud Case</p>
                  </div>
                </Link>
              </TableCell>
            </TableRow>
          </>
        )}
      </>
    );
  }
}

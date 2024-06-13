// package
import { useState } from "react";
import { totalPageArray, isPrev, isNext } from "@/utils/paginator.ts";

// context
import { useSearchData } from "@/utils/context/search-data.tsx";

// component
import CardForm from "./cardForm.tsx";
import TableRowLayout from "./table/table-layout.tsx";

// ui
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCaption,
  TableFooter,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination.tsx";

import style from "@/app/find/keyword/keyword.module.css";

// find page card-search table
export default function FindCard01() {
  const { data } = useSearchData();
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <Card className={"w-full animation-in"}>
      <CardHeader>
        <CardTitle>Search Results</CardTitle>
        <CardDescription>
          Rows with a red background contain detailed information. Click to view
          the details!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table className={style.tableWrapper}>
          <TableHeader>
            <TableRow className={"capitalize"}>
              <TableHead>name</TableHead>
              <TableHead>bank account</TableHead>
              <TableHead>mobile number</TableHead>
              <TableHead>place of issue occur</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRowLayout
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </TableBody>
          <TableFooter className={style.footer}>
            <tr>
              <th colSpan={4}>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => {
                          if (isPrev(currentPage))
                            setCurrentPage(currentPage - 1);
                        }}
                        className={
                          isPrev(currentPage)
                            ? "cursor-pointer"
                            : "text-muted-foreground hover:text-muted-foreground"
                        }
                      />
                    </PaginationItem>
                    {totalPageArray(data).map((e, i) => {
                      return (
                        <PaginationItem key={i}>
                          <PaginationLink
                            isActive={currentPage === e}
                            onClick={() => {
                              if (currentPage !== e) setCurrentPage(e);
                            }}
                          >
                            {e}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => {
                          if (isNext(currentPage, totalPageArray(data)))
                            setCurrentPage(currentPage + 1);
                        }}
                        className={
                          isNext(currentPage, totalPageArray(data))
                            ? "cursor-pointer"
                            : "text-muted-foreground hover:text-muted-foreground"
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </th>
            </tr>
          </TableFooter>
          <TableCaption className={"text-center"}>
            <p>
              Total {<strong className={"text-xl"}>{data.length}</strong>} lists
              were searched
            </p>
          </TableCaption>
        </Table>
      </CardContent>
      <CardFooter>
        <CardForm className={"w-full"} />
      </CardFooter>
    </Card>
  );
}

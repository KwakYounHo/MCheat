// context
import { useResultLengthContext } from "@/app/search/find/context/result-length";
import { useKeywordContext } from "@/app/search/find/context/keyword.tsx";

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
} from "@/components/ui/table";

import style from "../find.module.css";

// find page card-search table
export default function FindCard01() {
  const { resultLength } = useResultLengthContext();
  const { keyword } = useKeywordContext();

  return (
    <Card className={"w-full animation-in"}>
      <CardHeader>
        <CardTitle>Search Results</CardTitle>
        <CardDescription>Your Keyword : {keyword}</CardDescription>
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
            <TableRowLayout />
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
  );
}

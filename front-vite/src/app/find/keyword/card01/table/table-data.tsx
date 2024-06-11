// package
import { useResultLengthContext } from "@/app/find/keyword/context/result-length";
import database from "@/utils/supabase/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import timeCal from "@/utils/timezoneCalculator";

// context
import { useKeywordContext } from "@/app/find/keyword/context/keyword";

// ui
import { TableRow, TableCell } from "@/components/ui/table";
import { Plus } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import style from "@/app/find/keyword/keyword.module.css";

// find table's data component
export default function TableData() {
  const { setResultLength } = useResultLengthContext();
  const { keyword } = useKeywordContext();

  const queryKey = [keyword];
  const queryFn = async () => {
    const DB = database();
    const { data } = await DB.from("scammer")
      .select("*")
      .or(
        `name.ilike.%${keyword}%, bank_account.ilike.%${keyword}%, mobile_number.ilike.%${keyword}%`
      );
    return data;
  };

  const { data } = useSuspenseQuery({
    queryKey,
    queryFn,
  });

  useEffect(() => {
    if (data) setResultLength(data.length);
  }, [data]);

  if (data) {
    return (
      <>
        {data.length > 0 ? (
          data.map((e) => {
            return (
              // case data list
              e.detail ? (
                <Popover key={e.sccamer_id}>
                  <PopoverTrigger asChild>
                    <TableRow
                      className={
                        "bg-destructive/10 hover:bg-destructive/50 hover:cursor-pointer"
                      }
                    >
                      <TableCell>{e.name}</TableCell>
                      <TableCell>{e.bank_account}</TableCell>
                      <TableCell>{e.mobile_number}</TableCell>
                      <TableCell>{e.place_of_issue_occur}</TableCell>
                    </TableRow>
                  </PopoverTrigger>
                  <PopoverContent
                    className={
                      "w-full max-w-[80vw] h-full max-h-[30vh] overflow-auto flex flex-col gap-4"
                    }
                  >
                    <div>
                      <p className={"capitalize text-lg"}>detail</p>
                      <p className={"text-muted-foreground text-sm"}>
                        Scammed case details entered by the user
                      </p>
                    </div>
                    <div className={"whitespace-pre-wrap text-sm"}>
                      {e.detail}
                    </div>
                    <div className={"text-muted-foreground text-xs"}>
                      {timeCal.toMy(e.entered_at!)}
                    </div>
                  </PopoverContent>
                </Popover>
              ) : (
                <TableRow key={e.sccamer_id}>
                  <TableCell>{e.name}</TableCell>
                  <TableCell>{e.bank_account}</TableCell>
                  <TableCell>{e.mobile_number}</TableCell>
                  <TableCell>{e.place_of_issue_occur}</TableCell>
                </TableRow>
              )
            );
          })
        ) : (
          // no case so far
          // add insert button
          <TableRow>
            <TableCell colSpan={4} className={"border-b"}>
              <div className={"py-2"}>
                <p className={style.searchNull}>
                  There have been no cases of scam registered so far.
                </p>
              </div>
            </TableCell>
          </TableRow>
        )}
        <TableRow>
          <TableCell colSpan={4}>
            <Link to={"/register"} className={"w-full"}>
              <div className={style.registerButtonWrapper}>
                <Plus width={25} height={25} />
                <p>Register Scam Case</p>
              </div>
            </Link>
          </TableCell>
        </TableRow>
      </>
    );
  }
}

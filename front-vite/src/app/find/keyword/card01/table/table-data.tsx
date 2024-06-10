// package
import { useResultLengthContext } from "@/app/find/keyword/context/result-length";
import database from "@/utils/supabase/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// context
import { useKeywordContext } from "@/app/find/keyword/context/keyword";

// ui
import { TableRow, TableCell } from "@/components/ui/table";
import { Plus } from "lucide-react";

import style from "@/app/find/keyword/keyword.module.css";

// find table's data component
export default function TableData() {
  const { setResultLength } = useResultLengthContext();
  const { keyword } = useKeywordContext();
  const navigate = useNavigate();

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
                <TableRow
                  key={e.sccamer_id}
                  onClick={() => {
                    navigate(`/find/${keyword}/${e.sccamer_id}`);
                  }}
                  className={"hover:bg-destructive/10 hover:cursor-pointer"}
                >
                  <TableCell>{e.name}</TableCell>
                  <TableCell>{e.bank_account}</TableCell>
                  <TableCell>{e.mobile_number}</TableCell>
                  <TableCell>{e.place_of_issue_occur}</TableCell>
                </TableRow>
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

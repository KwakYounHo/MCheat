import { Tables } from "@/lib/supabase";

export function pagination(
  arr: Tables<"scammer">[],
  currentPage: number,
  contentPerPage: number = 10
) {
  return arr.slice(
    (currentPage - 1) * contentPerPage,
    currentPage * contentPerPage
  );
}

export function totalPageArray(
  data: Tables<"scammer">[],
  contentPerPage: number = 10
): number[] {
  const totalPageNum = Math.ceil(data.length / contentPerPage);
  return Array(totalPageNum)
    .fill(0)
    .map((_, i) => i + 1);
}

export function isPrev(currentPage: number): boolean {
  if (currentPage - 1 > 0) {
    return true;
  } else {
    return false;
  }
}

export function isNext(currentPage: number, arr: number[]): boolean {
  if (currentPage + 1 <= arr.length) {
    return true;
  } else {
    return false;
  }
}

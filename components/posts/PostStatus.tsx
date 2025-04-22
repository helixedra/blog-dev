import { twMerge } from "tailwind-merge";

export type PostStatusType = "draft" | "review" | "published" | "rejected";
const styles = `text-[0.65rem] flex items-center justify-center font-semibold px-1.5 h-5 rounded capitalize`;

export function Draft() {
  return (
    <div className={twMerge(`text-green-700 bg-green-100`, styles)}>draft</div>
  );
}

export function Review() {
  return (
    <div className={twMerge(`text-yellow-600 bg-amber-100`, styles)}>
      review
    </div>
  );
}

export function Published() {
  return (
    <div className={twMerge(`text-green-700 bg-green-100`, styles)}>
      published
    </div>
  );
}

export function Rejected() {
  return (
    <div className={twMerge(`text-red-700 bg-red-100`, styles)}>rejected</div>
  );
}

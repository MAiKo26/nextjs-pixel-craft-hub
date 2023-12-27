import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | string,
  options?: {
    currency?: "USD" | "EUR" | "TND";
    notation?: Intl.NumberFormatOptions["notation"];
  }
) {
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 3,
    currency: options?.currency ?? "USD",
    notation: options?.notation ?? "standard",
    style: "currency",
  }).format(numericPrice);
}

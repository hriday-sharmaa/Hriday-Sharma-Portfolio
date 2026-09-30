import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isPlaceholderUrl(url?: string): boolean {
  if (!url) return true;
  return (
    url.includes("[YOUR_USERNAME]") ||
    url.includes("your-username") ||
    url === "#" ||
    url.trim() === ""
  );
}

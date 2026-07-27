import { useLoaderData } from "@tanstack/react-router";
import type { WeddingContent } from "./wedding-types";

export function useWedding(): { content: WeddingContent } {
  return useLoaderData({ from: "/_gated" }) as unknown as {
    content: WeddingContent;
  };
}

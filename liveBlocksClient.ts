import { createClient } from "@liveblocks/client";

export const client = createClient({
  publicApiKey: process.env.LIVEBLOCKS_API_KEY as string,
});

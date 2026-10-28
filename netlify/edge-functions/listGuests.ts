import { getStore } from "@netlify/blobs";
import type { Context, Config } from "@netlify/edge-functions";

export default async (req: Request, context: Context) => {
  const guests = getStore("guests");
  const lists = await guests.get("yes", { type: "json" });

  // const { stores } = await listStores();
  // console.log(stores)

  return new Response(JSON.stringify(lists), { status: 200 });
};

export const config: Config = {path: "/list"};
import { getStore } from "@netlify/blobs";
import type { Context, Config } from "@netlify/edge-functions";

type Guest = {
  name: string,
  isAttending: "yes" | "no",
}

export default async (req: Request, context: Context) => {
  const guests = getStore("guests");

  const {name, isAttending} = await req.json() as Guest;
  const list = await guests.get(isAttending, {type: "json"});

  await guests.setJSON(isAttending, list && list.includes(name) ? list : list ? [...list, name] : [name]);

  return new Response(JSON.stringify(`Success! ${name} is attending`), { status: 200 });
}

export const config: Config = {path: "/set"};
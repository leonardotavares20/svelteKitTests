import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  return json({ data: "Data returned from server" });
};

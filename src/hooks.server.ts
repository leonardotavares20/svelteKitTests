import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname.startsWith("/haha")) {
    return new Response("😂");
  }

  const session = await event.cookies.get("session");

  const user = await getUser(session);

  if (user) {
    return (event.locals.user = user);
  }

  event.locals.user = "Leonardo";

  return resolve(event);
};

import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../server/routers/user";

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3300/trpc",
    }),
  ],
});

async function main() {

  // Query Route
  const user = await trpc.userById.query("2");

  console.log({user});

  //Mutation Route
  const createdUser = await trpc.userCreate.mutate({ name: "sachin" });

  console.log({createdUser});
}

main();

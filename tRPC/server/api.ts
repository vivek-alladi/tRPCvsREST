import { createExpressMiddleware } from "@trpc/server/adapters/express";
import express from "express";
import cors from "cors";
import { appRouter } from "./routers/user";

const app = express();
app.use(cors());

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext: ({ req, res }) => {
      return {};
    },
  })
);

app.listen(3300, (): void => {
  console.log("Server listening on PORT");
});

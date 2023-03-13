import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

interface User {
    id: string;
    name: string;
  }
   
const userList: User[] = [
{ id: '1', name: 'gill' },
{ id: '2', name: 'kohli' },
{ id: '3', name: 'vihari' },
];

const router = t.router;
const publicProcedure = t.procedure;

export const appRouter = router({
    userById: publicProcedure
    .input((val: unknown) => {
      if (typeof val === 'string') return val;
      throw new Error(`Invalid input: ${typeof val}`);
    })
    .query((req) => {
      const { input } = req;
               
      const user = userList.find((u) => u.id === input);
      return user;
    }),
    userCreate: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation((req) => {
      const id = `${Math.random()}`;
 
      const user: User = {
        id,
        name: req.input.name,
      };
 
      userList.push(user);
 
      return user;
    }),
});

export type AppRouter = typeof appRouter;
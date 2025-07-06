import { number, z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
export const appRouter = createTRPCRouter({
    createAI: baseProcedure
        .input(
            z.object({
                text: z.string(),
                number: z.number().optional()
            }),
        )
        .query((opts) => {
            return {
                greeting: `hello ${opts.input.text}`,
                favNum: `your Favourite number is ${opts.input?.number || ' NOT MENTIONED '}`
            };
        }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
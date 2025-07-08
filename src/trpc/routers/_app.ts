import { number, z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { inngest } from '@/inngest/client';
export const appRouter = createTRPCRouter({
    invoke: baseProcedure
        .input(
            z.object({
                text: z.string(),

            })
        ).mutation(async ({ input }) => {
            await inngest.send({
                name: "test/hello.world",
                data: {
                    email: input.text
                }
            })

            return ({ okay: "success" })
        })
    ,
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
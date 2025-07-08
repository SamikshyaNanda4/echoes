import { inngest } from "./client";


export const helloworld = inngest.createFunction(
    { id: "hello-world" },
    { event: "test/hello.world" },
    async ({ event, step }) => {
        //Imagine this is an download or transcript step
        await step.sleep("wait-a-moment", "30s");
        //Imagine this is a video downloading or uploading process
        await step.sleep("wait another moment", "12s")
        return { message: `Hello ${event.data.email}!` }
    }

)
// "use client"
// import { Button } from "@/components/ui/button";
// import { useTRPC } from "@/trpc/client";
// import { useQuery } from "@tanstack/react-query";
// import { use } from "react";
// import { prisma } from "@/lib/db"
import { Suspense } from "react";
import { caller, getQueryClient } from "@/trpc/server";
import { dehydrate, HydrationBoundary, QueryClientContext } from "@tanstack/react-query";
import { trpc } from "@/trpc/server";
import { Client } from "./client";

// import { da } from "date-fns/locale";
const Page = async () => {
  // const trpc = useTRPC();
  // const { data } = useQuery(trpc.createAI.queryOptions({ text: "Samikshya Nanda!", number: 45 }))
  // console.log("Samikshya")
  // const posts = await prisma.post.findMany();
  //localhost:3000/api/create-ai/?body={t}
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.createAI.queryOptions({ text: "Samikshya PREFETCH", number: 231 }))
  // const data = await caller.createAI({ text: "Samikshya Nanda", number: 23 })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading</p>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  )
}

export default Page;
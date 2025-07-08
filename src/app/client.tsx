// "use client"
// import { useTRPC } from "@/trpc/client"
// import { useSuspenseQuery } from "@tanstack/react-query"
// export const Client = () => {
// 
//     const trpc = useTRPC()
//     const val = trpc.createAI.queryOptions({ text: "Samikshya PREFETCH", number: 231 })
//     const { data } = useSuspenseQuery(val)
// 
//     return (
//         <>
//             <div>
//                 {JSON.stringify(data)}
//             </div>
//         </>
//     )
// }
import { Button } from "@/components/ui/button";
// import { prisma } from "@/lib/db"
const Page = () => {
  // const posts = await prisma.post.findMany();
  return (
    <>
      <h1 className="font-bold text-rose-600">Hello World! Duh</h1>
      <Button variant="outline">Subscribe</Button>

      <div>
        Hello Page</div>
    </>)
}

export default Page;
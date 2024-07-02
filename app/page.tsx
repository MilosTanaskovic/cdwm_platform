import { ScrollArea } from "@/components/ui/scroll-area";
import DevOverflowAppLayout from "./(devoverflow_app)/layout";
import HomePage from "./(devoverflow_app)/home/page";
import { sidebarLinks } from "@/constants/dev-overflow-app";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      {/* <Link href={"/sign-in"}>
        <Button className=" small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
          <span className=" primary-text-gradient">Log In</span>
        </Button>
      </Link> */}
      {/** Hero Section */}
      <section className="container">
        <div className=" m-auto flex max-w-screen-md flex-col items-center gap-3 py-24">
          <h1 className=" h1-bold text-dark100_light900 text-3xl md:text-5xl">
            Welcome to DevOverflow
          </h1>
          <p className=" base-medium text-dark500_light700">
            A community-driven platform for asking and answering frontend
            programming questions. Get help, share knowledge, and collaborate
            with developers from around the world. Explore topics in frontend
            web development, mobile app development, algorithms, data structure
            and more.
          </p>
          <Link href={"/sign-in"} className=" flex justify-end max-sm:w-full">
            <Button className=" primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
      {/** Apps Examples */}
      <section id="" className="container">
        <ul className=" my-6 flex items-center gap-6">
          {sidebarLinks?.map((link) => {
            return <li key={link.label}>{link.label}</li>;
          })}
        </ul>
        <ScrollArea className="   h-[800px] w-full rounded-md border">
          <div className=" pointer-events-none">
            <DevOverflowAppLayout isHeaderVisible={false}>
              <HomePage />
            </DevOverflowAppLayout>
          </div>
        </ScrollArea>
      </section>
    </>
  );
}

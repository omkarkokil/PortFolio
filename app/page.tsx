import About from "@/components/custom/About";
import Contact from "@/components/custom/Contact";
import Footer from "@/components/custom/Footer";
import Project from "@/components/custom/Project";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Primary_Font } from "./layout";

export default function Home() {
  return (
    <>
      <div id="start">
        <div className="flex flex-col h-screen gap-10 items-center justify-center">
          <section className="flex gap-10 items-center justify-center">
            <article className="space-y-4">
              <h1 className="text-5xl font-bold">
                Full Stack React & Next <br /> Developer 👋
              </h1>
              <p className="text-lg dark:text-neutral-400 text-neutral-700">
                Hii i am omkar kokil. A passionate Full stack developer from
                India 🇮🇳.
              </p>
              <Button>Resume</Button>
            </article>
            <article>
              <Image
                alt="none"
                className="rounded-full blob"
                src={"/omkar.jpeg"}
                height={270}
                width={270}
              />
            </article>
          </section>
          <div className="flex mt-20 items-center gap-3  justify-center w-full">
            <h1>TECH STACK</h1>
            <div className="h-5">
              <Separator orientation="vertical" />
            </div>
            <div className="flex gap-4 items-center">
              <Image src={"/HTML.svg"} height={40} width={40} alt="none" />
              <Image src={"/CSS.svg"} height={40} width={40} alt="none" />
              <Image
                src={"/javascript.svg"}
                height={40}
                width={40}
                alt="none"
              />
              <Image src={"/type.svg"} height={40} width={40} alt="none" />
              <Image src={"/react.svg"} height={40} width={40} alt="none" />
              <Image
                className="bg-white p-1 !text-white rounded-lg"
                src={"/node.svg"}
                height={40}
                width={40}
                alt="none"
              />
              <Image
                className="bg-white p-1 !text-white rounded-lg"
                src={"/next.svg"}
                height={40}
                width={40}
                alt="none"
              />
            </div>
          </div>
        </div>
      </div>
      <About font={Primary_Font} />
      <Project font={Primary_Font} />
      <Contact />
      <Footer />
    </>
  );
}

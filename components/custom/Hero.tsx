import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import PdfComponent from "./PdfComponent";

const Hero = () => {
  const images = [
    "/HTML.svg",
    "/CSS.svg",
    "/javascript.svg",
    "/type.svg",
    "/react.svg",
    "/node.svg",
    "/next.svg",
  ];

  return (
    <div id="start">
      <div className="flex flex-col min-h-screen gap-10 items-center justify-center">
        <section className="flex md:flex-row flex-col-reverse  gap-10 items-center justify-center">
          <article className="space-y-4 md:px-0 sm:px-4 px-8">
            <h1 className="lg:text-5xl md:text-4xl text-2xl   font-bold">
              Full Stack ReactJs & NextJs <br className="md:block hidden" />{" "}
              Developer 👋
            </h1>
            <p className="md:text-lg  text-sm dark:text-neutral-400 text-neutral-700">
              Hii i am omkar kokil. A passionate Full stack developer from India
              🇮🇳.
            </p>
            <PdfComponent />
          </article>
          <article>
            <Image
              alt="none"
              className="rounded-full blob sm:mt-0 mt-5 !w-[220px] !h-[220px]    sm:!w-[230px] sm:!h-[230px]  lg:!w-[270px] lg:!h-[270px]"
              src={"/omkar.jpeg"}
              height={270}
              width={270}
            />
          </article>
        </section>

        <div className="flex md:mt-20 sm:mt-10 mt-5 items-center sm:gap-3 gap-1  justify-center w-full">
          <h1>TECH STACK</h1>
          <div className="h-5">
            <Separator orientation="vertical" />
          </div>
          <div className="flex gap-2 sm:gap-4 items-center">
            {images.map((image, id) => (
              <Image
                key={id}
                src={image}
                height={40}
                className={`md:!h-[40px] md:!w-[40px] sm:!h-[30px] sm:!w-[30px] !h-[25px] !w-[25px] ${
                  (image === "/next.svg" || image === "/node.svg") &&
                  "bg-white p-1 !text-white rounded-lg"
                } `}
                width={40}
                alt="none"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

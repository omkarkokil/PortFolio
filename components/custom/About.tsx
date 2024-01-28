import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import Link from "next/link";

const About = ({ font }: { font: NextFont }) => {
  return (
    <div className="mb-44 flex justify-center flex-col">
      <h1
        className={`${font.className} text-2xl   font-bold text-center mb-10`}
      >
        About Me
      </h1>
      <section className="flex   justify-center gap-10">
        <article>
          <Image
            className="rounded-sm"
            src="/about.jpg"
            height={400}
            width={400}
            alt="about"
          />
        </article>

        <article className="w-[30%] space-y-4">
          <h1 className="text-xl font-bold">
            I'm thrilled to share a bit about my academic journey and my passion
            for technology.
          </h1>
          <p className="dark:text-neutral-400 text-neutral-700 font-semibold text-sm leading-6 ">
            I recently graduated from{" "}
            <Link
              href={"http://ssgmkhandala.org/"}
              className="dark:text-black text-white font-bold bg-black rounded-sm p-1 text-xs dark:bg-white"
            >
              Shivaji University
            </Link>
            , and it feels like a major milestone in my educational adventure.
            Currently, I'm knee-deep in my Master's program at{" "}
            <Link
              href={"https://www.aesimr.org/"}
              className="dark:text-black text-white font-bold bg-black rounded-sm p-1 text-xs dark:bg-white"
            >
              Abhinav College , Narhe
            </Link>
            , affiliated with Pune University. <br /> The learning never stops,
            and I'm soaking it all in! What really gets me excited is the world
            of web development, and I'm all about Next.js, React.js, and the
            whole MERN tech stack (MongoDB, Express.js, React, Node.js).
          </p>
        </article>
      </section>
    </div>
  );
};

export default About;

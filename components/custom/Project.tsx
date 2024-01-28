import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
const Project = ({ font }: { font: NextFont }) => {
  const data = [
    {
      image: "/blog.png",
      title: "Blog and read along with Magicalwinds.render.com",
      desc: "MagicalWind Blog is a captivating online platform where user can add their blogs and gain some knowledge",
      stack: ["React", "Nodejs", "Mongodb"],
      live: "https://magicalwind.onrender.com/",
    },
    {
      image: "/ecom.png",
      title:
        "ONESTOPSHOP an online ecommerce platform for online product sales",
      desc: "ONESTOPSHOP is a online platform to buy and sell product it has an admin dashboard which is used to add product and handle admin task also to test use demo login button to get admin credentials and after it press login",
      stack: ["React", "Nodejs", "Mongodb", "MUI"],
      live: "https://onestopshop-tzua.onrender.com/",
    },
    {
      image: "/thunderchat.png",
      title: "Thunder chat a way communicate to  your love ones",
      desc: "I recently graduated from <b>Shivaji University</b> , and it feels like a major milestone in my educational adventure. Currently, I'm knee-deep in my Master's program at <b>Abhinav College</b>, Narhe",
      stack: ["Next", "Tailwind", "Prism ORM"],
      live: "https://thunder-chat-navy.vercel.app/",
    },
  ];

  return (
    <div className=" my-10">
      <h1
        className={`${font.className}  text-2xl   font-bold text-center mb-10`}
      >
        My Projects
      </h1>
      <div className="flex flex-col justify-center gap-y-28">
        {data.map((item, id) => (
          <section
            key={id}
            className={`flex ${
              id % 2 == 0 ? "flex-row" : "flex-row-reverse"
            } justify-center gap-10`}
          >
            <article>
              <Image
                className="rounded-sm shadow-xl"
                src={item.image}
                height={400}
                width={400}
                alt="about"
              />
            </article>

            <article className="w-[30%] space-y-4">
              <div className="space-y-4">
                <h1 className="text-xl font-bold">{item.title}</h1>
                <div className="flex items-center  gap-x-2">
                  {item.stack.map((lan, ind) => (
                    <Badge
                      className={`${font.className} text-xs font-semibold`}
                      key={ind}
                      variant={"secondary"}
                    >
                      {lan}
                    </Badge>
                  ))}
                </div>
                <p className="dark:text-neutral-400 text-neutral-700 font-semibold text-sm leading-6">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Button size={"sm"} className="flex gap-2 items-center">
                  Code <FaGithub size={20} />
                </Button>
                <Button
                  size={"sm"}
                  asChild
                  variant={"ghost"}
                  className="flex gap-2 items-center"
                >
                  <Link href={item.live}>
                    Live Demo <FiExternalLink size={20} />
                  </Link>
                </Button>
              </div>
            </article>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Project;

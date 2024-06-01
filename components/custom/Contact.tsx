import { Primary_Font } from "@/app/layout";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const Contact = () => {
  return (
    <div id="project" className="my-44 flex justify-center flex-col">
      <h1
        id="contact"
        className={`${Primary_Font.className} text-2xl   font-bold text-center mb-10`}
      >
        Contact Me
      </h1>
      <section className="flex  justify-center gap-10">
        <div className="sm:flex hidden  gap-3  flex-col">
          <h1>My email</h1>
          <div className="flex dark:bg-[#1e293b] dark:text-white bg-slate-100 text-black p-6 rounded-md  items-center gap-2 ">
            <MdEmail size={22} /> omkarkokil2709@gmail.com
          </div>
          <h1 className="">My Location</h1>
          <div className="flex dark:bg-[#1e293b] dark:text-white bg-slate-100 text-black  p-6 rounded-md  items-center gap-2 ">
            <FaLocationDot size={22} /> 412802 satara maharashtra , India
          </div>
        </div>

        <form className="md:w-[30%] sm:w-[70%] w-[85%] space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Enter your name</Label>
            <Input type="name" id="name" placeholder="name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Enter your email</Label>
            <Input type="name" id="name" placeholder="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Enter your description</Label>
            <Textarea
              className="resize-none"
              rows={5}
              placeholder="Type your message here."
            />
          </div>
          <Button>Send Message</Button>
        </form>
      </section>
    </div>
  );
};

export default Contact;

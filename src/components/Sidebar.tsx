import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import Image from "next/image";


const Sidebar = () => {
    return (
        <div>
            {/*TODO: find a funny picture to put here*/}
            <Image
                src="/images/avatar.png"
                alt="My Profile"
                width={128}
                height={128}
                className="mx-auto border rounded-full"
            />
            <h3 className="my-4 text-3xl font-bold">
                Ha Bach</h3>
            <p className="px-2 py-1 my-3 ">Software Developer</p>

            {/*  social media icons  */}
            <div className="flex justify-center my-5 items-center md:w-full space-x-5">
                {/*TODO: change GitHub pfp*/}
                <a href="https://github.com/ha-bach">
                    <IoLogoGithub className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="https://www.linkedin.com/in/ha-bach/">
                    <IoLogoLinkedin className="w-8 h-8 cursor-pointer"/>
                </a>
            </div>
        </div>
    )
}

export default Sidebar;
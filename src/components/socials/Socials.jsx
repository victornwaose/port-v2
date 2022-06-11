import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Socials = () => {
    return (
        <div className="flex items-center flex-row relative z-20 p-5 w-[50%] mx-auto  justify-between md:justify-start md:fixed md:bottom-0 md:left-0 md:my-72  md:py-0 md:px-8 md:w-[5%] md:flex-col">
            <FaGithub className=" w-[20px] h-10 text-emerald-300" />
            <FaTwitter className="h-10 text-emerald-300" />
            <FaLinkedin className="h-10 text-emerald-300" />
        </div>
    );
};

export default Socials;

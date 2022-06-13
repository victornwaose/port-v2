import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Socials = () => {
    return (
        <div className="flex items-center flex-row relative z-20 p-5 w-auto mx-auto  justify-between md:justify-start md:fixed md:bottom-0 md:left-0 md:my-72  md:py-0 md:px-5 md:w-auto md:flex-col">
            <FaGithub className="w-[60%] h-10 text-gray-400 hover:text-emerald-300" />
            <FaTwitter className="w-[60%] h-10 text-gray-400 hover:text-emerald-300" />
            <FaLinkedin className="w-[60%] h-10 text-gray-400 hover:text-emerald-300" />
            <span className="hidden md:block md:w-[30%] md:text-gray-400 md:h-1"></span>
        </div>
    );
};

export default Socials;

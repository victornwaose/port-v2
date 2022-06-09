import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Socials = () => {
    return (
        <div className="flex items-center relative z-20 p-5 w-9/12 mx-auto justify-between md:justify-start md:fixed bottom-0 left-0 py-0 px-8 w-auto flex-col">
            <FaGithub className="w-2" />
            <FaTwitter className="w-2" />
            <FaLinkedin className="w-2" />
            <span className="hidden md:justify-start md:fixed md:bottom-0 md:left-0 md:py-0 md:px-8 md:w-auto md:flex-col md:h-3/5"></span>
        </div>
    );
};

export default Socials;

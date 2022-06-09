import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Socials = () => {
    return (
        <div className="flex items-center relative z-20 p-5 w-9/12 mx-auto justify-between md:justify-start md:fixed bottom-0 left-0 py-0 px-8 w-auto flex-col">
            <FaGithub />
            <FaTwitter />
            <FaLinkedin />
        </div>
    );
};

export default Socials;

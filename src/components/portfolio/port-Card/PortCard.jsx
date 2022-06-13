import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";

const PortCard = ({ data }) => {
    return (
        <div className="w-full bg-emerald-100 rounded-3xl mt-11 p-4  h-64">
            <div className="flex justify-between">
                <div className="font-bold text-2xl text-yellow-600">
                    0{data.id}
                </div>
                <div className="flex ">
                    <FaGithub className="mr-3  w-[80%] h-7 text-emerald-300  cursor-pointer" />
                    <MdOutlineOpenInNew className="w-[80%] h-7 text-emerald-300 cursor-pointer" />
                </div>
            </div>
            <div className="mt-2">
                <h1 className="text-emerald-600 font-bold text-2xl ">
                    {data.title}
                </h1>
                <h1 className="text-gray-400 text-base font-bold mt-5">
                    {data.desc}
                </h1>
            </div>
        </div>
    );
};

export default PortCard;

import React, { useState } from "react";

import Line from "../../assets/pattern_3.svg";
import Tab1 from "./tabs/Tab1";
import Tab2 from "./tabs/Tab2";

const Work = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        setActiveTab("tab2");
    };
    return (
        <div className="relative">
            {" "}
            <img
                src={Line}
                alt="lines"
                className="absolute top-0 h-36 w-[50%] -left-11"
            />{" "}
            <div className="w-[80%] ml-auto mr-auto mt-12 mb-12 relative  ">
                <div className="w-[100%] ml-auto mr-auto md:w-[70%]">
                    <div className=" flex justify-starts mb-5 md:align-center md:justify-center">
                        <h1 className="text-emerald-700 font-bold text-2xl mr-4 ">
                            02
                        </h1>
                        <h1 className="font-semibold text-2xl md:text-4xl text-gray-800">
                            Work Experiences
                        </h1>
                    </div>
                    <div className="flex flex-col ml-2 md:flex-row text-center">
                        <div className="flex">
                            <span className=" md:border-[1px] md:w-[1px]  md:h-64"></span>{" "}
                            <ul className="flex  flex-row md:flex-col  list-none md:overflow-x-auto ">
                                <li
                                    className={`activeTab === "tab2" ? "active" : ""md:py-4 px-3 font-mono text-gray-500  rounded-md md:inline-block w-auto  text-lg capitalize md:whitespace-nowrap cursor-pointer  -mb-0 hover:bg-emerald-200  md:hover:py-2`}
                                    onClick={handleTab1}
                                >
                                    JD computer
                                </li>
                                <li
                                    className={`activeTab === "tab2" ? "active" : ""md:py-4 font-mono text-gray-500  cursor-pointer rounded-md md:inline-block w-auto text-lg capitalize md:whitespace-nowrap    hover:bg-emerald-200 md:hover:py-2`}
                                    onClick={handleTab2}
                                >
                                    FFMCLTD
                                </li>
                            </ul>
                        </div>

                        <div className="flex-grow py-0 pl-4">
                            {activeTab === "tab1" ? <Tab1 /> : <Tab2 />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;

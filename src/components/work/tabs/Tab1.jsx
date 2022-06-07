import React from "react";
import { FaPlay } from "react-icons/fa";

const Tab1 = () => {
    return (
        <div className="text-gray-500 font-semibold text-base">
            <div>
                <h4 className="flex mt-3 mb-3 md:mt-0 text-base ">
                    Computer Instructor (Full-time)
                    <span className="text-emerald-200 text-base">
                        @JD Computer Technologies
                    </span>
                </h4>
                <h5 className="flex al whitespace-nowrap mt-2">
                    December 2020 - April 2021
                </h5>
                <div>
                    <div className=" mt-2">
                        <div className="flex">
                            <FaPlay className="mr-2 w-[9px] mt-1  text-emerald-200 " />
                            <h1 className="text-base text-left flex  ">
                                Taught computer appreciation to the student this
                                include topics like Microsoft Word, Excel,
                                PowerPoint and Access
                            </h1>
                        </div>

                        <div className="flex mb-4 mt-2">
                            <FaPlay className="mr-2 w-[9px] mt-1 text-emerald-200 " />
                            <h1 className="text-base flex align-start ">
                                ALso taught Web Development like HTML5 CSS3 and
                                JavaScript course to Students{" "}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tab1;

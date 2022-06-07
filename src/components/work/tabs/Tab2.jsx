import React from "react";
import { FaPlay } from "react-icons/fa";

const Tab2 = () => {
    return (
        <div className="text-gray-500 font-semibold text-base">
            <div classNAme="flex mb-4">
                <h4 className="flex align-start mt-3 mb-3">
                    Front-End Engineer (Full-time)
                    <span className="text-emerald-200">
                        @Fidelity Fortune Management Company Limited
                    </span>
                </h4>
                <h5 className="flex align-start whitespace-nowrap">
                    January 2021 - Till Date
                </h5>
                <div>
                    <div className="">
                        <div className="flex">
                            <FaPlay className="mr-2 w-[9px] mt-1 text-emerald-200 " />
                            <h1 className="text-base flex align-start ">
                                Taught computer appreciation to the student this
                                include topics like Microsoft Word, Excel,
                                PowerPoint and Access
                            </h1>
                        </div>

                        <div className="flex mb-4">
                            <FaPlay className="mr-2 w-[9px] mt-1 text-emerald-200" />
                            <h1 className="text-base flex align-start  ">
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

export default Tab2;

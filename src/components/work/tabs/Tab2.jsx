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
                            <h1 className="text-base flex   text-left align-start ">
                                Designed and created the Company website <a href="">@FidelityFortune</a> 
                            </h1>
                        </div>

                        <div className="flex mb-4">
                            <FaPlay className="mr-2 w-[9px] mt-1 text-emerald-200" />
                            <h1 className="text-base flex  text-left align-start  ">
                              Also worked at as data anaylst  with Microsoft tool like Word Excel and Access
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tab2;

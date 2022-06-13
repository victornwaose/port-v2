import React from "react";

import PortCard from "./port-Card/PortCard";
import { data } from "../../data/Data";

const Portfolio = () => {
    return (
        <div className="w-[80%] mr-auto ml-auto mt-14">
            <div className="text-center">
                <h1 className="text-emerald-700 font-bold text-2xl">01</h1>
                <h1 className="font-semibold text-2xl text-gray-800">
                    Some Noteworthy Projects
                </h1>
            </div>
            <div className="grid  m-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {data?.map((data) => (
                    <div>
                        <PortCard data={data} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;

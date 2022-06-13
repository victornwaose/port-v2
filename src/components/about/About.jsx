import React from "react";
import { FaPlay } from "react-icons/fa";

import Victor from "../../assets/IMG_20171226_123706.jpg";

const About = () => {
    return (
        <div className="w-[80%] ml-auto mr-auto mt-12">
            <div className="flex">
                <div className="flex">
                    <h2 className="text-emerald-700 font-bold text-2xl mr-3 mt-1">
                        03
                    </h2>
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
                        About Me{" "}
                    </h1>
                </div>
                <span className=" height w-[340px]  bg-gray-400 mt-6 ml-2 "></span>
            </div>
            <div className="flex flex-col-reverse md:flex-row">
                <div className="mt-4">
                    <div className="w-[90%] text-gray-500 font-semibold text-base">
                        {" "}
                        <h2 className="text-gray-500   ">
                            My name is Victor Nwaose a full-stack engineer with
                            over 2 years experiences of building web
                            applications for SMEs and StartsUps, these days, i
                            enjoy engaging in design-centric tasks ranging from
                            front-end development to User Interface design and
                            my love for art and creation has been key to that
                        </h2>
                        <h2 className="mt-6">
                            Here are some of the tools i currently use and enjoy{" "}
                        </h2>
                        <div className=" mt-6 grid  m-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
                            <div className="flex">
                                <FaPlay className="mr-2 w-[9px] mt-1 text-emerald-200" />
                                <h1 className="text-base ">HTML5</h1>
                            </div>

                            <div className="flex mb-4">
                                <FaPlay className="mr-2 w-[9px] mt-1 text-emerald-200" />
                                <h1 className="text-base">CSS3</h1>
                            </div>
                            <div className="flex mb-4">
                                <FaPlay className="mr-2 w-[9px] mt-1 text-emerald-200" />
                                <h1 className="text-base">Javascript</h1>
                            </div>
                            <div className="flex mb-4">
                                <FaPlay className="mr-2 w-[9px] mt-1 text-emerald-200" />
                                <h1 className="text-base">React</h1>
                            </div>
                            <div className="flex mb-4">
                                <FaPlay className="mr-2 w-[9px] mt-1 text-emerald-200" />
                                <h1 className="text-base">Tailwind</h1>
                            </div>
                            <div className="flex mb-4">
                                <FaPlay className="mr-2 w-[9px] mt-1 text-emerald-200" />
                                <h1 className="text-base">Figma Designs</h1>
                            </div>
                            <div className="flex mb-4">
                                <FaPlay className="mr-2 w-[9px] mt-1 text-emerald-200" />
                                <h1 className="text-base">GitHub</h1>
                            </div>
                            <div className="flex mb-4">
                                <FaPlay className="mr-2 w-[9px] mt-1 text-emerald-200" />
                                <h1 className="text-base">Node</h1>
                            </div>
                            <div className="flex mb-4">
                                <FaPlay className="mr-2 w-[9px] mt-1 text-emerald-200" />
                                <h1 className="text-base">Material-Ui</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 ">
                    <img
                        src={Victor}
                        alt="nwaose"
                        className="rounded-xl w-[100%]  h-5/6"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;

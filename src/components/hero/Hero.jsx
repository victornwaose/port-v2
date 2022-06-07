import Reacts from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ITyped from "react-ityped";
import { FaLongArrowAltRight } from "react-icons/fa";

import Yellow from "../../asset/pattern_2.svg";
import Smily from "../../asset/smilly_face.png";

const Hero = () => {
    const strings = ["Startups", "SMEs"];

    return (
        <div className="relative ">
            <div
                className="hidden md:absolute md:right-0  "
                style={{ bottom: "-20px" }}
            >
                <img
                    src={Yellow}
                    alt="ellipse"
                    className="hidden  md:block  md:w-24 md:opacity-70 "
                />
            </div>
            <div className="w-40/50  ml-auto mr-auto mt-10">
                <div className=" text-left  pt-24 mt-20 relative ">
                    <p class="text-gray-500 md:text-lg mb-5 hide-slideUp ">
                        Hello, I am{" "}
                        <span class="text-gray-900 inline-block">N</span>
                        <span class="hidden-name inline-block align-middle mr-2">
                            waose
                        </span>
                        <span class="text-gray-900">V</span>
                        <span class="hidden-name inline-block align-middle">
                            ictor
                        </span>
                    </p>
                    <h1 className="text-3xl font-sans text-left font-bold text-gray-800  md:text-7xl ">
                        I build visually appealing websites and softwares for{" "}
                        <ITyped
                            className="container text-3xl ityped-cursor  ml-auto mr-auto md:text-7xl font-sans font-bold  block md:inline bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-green-400"
                            showCursor={false}
                            strings={strings}
                            typeSpeed={500}
                            backSpeed={500}
                            startDelay={500}
                            backDelay={900}
                        />
                    </h1>
                </div>
                <div className="w-full rounded-3xl  flex  flex-wrap lg:rounded-full mt-10 p-3 border  items-center  border-gray-400 md:w-2/4 ">
                    <Link
                        to="/"
                        className="w-full lg:w-auto flex text-sm  bg-emerald-500 p-3 rounded-full text-white md:text-base font-semibold hover:bg-emerald-900"
                    >
                        {" "}
                        View my portfolio{" "}
                        <span>
                            <FaLongArrowAltRight className="ml-[5px] mt-[4px] align-middle text-white text-base" />
                        </span>
                    </Link>
                    <Link
                        to="/"
                        className="flex w-full mt-2  rounded-full hover:bg-emerald-200 lg:m-0 lg:w-auto"
                    >
                        {" "}
                        <h4 className=" text-base p-3 text-emerald-500 hover:bg-emerald-200 font-semibold">
                            About ME
                        </h4>{" "}
                        <img className="w-3/2" src={Smily} alt="simly" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;

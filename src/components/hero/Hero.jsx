import Reacts from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ITyped from "react-ityped";
import { FaLongArrowAltRight } from "react-icons/fa";

import Yellow from "../../assets/pattern_2.svg";
import Smily from "../../assets/smilly_face.png";

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
            <div className="w-[80%]  ml-auto mr-auto mt-10  ">
                <div className=" text-left  pt-24 mt-20 relative ">
                    <p className="text-gray-500 md:text-lg mb-5 hide-slideUp ">
                        Hello, I am{" "}
                        <span className="text-gray-900 inline-block">N</span>
                        <span className="hidden-name inline-block align-middle mr-2">
                            waose
                        </span>
                        <span className="text-gray-900">V</span>
                        <span className="hidden-name inline-block align-middle">
                            ictor
                        </span>
                    </p>
                    <h1 className="text-3xl font-sans text-left font-bold text-gray-800  md:text-7xl h-44 md:h-60">
                        I build visually appealing websites and softwares for{" "} <br/>
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
                <div className="w-full rounded-3xl flex justify-between flex-col items-center lg:rounded-full mt-10 py-2 border  border-gray-400 md:w-[33%] md:flex-row ">
                    <Link
                        to="/"
                        className="w-[90%]  md:w-[70%] flex text-xs  bg-emerald-500 p-3   md:ml-2 rounded-full text-white md:text-base font-semibold hover:bg-emerald-900 items-center"
                    >
                        {" "}
                        View my portfolio{" "}
                        <span>
                            <FaLongArrowAltRight className="ml-[5px] mt-[4px] align-middle text-white text-base" />
                        </span>
                    </Link>
                    <Link
                        to="/"
                        className="flex justify-between w-[90%] md:w-[70%] mt-2 ml-3 rounded-full hover:bg-emerald-200 lg:m-0  "
                    >
                        {" "}
                        <h4 className=" text-base p-3 text-emerald-500 font-semibold">
                            About ME
                        </h4>{" "}
                        <img className="w-[30px] mr-9" src={Smily} alt="simly" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;

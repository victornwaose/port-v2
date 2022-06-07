import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
    return (
        <div className=" header fixed top-0 left-0 right-0 z-20 bg-white transparent  h-20">
            <header className="flex justify-between cursor-pointer w-40/50  ml-auto mr-auto mt-3 ">
                <div className="">
                    <img
                        src="/logo.png"
                        alt="logo"
                        className="w-10 h-10 rounded-full mt-1 "
                    />
                </div>
                <div className="flex ">
                    <ul className=" hidden md:flex md:justify-between ml-4 mt-4">
                        <div className="mr-6  hover:text-emerald-600 font-bold">
                            About
                        </div>
                        <div className="mr-6 hover:text-emerald-600 font-bold">
                            Portfolio
                        </div>
                        <div className="mr-6  hover:text-emerald-600 font-bold">
                            Work
                        </div>
                        <div className="mr-6  hover:text-emerald-600 font-bold">
                            Contact
                        </div>
                    </ul>
                </div>

                <ul className="flex rounded-3xl  border-emerald-200 border-2 p-2 ">
                    <Link
                        to="/"
                        className="mr-6 font-bold rounded-full text-center  p-2 text-emerald-600 hover:bg-emerald-200 "
                    >
                        Profile
                    </Link>
                    <div className="font-bold rounded-full text-center p-2 text-emerald-600 hover:bg-emerald-200 ">
                        Blog
                    </div>
                </ul>
            </header>
        </div>
    );
};

export default Header;

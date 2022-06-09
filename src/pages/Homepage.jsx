import React from "react";

import {
    Hero,
    Contact,
    Header,
    Portfolio,
    Work,
    About,
    Socials,
    Email,
} from "../components";

const Homepage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Portfolio />
            <Work />
            <About />
            <Contact />
            <Socials />
            <Email />
        </div>
    );
};

export default Homepage;

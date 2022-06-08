import React from "react";

import {
    Hero,
    Contact,
    Header,
    Portfolio,
    Work,
    About,
    Socials,
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
        </div>
    );
};

export default Homepage;

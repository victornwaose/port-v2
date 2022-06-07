import React from "react";

import { Hero, Contact, Header, Portfolio, Work, About } from "../components";

const Homepage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Portfolio />
            <Work />
            <About />
            <Contact />
        </div>
    );
};

export default Homepage;

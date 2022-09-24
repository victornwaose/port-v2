import React from "react";

const Email = () => {
    const [dimensions, setDimensions] = React.useState({
        width: window.innerWidth,
    });

    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
        });
    };

    React.useEffect(() => {
        window.addEventListener("resize", handleResize, false);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="text-center text-xs relative z-20 py-5 w-auto mx-auto items-center flex md:text-base md:py-0 md:justify-start md:fixed md:bottom-0 md:right-0 md:px-5  md:w-auto md:flex-col md:h-3/5">
            <h1
                className="text-gray-400 w-[60%] ml-auto mr-auto rotate-none hover:text-emerald-300 font-mono  md:w-[50%] md:rotate-180 "
                style={
                    dimensions.width > 768
                        ? { writingMode: "vertical-rl" }
                        : { writingMode: "horizontal-tb" }
                }
            >
                nwaosevictior1234@gmail.com
            </h1>
        </div>
    );
};

export default Email;

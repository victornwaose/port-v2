import React from "react";

const Contact = () => {
    return (
        <div className="w-40/50 ml-auto mr-auto mt-12 mb-12">
            <div className="contact w-[100%] h-full rounded-3xl">
                <div className="flex justify-between w-[95%] ml-auto mr-auto">
                    <div className="px-5 py-6 w-[50%]">
                        <h4 className="font-sans text-xl font-bold text-emerald-300">
                            04 Say Hello
                        </h4>
                        <h1 className=" font-sans font-bold text-2xl  text-white md:text-5xl">
                            Get in Touch
                        </h1>
                        <h4 className="font-sans  text-base  font-medium text-emerald-300 mt-2 md:text-lg">
                            {" "}
                            I am very open to collaborations and consultations.
                            You could reach me on my social media handles or
                            email.
                        </h4>
                    </div>
                    <div className="   bg-transparent  h-full  cursor-pointer">
                        {" "}
                        <button className="px-3 py-2 mt-9 rounded-3xl bg-green-700 text-lg border-yellow-300  text-yellow-300 font-sans p-1  hover:bg-yellow-300 hover:text-white md:text-3xl">
                            Say Hello
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

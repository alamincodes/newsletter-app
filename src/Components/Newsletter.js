import React from "react";
import NewsletterSvg from "../images/Newsletter-web.svg";
const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-2xl">
      <aside className="bg-gray-50">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="max-w-lg mx-auto text-center">
            <img src={NewsletterSvg} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              dolorum.
            </p>
          </div>

          <div className="max-w-xl mx-auto mt-8">
            <form action="#" className="sm:gap-4 sm:flex">
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <input
                  required
                  type="email"
                  placeholder="Email address"
                  pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                  size="30"
                  className="w-full p-3 text-[15px] text-black bg-white border-gray-900 transition rounded-m border-dashed outline-none border rounded-md shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center w-full px-5 py-3 mt-4 text-white transition rounded-md bg-black sm:mt-0 sm:w-auto group focus:outline-none focus:ring focus:ring-black"
              >
                <span className="text-sm font-medium"> Subscribe </span>

                <svg
                  className="w-5 h-5 ml-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Newsletter;

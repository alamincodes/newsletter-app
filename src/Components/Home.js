import React from "react";
import { Link } from "react-router-dom";
import Profile from "../images/IMG_20220907_145052.jpg";
const Home = () => {
  return (
    <div className=" flex-1 flex flex-col">
      <main className="flex-1">
        <div className="flex justify-center items-center md:min-h-screen lg:min-h-screen">
          <div>
            <div className="flex flex-col items-center md:flex-row md:items-start w-[auto] pb-5">
              <img
                className="rounded-full ml-5 mt-5 md:mt-0 w-[125px] h-[125px] object-cover"
                src={Profile}
                alt="Md Alamin"
              />
              <div className="ml-5 my-2 flex flex-col text-center md:text-start ">
                <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold py-2">
                  Md Alamin
                </h1>
                <h3 className="text-2xl">Front-end Developer</h3>
              </div>
            </div>
            {/* -----------card---------------- */}
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:mt-0 lg:mt-0 mt-[-30px] lg:gap-5 md:gap-5">
              <div class="relative block md:w-[250px] lg:w-[250px] w-[250px] h-[100px] lg:h-[150px] md:h-[130px] p-2 my-1 pb-24  rounded-sm shadow-xl">
                <p class="mt-4  font-medium text-black-">
                  If you are a front end developer and you love to share your
                  experience.
                  <a
                    href="mailto:mdalamin88248@gmail.com"
                    className="text-purple-600 underline"
                  >
                    Mail me
                  </a>
                </p>
              </div>
              <div class="relative block md:w-[250px] lg:w-[250px] w-[250px] h-[130px] lg:h-[150px] md:h-[130px] p-2 my-1 pb-24  rounded-sm shadow-xl">
                <p class="mt-4  font-medium text-black">
                  I have a{" "}
                  <Link className="text-purple-600 underline" to="/newsletter">
                    newsletter
                  </Link>
                  , where I write about the things I learned, explored and
                  project I am working on.
                </p>
              </div>
            </div>
            {/* ========button ==========*/}

            <div className="mt-5 grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-2 ">
              <button className="border-2 border-black px-4 lg:px-8 md:px-8  py-3 rounded-[5px] bg-white hover:bg-black hover:text-white flex items-center justify-center ">
                GitHub
              </button>
              <button className="border-2 border-black px-4 py-3 lg:px-8 md:px-8 rounded-[5px] bg-white hover:bg-black hover:text-white flex items-center">
                Instagram
              </button>
              <button className="border-2 border-black px-4 py-3 lg:px-8 md:px-8 rounded-[5px] bg-white hover:bg-black hover:text-white flex items-center">
                Linkedin
              </button>
              <button className="border-2 border-black px-4 py-3 lg:px-8 md:px-8 rounded-[5px] bg-white hover:bg-black hover:text-white flex items-center">
                Portfolio
              </button>
            </div>

            {/* <div className="mx-5 my-5 ">
              <div className="mt-3 text-center md:text-start ">
                <p>
                  If you are a front end developer and you love to share your
                  experience.
                </p>
                <p>
                  <button
                    href="mailto:mdalamin88248@gmail.com"
                    className="text-purple-600 underline"
                  >
                    Mail me
                  </button>{" "}
                  if you want to talk to me about something.
                </p>

                <button className="my-5">
                  I have a{" "}
                  <Link className="text-purple-600 underline" to="/newsletter">
                    newsletter
                  </Link>
                  , where I write about the things I learned, explored and
                  project I am working on.
                </button>
              </div>
            </div> */}
            {/* -------------------------------- */}
            {/* <div className="mt-5 flex justify-center md:justify-start mx-5 ">
              <button
                class="mr-2 inline-flex w-auto  items-center px-5 py-3 text-sm  font-medium text-white transition-colors bg-[#171515] border-2 border-[#171515] rounded hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75"
                href="https://github.com/alamincodes"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </button>
              <button
                class="mr-2 inline-flex w-auto  items-center px-5 py-3 text-sm  font-medium text-black transition-colors bg-white border-2 border-[#171515] rounded hover:bg-transparent hover:text-white  hover:bg-[#171515] focus:outline-none focus:ring active:opacity-75"
                href="https://www.instagram.com/alamincodes"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </button>
              <button
                class="mr-2 inline-flex w-auto  items-center px-5 py-3 text-sm  font-medium text-white transition-colors bg-[#171515] border-2 border-[#171515] rounded hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75"
                href="https://www.linkedin.com/in/alamincodes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </button>
              <button
                class="mr-2 inline-flex w-auto  items-center px-5 py-3 text-sm  font-medium text-black transition-colors bg-white border-2 border-[#171515] rounded hover:bg-transparent hover:text-white  hover:bg-[#171515] focus:outline-none focus:ring active:opacity-75"
                href="https://alamincodes.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </button>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

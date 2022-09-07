import React from "react";
import { Link } from "react-router-dom";
import Profile from "../images/IMG_20220907_145052.jpg";
const Home = () => {
  return (
    <div className=" flex-1 flex flex-col ">
      <main className="flex-1">
        <div className="flex  justify-center items-center min-h-screen">
          <div>
            <div className="flex flex-col items-center md:flex-row md:items-start pb-5">
              <img
                className="rounded-full ml-5 mt-5 md:mt-0 w-[125px] h-[125px] object-cover "
                src={Profile}
                alt="Srejon Khan"
              />
              <div className="ml-5 my-2 flex flex-col justify-center text-center md:text-start ">
                <h1 className="text-4xl font-bold py-2">Md Alamin</h1>
                <h3 className="text-2xl">Front-end Developer</h3>
              </div>
            </div>
            {/* --------------------------- */}
            <div className="mx-5 my-5">
              <div className="mt-3 text-center md:text-start">
                <p>
                  If you are a front end developer and you love to share your
                  experience.
                </p>
                <p>
                  <a
                    href="mailto:mdalamin88248@gmail.com"
                    className="text-purple-600 underline"
                  >
                    Mail me
                  </a>{" "}
                  if you want to talk to me about something.
                </p>

                <p className="my-5">
                  I have a{" "}
                  <Link className="text-purple-600 underline" to="/newsletter">
                    newsletter
                  </Link>
                  , where I write about the things I learned, explored and
                  project I am working on.
                </p>
              </div>
            </div>
            {/* -------------------------------- */}
            <div className="mt-5 flex justify-center md:justify-start mx-5">
              <a
                class="mr-2 inline-flex w-auto  items-center px-5 py-3 text-sm  font-medium text-white transition-colors bg-[#171515] border-2 border-[#171515] rounded hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75"
                href="https://github.com/alamincodes"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                class="mr-2 inline-flex w-auto  items-center px-5 py-3 text-sm  font-medium text-black transition-colors bg-white border-2 border-[#171515] rounded hover:bg-transparent hover:text-white  hover:bg-[#171515] focus:outline-none focus:ring active:opacity-75"
                href="https://www.instagram.com/alamincodes"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                class="mr-2 inline-flex w-auto  items-center px-5 py-3 text-sm  font-medium text-white transition-colors bg-[#171515] border-2 border-[#171515] rounded hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75"
                href="https://www.linkedin.com/in/alamincodes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              <a
                class="mr-2 inline-flex w-auto  items-center px-5 py-3 text-sm  font-medium text-black transition-colors bg-white border-2 border-[#171515] rounded hover:bg-transparent hover:text-white  hover:bg-[#171515] focus:outline-none focus:ring active:opacity-75"
                href="https://alamincodes.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

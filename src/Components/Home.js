import React from "react";
import { Link } from "react-router-dom";
import Profile from "../images/IMG_20220907_145052.jpg";
import Footer from "./Footer";
import noteIcon from "../images/note.png";
import { motion } from "framer-motion";
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
                <h3 className="text-2xl">Front End Developer</h3>
              </div>
            </div>
            {/* ===============================card====================================== */}
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:mt-0 lg:mt-0 mt-[-30px] lg:gap-5 md:gap-5 mx-2">
              {/* ===========mail me card================ */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative block md:w-[300px] lg:w-[350px] w-[350px] h-[100px] lg:h-[130px] md:h-[130px] p-2 my-1 pb-24 rounded-[5px]  shadow-[0_3px_10px_rgb(0,0,0,0.1)]"
              >
                <p className="mt-2  font-medium text-black">
                  If you are a front end developer and you love to share your
                  experience.{" "}
                  <a
                    href="mailto:mdalamin88248@gmail.com"
                    className="text-purple-600 underline"
                  >
                    Mail Me
                  </a>
                </p>
              </motion.div>
              {/* --------newsletter card--------- */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative block md:w-[300px] lg:w-[350px] w-[350px] h-[130px] lg:h-[130px] md:h-[130px] p-2 my-1 rounded-[5px] shadow-[0_3px_10px_rgb(0,0,0,0.1)]"
              >
                <p className="mt-2 font-medium text-black">
                  Follow my{" "}
                  <Link className="text-purple-600 underline" to="/newsletter">
                    Newsletter
                  </Link>
                  , where I share things I learned, explored and projects I am
                  currently working on.
                </p>
              </motion.div>
              {/* ----------Notes card---------- */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative block md:w-[300px] lg:w-[350px] w-[350px] h-[130px] lg:h-[130px] md:h-[130px] p-2 my-1 rounded-[5px] shadow-[0_3px_10px_rgb(0,0,0,0.1)]"
              >
                <p className="mt-2 font-medium text-black">
                  Follow our
                  <Link className="text-purple-600 mx-1 underline" to="/notes">
                    Notes
                  </Link>
                  , where we share experiences about the front end. And you can
                  also share your experience with us.
                </p>
              </motion.div>
            </div>
            {/* ========button ==========*/}

            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className="mt-5 grid lg:grid-cols-4 md:grid-cols-4 grid-cols-3 gap-2 ">
              <Link to="/notes">
                <p className="border-2 border-black px-4 lg:px-8 md:px-8  py-3 rounded-[5px] bg-white hover:bg-black hover:text-white flex items-center justify-center ">
                  Notes{" "}
                  <span>
                    <img src={noteIcon} className="w-5" alt="" />{" "}
                  </span>
                </p>
              </Link>
              <Link to="/newsletter">
                <p className="border-2 border-black px-4 lg:px-8 md:px-8  py-3 rounded-[5px] bg-white hover:bg-black hover:text-white flex items-center justify-center  ">
                  Newsletter
                </p>
              </Link>
              <a
                href="https://github.com/alamincodes"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black px-4 lg:px-8 md:px-8  py-3 rounded-[5px] bg-white hover:bg-black hover:text-white flex items-center justify-center "
              >
                GitHub
              </a>

              <a
                href="https://alamincodes.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black px-4 lg:px-8 md:px-8  py-3 rounded-[5px] bg-white hover:bg-black hover:text-white flex items-center justify-center"
              >
                Portfolio
              </a>

              <a
                href="https://www.instagram.com/alamincodes/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black px-4 lg:px-8 md:px-8  py-3 rounded-[5px] bg-white hover:bg-black hover:text-white flex items-center justify-center"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/alamincodes/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black px-4 lg:px-8 md:px-8  py-3 rounded-[5px] bg-white hover:bg-black hover:text-white flex items-center justify-center"
              >
                Linkedin
              </a>
            </motion.div>
          </div>
        </div>
      </main>

      <footer className="flex justify-center items-center lg:mt-[-50px] md:mt-[-20px] mt-10 border-t-2">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;

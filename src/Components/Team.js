import React from "react";
import { Link } from "react-router-dom";
import Developers from "../Developers.json";
import Alamin from "../images/IMG_20220907_145052.jpg";
const Team = () => {
  return (
    <>
      <div className=" max-w-7xl lg:mx-auto lg:px-12 md:px-12">
        <div className="flex justify-between items-center bg-white shadow-xl lg:rounded-md md:rounded-md">
          <h3 className="lg:text-3xl pt-5 md:text-3xl text-2xl mb-4 font-bold text-black p-1 mx-2">
            Our Team.
          </h3>
        </div>
        {/* Developer card*/}
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-3">
          {Developers.map((developer) => (
            <div
              key={developer.id}
              className="flex  justify-center items-center mt-14"
            >
              <div className="relative block bg-black group lg:w-[350px] mx-2">
                <img
                  className="absolute inset-0 object-cover w-full h-full opacity-75 transition-opacity  group-hover:opacity-50"
                  src={developer.imgUrl? developer.imgUrl : Alamin}
                  alt=""
                />
                <div className="relative p-8">
                  <p className="text-sm font-medium tracking-widest text-purple-500 uppercase">
                    {developer.post}
                  </p>

                  <p className="text-2xl font-bold text-white">
                    {developer.name}
                  </p>

                  <div className="mt-64">
                    <div className="opacity-0 transition-all transform translate-y-8  group-hover:opacity-100 group-hover:translate-y-0">
                      <p className="text-sm text-white">
                       
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center my-5">
          <Link to="/">
            <button className="inline-block px-8 py-3 text-sm font-medium text-white bg-black rounded transition hover:scale-110 hover:shadow-xl active:bg-black focus:outline-none">
              Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Team;

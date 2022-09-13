import React from "react";
import Alamin from "../images/IMG_20220907_145052.jpg";
import Note from "./Note";
import userNotes from "../userNotes.json";
import { Link } from "react-router-dom";
const Notes = () => {
  return (
    <div className="max-w-7xl	lg:mx-auto lg:px-12 md:px-12">
      {/* ==============navbar start================= */}
      <div className="flex justify-between items-center bg-white shadow-xl lg:rounded-md md:rounded-md">
        <h3 className="lg:text-3xl pt-5 md:text-3xl text-2xl mb-4 font-bold text-black p-1 mx-2">
          Developer Notes.
        </h3>

        <Link to="/createNote"><button className="border-2 p-3 mx-2 border-black bg-black text-white rounded-md text-sm hover:bg-white hover:text-black">Create your note</button></Link>
        {/* =================navbar end=============== */}
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-4 p-2">
        {/* ========================notes======================== */}
        {userNotes && userNotes.map((note) => (
          <Note key={note.id} note={note} alaminImg={Alamin}/>
        ))}
      </div>
    </div>
  );
};

export default Notes;

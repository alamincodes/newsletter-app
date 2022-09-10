import React from "react";
import Working from "../images/working.png";

const CreateNote = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <img src={Working} className="w-24 animate-pulse" alt="" />
      <p>Create Note, work in progress...</p>
    </div>
  );
};

export default CreateNote;

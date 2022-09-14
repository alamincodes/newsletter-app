import React from "react";

const Note = ({ note, alaminImg }) => {
  const { name, question, answer, status,imgUrl, userGithubLink } = note;
  return (
    <div className="bg-white border-2 border-gray-100 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.1)]   hover:shadow-[0_3px_10px_rgb(0,0,0,0.4)]">
      <div className="flex justify-end">
        {status == "verified" ? <strong className="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tr-xl rounded-bl-xl rounded bg-green-600 py-1.5 px-3 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>

          <span className="text-[10px] font-medium sm:text-xs">verified</span>
        </strong>
        :
        <strong className="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tr-xl rounded-bl-xl rounded bg-yellow-300 py-1.5 px-3 text-gray-900">
          

          <span className="text-[10px] font-medium sm:text-xs">Unknown</span>
        </strong>}
      </div>
      <div className="flex items-start p-6">
        <img
          src={imgUrl? imgUrl : alaminImg}
          alt={name}
          className="object-cover rounded-lg h-14 w-14"
        />

        <div className="ml-4">
          <strong className="font-medium text-purple-700 sm:text-lg">
            <p>{question}</p>
          </strong>

          <p className="text-sm text-black line-clamp-2">{answer}</p>

          <div className="mt-2 sm:flex sm:items-center sm:gap-2">
            <p className="sm:block sm:text-xs sm:text-gray-500">
              <div className=" flex justify-center items-center ">
                <span className="font-bold text-red-400 text-2xl mr-1">·</span>
                <span>
                  Posted by
                  <a
                    href={userGithubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-1 font-medium underline text-purple-700"
                  >
                    {name}
                  </a>
                </span>
              </div>
            </p>
          </div>
        </div>
      </div>

      
    </div>
    
  );
};

export default Note;

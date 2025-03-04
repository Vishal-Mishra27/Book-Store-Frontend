import React from "react";
import Navabr from "./Navabr";

function Contact() {
  return (
    <>
    <Navabr/>
      <div className=" flex items-center justify-center h-screen">
        <div className="w-96">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <div>
              <h1 className="text-3xl font-bold text-center text-pink-500 mb-4">
                Contact Us
              </h1>
            </div>
            <label className="input input-bordered flex items-center gap-2 my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Name" />
            </label>

            <label className="input input-bordered flex items-center gap-2 my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>

            <label className="input input-bordered flex items-center gap-2 my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5Zm6 13H5v-1h6v1Zm0-2H5V2h6v9Z" />
              </svg>
              <input type="text" className="grow" placeholder="Mobile Number" />
            </label>

            <label className="input input-bordered flex items-start gap-2 my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 mt-1"
              >
                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm1.5 3.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75ZM4.25 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" />
              </svg>
              <textarea
                // rows="3"
                className="grow p-2 resize-none outline-none"
                placeholder="Message"
              ></textarea>
            </label>

            <div className="flex items-center justify-center">
              <button className="btn btn-secondary shadow-xl">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

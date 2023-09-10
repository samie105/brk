/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "../../contexts/themeContext";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const { isDarkMode, baseColor } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the progress by a certain amount
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 2; // Increase by 10% (adjust as needed)
        } else {
          clearInterval(interval); // Stop the interval when progress reaches 100%
          setIsVisible(false);
          return prevProgress;
        }
      });
    }, 250);
  }, []);

  return isVisible ? (
    <div
      className={`fixed top-0 left-0 z-50 ${
        isDarkMode ? `${baseColor}` : "bg-white"
      } w-full h-full`}
    >
      <section className="section relative w-full h-full">
        {" "}
        <div
          className={`   animate__animated text-xl flex w-full h-full justify-center items-center ${
            progress > 94 ? "animate__slideOutRight" : ""
          }`}
        >
          <div className="progress-cont w-4/5 md:w-1/2">
            <div
              className={`${
                isDarkMode ? "bg-[#11111150]" : "bg-gray-100"
              } progressguauge w-full h-1.5 rounded-full  overflow-hidden transition-all relative`}
            >
              <div
                className="progressbar absolute rounded-full h-full top-0 left-0 transition-all bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>{" "}
        <div
          className={`header  absolute w-full flex items-center justify-center font-bold pt-4  ${
            progress > 10 ? "top-0 " : "-top-20"
          }`}
        >
          <div
            className={` animate__faster animate__animated ${
              isDarkMode ? "text-white" : "text-black"
            } font-bold text-lg ${
              progress > 10 && progress <= 95 ? "animate__slideInDown" : ""
            } ${progress >= 95 ? "animate__slideOutUp" : ""}`}
          >
            Brokersite Name
          </div>
        </div>
        <div
          className={`messages absolute w-full flex items-center justify-center pb-4 ${
            progress > 10 ? "bottom-0" : "-bottom-20"
          }`}
        >
          {progress <= 40 && (
            <div
              className={`text-sm md:text-base rounded-full animate__faster animate__animated py-3 px-4 font-bold ${
                isDarkMode
                  ? `bg-[#111] text-white shadw-[0px_2px_20px_10px_#f7fafc09]`
                  : "bg-white shadow-[0px_0px_15px_10px_#00000009]"
              }  ${
                progress > 10 && progress <= 35 ? "animate__slideInUp" : ""
              } ${progress >= 35 ? "animate__slideOutDown" : ""}`}
            >
              Hey👋 Nice seeing you
            </div>
          )}
          {progress > 40 && progress <= 85 && (
            <div
              className={`text-sm md:text-base rounded-full animate__faster animate__animated py-3 px-4 font-bold ${
                isDarkMode
                  ? `bg-[#111] text-white shadw-[0px_2px_20px_10px_#f7fafc09]`
                  : "bg-white shadow-[0px_0px_15px_10px_#00000009]"
              }  ${
                progress > 40 && progress <= 82 ? "animate__slideInUp" : ""
              } ${progress >= 82 ? "animate__slideOutDown" : ""}`}
            >
              🌟 Setting up the page...
            </div>
          )}
          {progress > 85 && (
            <div
              className={`text-sm md:text-base flex items-center rounded-full animate__faster animate__animated py-3 px-4 font-bold ${
                isDarkMode
                  ? `bg-[#111] text-white shadw-[0px_2px_20px_10px_#f7fafc09]`
                  : "bg-white shadow-[0px_0px_15px_10px_#00000009]"
              }  ${
                progress > 85 && progress <= 95 ? "animate__slideInUp" : ""
              }${progress >= 95 ? "animate__slideOutDown" : ""}`}
            >
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 text-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="message"> Your page is ready</div>
            </div>
          )}
        </div>
      </section>{" "}
    </div>
  ) : null;
}

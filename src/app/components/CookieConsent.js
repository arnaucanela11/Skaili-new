"use client";

import { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    setShowConsent(!hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setCookie("localConsent", "true", { maxAge: 60 * 60 * 24 * 365 });
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-10 right-10 bg-white p-4 shadow-lg flex flex-col justify-between w-fit items-center z-50 rounded-2xl gap-4 ">
      <div className="flex flex-row justify-center items-start gap-4">
        <p className="text-dark text-base max-w-[240px] text-start">
          This website uses cookies to improve user experience. Do you consent
          it?
        </p>
        <button
          onClick={() => {setShowConsent(false);}}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.0142 20.014C19.1431 19.8853 19.3178 19.813 19.5 19.813C19.6822 19.813 19.8569 19.8853 19.9858 20.014L30.9858 31.0141C31.0534 31.077 31.1076 31.1529 31.1451 31.2372C31.1827 31.3216 31.2029 31.4126 31.2045 31.5049C31.2062 31.5972 31.1892 31.6889 31.1546 31.7745C31.12 31.8601 31.0686 31.9379 31.0033 32.0032C30.938 32.0685 30.8602 32.1199 30.7746 32.1545C30.689 32.1891 30.5973 32.2061 30.505 32.2044C30.4127 32.2028 30.3217 32.1826 30.2373 32.145C30.153 32.1074 30.0771 32.0533 30.0142 31.9857L19.0142 20.9857C18.8854 20.8568 18.8131 20.6821 18.8131 20.4999C18.8131 20.3177 18.8854 20.143 19.0142 20.014Z"
              fill="#0E0E2C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.9858 20.014C31.1146 20.143 31.1869 20.3177 31.1869 20.4999C31.1869 20.6821 31.1146 20.8568 30.9858 20.9857L19.9858 31.9857C19.8555 32.1072 19.6831 32.1733 19.505 32.1701C19.3269 32.167 19.157 32.0948 19.031 31.9689C18.9051 31.8429 18.8329 31.673 18.8298 31.4949C18.8266 31.3168 18.8927 31.1444 19.0142 31.014L30.0142 20.014C30.1431 19.8853 30.3178 19.813 30.5 19.813C30.6822 19.813 30.8569 19.8853 30.9858 20.014Z"
              fill="#0E0E2C"
            />
          </svg>
        </button>
      </div>
      <button
        className="bg-[#2b4b9b] py-2 px-4 rounded text-white ml-4 "
        onClick={acceptCookie}
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;

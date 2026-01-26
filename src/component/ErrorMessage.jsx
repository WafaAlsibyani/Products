import React from "react";

const ErrorMessage = ({ message = "Something went wrong while loading products." }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-xl w-full mx-auto p-4 rounded-2xl border border-red-100 bg-linear-to-b from-red-50 to-white flex items-start gap-3 shadow-md">
       
        <div className="shrink-0">
          <div className="w-10 h-10 flex items-center justify-center bg-white border border-red-200 rounded-full shadow-sm">
            <span className="text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        {/* النص */}
        <div>
          <h3 className="text-base md:text-lg font-semibold text-gray-900">
            Oops! We couldn&apos;t load the products
          </h3>
          <p className="mt-1 text-sm text-gray-700">
            {message || "Please try again in a few seconds or refresh the page."}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-3 inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium
                       text-white bg-linear-to-r from-[#FA2E49] via-[#F9336A] to-[#F73386]
                       shadow-sm hover:opacity-90 transition"
          >
            Refresh products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;

import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#F8F9FC] p-10 sm:p-52 flex items-center justify-between flex-col sm:flex-row gap-20">
      <div className="flex items-start justify-between gap-10">
        <div className="bg-light p-4 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 27 27"
            fill="none"
            className="fill-current text-primary"
          >
            <path
              d="M27 13.5C27 14.652 25.5847 15.6015 25.3012 16.6635C25.0087 17.7615 25.749 19.2915 25.1932 20.2523C24.6285 21.2288 22.9297 21.3457 22.1377 22.1377C21.3457 22.9297 21.2288 24.6285 20.2523 25.1932C19.2915 25.749 17.7615 25.0087 16.6635 25.3012C15.6015 25.5847 14.652 27 13.5 27C12.348 27 11.3985 25.5847 10.3365 25.3012C9.2385 25.0087 7.7085 25.749 6.74775 25.1932C5.77125 24.6285 5.65425 22.9297 4.86225 22.1377C4.07025 21.3457 2.3715 21.2288 1.80675 20.2523C1.251 19.2915 1.99125 17.7615 1.69875 16.6635C1.41525 15.6015 0 14.652 0 13.5C0 12.348 1.41525 11.3985 1.69875 10.3365C1.99125 9.2385 1.251 7.7085 1.80675 6.74775C2.3715 5.77125 4.07025 5.65425 4.86225 4.86225C5.65425 4.07025 5.77125 2.3715 6.74775 1.80675C7.7085 1.251 9.2385 1.99125 10.3365 1.69875C11.3985 1.41525 12.348 0 13.5 0C14.652 0 15.6015 1.41525 16.6635 1.69875C17.7615 1.99125 19.2915 1.251 20.2523 1.80675C21.2288 2.3715 21.3457 4.07025 22.1377 4.86225C22.9297 5.65425 24.6285 5.77125 25.1932 6.74775C25.749 7.7085 25.0087 9.2385 25.3012 10.3365C25.5847 11.3985 27 12.348 27 13.5Z"
              fill=""
            />
            <path
              d="M17.4017 9.47666L12.2627 14.6157L9.59875 11.9539C9.0205 11.3757 8.08225 11.3757 7.504 11.9539C6.92575 12.5322 6.92575 13.4704 7.504 14.0487L11.2412 17.7859C11.8037 18.3484 12.7172 18.3484 13.2797 17.7859L19.4942 11.5714C20.0725 10.9932 20.0725 10.0549 19.4942 9.47666C18.916 8.89841 17.98 8.89841 17.4017 9.47666Z"
              fill="#FCFDFF"
            />
          </svg>
        </div>
        <div>
          <h2 className="text-nm font-semibold mb-2">Support</h2>
          <p className="text-sm">
            Seamless travel experiences, backed by our dedicated assistance.{" "}
          </p>
        </div>
      </div>
      <div className="flex items-start justify-between gap-10">
        <div className="bg-light p-4 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="28"
            viewBox="0 0 23 28"
            fill="none"
            className="fill-current text-primary"
          >
            <path
              d="M22.4305 3.42953L11.7298 0.219274C11.58 0.174304 11.4203 0.174304 11.2704 0.219274L0.569533 3.42953C0.231511 3.53092 0 3.84209 0 4.19503V15.9659C0 17.4969 0.619832 19.0642 1.84218 20.6241C2.77574 21.8155 4.06735 23.0118 5.681 24.18C8.39184 26.1422 11.0612 27.346 11.1735 27.3962C11.2774 27.4427 11.3887 27.466 11.5001 27.466C11.6115 27.466 11.7228 27.4428 11.8267 27.3962C11.9389 27.346 14.6083 26.1422 17.3191 24.18C18.9328 23.0118 20.2243 21.8155 21.1579 20.6241C22.3803 19.0642 23 17.497 23 15.9659V4.19503C23 3.84209 22.7686 3.53092 22.4305 3.42953Z"
              fill=""
            />
          </svg>
        </div>
        <div>
          <h2 className="text-nm font-semibold mb-2 ">Security</h2>
          <p className="text-sm">
            Explore confidently knowing your journey is safeguarded by us.{" "}
          </p>
        </div>
      </div>
      <div className="flex items-start justify-between gap-10">
        <div className="bg-light p-4 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            className="fill-current text-primary"
          >
            <path
              d="M24.1071 0H2.89286C1.29517 0 0 1.29517 0 2.89286V18.3214C0 19.9191 1.29517 21.2143 2.89286 21.2143H6.31609L5.79153 25.9296C5.73305 26.459 6.11477 26.9355 6.64413 26.994C6.91748 27.0241 7.19072 26.9362 7.39514 26.7522L13.5492 21.2143H24.1071C25.7048 21.2143 27 19.9191 27 18.3214V2.89286C27 1.29517 25.7048 0 24.1071 0Z"
              fill=""
            />
          </svg>
        </div>
        <div>
          <h2 className="text-nm font-semibold mb-2">Quality</h2>
          <p className="text-sm">
            Elevate your adventures with our commitment to excellence in every
            detail.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

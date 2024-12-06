import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="border-b bg-white font-sans min-h-[60px] px-10 py-3 relative tracking-wide z-50">
      <div className="flex flex-wrap items-center max-lg:gap-y-6 max-sm:gap-x-4">
        <a href="javascript:void(0)">
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-36"
          />
        </a>

        <div
          id="collapseMenu"
          className={`${
            menuOpen ? "lg:flex" : "max-lg:hidden"
          } lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <ul className="lg:flex lg:gap-x-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <a href="javascript:void(0)">
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-[15px] text-[#007bff] block font-bold"
              >
                Home
              </a>
            </li>
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] lg:hover:fill-[#007bff] block"
              >
                Pages
              </a>
            </li>
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] lg:hover:fill-[#007bff] block"
              >
                Blog
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
              >
                Team
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
              >
                About
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
              >
                Contact
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
              >
                Source
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center ml-auto space-x-8">
          <span className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              className="cursor-pointer fill-[#000] hover:fill-[#007bff] inline-block"
              viewBox="0 0 64 64"
            >
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 00 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"
              />
            </svg>
            <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
              0
            </span>
          </span>
          <span className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              className="cursor-pointer fill-[#000] hover:fill-[#007bff] inline-block"
              viewBox="0 0 512 512"
            >
              <path
                d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45s45-20.188 45-45c0-4.195-.573-8.226-1.603-12.004 22.402-9.066 43.703-11.828 60.561-2.008 10.144 7.053 14.34 20.632 10.408 31.409 0 0 61.394-40.456 61.451-40.483A15.002 15.002 0 0 0 437 196c-5.046 0-9.532-3.363-11.36-8.41-1.487-5.038 1.495-9.686 6.656-10.674 25.634-6.743 49.75 10.16 52.56 35.957a15.003 15.003 0 0 0 13.213 13.2l60 210a15.003 15.003 0 0 0 13.267 9.09c5.696 0 10.4-3.39 12.72-8.25 2.76-6.788 5.032-13.09 5.032-18.41 0-50.347-26.686-94.672-72.659-118.923z"
                data-original="#000000"
              />
            </svg>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

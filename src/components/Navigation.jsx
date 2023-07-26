import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={`${
        nav ? "z-50" : ""
      } absolute h-full w-full top-0 left-0 sm:py-16 sm:px-6 md:px-32 `}
    >
      <div
        className={`${
          nav ? "opacity-100" : "opacity-0"
        } fixed h-[100vh] w-[100vw] top-0 left-0 bg-[#0000008d] transition-all duration-300`}
      >
        <div className="text-white py-44 px-16 md:px-48 text-right">
          <ul className="flex flex-col gap-y-3">
            <li
              className={`${
                nav && "animate-[slide_1s_ease-in-out_1_forwards] opacity-0"
              }  relative`}
            >
              <Link onClick={handleNav} to="home" className="cursor-pointer">
                Home
              </Link>
            </li>
            <li
              className={`${
                nav && "animate-[slide_1s_ease-in-out_0.1s_1_forwards]"
              }  opacity-0 relative`}
            >
              <Link
                onClick={handleNav}
                to="services"
                className="cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li
              className={`${
                nav && "animate-[slide_1s_ease-in-out_0.2s_1_forwards]"
              }  opacity-0 relative`}
            >
              <Link
                onClick={handleNav}
                to="testimonials"
                className="cursor-pointer"
              >
                Testimonials
              </Link>
            </li>
            <li
              className={`${
                nav && "animate-[slide_1s_ease-in-out_0.3s_1_forwards]"
              } opacity-0  relative`}
            >
              <Link
                onClick={handleNav}
                to="experiences"
                className="cursor-pointer"
              >
                Experiences
              </Link>
            </li>
            <li
              className={`${
                nav && "animate-[slide_1s_ease-in-out_0.4s_1_forwards]"
              }  opacity-0 relative`}
            >
              <Link
                onClick={handleNav}
                to="education"
                className="cursor-pointer"
              >
                Education
              </Link>
            </li>
            <li
              className={`${
                nav && "animate-[slide_1s_ease-in-out_0.5s_1_forwards]"
              }  opacity-0 relative`}
            >
              <Link onClick={handleNav} to="skills" className="cursor-pointer">
                Skills
              </Link>
            </li>
            <li
              className={`${
                nav && "animate-[slide_1s_ease-in-out_0.6s_1_forwards]"
              }  opacity-0 relative`}
            >
              <Link
                onClick={handleNav}
                to="portfolio"
                className="cursor-pointer"
              >
                Portfolio
              </Link>
            </li>
            <li
              className={`${
                nav && "animate-[slide_1s_ease-in-out_0.7s_1_forwards]"
              }  opacity-0 relative`}
            >
              <Link onClick={handleNav} to="blog" className="cursor-pointer">
                Blog
              </Link>
            </li>
            <li
              className={`${
                nav && "animate-[slide_1s_ease-in-out_0.8s_1_forwards]"
              }  opacity-0 relative`}
            >
              <Link onClick={handleNav} to="contact" className="cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-full w-full p-12 flex flex-col items-end justify-start">
        <div
          className={`${
            nav ? "rotate-90" : "rotate-0"
          } h-14 w-14 rounded-full bg-[#01e9de] fixed top-24 md:right-40 flex items-center justify-center cursor-pointer transition-all duration-300 z-50`}
          onClick={handleNav}
        >
          {nav ? <IoClose size={30} /> : <CgMenuRight size={30} />}
        </div>
      </div>
    </div>
  );
};

export default Navigation;

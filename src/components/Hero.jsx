import { Link } from "react-router-dom";

import { MdLocationOn } from "react-icons/md";

import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-10">
        <div className="relative">
          <div
            style={{ WebkitBorderRadius: "15px 157px 15px" }}
            className={`bg-[#e6ff00] w-[240px] h-[400px] sm:w-[270px] sm:h-[450px] overflow-hidden`}
          >
            <img
              className="h-full w-full object-cover"
              src="/img/profile.jpg"
              alt=""
            />
          </div>
          <div className="bg-[#ffffff] leading-3 w-[13rem] flex items-center justify-center py-4 rounded-full font-medium absolute bottom-0">
            <ul className="flex items-center space-x-6 text-lg">
              <li className="hover:text-[#7d7d7d] transition-all duration-200">
                <a
                  rel="noreferrer"
                  href="https://weirdweeb64.artstation.com/"
                  target="_blank"
                >
                  Arts.
                </a>
              </li>
              <li className="hover:text-[#7d7d7d] transition-all duration-200">
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/rohit-patra-8b035b203/"
                  target="_blank"
                >
                  Link.
                </a>
              </li>
              <li className="hover:text-[#7d7d7d] transition-all duration-200">
                <a
                  rel="noreferrer"
                  href="https://twitter.com/ItsAMeMari00"
                  target="_blank"
                >
                  Twit.
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full py-10">
          <div>
            <p className="text-lg text-white">
              Hello Everyone <span className="text-2xl">👋</span>
            </p>
            <h1 className="pt-4 pb-8 text-[2.5rem] sm:text-[3rem] leading-[1.2] text-white">
              I'm Rohit Patra <br />
              I'm a <br />
              <span className="text-[#e6ff00]">
                <Typewriter
                  words={["developer.", "designer.", "manager."]}
                  loop={Infinity}
                  typeSpeed={150}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  cursor
                  cursorBlinking={false}
                />
              </span>
            </h1>
          </div>
          <hr className="border-[1px] w-full border-[#e5ff0032]" />
          <div className="flex items-center justify-start flex-wrap text-lg mt-5 leading-[3rem] text-[#fff]">
            <div className="flex items-center mr-28 space-x-2 justify-center">
              <span className="text-[1.65rem] text-[#e6ff00]">&#64;</span>
              <Link
                to="#"
                onClick={(e) => {
                  window.location.href = "mailto:rohitpatra123456@gmail.com";
                  e.preventDefault();
                }}
              >
                rohitpatra123456@gmail.com
              </Link>
            </div>
            <div className="flex items-center mr-28 space-x-2 justify-center">
              <MdLocationOn size={24} className="text-[#e6ff00]" />
              <span>Kolkata,India</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:py-8">
        <p className="text-[#a2afa2] text-xl leading-9">
          Hey there. It's me Rohit. I am a game designer, environment artist and
          a writer. I always think if I can think of an utopian world I can also
          make it. And that is when I realized that I should try this. I must
          learn. I must make this.
        </p>
      </div>
    </div>
  );
};

export default Hero;

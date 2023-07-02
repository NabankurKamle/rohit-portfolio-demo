const Footer = () => {
  return (
    <div
      style={{ borderRadius: "0 0 16px 16px" }}
      className="z-10 bg-[#000000] w-full backdrop-blur-xl p-4 sm:p-6 md:p-8 my-[6px] text-[#a2afa2] flex items-center justify-between"
    >
      <div className="w-1/2 sm:w-full">
        <p className="text-sm">Copyright 2023 - All right reserved</p>
      </div>
      <div>
        <ul className=" flex flex-col sm:flex-row sm:gap-x-4 md:gap-x-6 gap-y-2 text-sm text-white">
          <li className="hover:text-[#e6ff00] transition-all duration-500">
            <a
              rel="noreferrer"
              href="https://weirdweeb64.artstation.com/"
              target="_blank"
            >
              Artstation
            </a>
          </li>
          <li className="hover:text-[#e6ff00] transition-all duration-500">
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/rohit-patra-8b035b203/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className="hover:text-[#e6ff00] transition-all duration-500">
            <a
              rel="noreferrer"
              href="https://twitter.com/ItsAMeMari00"
              target="_blank"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

import works from "../collection/works";

const Works = () => {
  return (
    <div id="experiences">
      <div>
        <span className="font-HelveticaBold text-2xl text-[#fff]">
          My Resume
        </span>
        <div className="relative">
          <div className="my-5 h-[0.1px] bg-[#01e9de32]" />
          <div className="px-3 absolute -top-[15px] left-1">
            <span className="h-1 w-3 bg-[#01e9de] mx-[-3px] -rotate-45 inline-block"></span>
            <span className="h-1 w-3 bg-[#01e9de] mx-[-3px] rotate-45 inline-block"></span>
            <span className="h-1 w-3 bg-[#01e9de] mx-[-3px] -rotate-45 inline-block"></span>
            <span className="h-1 w-3 bg-[#01e9de] mx-[-3px] rotate-45 inline-block"></span>
            <span className="h-1 w-3 bg-[#01e9de] mx-[-3px] -rotate-45 inline-block"></span>
            <span className="h-1 w-3 bg-[#01e9de] mx-[-3px] rotate-45 inline-block"></span>
            <span className="h-1 w-3 bg-[#01e9de] mx-[-3px] -rotate-45 inline-block"></span>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="flex items-center justify-center flex-col mb-20 relative">
          <span className="py-2 px-5 bg-white rounded-full text-lg">
            👨‍💻 Works Experiences
          </span>
          <div
            style={{ height: `calc(${(works.length - 1) * 355}px)` }}
            className={` w-[1px] bg-[#01e9de] absolute top-11 hidden xl:block`}
          />
          <div className="hidden xl:flex flex-col absolute top-[175px] space-y-[200px]">
            {works.map((item) => (
              <div
                key={item.id}
                className="h-4 w-4 rounded-full bg-[#01e9de] "
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-5 sm:space-y-8  md:-space-y-10 items-center sm:items-start px-2 sm:px-10">
          {works.map((w) => (
            <>
              <div
                className={`${
                  w.id % 2 ? "" : "self-end"
                } w-full md:w-[500px] lg:h-[190px] bg-[#f6fad016] text-[#a2afa2] px-10 py-12 rounded-xl relative`}
                key={w.id}
              >
                <div
                  className={`${
                    w.id % 2 ? "invisible" : ""
                  } xl:inline-block w-[52px] absolute left-[-52px] hidden`}
                >
                  {/* <div className="h-4 w-4 rounded-full bg-[#e6ff00] hidden lg:block" /> */}
                  <div className="border-[15px] border-solid border-transparent border-r-[#f6fad016] relative -top-2" />
                </div>
                <span className="text-sm text-[#01e9de]">{w.duration}</span>
                <p className="text-white text-xl font-HelveticaBold mb-5">
                  {w.title}
                </p>
                <p>{w.message}</p>
                <div
                  className={`${
                    w.id % 2 ? "" : "invisible"
                  } xl:inline-flex w-[52px] absolute -right-[52px] top-10 justify-between hidden`}
                >
                  <div className="border-[15px] border-solid border-transparent border-l-[#f6fad016] " />
                  {/* <div className="h-4 w-4 rounded-full bg-[#e6ff00] relative top-2 hidden lg:block" /> */}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;

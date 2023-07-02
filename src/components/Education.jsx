import education from "../collection/education";

const Education = () => {
  return (
    <div className="py-10">
      <div className="flex items-center justify-center flex-col mb-20 relative">
        <span className="py-2 px-5 bg-white rounded-full text-lg">
          🎓 Education
        </span>
      </div>
      <div className="flex flex-col space-y-5 sm:space-y-8 md:-space-y-10 items-center sm:items-start px-2 sm:px-10">
        {education.map((e) => (
          <>
            <div
              className={`${
                e.id % 2 ? "" : "self-end"
              } w-full md:w-[500px] bg-[#f6fad016] text-[#a2afa2] px-10 py-12 rounded-xl relative `}
              key={e.id}
            >
              <div
                className={`${
                  e.id % 2 ? "invisible" : ""
                } md:inline-block w-[52px] absolute left-[-52px] hidden`}
              >
                <div className="border-[15px] border-solid border-transparent border-r-[#f6fad016] relative -top-5" />
              </div>
              <span className="text-sm text-[#e6ff00]">{e.duration}</span>
              <p className="text-white text-xl font-HelveticaBold mb-5">
                {e.institute}
              </p>
              <p>{e.message}</p>
              <div
                className={`${
                  e.id % 2 ? "" : "invisible"
                } md:inline-flex w-[52px] absolute -right-[52px] top-10 justify-between hidden`}
              >
                <div className="border-[15px] border-solid border-transparent border-l-[#f6fad016] " />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Education;

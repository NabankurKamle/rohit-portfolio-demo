import languages from "../collection/languages";
import designs from "../collection/designs";

import CirculerProgress from "../common/CirculerProgress";
import LinearProgress from "../common/LinearProgress";

const Skills = () => {
  return (
    <div className="py-10">
      <div>
        <span className="font-HelveticaBold text-2xl text-[#fff]">
          My Skills
        </span>
        <div className="h-[4px] w-[105px] bg-[#e6ff00]">{/* underline */}</div>
      </div>
      <div className="py-10 text-white">
        <div className="flex items-center space-x-5">
          <div className=" px-10">
            <h1
              style={{ writingMode: "vertical-rl" }}
              className="text-xl tracking-[10px] font-HelveticaBold text-[#f6fad047]"
            >
              LANGUAGE
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full">
            {languages.map((l) => (
              <CirculerProgress
                key={l.name}
                name={l.name}
                level={l.level}
                circleWidth="200"
              />
            ))}
          </div>
        </div>
        <div className="mt-14 mb-8 h-[0.1px] bg-[#e5ff0032]" />
        <div className="flex items-center justify-between flex-col sm:flex-row">
          <div className=" px-10">
            <h1 className="text-xl tracking-[10px] font-HelveticaBold text-[#f6fad047] sm:[writing-mode:vertical-rl] [writing-mode:horizontal-tb]">
              DESIGN
            </h1>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 sm:gap-x-20">
            {designs.map((d) => (
              <LinearProgress key={d.name} name={d.name} level={d.level} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

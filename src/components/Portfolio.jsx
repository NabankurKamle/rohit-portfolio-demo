import { useState } from "react";
// import { portfolios, headings } from "../collection/portfolios";
// import PortfolioCard from "../common/PortfolioCard";
import { portfolios } from "../collection/portfolios";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Portfolio = () => {
  // const [activePLink, setActivePLink] = useState(1);

  const [activeData, setActiveData] = useState(1);
  const [secondData, setSecondData] = useState(activeData + 1);
  const [thirdData, setThirdData] = useState(secondData + 1);
  const [fourthData, setFourthData] = useState(thirdData + 1);

  // const handleActivePLink = (id) => {
  //   setActivePLink(id);
  // };

  const handleClickNextMine = () => {
    if (portfolios.length - activeData === 3) {
      setFourthData(() => 1);
    } else {
      setFourthData((prev) => prev + 1);
    }

    if (portfolios.length - activeData === 2) {
      setThirdData(() => 1);
    } else {
      setThirdData((prev) => prev + 1);
    }

    if (portfolios.length - activeData === 1) {
      setSecondData(() => 1);
    } else {
      setSecondData((prev) => prev + 1);
    }

    if (portfolios.length - activeData === 0) {
      setActiveData(() => 1);
    } else {
      setActiveData((prev) => prev + 1);
    }
  };

  const handleClickPrevMine = () => {
    if (activeData === 1) {
      setActiveData(() => portfolios.length);
    } else {
      setActiveData((prev) => prev - 1);
    }
    if (secondData === 1) {
      setSecondData(() => portfolios.length);
    } else {
      setSecondData((prev) => prev - 1);
    }
    if (thirdData === 1) {
      setThirdData(() => portfolios.length);
    } else {
      setThirdData((prev) => prev - 1);
    }
    if (fourthData === 1) {
      setFourthData(() => portfolios.length);
    } else {
      setFourthData((prev) => prev - 1);
    }
  };

  return (
    <div id="portfolio" className="relative overflow-hidden">
      <div>
        <span className="font-HelveticaBold text-2xl text-[#fff] ">
          Portfolio
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

      <div className="overflow-hidden mt-[50px]">
        <div className="w-full h-[600px]  bg-transparent overflow-hidden">
          <div className="w-[max-content] overflow-hidden">
            {portfolios.map((item) => (
              <div
                key={item.id}
                className={`${
                  item.id === activeData
                    ? `w-full h-[600px] top-[100%]  translate-y-[-100%] left-[50%]  translate-x-[-50%] z-[1]`
                    : `w-[180px] h-[260px] top-[70%]  translate-y-[-70%] rounded-[20px] z-[33333] [box-shadow:0_30px_50px_#1f1f1f]`
                } ${item.id === secondData ? `left-[50%]` : ``} ${
                  item.id === thirdData ? `left-[calc(50%_+_200px)]` : ``
                } ${item.id === fourthData ? `left-[calc(50%_+_400px)]` : ``} ${
                  item.id !== activeData &&
                  item.id !== secondData &&
                  item.id !== thirdData &&
                  item.id !== fourthData &&
                  `left-[calc(50%_+_600px)] opacity-0`
                } absolute [background-position:50%_50%] inline-block transition-all duration-[0.8s] bg-cover  translate-x-0`}
                style={{
                  backgroundImage: `url(${item.imgUrl})`,
                  // backgroundColor: `${item.color}`,
                }}
              >
                <div
                  className={`absolute top-[50%] left-[20px] lg:left-[100px] w-[200px] md:w-[300px] text-left text-[#eee] translate-x-0 translate-y-[-50%] ${
                    item.id === activeData ? `z-[55555]` : `hidden`
                  }`}
                >
                  <div className="text-[30px] md:text-[50px] font-semibold opacity-0 animate-[showcontent_1s_ease-in-out_1_forwards]">
                    {item.name}
                  </div>
                  <div className="text-[13px] my-[20px] opacity-0 animate-[showcontent_1s_ease-in-out_0.3s_1_forwards]">
                    {item.desc}
                  </div>
                  <button className="px-[20px] py-[10px] opacity-0 animate-[showcontent_1s_ease-in-out_0.6s_1_forwards] bg-[#f5f5f5] text-black hover:bg-[#01e9de] transition-all duration-500 rounded-full">
                    See more
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-[30px] z-[22222] w-full text-center flex items-center justify-center">
            <button
              className="w-[50px] h-[50px] rounded-[50%] border-[1px] border-[#666] transition-all duration-[0.5s] bg-[#f5f5f5] hover:bg-[#01e9de] flex items-center justify-center"
              id="prev"
              onClick={handleClickPrevMine}
            >
              <AiOutlineArrowLeft />
            </button>
            <button
              className="w-[50px] h-[50px] rounded-[50%] border-[1px] border-[#666] transition-all duration-[0.5s] bg-[#f5f5f5] hover:bg-[#01e9de] flex items-center justify-center "
              id="next"
              onClick={handleClickNextMine}
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
      {/* <div className=" py-5 md:py-10 ">
        <ul className="flex flex-wrap text-white  xl:space-x-12">
          {headings.map((h) => (
            <li
              className="cursor-pointer mr-4 sm:mr-8 md:mr-0 mb-4  md:mb-0"
              key={h.id}
            >
              <span
                onClick={() => handleActivePLink(h.id)}
                className={`${
                  h.id === activePLink && "text-[#01e9de] cursor-pointer"
                } `}
              >
                {h.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full grid grid-cols-1  md:grid-cols-3  gap-5  md:py-5">
        {activePLink === 1
          ? portfolios.map((p) => (
              <PortfolioCard
                key={p.id}
                title={p.title}
                tag={p.tag}
                imgUrl={p.imgUrl}
              />
            ))
          : portfolios
              .filter((p) => p.tag === headings[activePLink - 1].title)
              .map((p) => (
                <PortfolioCard
                  key={p.id}
                  title={p.title}
                  tag={p.tag}
                  imgUrl={p.imgUrl}
                />
              ))}
      </div> */}
    </div>
  );
};

export default Portfolio;

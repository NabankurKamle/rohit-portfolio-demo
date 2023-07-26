import testimonials from "../collection/testimonials";
import { MdOutlineFormatQuote } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { sliderSettings } from "../common/sliderSettings";

const Testimonials = () => {
  return (
    <div id="testimonials">
      <div>
        <span className="font-HelveticaBold text-2xl text-[#fff]">
          What The People Saying
        </span>
        <div className="h-[4px] w-[280px] bg-[#01e9de]">{/* underline */}</div>
      </div>
      <div className="text-white py-10">
        <Swiper {...sliderSettings} className="mySwiper">
          {testimonials.map((t) => (
            <SwiperSlide className="pb-16 cursor-grab" key={t.id}>
              <div className="flex space-x-5">
                <div>
                  <MdOutlineFormatQuote
                    size={50}
                    className=" mt-[-5px] text-[#01e9de] hidden sm:block"
                  />
                </div>
                <div>
                  <p className="text-[#a2afa2] text-[1rem] leading-6 w-[200px] sm:w-[230px] ">
                    {t.message}
                  </p>
                  <div className="my-5 h-[0.1px] bg-[#01e9de32]" />
                  <div className="flex items-center justify-start space-x-5">
                    <img
                      className="h-12 w-12 rounded-[50%]"
                      src={t.imgUrl}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <span className="font-HelveticaBold">{t.name}</span>
                      <span className="text-xs font-HelveticaBold text-[#a2afa2]">
                        {t.profession}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

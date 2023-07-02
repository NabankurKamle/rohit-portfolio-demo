import { CgWebsite } from "react-icons/cg";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FaChess } from "react-icons/fa";
import { ImCamera } from "react-icons/im";
import { BiNetworkChart } from "react-icons/bi";

const Services = () => {
  return (
    <div className="py-10">
      <div>
        <span className="font-HelveticaBold text-2xl text-[#fff]">
          What I do
        </span>
        <div className="h-[4px] w-[110px] bg-[#e6ff00]">{/* underline */}</div>
      </div>
      <div className="text-white py-10">
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          <div className="flex items-center justify-start space-x-10 text-lg">
            <CgWebsite size={70} />
            <p className="w-30">3d Modeling</p>
          </div>
          <div className="flex items-center justify-start space-x-10 text-lg">
            <HiOutlineDevicePhoneMobile size={70} />
            <p className="w-30 ">Texturing</p>
          </div>
          <div className="flex items-center justify-start space-x-10 text-lg">
            <FaChess size={70} />
            <p className="w-30">
              Environment Design <br />
              &#40;Unreal Engine&#41;
            </p>
          </div>
          <div className="flex items-center justify-start space-x-10 text-lg">
            <ImCamera size={70} />
            <p className="w-30">Lighting</p>
          </div>
          <div className="flex items-center justify-start space-x-10 text-lg">
            <BiNetworkChart size={70} />
            <p className="w-30">Game Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

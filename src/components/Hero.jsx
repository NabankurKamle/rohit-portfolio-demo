import Dummy from "./Dummy";

const Hero = () => {
  return (
    <div className="w-full" id="home">
      <div className="items-center justify-center text-white h-[80vh] overflow-hidden hidden md:flex">
        <div className="flex flex-col justify-center items-center lg:items-end w-full h-full text-[150px]">
          <div className="relative lg:-right-5">
            <span className="block uppercase leading-[180px] font-extrabold tracking-[5px] ">
              Rohit
            </span>
            <span className="block uppercase leading-[120px] font-extrabold tracking-[5px] [-webkit-text-stroke-color:#01e9de] [-webkit-text-fill-color:transparent] [-webkit-text-stroke-width:1px]">
              Patra
            </span>
            <img
              className=" h-[210px] absolute -top-[158px] -right-16"
              src="/img/profile.svg"
              alt=""
            />
          </div>
        </div>
        <div className="h-full w-full hidden lg:block">
          <img
            src="/img/profilePic.jpeg"
            className="h-full w-full object-cover"
            alt="Profile"
          />
        </div>
      </div>
      <Dummy />
    </div>
  );
};

export default Hero;

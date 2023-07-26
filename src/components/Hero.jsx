import Dummy from "./Dummy";

const Hero = () => {
  return (
    <div className="w-full" id="home">
      <div className="items-center justify-center text-white h-[80vh] overflow-hidden hidden md:flex">
        <div className="flex flex-col justify-center items-center lg:items-end w-full h-full text-[150px]">
          <div className="relative md:-right-5">
            <span className="block relative uppercase leading-[180px] font-extrabold tracking-[5px] ">
              Rohit
              <img
                className=" h-[201px] absolute -top-[150px] -right-10"
                src="/img/profile.svg"
                alt=""
              />
            </span>
            <span className="block uppercase leading-[120px] font-extrabold tracking-[5px] [-webkit-text-stroke-color:#01e9de] [-webkit-text-fill-color:transparent] [-webkit-text-stroke-width:1px]">
              Patra
            </span>
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

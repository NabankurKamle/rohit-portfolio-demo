import Dummy from "./Dummy";

const Hero = () => {
  return (
    <div className="w-full" id="home">
      <div className="w-full items-center justify-center text-white h-[80vh] overflow-hidden hidden md:flex lg:mb-10">
        <div className="relative flex flex-col justify-center items-center lg:items-end min-w-[70%] lg:min-w-[40%] h-full text-[130px] lg:text-[150px]">
          <div className="absolute top-0 lg:-right-32 flex flex-col justify-start items-start lg:items-end">
            <img
              className="max-w-[500px] lg:max-w-[600px]"
              src="/img/landingProfile.png"
              alt=""
            />
            <span className="block uppercase font-HelveticaBold tracking-[6px] [-webkit-text-stroke-color:#01e9de] [-webkit-text-fill-color:transparent] [-webkit-text-stroke-width:3px] relative right-2 lg:right-[88px]">
              Patra
            </span>
          </div>
        </div>
        <div className="h-full max-w-[45%] hidden lg:block">
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

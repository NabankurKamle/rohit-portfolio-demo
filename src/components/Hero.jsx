import LandingHero from "./LandingHero";

const Hero = () => {
  return (
    <div className="w-full" id="home">
      <div className="w-full items-center justify-center text-white h-[80vh] overflow-hidden hidden xl:flex lg:mb-10 ">
        <div className="relative flex flex-col justify-center items-center lg:items-end min-w-[45%] h-full text-[9rem] ">
          <div className="absolute top-0 lg:-right-[84px] flex flex-col justify-start items-start lg:items-end">
            <img
              className="max-w-xl z-[10]"
              src="/img/landingProfile.png"
              alt=""
            />
            <span className="block z-[10] uppercase font-HelveticaBold tracking-[6px] [-webkit-text-stroke-color:#01e9de] [-webkit-text-fill-color:transparent] [-webkit-text-stroke-width:3px] relative right-[82px]">
              Patra
            </span>
          </div>
        </div>
        <div className="h-[80vh] max-w-[50%] hidden lg:block grayscale">
          <img
            src="/img/profilePic.jpeg"
            className="h-full w-full object-cover"
            alt="Profile"
          />
        </div>
      </div>
      <LandingHero />
    </div>
  );
};

export default Hero;

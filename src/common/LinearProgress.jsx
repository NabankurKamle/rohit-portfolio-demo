const LinearProgress = ({ name, level }) => {
  return (
    <div className="min-w-[250px] md:min-w-[320px]">
      <div className="text-sm font-HelveticaBold flex items-center justify-between py-5">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full h-1 rounded-full bg-[#dfdfdf]">
        <div
          className={`h-full bg-[#01e9de] rounded-full`}
          style={{ width: `calc(${level}%)` }}
        />
      </div>
    </div>
  );
};

export default LinearProgress;

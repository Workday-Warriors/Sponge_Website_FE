export const Team = () => {
  return (
    <section className="w-full h-[1471px] relative">
      <img src="./team-bg.png" alt="" className="w-full h-full z-[-1] " />
      <img
        src="./team-img-1.png"
        alt=""
        className="absolute top-0 w-[520px] left-1/2 "
      />
      <div className="absolute bottom-0 w-full flex flex-col items-center">
        <h1 className="text-7xl font-normal leading-[100px] text-left text-white luckiest">
          Team
        </h1>
        <img src="./team.png" alt="" className="w-[901px]" />
      </div>
    </section>
  );
};

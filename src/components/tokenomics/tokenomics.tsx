import styles from "./tokenomics.module.css";

export const Tokenomics = () => {
  return (
    <section
      id="tokenomics"
      className="w-full min-h-screen xl:max-h-[1467px] relative"
    >
      <div className="-translate-y-32">
        <div
          data-aos="fade-up"
          className="flex flex-col pt-[125px] items-center container px-8 xl:px-0"
        >
          <h1 className="text-[38px] xl:text-7xl text-white luckiest font-normal leading-[72px] text-center">
            Total Supply
          </h1>
          <p className=" text-[12px] xl:text-[26px] w-full xl:w-[70%] paytone text-[#F3D583] font-normal xl:leading-[36.3px] text-center">
            We have a fixed supply, ensuring scarcity and value. Circulating
            Supply: The number of coins in circulation, available for trading.
            Burn Mechanism: To increase scarcity, a percentage of coins are
            regularly burned. Rewards and Incentives: Earn rewards through
            staking, farming, and participating in the community. Dive deep into
            the world of tokenomics with me!
          </p>
        </div>
      </div>
      <div className="container px-8 xl:px-0 flex-col-reverse xl:flex-row flex h-full">
        <div
          data-aos="zoom-in"
          className=" w-full xl:w-1/2 flex relative h-auto xl:h-full "
        >
          <img
            src="./tokenomics.png"
            alt=""
            className=" static xl:absolute top-0 xl:top-[200px] left-0"
          />
        </div>
        <div className=" w-full xl:w-1/2 relative pt-16 xl:pt-0 flex items-center h-auto: xl:h-full ">
          <img data-aos="fade-left" src="./total-girl.png" alt="" />
        </div>
      </div>
      <img
        src="./tokenomics-bg.png"
        alt=""
        className="absolute top-0 left-0 z-[-1] w-full h-full  object-cover xl:object-fill "
      />
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 z-10 ">
        <img
          src="./welcome.png"
          data-aos="zoom-in"
          alt=""
          className=" w-[300px] xl:w-[622px] "
        />
      </div>
      <div
        className={`${styles.blur} absolute -bottom-10 h-[70px]  xl:h-[110px] `}
      ></div>
    </section>
  );
};

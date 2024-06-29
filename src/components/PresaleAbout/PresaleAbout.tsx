import { Button } from "../../common";
import styles from "./PresaleAbout.module.css";

export const PresaleAbout = () => {
  return (
    <section className="w-full h-[898px] relative">
      <img
        src="./presale-about-bg.png"
        alt=""
        className=" absolute top-0  z-[-1] w-full h-full object-fill"
      />
      <div className="w-full gap-x-[23px] h-full container flex">
        <div className="w-1/2 h-full">
          <div
            className={` flex items-center flex-col justify-center w-full h-full ${styles.card}`}
          >
            <h1 className="text-[35px] text-[#AF6D27] luckiest font-normal leading-[35px] text-center">
              Presale
            </h1>
            <p className="text-2xl w-[70%] mt-[18px] mb-[37px] paytone text-[#263D6B] font-normal leading-[33.5px] text-center">
              Get ready to be part of an exciting journey with our memecoin.
              Here’s everything you need to know about our presale
            </p>
            <Button
              className="montserrat text-[8px] md:!text-[10px]  xl:!text-xl !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] !text-white"
              borderColor="#F3D583"
            >
              Presale now
            </Button>
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center ">
          <div className="flex flex-wrap justify-around gap-x-[26px] gap-y-[29px]">
            <div className="w-[45%] py-[25px] px-[32px] flex flex-col justify-center items-center rounded-[27px] bg-[#F3D583]">
              <Button
                className="luckiest text-[8px] md:!text-[10px]  xl:!text-xl !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] !text-[#C57E33]"
                borderColor="#FEBA00"
              >
                Presale Wallet
              </Button>
              <p className="text-xl font-normal paytone leading-[27.92px] text-center">
                Deposit your investment to our official Solana wallet address:
                solana_wallet_address.
              </p>
            </div>
            <div className="w-[45%] py-[25px] px-[32px] flex flex-col justify-center items-center rounded-[27px] bg-[#F3D583]">
              <Button
                className="luckiest text-[8px] md:!text-[10px]  xl:!text-xl !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] !text-[#C57E33]"
                borderColor="#FEBA00"
              >
                Limited Supply
              </Button>
              <p className="text-xl font-normal paytone leading-[27.92px] text-center">
                Only a fixed number of coins will be available during the
                presale.
              </p>
            </div>
            <div className="w-[45%] py-[25px] px-[32px] flex flex-col justify-center items-center rounded-[27px] bg-[#F3D583]">
              <Button
                className="luckiest text-[8px] md:!text-[10px]  xl:!text-xl !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] !text-[#C57E33]"
                borderColor="#FEBA00"
              >
                Bonous
              </Button>
              <p className="text-xl font-normal paytone leading-[27.92px] text-center">
                Early participants will receive a bonus percentage of coins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
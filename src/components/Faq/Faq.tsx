import { Accordion } from "../../common";
import styles from "./Faq.module.css";
export const Faq = () => {
  return (
    <section className="w-full relative min-h-screen xl:h-[1533px]">
      <img
        src="./faq-bg.png"
        alt=""
        className="absolute w-full h-full z-[-1] top-0 left-0 object-fill"
      />
      <div className="w-full container px-8 pt-44 xl:pt-0  xl:px-0 flex items-end h-full flex-col-reverse xl:flex-row pb-[50px]">
        <img src="./faq-img.png" alt="" className=" w-full xl:w-[30%]" />
        <div className=" w-full xl:w-[70%] pt-[27px] pb-[46px] pl-8 xl:pl-[48px] pr-8 xl:pr-[54px] bg-[#005B81] rounded-[38px]">
          <h1 className=" text-[28px] xl:text-7xl text-center luckiest font-normal leading-[77px] text-[#D9D9D9]">
            F.A.Q
          </h1>
          <div className="flex flex-col gap-y-6">
            <Accordion
              title="1.What services  offer?"
              content="1.what  sponge is different than others?"
            />

            <Accordion
              title="2.Why sponge is different than others?"
              content="2.what  sponge is different than others?"
            />

            <Accordion
              title="3.What is your working process?"
              content="3.what  sponge is different than others?"
            />

            <Accordion
              title="3.How to buy sponge?"
              content="3.what  sponge is different than others?"
            />
          </div>
        </div>
      </div>
      <div
        className={` ${styles.blur} w-full  absolute -bottom-5 h-[47px]`}
      ></div>
    </section>
  );
};

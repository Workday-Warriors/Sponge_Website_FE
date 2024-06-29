import { SOCIALMEDIAS } from "../../constants/social-medias";

export const Contact = () => {
  return (
    <section className="w-full bg-[#1E1E1E] pb-[25px] pt-[123px]">
      <div className="container">
        <h1 className=" text-[28px] xl:text-7xl text-[#EEEEEE] luckiest font-normal leading-[72px] text-center">
          Contact Us
        </h1>
        <p className="text-lg mt-3 paytone font-normal text-[#EEEEEE] leading-6 text-center">
          Email us at{" "}
          <a href="#" className="text-[#F9C819]">
            support@sponge.io
          </a>{" "}
          for any <br /> queries or support
        </p>
        <div className="flex pb-[48px] justify-center gap-x-6 mt-[28px]">
          {SOCIALMEDIAS.map((media) => (
            <a
              href={media.link}
              className="w-[40.39px] footer_icon_hover hover:text-[#040F00] h-[40.39px] rounded-full border border-[#ffc700] text-[#FFCF24] hover:border-transparent flex justify-center items-center"
            >
              {media.icon}
            </a>
          ))}
        </div>
        <div className="w-full h-[1px] footer_line" />
        <p className="text-center text-base text-[#8C8B8B] font-normal leading-6  mt-[27px] paytone">
          &copy; 2024 ALL RIGHT RESERVED sponge.io
        </p>
      </div>
    </section>
  );
};

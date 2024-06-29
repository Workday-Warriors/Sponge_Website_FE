import styles from "./Welcom.module.css";
export const Welcome = () => {
  return (
    <section className="w-full relative flex items-center justify-center min-h-[607px]">
      <img
        src="./pre-welcome.png"
        alt=""
        className="z-[-1] absolute top-0 left-0"
      />
    </section>
  );
};

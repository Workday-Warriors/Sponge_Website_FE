import styles from './Hero.module.css'
export const Hero = () => {
  return (
    <section id='home' className={`min-h-screen xl:h-[1080px]  relative `}>
      <div className='w-full container flex justify-center pt-[300px] px-5 xl:px-0 h-full'>
        <div className='w-full flex flex-col items-center'>
          <h1
            className={` ${styles.title_shadow} text-white w-[60%] luckiest text-center text-[27px] xl:text-[75px] not-italic font-normal leading-[111.425%]`}
          >
            Welcome to the world of $Sponge
          </h1>
          <p className='text-white text-center luckiest mt-[13px] w-[90%] text-[18px] xl:text-[35px] not-italic font-normal leading-[111.425%]'>
            where the financial savvy of Wall Street meets the whimsical charm
            of Bikini Bottom. Dive into an ocean of opportunities with Spongebob
            and his friends as your quides.
          </p>
        </div>
      </div>
      <div
        className={`${styles.blur} z-[99] w-[150%] translate-x-[-20%] h-[50px] xl:h-[158px] absolute -bottom-7 xl:-bottom-14 `}
      ></div>
      <img
        src='./hero-bg.png'
        className='absolute  top-0  h-full z-[-1] object-cover xl:object-fill'
        alt=''
      />
    </section>
  )
}

import styles from './Team.module.css'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const Team = () => {
  const person = useRef<HTMLDivElement>(null)

  const team = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      person.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: person.current,
        },
      }
    )

    gsap.fromTo(
      team.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 3,
        scrollTrigger: {
          trigger: team.current,
        },
      }
    )
  }, [])

  return (
    <section className='w-full h-screen md:h-[1471px] relative' id='team'>
      <img
        src='./team-bg.png'
        alt=''
        className='w-full h-full z-[-1] object-cover xl:object-fill'
      />
      <div
        ref={person}
        className='absolute w-[500px] md:w-[500px] xl:w-auto top-[-250px] md:top-[-150px]  xl:top-[-450px] -translate-x-1/2 left-[43%] '
      >
        <img src='./team-img-1.png' alt='' className='w-full h-full' />
      </div>
      <div
        ref={team}
        className='absolute bottom-[100px] md:bottom-[250px] xl:bottom-[100px] w-full flex flex-col items-center'
      >
        <h1 className=' text-[28px] xl:text-7xl font-normal xl:leading-[100px] text-left text-white luckiest'>
          Team
        </h1>
        <img src='./team.png' alt='' className='w-full xl:w-[901px]' />
      </div>
      <div
        className={`w-full h-[81px] ${styles.blur} absolute -bottom-5 `}
      ></div>
    </section>
  )
}

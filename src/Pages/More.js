import React, { useEffect, useRef } from "react";
import Header from "../Components/Header";
import { TweenMax, Power3, gsap } from "gsap";

const More = () => {
  let img1 = useRef(null);
  let img2 = useRef(null);

  // animation part here
  useEffect(() => {
    TweenMax.from(img2, 0.3, { y: 30, opacity: 0, ease: Power3.easeInOut });
    TweenMax.to(img2, 0.3, {
      y: 0,
      opacity: 1,
      ease: Power3.easeInOut,
    });

    TweenMax.from(img1, 0.3, { y: 60, opacity: 0, ease: Power3.easeInOut });
    TweenMax.to(img1, 0.3, {
      delay: 0.4,
      y: 0,
      opacity: 1,
      ease: Power3.easeInOut,
    });
  });
  return (
    <div className="bg-white dark:bg-black duration-500">
      <Header></Header>
      <div className="wrapper-main block w-full lg:flex max-w-[1560px] mx-auto">
        <div className="left-part lg:w-[50%]">
          <p className="font-general font-[500] px-4 lg:px-20 xl:px-40 2xl:px-40 py-10 text-left dark:text-white">
            Dear friend,<br></br>
            <br></br>I want to share with you a story about a personal project
            that is near and dear to my heart. It's a project that started with
            a simple idea, but has grown to become something that I truly
            believe will make a difference in the lives of students.<br></br>
            <br></br>
            As a student myself, I know firsthand the challenges that come with
            managing classes, assignments, and extracurricular activities.
            That's why I set out to create something that would make students'
            lives easier and more manageable.<br></br>
            <br></br>I poured my heart and soul into this project, determined to
            create something that would truly make a difference. I talked to
            students, teachers, and advisors to get a better understanding of
            what students need to be successful.<br></br>
            <br></br>
            Through countless hours of research and development, I created a
            tool that simplifies the way students manage their schedules,
            assignments, and deadlines. It's a user-friendly platform that helps
            students stay on top of their work and achieve their goals.<br></br>
            <br></br>
            But what truly sets this project apart is the emotion behind it. I
            know firsthand the stress and anxiety that can come with managing a
            full course load, and I wanted to create something that would ease
            that burden for other students.<br></br>
            <br></br>I poured my heart into this project because I believe in
            the power of education and the impact it can have on people's lives.
            I know that by making it easier for students to manage their work,
            I'm giving them the tools they need to succeed.<br></br>
            <br></br>
            So, my friend, I invite you to join me in celebrating the
            behind-the-scenes story of this personal project. Come see the
            passion, creativity, and heart that went into making it a reality.
            It's a story that will touch your soul and remind you of the power
            we all have to make a difference.<br></br>
            <br></br>
            Thank you for listening.
          </p>
        </div>
        <div className="right-part hidden lg:w-[50%] lg:flex relative">
          <div
            ref={(el) => (img1 = el)}
            className="opacity-0 relative mt-20 right-side lg:w-[50%] lg:h-[30rem] 2xl:w-[50%] 2xl:h-[40rem] h-[40rem] bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/65552f153671777.6339ccd4345eb.jpg')] bg-cover bg-no-repeat bg-center z-20 duration-500 hover:z-30 lg:hover:h-[40rem] 2xl:hover:h-[50rem] "
          ></div>
          <div
            ref={(ela) => (img2 = ela)}
            className="opacity-0 absolute top-52 left-52 z-10 right-side  h-[40rem] lg:w-[50%] lg:h-[30rem] lg:left-40 lg:top-40  2xl:top-52 2xl:left-52 2xl:w-[50%] 2xl:h-[40rem] bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/b0ca5f154545749.635eb0616d090.jpg')] bg-cover bg-no-repeat bg-center duration-500 hover:z-30 lg:hover:h-[40rem] 2xl:hover:h-[50rem]  hover:bg-center-left"
          ></div>
        </div>
      </div>

      <div className="bottom-part text-left px-4 pb-10 font-general font-[500] max-w-[1560px] mx-auto lg:px-20 lg:pb-40 xl:px-40 2xl:px-40 2xl:pb-40 ">
        <p className="mb-4 dark:text-white">
          Open Source project by{" "}
          <mark className="bg-[#ebff00] py-1 cursor-pointer">
            REJWAN AHAMED
          </mark>
        </p>
        <mark className="mt-4 py-1 bg-[#ebff00] leading-[33px]">
          Want to contribute on the project mail me at rejwanahamed85@gmail.com
          or join me telegram at +880 1725281740
        </mark>
        {/* <p className="mt-4">
          <span className="text-blue-600 cursor-pointer ">
            rejwanahamed85@gmail.com
          </span>
        </p>
        <p className="mt-2">
          <span className="text-blue-600 cursor-pointer ">github</span>
        </p>
        <p className="mt-2">
          <span className="text-blue-600 cursor-pointer ">facebook</span>
        </p>
        <p className="mt-2">
          <span className="text-blue-600 cursor-pointer ">instagram</span>
        </p>
        <p className="mt-2">
          <span className="text-blue-600 cursor-pointer ">Bechance</span>
        </p>
        <p className="mt-2 mb-4">
          <span className="text-blue-600 cursor-pointer ">dribbble</span>
        </p> */}
      </div>
    </div>
  );
};

export default More;

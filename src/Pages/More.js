import React from "react";
import Header from "../Components/Header";

const More = () => {
  return (
    <div>
      <Header></Header>
      <div className="wrapper-main flex">
        <div className="left-part w-[50%]">
          <p className="font-general font-[500] px-40 py-10 text-left">
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
        <div className="right-part w-[50%] flex relative">
          <div className="relative mt-20 right-side w-[50%] h-[40rem] bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/65552f153671777.6339ccd4345eb.jpg')] bg-cover bg-no-repeat bg-center z-20 duration-500 hover:z-30 hover:h-[50rem]"></div>
          <div className="absolute top-52 left-52 z-10 right-side w-[50%] h-[40rem] bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/b0ca5f154545749.635eb0616d090.jpg')] bg-cover bg-no-repeat bg-center duration-500 hover:z-30 hover:h-[50rem] hover:bg-center-left"></div>
        </div>
      </div>
    </div>
  );
};

export default More;

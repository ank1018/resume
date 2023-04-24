import React from "react";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Who am I?</h3>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              I am a dedicated frontend developer with 7 years of experience in the field. For the last 3 years, I have been working as a software development engineer at Fancode by Dreamsports, where I was part of the team that developed web and app applications from scratch. I take great pride in my ability to solve complex problems and have consistently demonstrated my commitment to delivering clean, efficient, and high-quality code.
            </p>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              As a team player, I understand the importance of effective communication and collaboration. I am always willing to listen to my colleagues' ideas and feedback, and I strive to provide constructive criticism that helps our team to grow and improve. I believe that a positive and inclusive work environment is essential for achieving success, and I work hard to create such an environment whenever I can.
            </p>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              I have a deep understanding of design systems, and I am confident in my ability to design and develop elegant, user-friendly interfaces that prioritize usability and accessibility. I also have experience with algorithm development and optimization, and I have helped to improve the performance of the applications I have worked on.
            </p>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              Overall, I am passionate about my work as a frontend developer, and I am constantly striving to improve my skills and knowledge. I am excited to continue working in this field, and I look forward to new challenges and opportunities to learn and grow as a developer.
            </p>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
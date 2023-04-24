import React from "react";
import SkillItem from "./SkillItem";

const skillData = [
  {
    id: 1,
    title: "Javascript",
    percentage: "98%",
  },
  {
    id: 2,
    title: "ReactJS",
    percentage: "98%",
  },
  {
    id: 3,
    title: "Redux",
    percentage: "95%",
  },
  {
    id: 4,
    title: "Html, Css, Scss",
    percentage: "95%",
  },
  {
    id: 5,
    title: "React Native",
    percentage: "98%",
  },
  {
    id: 6,
    title: "Node.js",
    percentage: "98%",
  },
  {
    id: 7,
    title: "Angular",
    percentage: "95%",
  },
  {
    id: 8,
    title: "ExpressJS",
    percentage: "60%",
  },
  {
    id: 9,
    title: "MongoDB",
    percentage: "50%",
  },
  {
    id: 10,
    title: "Git, Github",
    percentage: "80%",
  },
];

const Skills = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Skills</h3>
          </div>
        </div>
        {skillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
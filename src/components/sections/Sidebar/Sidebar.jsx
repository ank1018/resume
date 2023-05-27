import React from "react";
import {
  // FaBehance,
  // FaDribbble,
  // FaFacebookF,
  // FaGithub,
  // FaInstagram,
  FaLinkedinIn,
  // FaSkype,
  // FaTwitter,
} from "react-icons/fa";
import profile from "../../../images/profile.jpg";

const socials = [
  // {
  //   id: 1,
  //   icon: <FaFacebookF />,
  //   link: "#0",
  // },
  // {
  //   id: 2,
  //   icon: <FaGithub />,
  //   link: "#0",
  // },
  {
    id: 1,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/ankur-singh-975670193",
  },
  // {
  //   id: 4,
  //   icon: <FaInstagram />,
  //   link: "#0",
  // }
];

const PDF_URL = "http://localhost:3000/ankur_resume.pdf"

const Sidebar = () => {
  const handleDownloadClick = () => {
    const aTag = document.createElement("a")
    aTag.href = PDF_URL
    aTag.setAttribute("download", 'resume')
    document.body.appendChild(aTag)
    aTag.click();
    aTag.remove()
  }
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="ankursingh" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">Ankur Singh</h1>
        <p className="text-sm text-gray-400 mb-3">
          Software Development Engineer at
          <a href="https://www.dreamsports.group/" className="text-purple-600 pl-1" target={'_blank'} rel={"noreferrer"}>
            Fancode by Dreamsports
          </a>
        </p>
        <div
          onClick={handleDownloadClick}
          href="PDF_URL"
          className="inline-block mb-3 rounded bg-purple-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800"
        >
          Download Resume
        </div>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          About Me
        </h3>
        <p className="text-gray-400 text font-light leading-relaxed">
          Seasoned Software Developer with 8+ years of experience in building cutting-edge software solutions. Skilled in development, user interface design, and process automation, I consistently deliver high-quality solutions that optimize user experiences and streamline operations. With a track record of successfully completing diverse projects and achieving exceptional results, I bring strong analytical skills and a collaborative approach to every endeavor.
        </p>
        <p className="text-md mb-2 font-medium text-gray-800 mt-4">
          +91-9730969960,
          +91-7011854219
        </p>
        <a href = "mailto: writetoankurs@gmail.com">writetoankurs@gmail.com</a>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
      >
        {icon}
      </a>
    </li>
  );
};
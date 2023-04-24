import React from "react";
import { FaRegEye } from "react-icons/fa";

const PortfolioItem = (props) => {
  const { image, title, link, description, technologies } = props.portfolio;
  return (
    <div className="w-full">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
        {image ? <div className="relative mb-6 w-full h-48 bg-purple-200 rounded-md overflow-hidden">
          <img
              src={image}
              alt="coverImage"
              className="w-full h-full object-cover object-center"
          />
          <div
              className="absolute opacity-0 transition duration-200 bg-purple-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
            <ul className="flex flex-wrap">
              <li className="m-2">
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-10 text-xl text-purple-600 flex items-center justify-center border-2 border-purple-600 rounded hover:text-white hover:bg-purple-600"
                >
                  <FaRegEye/>
                </a>
              </li>
            </ul>
          </div>
        </div> : null}
        <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
        {technologies ? <p className="text-gray-600 mb-2"><b>Technologies: </b>{technologies}</p> : null}
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
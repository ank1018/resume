import React from "react";
import ReactHtmlParser from 'react-html-parser';

const BlogItem = (props) => {
  const { image, title, description, content } = props.blog;
  return (
    <div onClick={() => props.setSelectedState(props.index)} className="w-full">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
        <div className="relative mb-6 w-full h-56 bg-purple-200 rounded-md overflow-hidden">
          <img
            src={image}
            alt="blogImage"
            className="w-full h-full object-cover object-center transform group-hover:scale-125 group-hover:rotate-6 transition duration-200"
          />
        </div>
        <h3>
          <a
            href="#0"
            className="block text-lg font-medium text-gray-800 hover:text-purple-600 mb-2"
          >
            {title}
          </a>
        </h3>
        {props.selectedBlog === props.index ? <div>{ ReactHtmlParser(content) }</div> : <p className="text-gray-400">{description}</p>}
      </div>
    </div>
  );
};

export default BlogItem;
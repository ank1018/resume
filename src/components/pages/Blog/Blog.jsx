import React from "react";
import image1 from "../../../images/blog/blog-01.jpg";
import image2 from "../../../images/blog/blog-02.jpg";
import image3 from "../../../images/blog/blog-03.jpg";
import image4 from "../../../images/blog/blog-04.jpg";
import BlogItem from "./BlogItem";

const blogData = [
  {
    id: 1,
    image: image1,
    title: "Prototypal Inheritance",
    description:
        `All objects in Javascript objects have special hidden property that is either null or references other object which is called “prototype”. The object’s ability to access the properties and methods of other object through the special property called prototype is called <strong>prototypal inheritance</strong>.`,

  },
  {
    id: 2,
    image: image2,
    title: "15+ Top Sources to Download Free Stock Photos",
    description:
      "Wanna decorate your blog with photos? But don't have any photographic skills or fees to pay for photos?",
  },
  {
    id: 3,
    image: image3,
    title: "15+ Free Startup Landing Page and Web Templates",
    description:
      "A landing page is a page designed to turn visitors into leads. It is separate from other pages on your...",
  },
  {
    id: 4,
    image: image4,
    title: "10+ Sources to Download Free SVG Illustrations",
    description:
      "There is no doubt about the importance of Scalable Vector Graphics illustration today.",
  },
];

const Blog = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {blogData.map((blog, id) => (
          <BlogItem blog={blog} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
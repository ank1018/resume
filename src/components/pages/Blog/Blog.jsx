import React, {useState} from "react";
import image1 from "../../../images/blog/blog-01.jpg";
import image2 from "../../../images/blog/blog-02.jpg";
// import image3 from "../../../images/blog/blog-03.jpg";
// import image4 from "../../../images/blog/blog-04.jpg";
import BlogItem from "./BlogItem";
import {PrototypalInheritanceBlog} from "./blogs/prototypal-inheritance";
import {ClosureBlog} from "./blogs/closure";

const blogData = [
  {
    id: 1,
    image: image1,
    title: "Prototypal Inheritance",
    description:
        "All objects in Javascript objects have special hidden property that is either null or references other object which is called “prototype”. The object’s ability to access the properties and methods of other object through the special property called prototype is called <strong>prototypal inheritance</strong>.",
    content: PrototypalInheritanceBlog
  },
  {
    id: 2,
    image: image2,
    title: "Closure in Javascript",
    description:
      "When a function is returned from another function, the inner function which is called closure has access to the scope of the enclosing function even when the enclosing function is popped off the call stack",
    content: ClosureBlog
  }
];

const Blog = () => {
  const [selectedBlog, setSelectedState] = useState(null)
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {blogData.map((blog, index) => (
          <BlogItem blog={blog} key={blog.id} setSelectedState={setSelectedState} selectedBlog={selectedBlog} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
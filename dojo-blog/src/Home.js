import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "New Website", body: "lorem ipsum...", author: "author1", id: 1 },
    { title: "Blog post 2!", body: "lorem ipsum...", author: "author2", id: 2 },
    {
      title: "Awful website",
      body: "lorem ipsum...",
      author: "author1",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs! - "/>
      <BlogList blogs={blogs.filter((blog) => blog.author === 'author1')} title="Author 1's Blogs! - "/>
    </div>
  );
};

export default Home;

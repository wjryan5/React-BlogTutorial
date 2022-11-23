import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "New Website", body: "lorem ipsum...", author: "author1", id: 1 },
    { title: "Blog post 2!", body: "lorem ipsum...", author: "author2", id: 2 },
    { title: "Awful website", body: "lorem ipsum...", author: "author1", id: 3, },
  ]);

  const [name, setName] = useState('author1');

    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }

  useEffect(() => {
    console.log('useEffect ran');
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs! - " handleDelete={handleDelete}/>
      <button onClick={() => setName("author3")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;

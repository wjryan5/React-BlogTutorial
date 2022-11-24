import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("author1");

  const handleSumbit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    console.log(blog);
  };
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSumbit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="author1">author1</option>
          <option value="author2">author2</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;

import axios from 'axios';
import React from 'react';
import { useState, useContext } from 'react';
import { Context } from '../../context/Context';
import "./write.css";

export default function Write() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState('');
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      file,
      categories,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) { }
    }
    try {
      const res = await axios.post('/posts', newPost);
      window.location.replace('/post/' + res.data._id);
    } catch (err) { }

  };

  return (
    <div className="write">
      {file && (
        <img
          className="writeImg"
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
            Add image
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup" >
          <label className='writeTag'>Tags</label>
          <select className='tagList' onChange={e => setCategories(e.target.value)}>
            <option type="radio" name="Other" id="Other" value="Other">Other</option>
            <option type="radio" name="Jobseeker" id="Jobseeker" value="Jobseeker">Jobseeker</option>
            <option type="radio" name="Accommodation" id="Accommodation" value="Accommodation">Accommodation</option>
            <option type="radio" name="Buy-Sell" id="Buy-Sell" value="Buy-Sell">Buy-Sell</option>
            <option type="radio" name="Service" id="Service" value="Service">Service</option>
            <option type="radio" name="News" id="News" value="News">News</option>
            <option type="radio" name="Review" id="Review" value="Review">Review</option>
          </select>
        </div>
        <div className="writeFormGroup" >
          <textarea
            className="writeDesc"
            placeholder="Description..."
            type="text"
            onChange={e => setDesc(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit" onSubmit={handleSubmit}>
          Post
        </button>
      </form>

    </div>
  );
}
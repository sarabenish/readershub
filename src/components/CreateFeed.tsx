import React, { useState } from "react";
import BooksFeed from "./BooksFeed";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/feed/feeds";
import image1 from "../assets/userpic.png";
import { RootState } from "./Reducer";

function CreateFeed() {
  const [userName, setName] = useState("");
  const [feedPost, setPost] = useState("");
  const [postTime, setTime] = useState();
  const feeds = useSelector((state: RootState) => state.feed);
  const dispatch = useDispatch();

  const feedList = {
    image: image1,
    time: "10am",
    name: userName,
    post: feedPost,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addFeed(feedList));
    setName("");
    setPost("");
  };

  return (
    <div className="w-75 g-2">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="name"
            className="form-control"
            id="username"
            aria-describedby="name"
            placeholder="Enter Name"
            value={userName}
            onChange={(e) => setName(e.target.value)}
          />
          <small id="name" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Post</label>
          <input
            type="post"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Whats your new read about.."
            value={feedPost}
            onChange={(e) => setPost(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateFeed;

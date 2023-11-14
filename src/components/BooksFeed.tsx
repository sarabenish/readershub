import React, { useState } from "react";
import image1 from "../assets/userpic.png";
import CreateFeed from "./CreateFeed";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./Reducer";
import { addFeed } from "../store/feed/feeds";

function BooksFeed() {
  const feeds = useSelector((state: RootState) => state.feed);
  const dispatch = useDispatch();

  return (
    <>
      <div className="conatiner g-2">
        <div className="col d-flex justify-content-center">
          <CreateFeed></CreateFeed>
        </div>
        {feeds.map((feed) => {
          return (
            <div className="col d-flex justify-content-center">
              <div
                key={feed.username}
                className="card mb-3 w-75"
                style={{
                  borderWidth: "0 0 5px 0",
                }}
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-1" style={{ width: "85px" }}>
                      <img src={image1} />
                    </div>
                    <div className="col-11">
                      <h5 className="card-title">{feed.username}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {feed.time}
                      </h6>
                    </div>
                  </div>
                  <p className="card-text">{feed.post}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BooksFeed;

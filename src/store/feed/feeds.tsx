import { combineReducers } from "redux";
import image1 from "../../assets/userpic.png";

const ADD_FEED = "ADD_FEED";

export function addFeed(feed) {
  return {
    type: "ADD_FEED",
    feed,
  };
}

const defaultFeeds = [
  {
    img: image1,
    time: "-- mins ago",
    username: "Alex Wieckowski",
    post: "I be listening to the most steamy scenes ever in a romance novel while cleaning the dishes. *that's life of a reader* 🫠🔪",
  },
  {
    img: image1,
    time: "-- mins ago",
    username: "Tej",
    post: "I am currently reading 'Nimashi' and OMG, how much I am really enjoying it. Mythology is something I mostly enjoy and there's so much tension and build up in the story. Can't wait to read further.",
  },
  {
    img: image1,
    time: "-- mins ago",
    username: "Katie",
    post: "Finished 'The Arrangement' just now and I am just thinking how crazy plot twists can be in thrillers?!!! Like you just can't predict where they are going. Loved the crazy twists in this one.",
  },
  {
    img: image1,
    time: "-- mins ago",
    username: "Jess",
    post: "Done with lunch and now before I take a power nap, it's time to catch up on my current read. Life's good 🩷",
  },
];

function feeds(state = defaultFeeds, action) {
  switch (action.type) {
    case ADD_FEED:
      return [
        ...state,
        {
          img: action.feed.image,
          time: action.feed.time,
          username: action.feed.name,
          post: action.feed.post,
        },
      ];
    default:
      return state;
  }
}

export default feeds;

import { useState } from "react";
import {
  FavoriteBorderOutlined,
  InsertCommentOutlined,
  Share,
  AccessTime,
  MoreVert,
} from "@mui/icons-material";
import { styled } from "@mui/system";
import Comments from "./Comments";
import { Link } from "react-router-dom";

const Clock = styled(AccessTime)`
  font-size: 14px;
`;

const Post = ({ post }) => {
  const [commentsOpen, setCommentsOpen] = useState(false);

  const handleClick = () => {
    setCommentsOpen(!commentsOpen);
  };

  return (
    <div
      className="flex flex-col gap-3 px-6 py-6 border rounded-lg bg-primary text-primary border-primary"
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Link to={`/profile/${post.userId}`}>
            <img src={post.profilePic} alt="user" className="user-img" />
          </Link>
          <div className="flex flex-col">
            <span className="font-semibold">{post.name}</span>
            <div className="flex items-center gap-1">
              <Clock
                className="text-secondary"
              />
              <span
                className="text-sm text-secondary"
              >
                12 minutes ago on
              </span>
              <span className="text-sm font-semibold">
                3D Stock Contributor
              </span>
            </div>
          </div>
        </div>
        <span>
          <MoreVert
            className="text-secondary"
            fontSize="small"
          />
        </span>
      </div>
      <div className="desc">{post.desc}</div>
      <div className="img">
        <img
          src={post.img}
          alt="postimg"
          className="w-full max-h-[500px] object-cover"
        />
      </div>
      <div
        className="flex justify-around icons text-secondary"
      >
        <div className="flex gap-1 cursor-pointer">
          <FavoriteBorderOutlined fontSize="small" />{" "}
          <span className="text-sm">Like</span>
        </div>
        <div className="flex gap-1 cursor-pointer" onClick={handleClick}>
          <InsertCommentOutlined fontSize="small" />{" "}
          <span className="text-sm">Comments</span>
        </div>
        <div className="flex gap-1 cursor-pointer">
          <Share fontSize="small" /> <span className="text-sm">Share</span>
        </div>
      </div>
      {commentsOpen && <Comments />}
    </div>
  );
};

export default Post;

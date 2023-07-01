import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { AuthContext } from "../context/AuthContext";

const Comments = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam.",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className="py-5 mt-2 border-t border-primary">
      <div className="flex gap-3">
        <img
          src={currentUser.profilePic}
          className="h-9 w-9 rounded-[50%] object-cover"
        />
        <input
          type="text"
          className="input"
          placeholder="What's on your mind?"
        />
      </div>
      <div className="flex flex-col gap-5 px-5 mt-5">
        {comments.map((comment, key) => (
          <div className="flex items-start gap-3" key={key}>
            <img
              src={comment.profilePicture}
              className="h-8 w-8 rounded-[50%] object-cover"
            />
            <p className="max-w-3xl text-sm leading-6">
              <span className="font-semibold">{comment.name}:</span>{" "}
              {comment.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;

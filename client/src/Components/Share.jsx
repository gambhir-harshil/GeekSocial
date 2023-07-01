import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  PhotoOutlined,
  LocationOn,
  InsertEmoticonOutlined,
} from "@mui/icons-material";

const Share = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="w-full mt-2 share">
      <div className="container flex-col px-6 py-6 border rounded-lg bg-primary border-primary">
        <div className="flex gap-3">
          <img
            src={currentUser.profilePic}
            className="h-[36px] w-[36px] rounded-full object-cover"
          />
          <input
            type="text"
            className="input"
            placeholder="What's on your mind?"
          />
        </div>
        <div
          className="flex justify-between mt-5 text-secondary"
        >
          <div className="flex gap-5">
            <PhotoOutlined />
            <LocationOn />
            <InsertEmoticonOutlined />
          </div>
          <div>
            <button
              className="btn"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;

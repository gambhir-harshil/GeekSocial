import Posts from "../Components/Posts";
import Share from "../Components/Share";

const Profile = () => {
  return (
    <div className="bg-secondary">
      <div className="w-full h-[300px] relative">
        <img
          src="https://images.pexels.com/photos/16667030/pexels-photo-16667030/free-photo-of-empty-road-in-dramatic-mountains-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="object-cover w-full h-full"
        />
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="w-[200px] h-[200px] object-cover rounded-full absolute left-0 right-0 m-auto top-[200px]"
        />
      </div>
      <div className="flex flex-col gap-5 py-5 lg:px-20 md:px-10">
        <div className="bg-primary text-primary border-primary rounded-lg flex flex-col items-center justify-center h-[180px] border gap-3">
          <h1 className="mt-16 text-xl font-bold">John Doe</h1>
          <button className="btn">Follow</button>
        </div>
        <Share />
        <Posts />
      </div>
    </div>
  );
};

export default Profile;

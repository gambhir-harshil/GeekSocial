const Rightbar = () => {

  const communities = [
    { name: "Stackoverflow server", today: "125", hour: "42" },
    { name: "Stackoverflow server", today: "125", hour: "42" },
    { name: "Stackoverflow server", today: "125", hour: "42" },
    { name: "Stackoverflow server", today: "125", hour: "42" },
  ];

  const friends = [
    { name: "Harsh Sachdeva", img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg" },
    { name: "Aman Gupta", img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg" },
    { name: "Bhumika Kohli", img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg" },
    { name: "Sahil Verma", img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg" },
    { name: "Sahil Verma", img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg" },
    { name: "Sahil Verma", img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg" },
    { name: "Sahil Verma", img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg" },
  ];

  return (
    <div
      className="sticky top-[70px] overflow-scroll px-10 py-6 gap-10 hidden lg:flex flex-col rightbar flex-[2] bg-secondary text-primary"
      style={{ height: "calc(100vh - 70px)" }}
    >
      <div
        className="container flex flex-col gap-5 p-5 border rounded-lg bg-primary border-primary"
      >
        <span>Trending Communities</span>
        {communities.map((item, key) => (
          <div key={key} className="flex justify-around">
            <div className="flex flex-col gap-1">
              <span className="text-sm">{item.name}</span>
              <span
                className="text-xs text-secondary"
              >
                {item.today} posts today
              </span>
            </div>
            <div
              className="flex items-center bg-secondary text-secondary rounded-xl"
            >
              <span className="px-2 text-xs font-semibold">
                {item.hour} in 1 hour
              </span>
            </div>
          </div>
        ))}
      </div>

      <div
        className="container flex flex-col gap-5 px-8 py-5 border rounded-lg bg-primary border-primary"
      >
        <span>My Friends</span>
        {friends.map((item, key) => (
          <div key={key} className="flex justify-start gap-3">
            <div className="flex items-center">
                <img src={item.img} className="h-[30px] w-[30px] rounded-[50%] object-cover" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm">{item.name}</span>
              <span
                className="text-xs text-secondary"
              >
                Last active recently
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rightbar;

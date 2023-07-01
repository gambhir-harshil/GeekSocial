import {
  People,
  Home,
  Storefront,
  Newspaper,
  CalendarMonth,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Leftbar = () => {

  const icons = [
    { icon: <Home />, name: "Home", href: "/" },
    { icon: <People />, name: "Community", href: "/community" },
    { icon: <Storefront />, name: "Marketplace", href: "/marketplace" },
    { icon: <CalendarMonth />, name: "Events", href: "/events" },
    { icon: <Newspaper />, name: "News feed", href: "/news" },
  ];

  const communities = [
    {
      name: "Frontend Developers",
      icon: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      members: "531",
    },
    {
      name: "Frontend Developers",
      icon: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      members: "531",
    },
    {
      name: "Frontend Developers",
      icon: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      members: "531",
    },
    {
      name: "Frontend Developers",
      icon: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      members: "531",
    },
  ];

  const events = [
    {
      date: "24",
      month: "Jul",
      name: "Product Designing",
      interested: "78",
      going: "7.7",
    },
    {
      date: "20",
      month: "Aug",
      name: "Frontend Seminar",
      interested: "31",
      going: "3.8",
    },
    {
      date: "5",
      month: "Sep",
      name: "Developers Conference",
      interested: "55",
      going: "6.4",
    },
  ];
  return (
    <div
      className="sticky top-[70px] overflow-scroll border-r scrollbar-hide hidden md:flex flex-col flex-[2] text-secondary bg-primary border-primary"
      style={{ height: "calc(100vh - 70px)" }}
    >
      <div className="flex flex-col px-10 py-5">
        {icons.map((item, key) => (
          <NavLink
            key={key}
            to={item.href}
            className={({ isActive }) => {
              return isActive
                ? "flex gap-2 w-full bg-secondary py-3 px-2 rounded-md text-blue-600"
                : "flex gap-2 w-full py-3 px-2 text-secondary";
            }}
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>
      <div className="mx-10">
        <hr className="border-primary"/>
      </div>

      <div className="flex flex-col gap-5 px-10 py-5">
        <p className="font-bold">My communities</p>
        {communities.map((item, key) => (
          <div key={key} className="flex items-center gap-2">
            <img src={item.icon} alt="icon" className="h-[32px] w-[32px] rounded-[50%] object-cover"/>
            <div className="flex flex-col">
              <span
                className="font-semibold text-primary"
              >
                {item.name}
              </span>
              <span className="text-xs">{item.members} members</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-10">
        <hr className="border-primary" />
      </div>

      <div className="flex flex-col gap-5 px-10 py-5">
        <p className="font-bold">Upcoming Events</p>
        {events.map((item, key) => (
          <div key={key} className="flex items-center gap-4">
            <div
              className="flex flex-col items-center justify-center rounded-md p-2 bg-secondary h-[54px] w-[54px]"
            >
              <span className="text-lg">{item.date}</span>
              <span className="text-sm">{item.month}</span>
            </div>
            <div>
              <p
                className="font-semibold text-primary"
              >
                {item.name}
              </p>
              <div className="flex gap-2">
                <span className="text-xs">{item.interested}K interested</span>
                <span className="text-xs">{item.going}K going</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leftbar;

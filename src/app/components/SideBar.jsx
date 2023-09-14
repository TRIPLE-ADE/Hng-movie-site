import Image from "next/image";
import { SidebarLinks } from "@/constants/data";
import { active } from "../style";

const SideBar = () => {
  return (
    <aside className="fixed h-screen w-52 rounded-r-[2rem] border-dark-300 border-2">
      <div className="flex flex-col items-center justify-between h-full py-5">
        <Image
          src="/Dark-Logo.svg"
          alt="logo"
          width={100}
          height={100}
          style={{ width: "auto", height: "auto" }}
          priority={true}
        />
        <div className="flex flex-col w-full mt-5">
          {SidebarLinks.map(({ title, icon, id }) => (
            <div
              key={id}
              className={`${
                id == 2
                  ? `${active.activeCard}`
                  : ""
              } flex items-center justify-start gap-5 px-10 py-3 hover:bg-rose-100 hover:cursor-pointer`}
            >
              <Image
                src={icon}
                alt="logo"
                width={100}
                height={100}
                style={{ width: "auto", height: "auto" }}
              />
              <p>{title}</p>
            </div>
          ))}
        </div>
        <div className="w-4/5 bg-rose-50 rounded-2xl border border-red-300 p-3 mt-5">
            <p className="text-sm pt-3">Play movie quizes and earn free tickets</p>
            <p className="text-xs py-2">50k people are playing now</p>
            <button className="bg-rose-100 rounded-3xl text-xs font-bold text-rose-600 py-1 px-2">Start playing</button>
        </div>
        <div className="flex items-center justify-start gap-5 mt-auto w-full px-10 py-4 hover:bg-rose-100 hover:cursor-pointer">
          <Image
            src="/Logout.svg"
            alt="logo"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
          />
          <p>Logout</p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;

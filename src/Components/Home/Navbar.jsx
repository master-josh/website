import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const navcontents = [
    {
      id: 1,
      Name: "Home",
    },
  
    {
      id: 2,
      Name: "About",
    },
    {
      id: 3,
      Name: "Contact",
    },
    {
      id: 4,
      Name: "Services",
    },
    {
      id: 5,
      Name: "Blog",
    },
  ];
  
function Navbar() {
    const [Dropdown, setDropdown] = useState(false);

    const Click = () => {
      setDropdown(!Dropdown);
    };
    return (
      <>
        <header className="bg-gradient-to-r from-slate-900 bg-slate-500 h-20 flex items-center justify-between">
          <span className="text-3xl font-semibold text-white mx-8">Logo</span>
          <div className="flex items-center text-white">
            {!Dropdown ? (
              <IoMenuOutline
                className="text-4xl flex md:hidden mx-8"
                onClick={Click}
              />
            ) : (
              <IoClose className="text-4xl flex md:hidden mx-8" onClick={Click} />
            )}
  
            <nav className="gap-11 text-xl font-semibold mx-8 hidden md:flex ">
              {navcontents.map((Items) => (
                <div key={Items.id}>
                  <a href={Items.Name}>{Items.Name}</a>
                </div>
              ))}
            </nav>
          </div>
        </header>
        {Dropdown ? (
          <div className="flex items-center justify-center lg:hidden">
            <div className="bg-gradient-to-r from-slate-900 bg-slate-500 h-80 mt-2 rounded-xl w-[27rem]">
              <div className="text-white flex flex-col items-center text-2xl font-semibold gap-[1.9rem] mt-4">
                {navcontents.map((Items) => (
                  <a href={Items.Name}>{Items.Name}</a>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </>
    )
}

export default Navbar
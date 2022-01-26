import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

// component
import MenuListContainer from "./MenuListContainer";

function FloatMenuBtn(props) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleMenu = () => setIsClicked((prev) => !prev);

  return (
    <>
      <div className="fixed z-30 w-8/12 flex flex-col gap-3 items-end bottom-2 right-2 md:hidden">
        {isClicked && (
          <div className="p-3 bg-white h-52  overflow-y-scroll">
            {props.menu.map((item, index) => (
              <MenuListContainer
                {...item}
                key={index}
                onClickHandler={props.onClickHandler}
                selected={props.selected}
              />
            ))}
          </div>
        )}
        <button
          onClick={toggleMenu}
          className="text-white rounded-2xl flex items-center gap-1 bg-black pr-4 px-3 py-2"
        >
          {isClicked ? <MdClose /> : <HiMenu />} Menu
        </button>
      </div>
    </>
  );
}

export default FloatMenuBtn;
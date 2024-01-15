import { useState } from "react";

import caret_left from "../assets/Images/caret-left-solid.svg";
import caret_right from "../assets/Images/caret-right-solid.svg";

export default function ImageCarousel({ Images }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="flex w-full">
      <img
        className="w-3 cursor-pointer hover:opacity-70"
        src={caret_left}
        onClick={() => setCurrentImage((i) => (i != 0 ? --i : i))}
      />
      <div className="mx-4 border border-dirt">
        <img src={Images[currentImage]} />
      </div>
      <img
        className="w-3 cursor-pointer hover:opacity-70"
        src={caret_right}
        onClick={() =>
          setCurrentImage((i) => (i != Images.length - 1 ? ++i : i))
        }
      />
    </div>
  );
}

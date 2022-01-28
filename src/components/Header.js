import { Link } from "react-router-dom";
import { useState } from "react";
export default function Header(props) {
  const [value, setValue] = useState(false);
  const mouseEnter = () => {
    setValue(true);
  };
  const mouseLeave = () => {
    setValue(false);
  };
  return (
    <>
      <nav className="main-nav">
        <Link to="texttransform" className="left-sec">
          <img src="https://i.ibb.co/gzzNwkp/text.png" alt="" />
          <div className="main-text">Text Transform</div>
        </Link>
        <Link to="texttransform/about" className="right-sec"  onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <div >
            {value ? "Click for About Section" : "The Ultimate Text Fomatter"}
          </div>
        </Link>
      </nav>
    </>
  );
}

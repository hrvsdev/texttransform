import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
    <h2>
      Hello! I am Harsh Vyas
    </h2>
    <h3>
      And Text Transform is a basic project created by me for learning react.
    </h3>
    <Link to="/"><button className="footer-btn">Click Here For Homepage</button></Link>
    </footer>
  );
}

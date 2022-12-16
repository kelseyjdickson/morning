import { Link } from "react-router-dom";

import "../../styles/main.css";
const Main = () => {
  return (
    <>
      <div id="container">
        <h1>Main Container</h1>
        <Link to="signup"> Sign Up</Link>
      </div>
    </>
  );
};
export default Main;

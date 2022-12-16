import Greeting from "./Greeting";
import Grateful from "./Grateful";

import "../../styles/main.css";
const Main = () => {
  return (
    <>
      <div id="container">
        <h1>Main Container</h1>
        <Greeting />
        <div className="grateful-container">
          <Grateful />
        </div>
        <div className="grateful2">
          <Grateful />
        </div>
        <div className="grateful3">
          <Grateful />
        </div>
      </div>
    </>
  );
};
export default Main;

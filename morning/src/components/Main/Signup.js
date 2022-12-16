import React from "react";

const Signup = () => {
  return (
    <div class="wrapper">
      <div class="inner">
        <form action="">
          <div className="form-holder">
            <h3>Sign Up</h3>
            <div className="form-holder active">
              <input className="form-control" type="text" placeholder="NAME" />
            </div>
            <div className="form-holder">
              <input
                className="form-control"
                type="text"
                placeholder="E-MAIL"
              />
            </div>
            <div className="form-holder">
              <input
                className="form-control"
                type="text"
                placeholder="PASSWORD"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

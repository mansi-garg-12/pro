import React from "react";
import "../styles.css";

export default function frontpage() {
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="left">
                <h className="board">Board</h>
              </div>
              <div className="right">
                <form style={{ width: "23rem " }}>
                  <h3 className="signin">sign In</h3>
                  <h4 className="signinto">Sign in to your account</h4>
                  <div>
                    <button className="b1" type="submit">
                      <i className="fab fa-google me-2"></i> Sign in with google
                    </button>
                    <button className="b2" type="submit">
                      <i className="fab fa-apple-f me-2"></i>Sign in with apple
                    </button>
                  </div>
                  <div className="newbox">
                    <label className="form-label" for="form2Example18">
                      Email address
                    </label>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example18"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form2Example28">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form2Example28"
                        className="form-control form-control-lg"
                      />
                    </div>
                    <p className="small mb-5 pb-lg-2">
                      <a className="text-muted" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    <div className="pt-1 mb-4">
                      <button className="button" type="button">
                        Sign In
                      </button>
                    </div>

                    <p>
                      Don't have an account?{" "}
                      <a href="#!" className="link-info">
                        Register here
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from "react";
import { authService } from "../services/authService";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitForm = async (event) => {
    event.preventDefault();
    const userData = { email, password };
    const response = await authService.login(userData);
    console.log(response?.data);
    if (response?.data?.accessToken) {
      authService.setToken(response?.data?.accessToken);
      navigate("/welcome");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-8">
            <form className="mt-5" onSubmit={submitForm}>
              <div className="form-group mt-5">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                ></input>
                <small id="emailHelp" className="form-text text-muted">
                  We wll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                ></input>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                ></input>
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

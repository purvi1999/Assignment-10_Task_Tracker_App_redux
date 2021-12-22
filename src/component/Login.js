import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  const LoginCkh = () => {
    if (email === "admin@gmail.com" && pwd === "123") {
      alert("yes");
      // <button onClick={() => dispatch(login(true))}>Login</button>
      // dispatch(login());
    } else {
      alert("Invalid Email or Password!!!");
    }
  };
  function handleSubmit(event) {
    event.preventDefault();
  }
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  return (
    <>
      <h3>Login Page</h3>
      <div>
        <form name="f1" className="add-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="Enter Password"
              value={pwd}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <input
              type="submit"
              value="Login"
              className="btn btn-block"
              onClick={LoginCkh}
            />
          </div>
          {/* <p>Email === "admin@gmail.com" && user_password === "123"</p> */}
        </form>
      </div>
    </>
  );
};

export default Login;

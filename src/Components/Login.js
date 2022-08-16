import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyImage from "../Content/Images/1607027181034.png";
import styles from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (username === "ali" && password === "123") {
      localStorage.setItem("username", username);
      navigate("/");
    }
  };
  return (
    <div className={styles.mainContent}>
      <div className={styles.Content}>
        <div>
          <a className="" href="/">
            <div>
              <img
                data-src=""
                width="150"
                height="auto"
                src={MyImage}
                alt="Logo"
              />
            </div>
          </a>
        </div>
        <div>
          <h1>ورود | ثبت&zwnj;نام</h1>
          <p>سلام!</p>
          <p>لطفا نام کاربری و پسورد خود را وارد کنید</p>
          <form onSubmit={submitHandler}>
            <label>
              <div>
                <input
                  className={styles.loginInput}
                  type="text"
                  name="username"
                  autoComplete="off"
                  placeholder="نام کاربری"
                  value={username}
                  onChange={usernameChangeHandler}
                />

                <br />
                <input
                  className={styles.loginInput}
                  type="text"
                  name="password"
                  autoComplete="off"
                  placeholder="پسورد"
                  value={password}
                  onChange={passwordChangeHandler}
                />
              </div>

              <p className="text-body-2 color-hint-text-error">
                لطفا این قسمت را خالی نگذارید
              </p>
            </label>
            <button type="submit">
              <div>ورود</div>
            </button>
          </form>
          <p>ورود شما به معنای پذیرش شرایط لووین‌ و قوانین حریم‌خصوصی است</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

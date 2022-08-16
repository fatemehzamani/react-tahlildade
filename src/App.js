import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Product from "./Components/Product";
import Tablets from "./Components/Tablets";
import styles from "./Components/HomePage.module.css";
import Mobiles from "./Components/Mobiles";
import NotFound from "./Components/NotFound";
import SingleProduct from "./Components/SingleProduct";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route
              index
              element={
                <main>
                  <h1 className={styles.welcome}>welcome to Online Shop</h1>
                  <p className={styles.title}>
                    Hi there! We missed you and we prepared a little gift for
                    you! Hi! It’s great to see you back! We have a special
                    discount for our returning customers. Are you interested?
                    Welcome back! Good to see you again. Can we help you with
                    anything?
                  </p>
                </main>
              }
            />
            <Route path="/Product" element={<Product />} />
            <Route path="/Product/Tablets" element={<Tablets />} />

            <Route path="/Product/Mobiles" element={<Mobiles />}>
              <Route path=":mobileID" element={<SingleProduct />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

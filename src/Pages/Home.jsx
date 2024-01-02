import React from "react";
import Clients from "../Components/Clients";

const Home = () => {
  return (
    <section
      id="home"
      // style={{ backgroundColor: "rgba(245, 247, 250, 1)" }}
      className="bg-#f5f7fa "
    >
      <div
        key="main-container"
        style={{ backgroundColor: "rgba(245, 247, 250, 1)" }}
        className="bg-#f5f7fa mx-auto py-[96px] h-[599px] "
      >
        <div
          key="sub-container"
          className="flex flex-wrap-reverse bg-#f5f7fa gap-10 justify-evenly items-center"
        >
          <div key="banner-text" className="bg-#f5f7fa h-[100%]">
            <h1
              style={{ color: "#4D4D4D" }}
              className="text-6xl leading-[70px]"
            >
              {" "}
              Lessons and insights <br />{" "}
              <span style={{ color: "#4CAF4F" }}>from 8 years</span>
            </h1>
            <h3>
              Where to grow your business as a photographer: site or social
              media?
            </h3>
            <button className="text-white w-[90px] h-[40px] rounded-md bg-green-600 m-auto cursor-pointer">
              Register
            </button>
          </div>
          <div key="banner-img">
            <img
              className="w-[391px] h-[407px]"
              src="https://i.ibb.co/2kZCkvQ/hero.png"
              alt="hero"
            />
          </div>
        </div>
      </div>
      <Clients />
    </section>
  );
};

export default Home;

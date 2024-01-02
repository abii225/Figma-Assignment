import React from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav
      style={{ backgroundColor: "rgba(245, 247, 250, 1)" }}
      className="mx-auto bg-rgba(245, 247, 250, 1) w-[100%] py-4 fixed overflow-hidden"
    >
      <div key="container" className="w-[80%] flex justify-between m-auto ">
        <div
          key="logo"
          className=" bg-rgba(245, 247, 250, 1) w-[20%] flex cursor-pointer"
        >
          <img
            className="w-[80%] block  m-auto "
            src="https://i.ibb.co/k65HDmF/logo.png"
            alt="logo"
          />
        </div>
        <div
          key="group"
          className="bg-rgba(245, 247, 250, 1) w-[588px] flex justify-between align-middle"
        >
          <Link
            to="home"
            className="text-black m-auto cursor-pointer leading-[24px]"
          >
            Home
          </Link>
          <Link className="text-black m-auto cursor-pointer leading-[24px]">
            Service
          </Link>
          <Link className="text-black m-auto cursor-pointer leading-[24px]">
            Feature
          </Link>
          <Link className="text-black m-auto cursor-pointer leading-[24px]">
            Product
          </Link>
          <Link className="text-black m-auto cursor-pointer leading-[24px]">
            Testimonial
          </Link>
          <Link className="text-black m-auto cursor-pointer leading-[24px]">
            Faq
          </Link>
        </div>
        <div
          key="login"
          className="bg-rgba(245, 247, 250, 1) w-[182px] h-[40px] flex justify-between "
        >
          <button className="text-green-500 w-[77px] h-[40px] rounded-md bg-white m-auto cursor-pointer">
            Login
          </button>
          <button className="text-white w-[90px] h-[40px] rounded-md bg-green-600 m-auto cursor-pointer">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import Slider from "./Slider";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import "../css/main.css";
import "../css/Landing.css";
import pic1 from "../images/bg-1.png";
import pic2 from "../images/bg-2.png";
import pic3 from "../images/bg-3.png";

const Landing = () => {
  const testData = [
    {
      title: "Nike Air MAX 97",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime ipsa officia dicta illum perspiciatis mollitia ad cupiditate eligendi eveniet aspernatur nesciunt ",
      image: pic1,
      price: 40,
    },
    {
      title: "Addidas Ultra Boost 6.0",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime ipsa officia dicta illum perspiciatis mollitia ad cupiditate eligendi eveniet aspernatur nesciunt ",
      image: pic2,
      price: 40,
    },
    {
      title: "Nike Dunk Low Viotech",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime ipsa officia dicta illum perspiciatis mollitia ad cupiditate eligendi eveniet aspernatur nesciunt ",
      image: pic3,
      price: 40,
    },
  ];
  const [focus, setFocus] = useState(0);

  return (
    <main>
      <section className="txt-side">
        <div>
          <div>
            <Slider
              focus={focus}
              handleFocus={(ind, e) => {
                setFocus(ind - 1);
              }}
            />
            <div className="socials">
              <FiTwitter />
              <BsInstagram />
              <FiFacebook />
            </div>
          </div>
          <div>
            <h1>{testData[focus].title}</h1>
            <p className="desc">{testData[focus].description}</p>
            <div className="cart-price">
              <p className="cart-add">Add to Cart</p>
              <p className="price">
                <span>$</span>
                <span>{`${testData[focus].price
                  .toFixed(2)
                  .toString()
                  .slice(0, -3)}`}</span>
                <span>{`${testData[focus].price
                  .toFixed(2)
                  .toString()
                  .slice(-3)}`}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="img-side"
        style={{ backgroundImage: `url(${testData[focus].image})` }}
      >
        {/* <img src={testData[focus].image} className="bg-img" /> */}
      </section>
    </main>
  );
};

export default Landing;

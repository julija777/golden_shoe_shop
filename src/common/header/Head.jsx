import React from "react";
import "./Header.css";


const Head = () => {
  return (
    <>
    <section
        className="head">
          <div className="container d_flex">
            <div className="left-row">
                <i className="fa fa-phone"></i>
                <label htmlFor='phone'>+447980172233</label>
                <i className="fa fa-envelope"></i>
                <label>GoldenShoe@shop.react</label>
            </div>
            <div className="right row RText">
              <label>FAQ</label>
              <label>Need Help</label>
              <span>🇬🇧</span>
              <label>EN</label>
              <span>🇺🇲</span>
              <label>USD</label>
              </div>
            </div>  
        </section>
    </>
  );
}

export default Head;
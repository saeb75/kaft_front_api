import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import kaft_logo from "../../assents/kaft_logo.svg";
import socks from "../../assents/socks.jpg";
import gift from "../../assents/gift.jpg";
import myVideo from "../../assents/videoSlide.mp4";
import "./style.css";

const SliderSection = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Container style={{ maxWidth: "1700px" }}>
        {/*  <Slider {...settings}>
          <div>
            <img src={kaft_logo} />
          </div>
          <div>
            <img src={kaft_logo} />
          </div>
          <div>
            <img src={kaft_logo} />
          </div>
          <div>
            <img src={kaft_logo} />
          </div>
        </Slider> */}
        <div className="video_slider">
          <video
            className="my_video_slide"
            autoPlay
            autostart="true"
            muted
            loop
          >
            <source src={myVideo} type="video/mp4" autostart="true" autoPlay />
          </video>
          <div className="video_info_container">
            <div className="video_info">
              <h1>کافت</h1>
              <p>ساده ،زیبا و شیک</p>
              <button>خرید</button>
            </div>
            <div className="video_logo">
              <img src={kaft_logo} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SliderSection;

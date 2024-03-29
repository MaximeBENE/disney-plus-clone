/* eslint-disable */
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>

      <Wrap>
        <a alt="image">
          <img src={process.env.PUBLIC_URL +"/images/slider-moonKnightjpg.jpg"} alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a alt="image">
          <img src={process.env.PUBLIC_URL +"/images/slider-badag.jpg"} alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a alt="image">
          <img src={process.env.PUBLIC_URL +"/images/slider-scale.jpg"} alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src={process.env.PUBLIC_URL +"/images/slider-badging.jpg"} alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a alt="image">
          <img src={process.env.PUBLIC_URL +"/images/slider-scales.jpg"} alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;

    height: 100%;
    width: 5vw;
    z-index: 1;
  }

  &:hover {
    & > button {
      opacity: 1;
      transition: opacity 0.4s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -60px;
  }
  .slick-next {
    right: -60px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    ${"" /* This shadow code can created using Online calculators*/}
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;      
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;

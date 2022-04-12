import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
    <Carousel {...settings}>
        <Wrap>
            <a href="https://maximebene.github.io/disney-plus-clone/">
                <img src={process.env.PUBLIC_URL +"/images/disney-1.png"} />
            </a>
        </Wrap>
        <Wrap>
            <img src={process.env.PUBLIC_URL +"/images/tesla-1.png"} />
        </Wrap>
        <Wrap>
            <a href="https://maximebene.github.io/disney-plus-clone/">
                <img src={process.env.PUBLIC_URL +"/images/disney-1.png"} />
            </a>
        </Wrap>
        <Wrap>
            <img src={process.env.PUBLIC_URL +"/images/tesla-1.png"} />
        </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
    ${'' /* overflow: hidden; */}
    margin-top: 20px;

    ${'' /* color button */}
    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button::before {
        color:white;
    }

    ${'' /* visual image to the side */}
    .slick-list {
        overflow: visible;
    }

    ${'' /* visible right button */}
    button {
        z-index: 1;
        height:60vh;
    }

`

const Wrap = styled.div`
    cursor: pointer;
    margin-top:10vh;
    img {
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`
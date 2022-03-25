import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ImageSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const imgBoxStyle = {
            textAlign: "-webkit-center"
        }

        const imgStyle = {
            width: this.props.width
        };

        return (
            <div style={imgBoxStyle}>
                <Slider {...settings}>
                    <div>
                        <img alt="" src={require('../asset/images/u1.jpg')} style={imgStyle} />
                    </div>
                    <div>
                        <img alt="" src={require('../asset/images/u2.jpg')} style={imgStyle} />
                    </div>
                    <div>
                        <img alt="" src={require('../asset/images/u3.jpg')} style={imgStyle} />
                    </div>
                </Slider>
            </div >
        );
    }
};

export default ImageSlider;
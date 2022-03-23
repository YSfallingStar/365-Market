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
                        <img alt="t1" src={require('../asset/images/t1.png')} style={imgStyle} />
                    </div>
                    <div>
                        <img alt="t2" src={require('../asset/images/t2.png')} style={imgStyle} />
                    </div>
                    <div>
                        <img alt="t3" src={require('../asset/images/t3.png')} style={imgStyle} />
                    </div>
                    <div>
                        <img alt="t4" src={require('../asset/images/t4.png')} style={imgStyle} />
                    </div>
                </Slider>
            </div >
        );
    }
};

export default ImageSlider;
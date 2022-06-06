var React = require('react');
// var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;
import "react-responsive-carousel/lib/styles/carousel.min.css";
import op1 from "./assets/op1.png"
import op2 from "./assets/op2.png"
import op3 from "./assets/op3.png"



var DemoCarousel = React.createClass({
    render() {
        return (
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src={op1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={op2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={op3} />
                    <p className="legend">Legend 3</p>
                </div>
                
            </Carousel>
        );
    }
});

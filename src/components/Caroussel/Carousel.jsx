import React from "react";

const Carousel = () => {
  return (
    <div className="mt-6   mx-8 " style={{ width: "900px", height: "1000px" }}>
      <div className="container-crousel">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner h-[300px]">
            <div className="item active">
              <img
                src="https://wp-pa.phonandroid.com/uploads/2023/09/iPhone15Pro.jpg"
                alt="Los Angeles"
                style={{ width: "100%" }}
              />
            </div>

            <div className="item">
              <img
                src="https://www.apple.com/v/iphone/home/bp/images/meta/iphone__ky2k6x5u6vue_og.png"
                alt="Chicago"
                style={{ width: "100%" }}
              />
            </div>

            <div className="item">
              <img
                src="https://t.ctcdn.com.br/RzJ7B8QA1eMPl0Kfp5AGd6I5KbM=/1200x675/smart/i464481.jpeg"
                alt="New york"
                style={{ width: "100%" }}
              />
            </div>
          </div>

          <a
            className="left carousel-control"
            href="#myCarousel"
            data-slide="prev"
          />
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>

          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          />
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </div>
      </div>
    </div>
  );
}

export default Carousel;

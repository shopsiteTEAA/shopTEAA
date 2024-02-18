import React from "react";

function ImageBanner() {
  return (
    <div className="h-[500px] w-[1170px] bg-[#000] flex justify-center items-center relative top-[700px]">
      <div className="left w-[550px] relative h-[500px]">
        <div className="absolute p-16">
          <h1 style={{ marginTop: "30px" }} className="text-[#0f6] font-bold ">
            Categories
          </h1>
          <div
            style={{ fontSize: "48px", marginTop: "50px" }}
            className="title text-[#fff]"
          >
            Enhance Your Music Experience
          </div>
          <button
            style={{ marginTop: "50px" }}
            className="w-[159px] h-[46px] bg-[#0f6] absolute text-center
         text-primary"
          >
            View all
          </button>
        </div>
      </div>
      <img
        className="w-[600px] h-[420px]"
        src="https://s3-alpha-sig.figma.com/img/3cc9/43ca/7e210f637fc0504b7d93cd207df744c2?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MB51ct0UoiKwZF7DL2XR7s~b~zuk6DAa8W7djLLLIiw2DHQyY7w6J~gCjIwpqAXuuzz0g2eQD7soRZYJlv7hU9gU1hUpSr30LhjjfXuVGl5HLjAfsgEqk3YVVNZVYuU6tpAq8uIYrAZbZZm~3SuC5gpJJrPWcM03SDDoF9dBd1PHdkiO4Ka8mp5rxfkxaAuMPPivMHnl0G8izckjlx1uBJYoO-ygdP5xZK86uamMPD2nRP40iBY0z9eABXQ-RVtuI59hzL93TEexHqyNCNVZKN5kHOqpUah8lObpnQK5U0EWQPKLnMEhcGLcm0wsRuIa1MXNPhcUWE6zmP7Sq7bz9w__"
        alt="iamge"
      />
    </div>
  );
}

export default ImageBanner;

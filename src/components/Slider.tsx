import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Card {
  id: number;
  image: string;
}
const heroItems: Card[] = [
  {
    id: 1,
    image: "/img1.webp",
  },
  {
    id: 2,
    image: "/img2.webp",
  },
  {
    id: 3,
    image: "/img3.webp",
  },
  {
    id: 4,
    image: "/4img.webp",
  },
  {
    id: 5,
    image: "/img5.webp",
  },
  {
    id: 6,
    image: "/img6.webp",
  },
];
const Slider: React.FC = () => {
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={8000}
        centerMode={false}
        className="z-0"
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 20, // this is needed to tell the amount of px that should be visible.
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {heroItems.map((item) => (
          <div key={item.id} className="w-full h-[500px] md:h-[600px]">
            <img src={item.image} className=" w-full h-full" loading="lazy" />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Slider;

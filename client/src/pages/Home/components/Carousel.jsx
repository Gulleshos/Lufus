import { Autoplay, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "../../../assets/styles/style.css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css";

import { Img } from "@chakra-ui/react";

import Slide1 from "../../../assets/images/homePage/slide1.png";
import Slide2 from "../../../assets/images/homePage/slide2.png";
import Slide3 from "../../../assets/images/homePage/slide3.png";

const Carousel = () => {
    return (
        <Swiper
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 7000,
                disableOnInteraction: false,
            }}
            effect={"fade"}
            modules={[Autoplay, EffectFade, Pagination]}
        >
            <SwiperSlide>
                <Img src={Slide1} />
            </SwiperSlide>
            <SwiperSlide>
                <Img src={Slide2} />
            </SwiperSlide>
            <SwiperSlide>
                <Img src={Slide3} />
            </SwiperSlide>
        </Swiper>
    );
};

export default Carousel;

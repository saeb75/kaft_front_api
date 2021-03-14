import React from "react";
import "./style.css";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ReactSlick = ({ products }) => {
  return (
    <div className="Cswiper">
      {products.length > 0 && (
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          navigation
          /*  pagination={{ clickable: true }} */
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {products.length > 0 &&
            products.map((item) => {
              return (
                <SwiperSlide key={item._id} style={{ width: 326.333 }}>
                  <ProductCard item={item} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}
    </div>
  );
};

export default ReactSlick;

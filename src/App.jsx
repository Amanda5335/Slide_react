import "./App.css";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { register } from "swiper/element/bundle";

register();

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    id: "1",
    image: `https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png`,
  },
  {
    id: "2",
    image: `https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png`,
  },
  {
    id: "3",
    image: `https://sujeitoprogramador.com/wp-content/uploads/2022/03/Frame-321.png`,
  },
  {
    id: "4",
    image: `https://sujeitoprogramador.com/wp-content/uploads/2022/01/thumb-1.png`,
  },
];

function App() {
  const [slidePerView, setSlidePerview] = useState(2);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerview(1);
      } else {
        setSlidePerview(2);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="title">Slider react Js</h1>

      <Swiper
        slidesPerView={slidePerView}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="slider" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;

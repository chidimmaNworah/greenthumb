import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaGripfire, FaStar, FaLeaf } from "react-icons/fa";
import { LuAlarmClockCheck } from "react-icons/lu";
import { PiBowlSteamFill } from "react-icons/pi";
import { MdDinnerDining } from "react-icons/md";
import { IoIceCream } from "react-icons/io5";
import { GiSugarCane, GiCampCookingPot, GiTeapotLeaves } from "react-icons/gi";
import { TbBrandSugarizer } from "react-icons/tb";
import { RiDrinks2Fill } from "react-icons/ri";
import styles from "./styles.module.scss";

// swiper module imports
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function ThirdHero() {
  return (
    <>
      <div className={styles.thirdhero}>
        <div className="flex flex-col gap-8 row-start-2 items-start mb-10">
          <div className="text-gray-400 flex items-center flex-row justify-between w-full">
            <h1 className="text-2xl text-left flex items-center gap-2 ">
              TOP CATEGORIES <FaStar className="text-sm" />
            </h1>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-[#8CD829]"
              href="/categories"
              target="_blank"
              rel="noopener noreferrer"
            >
              More &#8594;
            </a>
          </div>
          <div
            className={`${styles.thirdhero_categories} grid grid-cols-[1fr_1fr_1fr] items-center gap-4 h-full w-full text-center`}
          >
            <div>
              <p>
                <GiTeapotLeaves />
              </p>
              <p>Breakfast</p>
            </div>
            <div>
              <p>
                <PiBowlSteamFill />
              </p>
              <p>Launch</p>
            </div>
            <div>
              <p>
                <MdDinnerDining />
              </p>
              <p>Dinner</p>
            </div>
            <div>
              <p>
                <GiSugarCane />
              </p>
              <p>Sugar Free</p>
            </div>
            <div>
              <p>
                <TbBrandSugarizer />
              </p>
              <p>Low Calories</p>
            </div>
            <div>
              <p>
                <FaLeaf />
              </p>
              <p>Vegetarian</p>
            </div>
            <div>
              <p>
                <IoIceCream />
              </p>
              <p>Snack</p>
            </div>
            <div>
              <p>
                <RiDrinks2Fill />
              </p>
              <p>Drinks</p>
            </div>
            <div>
              <p>
                <GiCampCookingPot />
              </p>
              <p>Soup</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-8 row-start-2 items-start">
            <div className="text-gray-400 flex items-center flex-row justify-between w-full">
              <h1 className="text-2xl text-left flex items-center gap-2 ">
                GET INSPIRED <FaStar className="text-sm" />
              </h1>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-[#8CD829]"
                href="/recepies"
                target="_blank"
                rel="noopener noreferrer"
              >
                More &#8594;
              </a>
            </div>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className={styles.myswiper}
            >
              <SwiperSlide className={styles.swiper_slide}>
                <div className={styles.getinspired}>
                  <img src="/banner.jpg" alt="" />
                  <p className="absolute top-4 right-2">
                    <CiHeart className={styles.hearticon} />
                  </p>
                  <div className={`${styles.text_container}`}>
                    <p className="text-sm mb-2">Zesty Grilled Chicken Salad</p>
                    <p className="flex items-center text-[10px] text-gray-400 mb-1">
                      <LuAlarmClockCheck className="text-sm mr-1" /> 20 min
                      {"  "}
                      <FaGripfire className="text-sm" /> 312kcal
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiper_slide}>
                <div className={styles.getinspired}>
                  <img src="/banner.jpg" alt="" />
                  <p className="absolute top-4 right-2">
                    <CiHeart className={styles.hearticon} />
                  </p>
                  <div className={`${styles.text_container}`}>
                    <p className="text-sm mb-2">Zesty Grilled Chicken Salad</p>
                    <p className="flex items-center text-[10px] text-gray-400 mb-1">
                      <LuAlarmClockCheck className="text-sm mr-1" /> 20 min
                      {"  "}
                      <FaGripfire className="text-sm" /> 312kcal
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

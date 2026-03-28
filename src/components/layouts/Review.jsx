import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import reviewOne from "/src/assets/reviewOne.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Review = () => {
  return (
    <div className="bg-[#EAEDF2] py-25">
      <Container>
        <h3 className="font-inter text-3xl uppercase font-black relative px-2 md:px-0">
          Testimonials
          <span className="absolute left-2 md:left-0 -bottom-2 w-9 h-0.5 bg-org"></span>
        </h3>
        <p className="font-inter uppercase text-sm text-[#555A64] pt-5 mb-15 px-2 md:px-0">
          A passionate front-end developer based in bangladesh
        </p>

        <div className="pb-15 px-2 md:px-0">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            className="mySwiper"
          >
            {/* Slider 1 */}
            <SwiperSlide>
              <div className="bg-[#ffffff] w-full h-full py-4 px-6 md:py-6 md:px-8 border border-[#EEDDDD]">
                <Flex className={"gap-x-5 items-start"}>
                  <Image className={"w-10 h-10"} src={reviewOne} />
                  <div className="flex flex-col">
                    <p className="font-inter text-sm md:text-base text-[#555A64]">
                      Amazing frontend developer! Delivered a pixel-perfect,
                      responsive site using React and Tailwind. Clean code and
                      super fast delivery. Highly recommended!
                    </p>
                    <p className="font-inter text-base md:text-2xl text-[#090A0C] pt-3 pb-2 font-bold">
                      Ferdous Munmun
                    </p>
                    <p className="font-inter text-sm md:text-base text-[#555A64] font-bold">
                      CEO
                    </p>
                  </div>
                </Flex>
              </div>
            </SwiperSlide>

            {/* Slider 2 */}
            <SwiperSlide>
              <div className="bg-[#ffffff] w-full h-full py-6 px-8 border border-[#EEDDDD]">
                <Flex className={"gap-x-5 items-start"}>
                  <Image className={"w-10 h-10"} src={reviewOne} />
                  <div className="flex flex-col">
                    <p className="font-inter text-base text-[#555A64]">
                      Delivered exceptionally clean, modular React code that’s a
                      breeze to maintain. The architecture is well-structured
                      and ensuring future updates will be seamless and
                      efficient.
                    </p>
                    <p className="font-inter text-2xl text-[#090A0C] pt-3 pb-2 font-bold">
                      Jannatul Ferdaush Arshe
                    </p>
                    <p className="font-inter text-base text-[#555A64] font-bold">
                      Fiverr Client
                    </p>
                  </div>
                </Flex>
              </div>
            </SwiperSlide>

            {/* Slider 3 */}
            <SwiperSlide>
              <div className="bg-[#ffffff] w-full h-full py-6 px-8 border border-[#EEDDDD]">
                <Flex className={"gap-x-5 items-start"}>
                  <Image className={"w-10 h-10"} src={reviewOne} />
                  <div className="flex flex-col">
                    <p className="font-inter text-base text-[#555A64]">
                      Top-notch work! he provided a super-fast, modern UI that
                      works perfectly on all devices. The code structure is very
                      professional. Best developer I've hired so far!
                    </p>
                    <p className="font-inter text-2xl text-[#090A0C] pt-3 pb-2 font-bold">
                      Nusrat Nipa
                    </p>
                    <p className="font-inter text-base text-[#555A64] font-bold">
                      Fiverr Client
                    </p>
                  </div>
                </Flex>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Review;
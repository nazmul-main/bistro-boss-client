import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"
import slide4 from "../../assets/home/slide4.jpg"
import slide5 from "../../assets/home/slide5.jpg"
import SectionTitle from '../SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className='w-2/3 mx-auto'>
            <SectionTitle 
                subHeading={'---From 11:00am to 10:00pm---'}
                heading={'ORDER ONLINE'}>
            </SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='text-4xl uppercase text-white font-semibold shadow-black  -mt-24 pb-4 text-center'> salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className='text-4xl uppercase text-white font-semibold shadow-black  -mt-24 pb-4 text-center'> Pizzas</h2>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className='text-4xl uppercase text-white font-semibold shadow-black  -mt-24 pb-4 text-center'> Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className='text-4xl uppercase text-white font-semibold shadow-black  -mt-24 pb-4 text-center'> Desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className='text-4xl uppercase text-white font-semibold shadow-black  -mt-24 pb-4 text-center'> salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className='text-4xl uppercase text-white font-semibold shadow-black  -mt-24 pb-4 text-center'> Pizzas</h2>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className='text-4xl uppercase text-white font-semibold shadow-black  -mt-24 pb-4 text-center'> Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className='text-4xl uppercase text-white font-semibold shadow-black  -mt-24 pb-4 text-center'> Desserts</h2>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;
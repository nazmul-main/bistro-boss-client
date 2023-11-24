import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
/* React Rating */
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import quote from '../../assets/home/quote-left 1.png'


const TestiMonials = () => {

    const [reviwes, setReviwes] = useState([])
    // console.log(reviwes);

    useEffect(() => {
        fetch('http://localhost:5001/api/v1/reviews')
            .then(res => res.json())
            .then(data => setReviwes(data))
    }, [])



    return (
        <section className="max-w-screen-xl mx-auto px-4 my-24">
            <SectionTitle
                subHeading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}

            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviwes?.map(reviwe => <SwiperSlide
                        key={reviwe._id}
                    >
                        <div className="px-16 pt-10 flex flex-col gap-7 justify-center items-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={reviwe.rating}
                                readOnly
                            />
                            <img className="" src={quote} alt="" />
                            <p>{reviwe.details}</p>
                            <h3 className="text-2xl text-orange-400 font-semibold ">{reviwe.name}</h3>
                           
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default TestiMonials;
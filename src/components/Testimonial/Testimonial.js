import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Pagination } from 'swiper/modules'
import "swiper/css/pagination";
import './Testimonial.css';
import imageSource from "../../assets/images/images";

const Testimonial = () => {
    const clients = [
        {
            img: imageSource.profile1,
            review:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            img: imageSource.profile2,
            review:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            img: imageSource.profile3,
            review:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            img: imageSource.profile4,
            review:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            img: imageSource.profile5,
            review:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            img: imageSource.profile6,
            review:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },

    ]
    return (
        <div className="mb-20 flex justify-center items-center flex-col h-screen mt-28 gap-8 relative">
            <div>
                <span className="font-bold text-2xl text-black dark:text-white">Client always get </span>
                <span className="font-bold text-2xl text-yellow-600  dark:text-white">Exceptional Work </span>
                <span className="font-bold text-2xl ">from me...</span>
            </div>
            <div className="absolute w-80 h-2/5 rounded-xl bg-purple-200 blur-3xl right-64 top-64 dark:bg-black">
            </div>
            <div className="absolute w-2/5  h-96 rounded-xl bg-sky-200 blur-3xl left-2 top-56 dark:bg-black">
            </div>
           
           
            <div className="w-2/6">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={2}
                    grabCursor={true}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                >

                    {
                        clients.map((client, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="h-72 flex flex-col justify-center items-center overflow-hidden border-4  border-sky-100 shadow-2xl shadow-sky-200  rounded-2xl p-10">
                                        <img src={client.img} alt="" className="rounded-full w-24 h-24"/>
                                        <span className="text-sm text-gray-500 mt-2">{client.review}</span>
                                    </div>
                                    </SwiperSlide>
                            );
                        })
                    }
                    

                </Swiper>
            </div>
        </div>
    );

}
export default Testimonial;
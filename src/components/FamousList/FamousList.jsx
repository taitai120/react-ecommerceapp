import React from "react";
import FamousCard from "./FamousCard/FamousCard";

const FamousList = () => {
    return (
        <>
            <FamousCard
                image="images/app_watch_s7.jpg"
                title="bg screen"
                name="Smart Watch Series 7."
                desc="From $599 or $16.62/mo. for 24 mo."
            />
            <FamousCard
                image="images/macbook.jpeg"
                title="studio display"
                name="600 nits of brightness."
                desc="27-inch 5K Retina display"
            />
            <FamousCard
                image="images/ip14pro.webp"
                title="smartphones"
                name="Iphone 14 Pro."
                desc="Now in Green. From $999.00 or $41.62/mo. for 24 mo."
            />
            <FamousCard
                image="images/smart_speaker.webp"
                title="home speakers"
                name="Room-filling sound."
                desc="From $699 or $116.58/mo. for 12 mo."
            />
        </>
    );
};

export default FamousList;

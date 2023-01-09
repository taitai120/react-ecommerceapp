import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import "./ProductList.scss";
import tab1 from "../../images/tab1.jpg";
import tab3 from "../../images/tab3.jpg";

const ProductList = ({ grid }) => {
    return (
        <>
            <ProductCard
                grid={grid}
                isLiked
                id={1}
                mainImg={tab1}
                subImg={tab3}
                brand="Havells"
                name="Kids Headphones Bulk 10 Pack Multi Colored"
                price="100"
                rating={4}
            />
            <ProductCard
                grid={grid}
                isLiked
                id={2}
                mainImg={tab1}
                subImg={tab3}
                brand="Sony"
                name="Olympus Pen E-PL9 Kit With 14-42, EZ Lens, Camera"
                price="10"
                rating={5}
            />
            <ProductCard
                grid={grid}
                isLiked
                id={3}
                mainImg={tab1}
                subImg={tab3}
                brand="Havells"
                name="Horor T1 7.0 1GB Ram 8GB Rom"
                price="100"
                rating={5}
            />
            <ProductCard
                grid={grid}
                isLiked
                id={4}
                mainImg={tab1}
                subImg={tab3}
                brand="Bajaj"
                name="Beoplay A1 Portable Bluetooth Speaker"
                price="500"
                discount="10"
                rating={5}
            />
        </>
    );
};

export default ProductList;

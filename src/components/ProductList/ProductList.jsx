import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import "./ProductList.scss";

const ProductList = ({ grid }) => {
    return (
        <>
            <ProductCard
                grid={grid}
                isLiked
                mainImg="images/tab1.jpg"
                subImg="images/tab3.jpg"
                brand="Havells"
                name="Kids Headphones Bulk 10 Pack Multi Colored"
                price="100"
                rating={4}
            />
            <ProductCard
                grid={grid}
                isLiked
                mainImg="images/tab1.jpg"
                subImg="images/tab3.jpg"
                brand="Sony"
                name="Olympus Pen E-PL9 Kit With 14-42, EZ Lens, Camera"
                price="10"
                rating={5}
            />
            <ProductCard
                grid={grid}
                isLiked
                mainImg="images/tab1.jpg"
                subImg="images/tab3.jpg"
                brand="Havells"
                name="Horor T1 7.0 1GB Ram 8GB Rom"
                price="100"
                rating={5}
            />
            <ProductCard
                grid={grid}
                isLiked
                mainImg="images/tab1.jpg"
                subImg="images/tab3.jpg"
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

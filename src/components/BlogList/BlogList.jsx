import React from "react";
import BlogCard from "./BlogCard/BlogCard";

const BlogList = () => {
    return (
        <>
            <BlogCard
                img="images/blog-1.jpg"
                date="11 JUNE, 2022"
                title="A Beautiful Sunday Morning"
                content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid numquam doloremque dignissimos ipsam obcaecati illum."
            />
            <BlogCard
                img="images/blog-2.png"
                date="11 JUNE, 2022"
                title="Sed Ut Perspiciatis Unde Omnis"
                content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid numquam doloremque dignissimos ipsam obcaecati illum."
            />
            <BlogCard
                img="images/blog-3.png"
                date="11 JUNE, 2022"
                title="Viate Magnis Fusce Laolao"
                content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid numquam doloremque dignissimos ipsam obcaecati illum."
            />
            <BlogCard
                img="images/blog-4.png"
                date="11 JUNE, 2022"
                title="Urna Pretium Elit Mauris Curus"
                content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid numquam doloremque dignissimos ipsam obcaecati illum."
            />
        </>
    );
};

export default BlogList;

import React from "react";
import "./BlogDetailPage.scss";
import { useParams, useLocation } from "react-router-dom";
import Meta from "../../../components/Meta/Meta";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import BlogCard from "../../../components/BlogList/BlogCard/BlogCard";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const BlogDetailPage = () => {
    const location = useLocation();
    const { id } = useParams();
    console.log(id);
    return (
        <>
            <Meta title={"Blogs"} />
            <Breadcrumb title="Blogs" />
            <div className="blog-detail-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Find By Categories
                                </h3>
                                <ul className="ps-0">
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="single-blog-card">
                                <Link
                                    to="/blogs"
                                    className="d-flex align-items-center gap-10"
                                >
                                    <HiOutlineArrowLeft className="fs-5" />
                                    Go back to Blogs
                                </Link>
                                <h3 className="title mt-2">
                                    A Beautiful Sunday Morning Renaissance
                                </h3>
                                <img
                                    src="../images/blog-1.jpg"
                                    alt="blog"
                                    className="img-fluid"
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. In, quasi a temporibus
                                    magni provident quos velit ex eligendi ipsum
                                    nostrum nihil iure. Laborum numquam minima
                                    officiis aut, cum error, sunt molestias quo
                                    ducimus officia libero sequi similique.
                                    Accusamus repudiandae praesentium nihil quia
                                    ab eos commodi vero unde error dignissimos,
                                    blanditiis consequatur iste rerum, quos
                                    nisi, quis perferendis dolorum corrupti
                                    beatae vel quae! Dolore quisquam error,
                                    aliquid consequuntur neque fugiat porro.
                                </p>
                                <div className="d-flex gap-30">
                                    <p className="date">11 Jun 2022</p>
                                    <p className="author">Tai Phan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetailPage;

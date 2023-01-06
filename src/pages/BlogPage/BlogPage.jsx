import React from "react";
import "./BlogPage.scss";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Meta from "../../components/Meta/Meta";
import BlogList from "../../components/BlogList/BlogList";

const BlogPage = () => {
    return (
        <>
            <Meta title={"Blogs"} />
            <Breadcrumb title="Blogs" />
            <div className="blog-wrapper home-wrapper-2 py-5">
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
                            <div className="row">
                                <BlogList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPage;

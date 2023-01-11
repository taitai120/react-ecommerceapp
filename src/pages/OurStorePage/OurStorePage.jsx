import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Meta from "../../components/Meta/Meta";
import "./OurStorePage.scss";
import ReactStarts from "react-rating-stars-component";
import ProductList from "../../components/ProductList/ProductList";
import Colors from "../../components/Colors/Colors";
import Container from "../../components/Container/Container";

const OurStorePage = () => {
    const [grid, setGrid] = useState(4);

    const gridSetter = (i) => {
        setGrid(i);
    };

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <>
            <Meta title={"Our Store"} />
            <Breadcrumb title="Store" />
            <Container class1="store-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Shopy By Categories
                            </h3>
                            <div>
                                <ul className="ps-0">
                                    <li>Watch</li>
                                    <li>TV</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Filter By</h3>
                            <div>
                                <h5 className="sub-title">Availablity</h5>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        value=""
                                        id="abc"
                                        name="abc"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="abc"
                                    >
                                        In Stock (1)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        value=""
                                        id="abc2"
                                        name="abc2"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="abc2"
                                    >
                                        Out of Stock (0)
                                    </label>
                                </div>
                            </div>
                            <h5 className="sub-title">Price</h5>
                            <div className="d-flex align-items-center gap-10">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingFromInput"
                                        placeholder="taiphan@gmail.com"
                                    />
                                    <label htmlFor="floatingFromInput">
                                        From
                                    </label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingToInput"
                                        placeholder="taiphan@gmail.com"
                                    />
                                    <label htmlFor="floatingToInput">To</label>
                                </div>
                            </div>
                            <h5 className="sub-title">Colors</h5>
                            <div>
                                <Colors />
                            </div>
                            <h5 className="sub-title">Size</h5>
                            <div>
                                <h5 className="sub-title">Availablity</h5>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        value=""
                                        id="size-s"
                                        name="size-s"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="size-s"
                                    >
                                        S (1)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        value=""
                                        id="size-m"
                                        name="size-m"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="size-m"
                                    >
                                        M (3)
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Product Tags</h3>
                            <div>
                                <div className="product-tags d-flex flex-wrap align-items-center">
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Headphone
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Lpatop
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Mobile
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Wire
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Random Product</h3>
                            {/* <div className="row">
                                    <ProductCard
                                        isRandom
                                        isLiked
                                        mainImg="images/tab1.jpg"
                                        brand="Havells"
                                        name="Kids Headphones Bulk 10 Pack Multi Colored"
                                        price="100"
                                    />
                                    <ProductCard
                                        isRandom
                                        isLiked
                                        mainImg="images/tab1.jpg"
                                        subImg="images/tab3.jpg"
                                        brand="Sony"
                                        name="Olympus Pen E-PL9 Kit With 14-42, EZ Lens, Camera"
                                        price="10"
                                        rating={5}
                                    />
                                </div> */}
                            <div>
                                <div className="random-products d-flex mb-3 d-flex">
                                    <div className="w-50">
                                        <img
                                            src="images/watch.jpg"
                                            alt="watch"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="w-50">
                                        <h5>
                                            Kids Headphones Bulk 10 pack multi
                                            colored
                                        </h5>
                                        <ReactStarts
                                            count={5}
                                            onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                            value={5}
                                            edit={false}
                                        />
                                        <b>$ 100</b>
                                    </div>
                                </div>
                                <div className="random-products d-flex mb-3 d-flex">
                                    <div className="w-50">
                                        <img
                                            src="images/watch.jpg"
                                            alt="watch"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="w-50">
                                        <h5>
                                            Kids Headphones Bulk 10 pack multi
                                            colored
                                        </h5>
                                        <ReactStarts
                                            count={5}
                                            onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                            value={5}
                                            edit={false}
                                        />
                                        <b>$ 100</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p className="mb-0 d-block sortby">
                                        Sort By:
                                    </p>
                                    <select
                                        name=""
                                        id=""
                                        className="form-control form-select"
                                    >
                                        <option value="manual">Featured</option>
                                        <option value="best-selling" selected>
                                            Best Selling
                                        </option>
                                        <option value="title-descending">
                                            Alphabet, A-Z
                                        </option>
                                        <option value="price-ascending">
                                            Price, low to high
                                        </option>
                                        <option value="price-descending">
                                            Price, high to low
                                        </option>
                                        <option value="created-ascending">
                                            Date, old to new
                                        </option>
                                        <option value="created-descending">
                                            Date, new to old
                                        </option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <p className="totalProducts mb-0">
                                        21 Products
                                    </p>
                                    <div className="d-flex gap-10 align-items-center grid">
                                        <img
                                            src="images/gr4.svg"
                                            alt="grid"
                                            className="d-block img-fluid"
                                            onClick={() => gridSetter(3)}
                                        />
                                        <img
                                            src="images/gr3.svg"
                                            alt="grid"
                                            className="d-block img-fluid"
                                            onClick={() => gridSetter(4)}
                                        />
                                        <img
                                            src="images/gr2.svg"
                                            alt="grid"
                                            className="d-block img-fluid"
                                            onClick={() => gridSetter(6)}
                                        />
                                        <img
                                            src="images/gr.svg"
                                            alt="grid"
                                            className="d-block img-fluid"
                                            onClick={() => gridSetter(12)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-list py-5">
                            <div className="d-flex gap-10 flex-wrap">
                                <ProductList grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default OurStorePage;

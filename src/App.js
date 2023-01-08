import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import OurStorePage from "./pages/OurStorePage/OurStorePage";
import BlogPage from "./pages/BlogPage/BlogPage";
import CompareProductPage from "./pages/CompareProductPage/CompareProductPage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import BlogDetailPage from "./pages/BlogPage/BlogDetailPage/BlogDetailPage";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";
import RefundPolicyPage from "./pages/RefundPolicyPage/RefundPolicyPage";
import ShippingPolicyPage from "./pages/ShippingPolicyPage/ShippingPolicyPage";
import TermAndConditionsPage from "./pages/TermAndConditionsPage/TermAndConditionsPage";
import ProductDetailPage from "./pages/OurStorePage/ProductDetailPage/ProductDetailPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="signup" element={<SignupPage />} />
                        <Route
                            path="forgot-password"
                            element={<ForgotPasswordPage />}
                        />
                        <Route
                            path="reset-password"
                            element={<ResetPasswordPage />}
                        />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="store" element={<OurStorePage />} />
                        <Route
                            path="products/:id"
                            element={<ProductDetailPage />}
                        />
                        <Route path="blogs" element={<BlogPage />} />
                        <Route path="blog/:id" element={<BlogDetailPage />} />
                        <Route path="contact" element={<ContactPage />} />
                        <Route
                            path="compare-product"
                            element={<CompareProductPage />}
                        />
                        <Route path="wishlist" element={<WishlistPage />} />
                        <Route
                            path="privacy-policy"
                            element={<PrivacyPage />}
                        />
                        <Route
                            path="refund-policy"
                            element={<RefundPolicyPage />}
                        />
                        <Route
                            path="shipping-policy"
                            element={<ShippingPolicyPage />}
                        />
                        <Route
                            path="term-conditions"
                            element={<TermAndConditionsPage />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import {ProtectedRouter,ProtectedLoginRouter} from "./utils/global/ProtectedRouter";
const LoginPage = React.lazy(() => import("pages/auth/Login"));
const LoginNamePage = React.lazy(() => import("pages/auth/LoginName"));
const VerificationPage = React.lazy(() => import("pages/auth/Verification"));
const MyOrder = React.lazy(() => import("pages/ProfilePage/MyOrder"));
const MyOrderDetail = React.lazy(() => import("pages/ProfilePage/MyOrderDetail"));
const Cart = React.lazy(() => import("pages/Cart"));
const CartSuccess = React.lazy(() => import("pages/Cart/CartSuccess"));
const ProductList = React.lazy(() => import("pages/ProductList"));
const ProductDetail = React.lazy(() => import("pages/ProductDetail"));
const Home = React.lazy(() => import("pages/Home"));
const BlogDetail = React.lazy(() => import("pages/BlogDetail"));
const BlogList = React.lazy(() => import("pages/BlogList"));
const Search = React.lazy(() => import("pages/Search"));
const CustomCakeCart = React.lazy(() => import("pages/CustomCakeCart"));
const DesignMyOwnCakeQuestionOne = React.lazy(() => import("pages/DesignMyOwnCakeQuestionOne"));
const DesignMyOwnCakeQuestionTwo = React.lazy(() => import("pages/DesignMyOwnCakeQuestionTwo"));
const DesignMyOwnCakeQuestionThree = React.lazy(() => import("pages/DesignMyOwnCakeQuestionThree"));
const DesignMyOwnCakeQuestionFour = React.lazy(() => import("pages/DesignMyOwnCakeQuestionFour"));
const DesignMyOwnCakeQuestionFive = React.lazy(() => import("pages/DesignMyOwnCakeQuestionFive"));
const DesignMyOwnCakeQuestionSix = React.lazy(() => import("pages/DesignMyOwnCakeQuestionSix"));
const DesignMyOwnCakeQuestionSeven = React.lazy(() => import("pages/DesignMyOwnCakeQuestionSeven"));
const DesignMyOwnCakeQuestionEight = React.lazy(() => import("pages/DesignMyOwnCakeQuestionEight"));
const DesignMyOwnCakeQuestionNine = React.lazy(() => import("pages/DesignMyOwnCakeQuestionNine"));
const DesignMyOwnCakeQuestionTen = React.lazy(() => import("pages/DesignMyOwnCakeQuestionTen"));
const DesignMyOwnCakeQuestionEleven = React.lazy(() => import("pages/DesignMyOwnCakeQuestionEleven"));
const DesignMyOwnCakeQuestionTwelve = React.lazy(() => import("pages/DesignMyOwnCakeQuestionTwelve"));
const DesignMyOwnCakeQuestionThirteen = React.lazy(() => import("pages/DesignMyOwnCakeQuestionThirteen"));
const DesignMyOwnCake = React.lazy(() => import("pages/DesignMyOwnCake"));
const DesignMyOwnCakeSummary = React.lazy(() => import("pages/DesignMyOwnCakeSummary"));
const RecipientFormThankYou = React.lazy(() => import("pages/RecipientFormThankYou"));
const RecipientForm = React.lazy(() => import("pages/RecipientForm"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const TermsConditions = React.lazy(() => import("pages/TermsConditions"));
const PrivacyPolicy = React.lazy(() => import("pages/PrivacyPolicy"));
const MobilePrivacyPolicy = React.lazy(() => import("pages/MobilePrivacyPolicy"));
const ReturnPolicy = React.lazy(() => import("pages/ReturnPolicy"));
const LandingPage = React.lazy(() => import("pages/Landing"));
const BecomeACustomer = React.lazy(() => import("pages/BecomeACustomer"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<></>}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/" element={<LoginPage />} /> */}
          <Route element={<ProtectedRouter />}> 
            <Route path="/login" element={<LoginPage />} /> 
            <Route path="/login-name" element={<LoginNamePage />} />
            <Route path="/verify-otp" element={<VerificationPage />} />
          </Route>
          <Route element={<ProtectedLoginRouter />}>          
            <Route path="/my-order" element={<MyOrder />} />
            <Route path="/my-order-detail" element={<MyOrderDetail />} /> 
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart-success/:slug" element={<CartSuccess />} />
          <Route path="/productlist/:slug" element={<ProductList />} />
          <Route path="/productdetail/:slug" element={<ProductDetail />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog-list" element={<BlogList />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/CustomCakeCart" element={<CustomCakeCart />} />
          <Route path="/designmyowncakequestionone" element={<DesignMyOwnCakeQuestionOne />} /> 
          <Route path="/designmyowncakequestiontwo" element={<DesignMyOwnCakeQuestionTwo />} /> 
          <Route path="/designmyowncakequestionthree" element={<DesignMyOwnCakeQuestionThree />} /> 
          <Route path="/designmyowncakequestionfour" element={<DesignMyOwnCakeQuestionFour />} /> 
          <Route path="/designmyowncakequestionfive" element={<DesignMyOwnCakeQuestionFive />} /> 
          <Route path="/designmyowncakequestionsix" element={<DesignMyOwnCakeQuestionSix />} /> 
          <Route path="/designmyowncakequestionseven" element={<DesignMyOwnCakeQuestionSeven />} /> 
          <Route path="/designmyowncakequestioneight" element={<DesignMyOwnCakeQuestionEight />} /> 
          <Route path="/designmyowncakequestionnine" element={<DesignMyOwnCakeQuestionNine />} /> 
          <Route path="/designmyowncakequestionten" element={<DesignMyOwnCakeQuestionTen />} /> 
          <Route path="/designmyowncakequestioneleven" element={<DesignMyOwnCakeQuestionEleven />} /> 
          <Route path="/designmyowncakequestiontwelve" element={<DesignMyOwnCakeQuestionTwelve />} /> 
          <Route path="/designmyowncakequestionthirteen" element={<DesignMyOwnCakeQuestionThirteen />} /> 
          <Route path="/designmyowncake" element={<DesignMyOwnCake />} /> 
          <Route path="/designmyowncakesummary" element={<DesignMyOwnCakeSummary />} /> 
          <Route path="/recipientform" element={<RecipientForm />} /> 
          <Route path="/recipientformthankyou" element={<RecipientFormThankYou />} /> 
          <Route path="/contactus" element={<ContactUs />} /> 
          <Route path="/terms-and-conditions" element={<TermsConditions />} /> 
          <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
          <Route path="/web-viw-cms/:type/:lang" element={<MobilePrivacyPolicy />} /> 
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/become-customer" element={<BecomeACustomer />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

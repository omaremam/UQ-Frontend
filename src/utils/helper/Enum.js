export const ONBOARDING_APIS = {
    CHECK_USER_BY_MOBILE: "/user/auth/check-user-by-mobile",
    SEND_OTP: "/user/auth/send-otp",
    VERIFY_OTP: "/user/auth/verify-otp",
    LOGIN_WITH_OTP: "/user/auth/login",
    SIGNUP: "/user/auth/register",
    FORGOT_PASSWORD: "forgotPassword",
    REFRESH_TOKEN: "/user/auth/refresh-token"
};

export const USERS = {
    GET_PROFILE: "/user/api/v1/user/profile",
    UPDATE_PROFILE: "/user/api/v1/user/update-profile",
    SEND_OTP: "/user/api/v1/user/send-otp",
    VERIFY_OTP: "/user/api/v1/user/verify-otp",
    UPDATE_MOBILE_NUMBER: "/user/api/v1/user/update-mobile-no",
    GET_ALL_ADDRESS: "/user/api/v1/user/get-all-addresss",
    SET_PREFFERED_LANG:"/user/api/v1/user/set-preffered-lang",
    ADD_ADDRESS:"/user/api/v1/user/add-address",
    DELETE_ADDRESS:"/user/api/v1/user/delete-address",
    UPDATE_ADDRESS:"/user/api/v1/user/update-user-address",
    SET_DEFAULT_ADDRESS:"/user/api/v1/user/set-default-address", 
};

export const GUEST = {
    ADD_GUEST: "/user/api/v1/add-guest-user",
    ADD_ADDRESS:"/user/api/v1/add-guest-user-address",
    GET_ADDRESS_LIST:"/user/api/v1/get-guest-address-by-guestid"
};


export const ADDRESS = {
    CHECK_ADDRESS: "/user/api/v1/check-address",
};


export const CATEGORIES = {
    GET_ALL_CATEGORIES: "/user/api/v1/category/get-all-categories",
};

export const PRODUCTS = {
    GET_PRODUCT_LIST: "/user/api/v1/get-products",
    GET_PRODUCT_BY_ID: "/user/api/v1/get-product-details",
    GET_RELATED_PRODUCT:"/user/api/v1/get-related-products",
    GET_MODIFIER_BY_UOM_ID:"/user/api/v1/get-product-modifiers"
};

export const OCCASION = {
    LISTING: "/user/api/v1/occasion-listing",
    TYPE_LISTING: "/user/api/v1/get-occasion-types",
    ADD_OCCASION:"/user/api/v1/create-occasion",
    UPDATE_OCCASION_STATUS:"/user/api/v1/update-occasion-status",
    UPDATE_OCCASION:"/user/api/v1/update-occasion",
    GET_OCCASION_PRODUCT_BY_ID:"/user/api/v1/occasion-details-by-id",
};

export const CART = {
    ADD_TO_OCCASION: "/user/api/v1/add-to-occasion",
    ADD_TO_CART: "/user/api/v1/add-to-cart",
    CUSTOMIZE_CART:"/user/api/v1/customize-cart-item",
    DELETE_BY_ITEM_ID:'/user/api/v1/remove-cart-item',
    GET_CART_COUNT:'/user/api/v1/cart-total-count',
    GET_CART_DATA:'/user/api/v1/cart-details',
    MOVE_CART_TO_OCCASION:"/user/api/v1/move-items-to-occasion",
    UPDATE_QTY:"/user/api/v1/update-qty",
    CART_MODIFIER_BY_ITEM_ID:"/user/api/v1/get-modifier-by-cart-item-id",
    CART_SIGNUP_SEND_OTP:"/user/auth/cart-sign-up-send-opt",
};

export const CHECKOUT = {
    GET_SLOT_LIST_BY_DATE: "/user/api/v1/get-slots-based-on-branches",
    GET_PREP_TIME: "/user/api/v1/get-prep-time",
};

export const ORDER = {
    GET_SUMMARY: "/user/api/v1/order-summary", 
    PLACE_ORDER:"/user/api/v1/place-order",
};

export const RELATION = {
    LISTING: "/user/api/v1/get-relations",
};


export const PAGES = {
    GET_CMS: "/user/api/v1/get-cms",
};


export const DROP_ZONE = {
    GET_NEAR_ALL: "/user/api/v1/get-all-drop-zones",
};
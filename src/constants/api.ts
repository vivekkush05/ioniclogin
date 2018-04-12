export const API = {
    baseUrl: "http://127.0.0.1/vivek",
    imageUrl: "",
    requests: {
        aboutUs: {
            get: "/about_us",
            param: ""
        },
        barterCategories: {
            get: "/get_all_category",
            param: ""
        },
        faq: {
            get: "/faq",
            param: ""
        },
        returnPolicy: {
            get: "/returns_policy",
            param: ""
        },
        affiliateProgram: {
            get: "/affiliate_program",
            param: ""
        },
        termsConditions: {
            get: "/terms_conditions",
            param: ""
        },
        whyUs: {
            post: "/cms/why_us",
            param: '{ "slug":"why-us" }'
        },
        clientBenifits: {
            post: "/cms/client_benefits",
            param: '{ "slug":"client-benefits" }'
        },
        barterTrade: {
            post: "/cms/what-is-barter-trade",
            param: '{ "slug":"what-is-barter-trade" }'
        },
        scenarios: {
            post: "/cms/scenarios",
            param: '{ "slug":"scenarios" }'
        },
        howItWorks: {
            post: "/cms/how-it-works",
            param: '{ "slug":"how-it-works" }'
        },
        contactUs: {
            post: "/save_contact_us",
            param: ''
        },
        category: {
            get: "/get_all_category",
            param: ""
        },
        products: {
            post: "/cashless_deals_api",
            param: {
                location: "",
                amount: "",
                category: "",
                start: "",
                limit: "",
                sort_by_price: "",
                search_term: "",
                token: null
            }
        },
        subscription: {
            get: "/get-all-subscriptions",
            param: ""
        },
        banner: {
            get: "/top-banners",
            param: ""
        },
        TodayDeals: {
            get: "/today-deals",
            param: ""
        },
        productDetail: {
            post: "/deal_detail",
            param: ""
        },
        event: {
            get: "/events",
            param: ""
        },
        state: {
            get: "/states",
            param: ""
        },
        city: {
            post: "/city",
            param: ""
        },
        eventRegistration: {
            post: "/event-registration",
            param: ""
        },
        forgetPassword: {
            post: "/forget",
            param: ""
        },
        savePassword: {
            post: "/save-reset-password",
            param: ""
        },
        changePassword: {
            post: "/change-password",
            param: ""
        },
        role: {
            post: "/roles",
            param: ""
        },
        saveLogin: {
            post: "/auth/save-login-details",
            param: ""
        },
        sendOtp: {
            post: "/auth/save-otp",
            param: ""
        },
        resendOtp: {
            post: "/auth/resend-otp",
            param: ""
        },
        personalDetails: {
            post: "/auth/save-personal-information",
            param: ""
        },
        companyDetails: {
            post: "/auth/save-company-details",
            param: ""
        },
        businessDetails: {
            post: "/auth/save-business-details",
            param: ""
        },
        getLogin: {
            post: "/auth/get-login-details",
            param: {
                user_id: "",
                member_id: ""
            }
        },
        getPersonalInfo: {
            post: "/auth/get-personal-information",
            param: {
                user_id: "",
                member_id: ""
            }
        },
        getCompanyInfo: {
            post: "/auth/get-company-details",
            param: {
                user_id: "",
                member_id: ""
            }
        },
        getBusinessInfo: {
            post: "/auth/get-business-details",
            param: {
                user_id: "",
                member_id: ""
            }
        },
        finish: {
            post: "/auth/finish",
            param: ""
        },
        login: {
            post: "/logincheck.php",
            param: ""
        },
		signup: {
            post: "/signupcheck.php",
            param: ""
        },
        logout: {
            post: "/auth/logout",
            param: ""
        },
        bankDetails: {
            get: "/get-bank-details",
            param: ""
        },
        teamMember: {
            get: "/get-all-members",
            param: ""
        },
        getDownload: {
            post: "/get-download-doc",
            param: {
                token: ""
            }
        },
        getMemberCbtp: {
            post: "/auth/get-member-cbtp",
            param: {
                token: ""
            }
        },
        saveCart: {
            post: "/add_to_cart",
            param: {
                token: "",
                product_id: "",
                quantity: ""
            }
        },
        getCart: {
            post: "/get_cart_data",
            param: {
                token: ""
            }
        },
        updateCart: {
            post: "/save_item_qty",
            param: {
                token: "",
                cart_id: "",
                quantity: ""
            }
        },
        removeFromCart: {
            post: "/remove_cart_product",
            param: {
                token: "",
                cart_id: ""
            }
        },
        checkout: {
            post: "/checkout",
            param: {
                token: "",
                delivery_address: ""
            }
        },
        initiatePayment: {
            post: "/api_initiate_payment",
            param: {
                token: "",
                delivery_address: ""
            }
        },
        directPayment:{
            post: "/api_direct_payment",
            param: {
                token: "",
                txnid: ""
            }
        },
        saveWishlist: {
            post: "/save-wishlist",
            param: {
                token: "",
                product_id: ""
            }
        },
        removeWishlist: {
            post: "/remove-wishlist",
            param: {
                token: "",
                product_id: ""
            }
        },
        getWishlist: {
            post: "/get-wishlist-data",
            param: {
                token: ""
            }
        },
        downloadUrl: {
            post: "/get-download-link",
            param: {
                token: "",
                name: "",
                download_id: ""
            }
        },
        sellOrders: {
            post: "/get-sell-orders",
            param: {
                token: ""
            }
        },
        buyOrders: {
            post: "/get-buy-orders",
            param: {
                token: ""
            }
        },
        orderDetails: {
            post: "/get-order-details",
            param: {
                token: "",
                order_id: ""
            }
        },
        cbtpTransaction: {
            post: "/cbtp-transaction-list",
            param: {
                token: ""
            }
        },
        addFundRequest: {
            post: "/add-fund-request",
            param: {
                token: "",
                fundamount: ""
            }
        },
        todayDeal: {
            get: "/today-deals",
            param: ""
        },
        categoryProduct: {
            get: "/category-product",
            param: ""
        },
        PopularBarter: {
            get: "/pupular-barter",
            param: ""
        },
        cbtpPrice: {
            get: "/cbtp-price",
            param: ""
        },
        randomVendor: {
            get: "/random-vendor",
            param: ""
        },
        cashlessbazarDeals: {
            get: "/get-latest-product",
            param: ""
        },
        belowCbtpPrice: {
            get: "/cbtp-500-price",
            param: ""
        },
        advertisement: {
            get: "/get-advertisement",
            param: ""
        },
        vendorList: {
            get: "/all-api-vendors",
            param: ""
        },
        viewVendorDetail: {
            get: "/api_vendor/",
            param: ""
        },
        fundRequestList: {
            post: "/fund-request-list",
            param: {
                user_id: "",
                token: ""
            }
        },
        uploadPan: {
            post: "/api-upload-pancard",
            param: {
                token: "",
                file: ""
            }
        },
        userProductList: {
            post: "/user-product-list",
            param: {
                token: "",
                location: "",
                amount: "",
                category: "",
                start: "",
                limit: ""
            }
        },
        userProductDetail: {
            post: "/user-product-detail",
            param: {
                token: "",
                slug: ""
            }
        },
        existingPlan: {
            post: "/existing-membership",
            param: {
                token: ""
            }
        },
        bookPlan: {
            post: "/book-subscription",
            param: {
                token: "",
                subscription_id: ""
            }
        },
        newsLetterSubscription: {
            post: "",
            param: {}
        },
        applyCoupon: {
            post: "/apply-coupon",
            param: {
                token: "",
                coupon_code: ""
            }
        },
        saveAddress: {
            post: "/save-member-address",
            param: ""
        },
        editProfile:{
            post:"/edit-user-detail",
            param:{
                token: "",
                member_id:""
            }
        },
        saveProfile:{
            post:"/update-user-detail",
            param:""
        }
    }
};


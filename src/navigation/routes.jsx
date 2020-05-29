const admin = "/admin"
const masterAdmin = "/master-admin"
// const host = "http://127.0.0.1:8080"
const prod = false
const server = "https://website.com/api/"
const localhost = "http://localhost:8000/api/"
const routes = {
    master: masterAdmin,
    public: {
        home: "/",
        contact: "/contact",
        faq: "/faq",
        login: "/login",
        signUp: "/sign-up",
    },
    api: {
        login:  (prod ? server  : localhost)    +     'login',
        signUp: prod ? server  : localhost      +    'register',
        verifyUsers: prod ? server  : localhost      +    'users/verify',
        addRates: prod ? server  : localhost      +    'admin/add-rate',
        getRates: prod ? server  : localhost      +    'admin/get-rate',
    },

    admin: {
        index: "/admin",
        dashboard:      admin    +   "/dashboard",
        rates:          admin        +   "/rates",
        sellBitcoin:    admin  +   "/sell-bitcoin",
        sellGiftcard:   admin +   "/sell-giftcard",
        transcation:    admin  +   "/transcation",
        verify:         admin  +   "/verify",

    },
    masterAdmin: {
        index:          masterAdmin,
        dashboard:      masterAdmin     + "/dashboard",
        rates:          masterAdmin     + "/rates",
        sellBitcoin:    masterAdmin     +   "/sell-bitcoin",
        sellGiftcard:   masterAdmin     +   "/sell-giftcard",
        transcation:    masterAdmin     +   "/transcation",
        users:          masterAdmin     +   "/users",
        verify:         masterAdmin     +   "/verify",
    }
}
export default routes
const admin = "/admin"
// const host = "http://127.0.0.1:8080"
const prod = false
const server = "https://ajglobal.rinnaz.com/api/"
const localhost = "http://localhost:8000/api/"
const routes = {
    public: {
        home: "/",
        contact: "/contact",
        faq: "/faq",
        login: "/login",
        signUp: "/sign-up",
    },
    api: {
        login:  (prod ? server  : localhost)    +     'login',
        // signUp: prod ? server  : localhost      +    'client',
        signUp: prod ? server  : localhost      +    'register',
    },

    admin: {
        index: "/admin",
        dashboard: admin + "/dashboard",
        rates: admin + "/rates",
        sellBitcoin: admin + "/sell-bitcoin",
        sellGiftcard: admin + "/sell-giftcard",
        transcation: admin + "/transcation",
    }
}
export default routes
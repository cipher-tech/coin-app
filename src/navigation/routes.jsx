const admin = "/admin"
// const host = "http://127.0.0.1:8080"
const server = "https://ajglobal.rinnaz.com/api/"
const routes = {
    public: {
        home: "/",
        contact: "/contact",
        faq: "/faq",
        login: "/login",
        signUp: "/sign-up",
    },
    api: {
        login:  server      +     'login',
        signUp: server      +    'client',
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
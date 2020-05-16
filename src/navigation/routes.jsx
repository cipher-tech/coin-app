const admin = "/admin"
const  routes = {
    public: {
        home: "/",
        login: "/login",
        signUp: "/sign-up",
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
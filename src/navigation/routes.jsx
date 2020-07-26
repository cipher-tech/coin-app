const admin = "/admin"
const masterAdmin = "/master-admin"
// const host = "http://127.0.0.1:8080"
const prod = false
const server = "https://coin-app-ackend.herokuapp.com/api/"
const localhost = "http://localhost:8000/api/"
const exchangeApiId= "12dc31345cfc42778258c4880347ceee"
// moneyjs link = https://openexchangerates.org/api/latest.json?app_id=
const routes = {
    exchangeApi: `https://openexchangerates.org/api/latest.json?app_id=${exchangeApiId}`,
    master: masterAdmin,
    public: {
        home: "/",
        contact: "/contact",
        faq: "/faq",
        about: "/about",
        policies: "/policies",
        buy_sell: "/buySell",
        rates: "/rates",
        login: "/login",
        signUp: "/sign-up",
    },
    api: {
        login: (prod ? server : localhost) + 'login',
        signUp: prod ? server : localhost + 'register',
        resetPassword: prod ? server : localhost + 'passwordReset',

        getUser: (prod ? server : localhost) + 'user/get',
        requestVerification: prod ? server : localhost + 'users/requestVerification',
        verifyUsers: prod ? server : localhost + 'users/verify',
        updateUsers: prod ? server : localhost + 'users/update',
        updateUserInfo: prod ? server : localhost + 'users/updateUserInfo',
        updateUserPassword: prod ? server : localhost + 'users/updateUserPassword',
        userTransactions: prod ? server : localhost + 'users/userTransactions',
        deleteUnverifirdUsers: prod ? server : localhost + 'users/verify-delete',

        userBuyCoin: prod ? server : localhost + 'users/userBuyCoin',
        userSellCoin: prod ? server : localhost + 'users/userSellCoin',
        userSellCard: prod ? server : localhost + 'users/userSellCard',

        addPlan: prod ? server : localhost + 'admin/add-plan',
        getPlan: prod ? server : localhost + 'admin/get-plan',
        registerPlan: prod ? server : localhost + 'admin/register-plan',

        addRates: prod ? server : localhost + 'admin/add-rate',
        getRates: prod ? server : localhost + 'admin/get-rate',
        updateRates: prod ? server : localhost + 'admin/update-rate',

        adminCreateGiftcard: prod ? server : localhost + 'admin/add-giftcard',
        adminEditGiftcard: prod ? server : localhost + 'admin/edit-giftcard',

        usersDeposit: prod ? server : localhost + 'users/deposit',
        usersWidthdrawl: prod ? server : localhost + 'users/widthdrawl',

        adminDeposits: prod ? server : localhost + 'admin/deposits',
        adminWidthdrawl: prod ? server : localhost + 'admin/widthdrawls',
        adminAcceptDeposit: prod ? server : localhost + 'admin/acceptDeposit',
        adminAcceptWidthdrawl: prod ? server : localhost + 'admin/acceptWidthdrawl',
        adminDeleteWidthdrawl: prod ? server : localhost + 'admin/delete-Widthdrawl',
        adminDeleteDeposit: prod ? server : localhost + 'admin/delete-deposit',

        adminGetOrders:  prod ? server : localhost + 'admin/getOrders',
        adminConfirmTransaction:  prod ? server : localhost + 'admin/confirmTransaction',
        adminDestroyOrder:  prod ? server : localhost + 'admin/destroyTransaction',
    },

    admin: {
        index: "/admin",
        dashboard: admin + "/dashboard",
        rates: admin + "/rates",
        sellBitcoin: admin + "/sell-bitcoin",
        sellGiftcard: admin + "/sell-giftcard",
        transcation: admin + "/transcation",
        verify: admin + "/verify",
        deposit: admin + "/deposit",
        widthdrawl: admin + "/widthdraw",
        updateInfo: admin + "/update_info",

    },
    masterAdmin: {
        index: masterAdmin,
        dashboard: masterAdmin + "/dashboard",
        rates: masterAdmin + "/rates",
        sellBitcoin: masterAdmin + "/sell-bitcoin",
        sellGiftcard: masterAdmin + "/sell-giftcard",
        transcation: masterAdmin + "/transcation",
        users: masterAdmin + "/users",
        verify: masterAdmin + "/verify",
        deposit: masterAdmin + "/deposit",
        widthdrawl: masterAdmin + "/widthdraw",
        plans: masterAdmin + "/plans",
        orders: masterAdmin + "/orders",
    }
}

const currency = {
    "disclaimer": "Usage subject to terms: https://openexchangerates.org/terms",
    "license": "https://openexchangerates.org/license",
    "timestamp": 1594497614,
    "base": "USD",
    "rates": {
        "GHS": 5.769455,
        "NGN": 387.463453,
        "USD": 1,
        "XAF": 580.492925,

    }
}
export default routes
export const defaultcurrencies = currency
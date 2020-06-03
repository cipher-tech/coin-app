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
        requestVerification: prod ? server  : localhost      +    'users/requestVerification',
        verifyUsers: prod ? server  : localhost      +    'users/verify',
        updateUsers: prod ? server  : localhost      +    'users/update',
        addRates: prod ? server  : localhost      +    'admin/add-rate',
        getRates: prod ? server  : localhost      +    'admin/get-rate',
        updateRates: prod ? server  : localhost      +    'admin/update-rate',
        usersDeposit: prod ? server  : localhost      +    'users/deposit',
        usersWidthdrawl: prod ? server  : localhost      +    'users/widthdrawl',
        adminDeposits: prod ? server  : localhost      +    'admin/deposits',
        adminWidthdrawl: prod ? server  : localhost      +    'admin/widthdrawls',
        adminAcceptDeposit: prod ? server  : localhost      +    'admin/acceptDeposit',
        adminAcceptWidthdrawl: prod ? server  : localhost      +    'admin/acceptWidthdrawl',
    },
 
    admin: {
        index: "/admin",
        dashboard:      admin    +   "/dashboard",
        rates:          admin        +   "/rates",
        sellBitcoin:    admin  +   "/sell-bitcoin",
        sellGiftcard:   admin +   "/sell-giftcard",
        transcation:    admin  +   "/transcation",
        verify:         admin  +   "/verify",
        deposit:         admin  +   "/deposit",
        widthdrawl:         admin  +   "/widthdraw",

    },
    masterAdmin: {
        index:          masterAdmin,
        dashboard:      masterAdmin     +   "/dashboard",
        rates:          masterAdmin     +   "/rates",
        sellBitcoin:    masterAdmin     +   "/sell-bitcoin",
        sellGiftcard:   masterAdmin     +   "/sell-giftcard",
        transcation:    masterAdmin     +   "/transcation",
        users:          masterAdmin     +   "/users",
        verify:         masterAdmin     +   "/verify",
        deposit:        masterAdmin     +   "/deposit",
        widthdrawl:     masterAdmin     +   "/widthdraw",
    }
}
export default routes
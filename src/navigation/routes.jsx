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
        about: "/about",
        policies: "/policies",
        login: "/login",
        signUp: "/sign-up",
    },
    api: {
        login:  (prod ? server  : localhost)    +     'login',
        signUp: prod ? server  : localhost      +    'register',
        resetPassword: prod ? server  : localhost      +    'passwordReset',

        getUser:  (prod ? server  : localhost)    +     'user/get',
        requestVerification: prod ? server  : localhost      +    'users/requestVerification',
        verifyUsers: prod ? server  : localhost      +    'users/verify',
        updateUsers: prod ? server  : localhost      +    'users/update',
        updateUserInfo: prod ? server  : localhost      +    'users/updateUserInfo',
        updateUserPassword: prod ? server  : localhost      +    'users/updateUserPassword',
        userTransactions: prod ? server  : localhost      +    'users/userTransactions',
        deleteUnverifirdUsers: prod ? server  : localhost      +    'users/verify-delete',

        addPlan: prod ? server  : localhost      +    'admin/add-plan',
        getPlan: prod ? server  : localhost      +    'admin/get-plan',
        registerPlan: prod ? server  : localhost      +    'admin/register-plan',

        addRates: prod ? server  : localhost      +    'admin/add-rate',
        getRates: prod ? server  : localhost      +    'admin/get-rate',
        updateRates: prod ? server  : localhost      +    'admin/update-rate',

        usersDeposit: prod ? server  : localhost      +    'users/deposit',
        usersWidthdrawl: prod ? server  : localhost      +    'users/widthdrawl',
        
        adminDeposits: prod ? server  : localhost      +    'admin/deposits',
        adminWidthdrawl: prod ? server  : localhost      +    'admin/widthdrawls',
        adminAcceptDeposit: prod ? server  : localhost      +    'admin/acceptDeposit',
        adminAcceptWidthdrawl: prod ? server  : localhost      +    'admin/acceptWidthdrawl',
        adminDeleteWidthdrawl: prod ? server  : localhost      +    'admin/delete-Widthdrawl',
        adminDeleteDeposit: prod ? server  : localhost      +    'admin/delete-deposit',
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
        updateInfo:         admin  +   "/update_info",

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
        plans:     masterAdmin     +   "/plans",
    }
}
export default routes
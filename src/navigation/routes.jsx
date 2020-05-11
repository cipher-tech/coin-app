const admin = "admin"
const  routes = {
    public: {
        home: "/",
    },

    admin: {
        index: "/admin",
        dashboard: admin + "/dashboard"
    }
}
export default routes
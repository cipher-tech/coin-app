import routes from "../../navigation/routes";

export default (history) => {
    const user = JSON.parse(localStorage.getItem("userInfo"))

    const logInInfo = {
        isLoggedIn: false,
        user: user.user
    }
    console.log(logInInfo);
    localStorage.userInfo =  JSON.stringify(logInInfo) 
    history.push(routes.public.home)
}
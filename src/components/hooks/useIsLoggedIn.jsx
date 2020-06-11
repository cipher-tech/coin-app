// import {useEffect} from 'react'
import routes from '../../navigation/routes'

export default (history) => {
    // useEffect(() => {
        const loggedIn = JSON.parse(localStorage.getItem("userInfo")).isLoggedIn
        const userinfo = JSON.parse(localStorage.getItem("userInfo")).user
        const auth_token = JSON.parse(localStorage.getItem("userInfo")).user.auth_token
        if(loggedIn && Object.entries(userinfo).length > 0 && auth_token){
            return true
        }
            
        history.push(routes.public.home)
    // }, [history])
}
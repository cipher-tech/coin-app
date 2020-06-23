// import {useEffect} from 'react'
import routes from '../../navigation/routes'

export default async (history) => {
    // useEffect(() => {
        const loggedIn = JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")).isLoggedIn : null
        const userinfo = JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")).user : null
        const auth_token = JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")).user.auth_token : null
        if(loggedIn && Object.entries(userinfo).length > 0 && auth_token){
            return true
        }
            
        history.push(routes.public.home)
        return false
    // }, [history])
}
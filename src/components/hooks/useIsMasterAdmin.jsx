import {useEffect} from 'react'
import routes from '../../navigation/routes'
import { Storage } from '..'

export default (history) => {
    useEffect(() => {
        const loggedIn =  Storage.get("userInfo")?.isLoggedIn
        const userinfo =  Storage.get("userInfo")?.user
        const auth_token =  Storage.get("userInfo")?.user?.auth_token
        const role =  Storage.get("userInfo")?.user?.role
        if(loggedIn && Object.entries(userinfo).length > 0 && auth_token && role === "admin" ){
            return
        }
            
        history.push(routes.public.home)
    }, [history])
}
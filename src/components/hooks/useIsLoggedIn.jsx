// import {useEffect} from 'react'
import routes from '../../navigation/routes'
import { Storage } from '..'

export default async (history) => {
    // useEffect(() => {
        const loggedIn =  Storage.get("userInfo") ?  Storage.get("userInfo").isLoggedIn : null
        const userinfo =  Storage.get("userInfo") ?  Storage.get("userInfo").user : null
        const auth_token =  Storage.get("userInfo") ?  Storage.get("userInfo").user.auth_token : null
        if(loggedIn && Object.entries(userinfo).length > 0 && auth_token){
            return true
        }
            
        history.push(routes.public.home)
        return false
    // }, [history])
}
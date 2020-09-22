import React, { useContext, useEffect, useState } from 'react'
import styled from "styled-components";
import { ContextData } from '../../context/contextData';
import { Modal } from '..';
import Login from '../../pages/auth/login/login';
import SignUp from '../../pages/auth/signup/signup';
import { useHistory } from 'react-router-dom';

const Layout = styled.div`
    display: grid;
    grid-template-rows: repeat(8, max-content);
    grid-template-columns: repeat(10, [col-start] minmax(min-content, 1fr) [col-end]);
    overflow: hidden;
`


const GenLayout = ({ children }) => {
    const history = useHistory()
    const loginSignUpContext = useContext(ContextData)
    const [showAuth,setShowAuth] = useState(loginSignUpContext.auth.showLogin || loginSignUpContext.auth.showSignUp)

    useEffect(() => {
        setShowAuth(loginSignUpContext.auth.showLogin || loginSignUpContext.auth.showSignUp)
    }, [loginSignUpContext])

    return (
        <Layout>
            <Modal isActive={showAuth}>
                {loginSignUpContext.auth.showLogin ? <Login history={history} modal={true} close={ () => loginSignUpContext.auth.toggleLoginSignUp("close")} /> : null}
                {loginSignUpContext.auth.showSignUp ? <SignUp modal={true} close={ () => loginSignUpContext.auth.toggleLoginSignUp("close")}/> : null}
            </Modal>
            {children}
        </Layout>
    )
}

export default GenLayout

// export default Layout
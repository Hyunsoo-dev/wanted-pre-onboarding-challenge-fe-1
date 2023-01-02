import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Signin from './signin.js';
import Signup from './signup.js';
const Auth = () => {
 

    return (
        <>
            <Link to='/auth/signin'>로그인</Link>
            <Link to='/auth/signup'>회원가입</Link>
        </>
    )
}
export default Auth;
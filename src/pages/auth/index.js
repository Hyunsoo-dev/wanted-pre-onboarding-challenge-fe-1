import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Signin from './signin.js';
import Signup from './signup.js';
import LinkComponent from '../../component/LinkComponent.jsx';
import '../../styles/auth/index.css';
const Auth = () => {
    return (
        <div className='auth_container'>
            <LinkComponent path='/auth/signin' linkName='로그인' />
            <LinkComponent path='/auth/signup' linkName='회원가입' />
        </div>
    )
}
export default Auth;
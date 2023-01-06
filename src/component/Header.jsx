import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import '../styles/component/header.css';
import ButtonComponent from "../component/Button";
const Header = ({ signinToggle, setSigninToggle }) => {
    
    const navigate = useNavigate();
    const location = useLocation();
    console.log('location :', location);
    useEffect(() => {
            const signInToken = localStorage.getItem('token');
            console.log('signInToken :', signInToken);
            if (signInToken) {
                navigate('/')
            } 
            if (!signInToken) {
                alert('로그인이 되어 있지 않습니다. 로그인 페이지로 이동합니다.');
                navigate('/auth/signin');
            }
        }, [signinToggle])

    const onClickSignOut = () => {
        alert('로그아웃 되었습니다.');
        setSigninToggle(false);
        localStorage.removeItem("token");
        navigate('/');
    }

    const onClickSignin = () => {
        navigate('/auth/signin');
    }

    const onClickSignup = () => {
        navigate('/auth/signup');
    }

    return (
        <div className='container'>
            <div className='wrapper'>
                <div className='title'>wanted-pre-onboarding-challenge</div>
                <div className='button_box'>{
                    location.pathname === '/auth/signin' 
                        ?
                            <ButtonComponent buttonName={'SIGN UP'} callback={onClickSignup}></ButtonComponent>
                        :
                    signinToggle
                        ? 
                            <ButtonComponent buttonName={'SIGN OUT'} callback={onClickSignOut}></ButtonComponent>
                        : 
                            <ButtonComponent buttonName={'SIGN IN'} callback={onClickSignin}></ButtonComponent>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
const Header = ({ signinToggle, setSigninToggle }) => {
    
    const navigate = useNavigate();
    
    const onClickSignOut = () => {
        setSigninToggle(false);
        localStorage.removeItem("token");
        navigate('/');
    }

    const onClickSignin = () => {
        navigate('/auth/signin');
    }

    return (
        <div>
            <div>Header</div>
            <div>{
                signinToggle
                    ? <button onClick={onClickSignOut}>SIGN OUT</button>
                    : <button onClick={onClickSignin}>SIGN IN</button>
                }
            </div>
        </div>
    )
}

export default Header;

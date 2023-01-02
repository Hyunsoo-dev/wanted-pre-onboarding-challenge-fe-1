import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { signin } from '../../api/auth';
const Signin = ({ setSigninToggle }) => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({ id: '', password: ''});

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
    }, [])

    const onChangeUserInfo = (event) => {
        setUserInfo({
            ...userInfo,
            [event.target.id]: event.target.value
        })
    }
    
    const handleSubmit = async () => {
        console.log('handleSubmit');
        console.log('userInfo :', userInfo);
        let signInResponse = await signin(userInfo);
        console.log('signin response :', signInResponse);
        
        if (signInResponse.status === 400) {
            alert(signInResponse.data.details);
            navigate('/auth/signup');
        } else {
            console.log('로그인 성공');
            setSigninToggle(true);
            localStorage.setItem('token', signInResponse.data.token);
            navigate('/')
        }
    }


    return (
        <div>
            아이디: <input id='id' type='text' onChange={onChangeUserInfo}></input>
            비밀번호: <input id='password' type='password' onChange={onChangeUserInfo}></input>
            <button id='submitButton' onClick={handleSubmit} disabled={userInfo.id === '' && userInfo.password === '' }>제출</button>
        </div>
    )
}
export default Signin;
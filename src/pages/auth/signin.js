import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { signin } from '../../api/auth';
import '../../styles/auth/signin.css';
import TextInputComponent from '../../component/TextInput';
const Signin = ({ setSigninToggle }) => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({ id: '', password: ''});

    useEffect(() => {
        const signInToken = localStorage.getItem('token');
        console.log('signInToken :', signInToken);
        if (signInToken) {
            navigate('/')
        } 
    }, [])
    

    const onChangeUserInfo = (event) => {
        console.log(event.target);
        console.log(event.target.value);
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        })
    }
    
    const handleSubmit = async () => {
        let signInResponse = await signin(userInfo);
        console.log('signin response :', signInResponse);
        
        if (signInResponse.status === 400) {
            alert(signInResponse.data.details);
            if (signInResponse.data.details === '이메일 형식에 맞게 입력해주세요') {
                return;
            } else {
                navigate('/auth/signup');
            }
            
        } else {
            console.log('로그인 성공');
            setSigninToggle(true);
            localStorage.setItem('token', signInResponse.data.token);
            navigate('/')
        }
    }


    return (
        <div className='signin_container'>
            <div className='signin_wrapper'>
                <TextInputComponent name='id' type='text' callback={onChangeUserInfo} placeholder='Email' />
                <TextInputComponent name='password' type='password' callback={onChangeUserInfo} placeholder='Password' />
                <button id='submitButton' onClick={handleSubmit} disabled={userInfo.id === '' && userInfo.password === '' }>제출</button>
            </div>
        </div>
    )
}
export default Signin;
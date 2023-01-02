import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../api/auth';
const Signup = () => {

    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const navigate = useNavigate();
    const [userInputValue, setUserInputValue] = useState({ email: '', password: '' });
    const onChangeUserInput = (event) => {
        setUserInputValue({
            ...userInputValue, 
            [event.target.id]: event.target.value
        })
    }

    const handleSubmit = async () => {
        console.log('userInputValue :', userInputValue);
        if (userInputValue.email.match(regExp) === null) {
            alert('이메일 형식이 올바르지 않습니다.');
            return;
        } 

        if (userInputValue.password.length < 7) {
            alert('비밀번호는 8자 이상 입력해주세요');
            return;
        }
        const signupResponse = await signup(userInputValue);
        console.log('signupResponse :', signupResponse);

        switch (signupResponse.status) {
            case 200:
                console.log(signupResponse.data.message);
                navigate('/auth/signin');
                break;
            case 409: 
                console.log(signupResponse.data.message);
                break;
            case 400: 
                console.log(signupResponse.data.message);
                break;
            default: 
                break;
        }
    }

    return (
        <div>
            <div>회원가입</div>
            이메일: <input type='email' id='email' onChange={onChangeUserInput}></input>
            비밀번호: <input type='password' id='password' onChange={onChangeUserInput}></input>
            <button id='submitButton' onClick={handleSubmit} disabled={userInputValue.email === '' && userInputValue.password === '' }>제출</button>
        </div>
    )
}
export default Signup;
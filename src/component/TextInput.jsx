import '../styles/component/textInput.css';
const TextInputComponent = ({ type, name, callback, placeholder }) => {
    return <input id='textInputComponent' type={type} name={name} onChange={callback} placeholder={placeholder} /> 
}
export default TextInputComponent;
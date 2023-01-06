const ButtonComponent = ({ buttonName, callback }) => {
    
    return (
        <button onClick={callback}>{buttonName}</button>
    )
}

export default ButtonComponent;
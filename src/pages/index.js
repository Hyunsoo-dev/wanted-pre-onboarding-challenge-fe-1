import { Link } from 'react-router-dom';

const Pages = () => {
    
    return (
        <div>
            
            <Link to='auth'>Auth</Link>
            <Link to='todo'>Todo</Link>
        </div>
    )
}

export default Pages;
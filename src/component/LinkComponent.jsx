import '../styles/component/linkComponent.css'
import { Link } from 'react-router-dom';
const LinkComponent = ({ path, linkName }) => {
    return (
        <button id='link_component_wrapper'>
            <Link id='link_component' to={path}>{linkName}</Link>
        </button>
    );
}

export default LinkComponent;
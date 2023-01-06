import LinkComponent from '../component/LinkComponent';
import '../styles/pages/index.css';
const Pages = () => {   
    return (
        <div className='pages_container'>
            <LinkComponent path='auth' linkName='Auth' />
            <LinkComponent path='todo' linkName='Todo' />
        </div>
    )
}

export default Pages;
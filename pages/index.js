import Link from 'next/link';
import Nav from '../components/nav';

const index = () => {
    return (
        <div className="page-container">
            <Nav/>
            <div className="page-main-content">
                <p>This is the home page.</p>
            </div>
            
        </div>
    );
}

export default index;
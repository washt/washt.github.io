import Link from 'next/link';
import Nav from '../components/nav';

const blog = () => {
    return (
        <div className="page-container">
            <Nav />
            <div className="page-main-content">
                <p>This is the Blog page.</p>
            </div>
        </div>
    );
}

export default blog;
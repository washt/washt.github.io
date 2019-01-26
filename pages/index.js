import Link from 'next/link';

const index = () => {
    return (
        <div className="page-container">
            <div className="page-sidebar-wrapper">
                <ul>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/blog"><a>Blog</a></Link></li>
                    <li><Link href="/store"><a>Store</a></Link></li>
                    <li><Link href="/bucket"><a>Bucket</a></Link></li>
                </ul>
            </div>
            <div className="page-main-content">
                <p>This is the home page.</p>
            </div>
            
        </div>
    );
}

export default index;
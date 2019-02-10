import Link from 'next/link';

const Nav = () => {
    return (
        <div className="page-sidebar-wrapper">
            <ul>
                <li><Link href="/blog"><a>Log</a></Link></li>
                <li><Link href="/blog"><a>Github</a></Link></li>
                <li><Link href="/blog"><a>Twitter</a></Link></li>
                <li><Link href="/blog"><a>Keybase</a></Link></li>
                <li><Link href="/blog"><a>CV</a></Link></li>
            </ul>
        </div>
    );
}

export default Nav;
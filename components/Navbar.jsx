import Link from 'next/link'
const Navbar = () => {
    return (
        <nav>
            <ul>
                <div className='logo'>
                    <h1>Logo</h1>
                </div>

                <div className="link-container">

                    <Link className="link" href="/">Home</Link>


                    <Link className="link" href="/users">Users</Link>


                    <Link className="link" href="/users/about">About</Link>

                </div>
            </ul>
        </nav>
    )
}

export default Navbar
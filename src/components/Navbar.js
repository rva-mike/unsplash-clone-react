
const Navbar = () => {
    return (
        <>




            <nav
                className="navbar flex drop-shadow-lg bg-base-100 fixed">
                <div className="flex-1">
                    <a href='/' className="text-white btn btn-ghost normal-case text-2xl">nusplash<img src={require('../images/nuLogo.png')} class="h-9" alt="" /></a>
                </div>
                <div className="flex-none text-white">
                    <ul className="menu menu-horizontal px-1 invisible">
                        <li><a href='/'>Search</a></li>
                        <li><a href='#recommended'>Recommended</a></li>
                        <li><a>Explore</a></li>
                    </ul>
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="xs-visible menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar


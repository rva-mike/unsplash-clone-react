
const Navbar = () => {
    return (
        <>


            <nav
                className="navbar w-100 h-1 drop-shadow-lg bg-base-100 fixed text-white">
                <div className="flex-1">
                    <a href='https://rva-mike.github.io/unsplash-clone-react/' className="text-white btn btn-ghost normal-case text-2xl font-bold">nusplash<img src={require('../images/nuLogo.png')} class="h-9" alt="" /></a>
                </div>
                    <ul className="menu menu-horizontal px-1 invisible md:visible ">
                        <li><a href='#search'>Search</a></li>
                        <li><a href='#recommended'>Recommended</a></li>
                        <li><a href='#explore'>Explore</a></li>
                    </ul>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle visible md:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2  shadow bg-slate-500 rounded-box w-30 ">
                            <li><a href='#search'>Search</a></li>
                            <li><a href='#recommended'>Recommended</a></li>
                            <li><a href='#explore'>Explore</a></li>
                        </ul>
                    </div>
            </nav>

        </>
    )
}

export default Navbar


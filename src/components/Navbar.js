
const Navbar = () => {
    return (
        <>




            <div
                className="navbar drop-shadow-lg bg-base-100 fixed">
                <div className="flex-1">
                    <a href='/' className="text-white btn btn-ghost normal-case text-2xl">nusplash<img src={require('../images/nuLogo.png')} class="h-9" alt="" /></a>
                </div>
                <div className="flex-none text-white">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='/'>Search</a></li>
                        <li><a href='#recommended'>Recommended</a></li>
                        <li><a>Explore</a></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar


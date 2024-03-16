// import React from 'react';


const Header = () => {
    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-3">
            {/* Logo */}
            <div className="flex justify-start">
                <h1 className="text-6xl font-semibold">Sports</h1>
            </div>

            {/* Menu */}
            <div className="">
                <nav className="flex flex-row list-none gap-6 text-xl mt-5">
                    <li className="hover:text-orange-500">Home</li>
                    <li className="hover:text-orange-500">About</li>
                    <li className="hover:text-orange-500">Pages</li>
                    <li className="hover:text-orange-500">Blog</li>
                    <li className="hover:text-orange-500">Contact</li>
                </nav>
            </div>

            {/* search */}
            <div className="flex flex-row justify-end gap-2 text-xl ">
                <p className="mt-5"><i className="fa-solid fa-magnifying-glass"></i></p>
                <button className="py-1 px-4 rounded-lg bg-orange-500 text-white">Get Ticket</button>
            </div>

        </div>
    );
};

export default Header;
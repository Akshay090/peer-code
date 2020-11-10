import React from 'react';
import HeaderLogo from '../assets/svg/HeaderLogo';
import HeaderText from '../assets/svg/HeaderText';

const Header = (): JSX.Element => {
    return (
        <header className="w-full mt-5 text-gray-700 bg-white shadow-sm">
            <div className="container flex items-center justify-between p-6 mx-auto">
                <a className="md:mb-0 flex items-center font-medium text-gray-900">
                    <HeaderLogo />
                    <HeaderText />
                </a>
                <div className="items-center h-full border-l border-gray-200">
                    {/* <a href="#_" className="hover:text-gray-900 mr-5 font-medium">
                        Logout
                    </a> */}
                    <a
                        href="#_"
                        className="hover:shadow-md focus:outline-none ease px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-blue-700 rounded shadow outline-none"
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </header>
    );
};
export default Header;

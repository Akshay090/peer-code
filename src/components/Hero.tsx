import React from 'react';
import HeroImage from '../assets/svg/HeroImage';

const Hero = (): JSX.Element => {
    return (
        <div className="lg:flex-row lg:max-w-6xl lg:p-0 flex flex-col items-center justify-center flex-1 p-5 mx-auto">
            <div className="md:w-2/3 lg:w-1/2 group relative w-full pr-10 rounded-lg">
                <div className="relative rounded-md">
                    <HeroImage className="z-10 object-cover w-full h-full" />
                </div>
            </div>
            <div className="lg:w-1/2 sm:px-0 md:px-10 sm:items-center lg:items-start lg:mb-0 container relative z-20 flex flex-col w-full px-5 pr-12 mb-16 text-2xl text-gray-700">
                <h1 className="sm:text-5xl xl:text-6xl sm:text-center lg:text-left relative z-20 font-sans text-4xl font-extrabold leading-none text-black">
                    <span className="relative">
                        <span className="absolute bottom-0 left-0 inline-block w-full h-4 mb-1 -ml-1 transform -skew-x-3 bg-yellow-200"></span>
                        <span className="relative">Learn Together,</span>
                    </span>
                    <span className="relative block text-yellow-400">Grow Together.</span>
                </h1>
                <p className="xl:text-lg sm:text-center lg:text-left relative z-20 block mt-6 text-base text-gray-500">
                    Join our community and thrive with us! We can all help each other, learn together, and grow
                    together.
                </p>
                <div className="relative flex items-center mt-10">
                    <a
                        href="#_"
                        className="hover:bg-yellow-600 focus:outline-none focus:border-yellow-600 focus:shadow-outline-yellow md:py-4 md:text-lg xl:text-xl md:px-10 flex items-center self-start justify-center px-5 py-3 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-yellow-500 border border-transparent rounded-lg shadow"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Hero;

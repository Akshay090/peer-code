import React from 'react';

const StatCard = (): JSX.Element => {
    return (
        <section className=" w-full mt-5 text-gray-700 bg-white">
            <div className="md:flex-row container flex flex-col mx-auto border border-blue-900 border-dotted">
                <div className="md:mt-0 flex items-center justify-center mt-4">
                    <img src="https://via.placeholder.com/200" width="200px" alt="profile-img" className="" />
                </div>
                <div className=" flex flex-col p-4">
                    <span className="text-2xl font-semibold">John Doe</span>
                    <p className="flex items-center mt-4">
                        <span className="text-lg font-semibold">Total Solved : </span>
                        <span className="ml-2 text-xl font-semibold border-b-2 border-yellow-500">39</span>
                        <div className="flex items-center">
                            <span className="flex items-center mx-2 text-green-500">
                                <svg
                                    className="mr-1"
                                    fill="#48bb78"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                </svg>{' '}
                                4
                            </span>
                            <span className="text-sm text-gray-500 whitespace-no-wrap">Since last week</span>
                        </div>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default StatCard;

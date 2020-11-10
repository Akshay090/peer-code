import React from 'react';

const AddToTrack = (): JSX.Element => {
    return (
        <section className=" w-full mt-5 text-gray-700 bg-white">
            <div className="container flex flex-col p-6 mx-auto">
                <div className="max-w-lg">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="focus:outline-none focus:shadow-outline w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none"
                        id="username"
                        type="text"
                        placeholder="Username"
                    />
                </div>
                <div className="flex items-center justify-between mt-2">
                    <button
                        className="hover:bg-blue-700 focus:outline-none focus:shadow-outline px-4 py-2 font-bold text-white bg-blue-500 rounded"
                        type="button"
                    >
                        Track 🕵
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AddToTrack;

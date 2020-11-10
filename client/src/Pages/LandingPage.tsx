import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';

const LandingPage = (): JSX.Element => {
    return (
        <div className="min-w-screen relative flex flex-col items-center min-h-screen bg-white bg-cover">
            <Header />
            <Hero />
            <Footer />
        </div>
    );
};

export default LandingPage;

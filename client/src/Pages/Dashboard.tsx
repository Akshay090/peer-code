import React from 'react';
import AddToTrack from '../components/AddToTrack';
import Header from '../components/Header';
import StatCard from '../components/StatCard';

const Dashboard = (): JSX.Element => {
    return (
        <div className="min-w-screen relative flex flex-col items-center min-h-screen bg-white bg-cover">
            <Header />
            <AddToTrack />
            <StatCard />
        </div>
    );
};

export default Dashboard;

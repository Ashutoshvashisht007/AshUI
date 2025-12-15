import { useState } from 'react';
import Header from './header/Header';
import DashboardStats from './stats/DashboardStats';
import DealPipeline from './deals/DealPipeline';
import Sidebar from './sidebar/Sidebar';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="flex-1 flex flex-col overflow-auto">
                <div className="bg-gray-100 px-6 py-4">
                    <Header />
                    <div className="mt-5">
                        <DashboardStats />
                    </div>
                </div>
                <div className="px-6 py-6">
                    <DealPipeline />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
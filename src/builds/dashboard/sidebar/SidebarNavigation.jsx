import { Home, CheckSquare, Activity, Users, Settings} from 'lucide-react';

const SidebarNavigation = ({ activeTab, setActiveTab }) => {
    const sidebarItems = [
        { name: 'Dashboard', icon: Home, count: null },
        { name: 'Tasks', icon: CheckSquare, count: 2 },
        { name: 'Activity', icon: Activity, count: null },
        { name: 'Customers', icon: Users, count: null },
        { name: 'Settings', icon: Settings, count: null },
    ];
    return (
        <nav className="flex-1 px-4 space-y-1">
            {sidebarItems.map((item) => (
                <a
                    key={item.name}
                    href="#"
                    className={`flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg ${activeTab === item.name
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50'
                        }`}
                    onClick={() => setActiveTab(item.name)}
                >
                    <div className="flex items-center">
                        <item.icon className="mr-3 h-4 w-4" />
                        {item.name}
                    </div>
                    {item.count && (
                        <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-0.5">
                            {item.count}
                        </span>
                    )}
                </a>
            ))}
        </nav>
    );
};

export default SidebarNavigation;
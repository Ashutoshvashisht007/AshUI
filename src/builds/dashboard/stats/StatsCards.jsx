
import { ExternalLink } from 'lucide-react';

const StatsCards = () => {
  const stats = [
    { value: '53', label: 'Tasks', subtitle: 'In progress' },
    { value: '$ 15.890', label: 'Prepayments', subtitle: 'from customers' },
  ];

  return (
    <div className="flex items-center justify-center rounded-lg shadow-sm w-full max-w-sm ">
      {stats.map((stat, index) => (
        <div key={index} className="p-4 ">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-sm text-gray-500">{stat.subtitle}</p>
            </div>
            <div className="text-gray-400">
              <ExternalLink className="h-4 w-4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
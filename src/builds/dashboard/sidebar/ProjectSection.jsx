import { TrendingUp, GitBranch, Target, BarChart3 } from 'lucide-react';

const ProjectsSection = () => {
  const projectItems = [
    { name: 'BizConnect', icon: GitBranch, count: 7 },
    { name: 'Growth Hub', icon: TrendingUp, count: null },
    { name: 'Conversion Path', icon: Target, count: null },
    { name: 'Marketing', icon: BarChart3, count: null },
  ];

  return (
    <div className="px-4 py-4">
      <h3 className="text-xs font-medium text-gray-500 uppercase mb-3">Projects</h3>
      <div className="space-y-1">
        {projectItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50"
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
      </div>
    </div>
  );
};

export default ProjectsSection;
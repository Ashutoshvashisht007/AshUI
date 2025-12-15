import { Plus } from 'lucide-react';

const TeamMembers = () => {
  const members = [
    { name: 'Sandra Perry', role: 'Project Manager', avatar: '👩‍💼' },
    { name: 'Antony Gardenas', role: 'Sales Manager', avatar: '👨‍💼' },
    { name: 'Jamal Connolly', role: 'Growth Marketer', avatar: '👨‍💻' },
    { name: 'Cara Carr', role: 'SEO Specialist', avatar: '👩‍💻' },
  ];

  return (
    <div className="px-4 py-4 border-t border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-medium text-gray-500 uppercase">Members</h3>
        <Plus className="h-4 w-4 text-gray-400 cursor-pointer" />
      </div>
      <div className="space-y-2">
        {members.map((member, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="text-lg">{member.avatar}</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{member.name}</p>
              <p className="text-xs text-gray-500 truncate">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
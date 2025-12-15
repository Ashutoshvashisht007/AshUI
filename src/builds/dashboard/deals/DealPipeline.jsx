import DealCard from './DealCard';

const DealPipeline = () => {
  const deals = [
    {
      category: 'Contacted',
      count: 12,
      deals: [
        {
          name: 'ByteBridge',
          description: 'Corporate and personal data protection on a turnkey basis',
          date: '18 Apr',
          messages: 2,
          views: 1
        },
        {
          name: 'AI Synergy',
          description: 'Innovative solutions based on artificial intelligence',
          date: '21 Mar',
          messages: 1,
          views: 3
        },
        {
          name: 'LeadBoost Agency',
          description: 'Lead attraction and automation for small business...',
          date: 'No due date',
          messages: 4,
          views: 7
        }
      ]
    },
    {
      category: 'Negotiation',
      count: 17,
      deals: [
        {
          name: 'SkillUp Hub',
          description: 'Platform for professional development of specialists',
          date: '09 Mar',
          messages: 4,
          views: 1
        },
        {
          name: 'Thera Well',
          description: 'Platform for psychological support and consultations',
          date: 'No due date',
          messages: 7,
          views: 2
        },
        {
          name: 'SwiftCargo',
          description: 'International transportation of chemical goods',
          date: '23 Apr',
          messages: 2,
          views: 5
        }
      ]
    },
    {
      category: 'Offer Sent',
      count: 13,
      deals: [
        {
          name: 'FitLife Nutrition',
          description: 'Nutritious food and nutraceuticals for individuals',
          date: '10 Mar',
          messages: 1,
          views: 3
        },
        {
          name: 'Prime Estate',
          description: 'Agency/developer of low-rise elite and commercial real estate',
          date: '16 Apr',
          messages: 1,
          views: 1,
          highlighted: true,
          contact: 'contact@primeestate.com',
          location: '540 Realty Blvd, Miami FL 33132',
          assignee: 'Antony Gardenas'
        },
        {
          name: 'NextGen University',
          description: '',
          date: '',
          messages: 0,
          views: 0
        }
      ]
    },
    {
      category: 'Deal Closed',
      count: 12,
      deals: [
        {
          name: 'CloudSphere',
          description: 'Cloud services for data storage and processing for le...',
          date: '24 Mar',
          messages: 2,
          views: 1
        },
        {
          name: 'Advantage Medi',
          description: 'Full cycle of digital advertising and social media promotion',
          date: '05 Apr',
          messages: 1,
          views: 3
        },
        {
          name: 'Safebank Solutions',
          description: 'Innovative financial technologies and digital pay...',
          date: '30 Mar',
          messages: 4,
          views: 7
        }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {deals.map((category, categoryIndex) => (
        <div key={categoryIndex} className="bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">{category.category}</h3>
              <span className="bg-gray-100 text-gray-700 text-xs rounded-full px-2 py-1">
                {category.count}
              </span>
            </div>
          </div>
          <div className="p-4 space-y-4">
            {category.deals.map((deal, dealIndex) => (
              <DealCard key={dealIndex} deal={deal} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DealPipeline;
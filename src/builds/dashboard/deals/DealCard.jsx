import { MoreHorizontal, Calendar, MessageSquare, Eye, Mail, MapPin } from 'lucide-react';

const DealCard = ({ deal }) => (
  <div
    className="
      p-4 rounded-lg border transition-colors duration-200
      bg-white text-gray-900
      hover:bg-[var(--color-gray-800)] hover:text-white
      cursor-pointer
    "
  >
    <div className="flex items-start justify-between mb-2">
      <h4 className="font-medium">{deal.name}</h4>
      <MoreHorizontal className="h-4 w-4" />
    </div>
    <p className="text-sm mb-3">{deal.description}</p>

    {deal.location && (
      <div className="flex items-center space-x-2 mb-1">
        <MapPin className="h-3 w-3 text-gray-400" />
        <span className="text-xs">{deal.location}</span>
      </div>
    )}
    {deal.contact && (
      <div className="flex items-center space-x-2 mb-1">
        <Mail className="h-3 w-3 text-gray-400" />
        <span className="text-xs">{deal.contact}</span>
      </div>
    )}
    {deal.assignee && (
      <div className="flex items-center space-x-2 mb-3">
        <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
          <span className="text-xs">A</span>
        </div>
        <span className="text-xs">{deal.assignee}</span>
      </div>
    )}

    <div className="flex items-center justify-between">
      {deal.date && (
        <div className="flex items-center space-x-1">
          <Calendar className="h-3 w-3" />
          <span className="text-xs">{deal.date}</span>
        </div>
      )}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-1">
          <MessageSquare className="h-3 w-3" />
          <span className="text-xs">{deal.messages}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Eye className="h-3 w-3" />
          <span className="text-xs">{deal.views}</span>
        </div>
      </div>
    </div>
  </div>
);

export default DealCard;

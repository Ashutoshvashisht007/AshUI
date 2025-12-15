import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import SidebarNavigation from "./SidebarNavigation.jsx"
import ProjectsSection from "./ProjectSection.jsx"
import TeamMembers from "./TeamMembers.jsx"
import { LogOut } from "lucide-react"

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]


const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col overflow-auto scrollbar-hide">
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-900">BizLink</h1>
      </div>
      <SidebarNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProjectsSection />
      <TeamMembers />
      <div className="flex items-center justify-between px-4 py-3 mt-auto border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="text-lg">👩‍🦰</div>
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-900">Iona Rollins</p>
          </div>
        </div>
        <button className="p-1 rounded hover:bg-gray-100 cursor-pointer">
          <LogOut className="h-4 w-4 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
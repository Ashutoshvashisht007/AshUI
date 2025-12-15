import NewCustomersChart from "./NewCustomersChart";
import StatsCards from "./StatsCards";
import SuccessRate from "./SuccessRate";

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-stretch">
      <NewCustomersChart />
      <SuccessRate />
      <StatsCards />
    </div>
  );
};

export default DashboardStats;
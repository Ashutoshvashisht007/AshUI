
const SuccessRate = () => {
  return (
    <div className=" p-6 flex flex-col justify-center rounded-lg shadow-sm w-full max-w-sm h-full">
      <div className="flex items-center justify-center">
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 transform -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="#e5e7eb"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="#111827"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${68 * 2.51} ${100 * 2.51}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-900">68%</span>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 mt-2">Successful deals</p>
    </div>
  );
};

export default SuccessRate;
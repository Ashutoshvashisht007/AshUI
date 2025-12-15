
const data = [
  { label: 'Mon', value: 7 },
  { label: 'Tue', value: 10 },
  { label: 'Wed', value: 7 },
  { label: 'Thu', value: 2 },
  { label: 'Fri', value: 10 }
];

const NewCustomersChart = () => (
  <div className="p-4 rounded-lg shadow-sm w-full max-w-sm flex items-center flex-col gap-2 py-6">
    <h2 className="text-sm font-medium text-gray-800 mb-2">New customers</h2>
    <div className="flex items-end space-x-4 h-32">
      {data.map((day) => (
        <div key={day.label} className="flex flex-col items-center">
          <div
            style={{ height: `${day.value * 10}px` }}
            className="w-6 bg-gray-900 rounded-t"
          />
          <span className="mt-2 text-xs text-gray-500">{day.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default NewCustomersChart;

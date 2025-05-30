
import { Pie, PieChart, Cell, ResponsiveContainer, Legend } from 'recharts';

interface StatsProps {
  type: 'mechanical' | 'brain';
}

const Stats = ({ type }: StatsProps) => {
  const mechanicalData = [
    { name: 'Visualization', value: 45 },
    { name: 'Interaction', value: 30 },
    { name: 'Traditional', value: 25 },
  ];
  
  const brainData = [
    { name: 'Visualization', value: 50 },
    { name: 'Interaction', value: 35 },
    { name: 'Traditional', value: 15 },
  ];

  const data = type === 'mechanical' ? mechanicalData : brainData;
  const colors = ['#FF4C98', '#56E8F6', '#B794F4'];

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-lg font-medium text-ar-blue mb-3">Learning Method Effectiveness</h3>
      <div className="flex-1 w-full h-64"> {/* Limit chart height to avoid overflow */}
  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={70} // reduced from 80 to 70 for better fit
        dataKey="value"
        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Legend verticalAlign="bottom" height={36} />
    </PieChart>
  </ResponsiveContainer>
</div>
      <div className="mt-2 text-center text-sm text-gray-400">
        Based on student performance data
      </div>
    </div>
  );
};

export default Stats;

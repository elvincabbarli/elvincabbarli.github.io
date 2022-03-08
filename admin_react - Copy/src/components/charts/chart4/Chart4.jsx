import "../chart1/chart1.css";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

export default function Chart() {
  const data = [
    { name: "Group A", value: 530 },
    { name: "Group B", value: 80 },
  ];

  const COLORS = ["#00b4d8", "#edafb8"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
      <div className="chart1">
        <h3 className="chartTitle">Universitet Dərəcəsi</h3>
        <div className="gender">
            <p>Bakalavr: 53</p>
            <p>Magistr: 8</p>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="40%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
                
              ))}
            </Pie>
            
          </PieChart>
        </ResponsiveContainer>
        
      </div>
  );
}

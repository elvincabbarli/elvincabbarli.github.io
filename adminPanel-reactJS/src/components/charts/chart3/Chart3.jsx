import "../chart1/chart1.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart2() {
  const data = [
    {
      name: "UNEC",
      İştirakçı: 25,
    },
    {
      name: "ADA",
      İştirakçı: 3,
    },
    {
      name: "ADNSU",
      İştirakçı: 9,
    },
    {
      name: "ADU",
      İştirakçı: 2,
    },
    {
      name: "BANM",
      İştirakçı: 2,
    },
    {
      name: "DIA",
      İştirakçı: 2,
    },
    {
      name: "YTU",
      İştirakçı: 1,
    },
    {
      name: "BMU",
      İştirakçı: 3,
    },
    {
      name: "Xəzər",
      İştirakçı: 1,
    },
    {
      name: "Fırat",
      İştirakçı: 1,
    },
  ];

  return (
    <div className="chart3">
      <h2 className="chartTitle">İştirakçı Sayı / Universitetlər</h2>
      <ResponsiveContainer
        className="chartcontainer"
        width="90%"
        aspect={6 / 2}
      >
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#0083ff" />
          <YAxis dataKey="İştirakçı" stroke="#0083ff" />
          <Line type="monotone" dataKey="İştirakçı" stroke="#0083ff" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

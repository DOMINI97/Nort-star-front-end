// import "./chart.scss";
import {
  ComposedChart,
  Area,
  YAxis,
  XAxis,
  Line,
  CartesianGrid,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Total: 1100 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 820 },
  { name: "April", Total: 1620 },
  { name: "May", Total: 820 },
  { name: "June", Total: 1720 },
  { name: "July", Total: 720 },
  { name: "Augst", Total: 920 },
  { name: "Sept", Total: 1220 },
  { name: "Oct", Total: 720 },
  { name: "Nov", Total: 1620 },
  { name: "Dec", Total: 1620 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart container">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <ComposedChart width={730} height={250} data={data}>
          <XAxis dataKey="name" />
          <YAxis dataKey="Total" />
          <Tooltip />

          <CartesianGrid stroke="#f5f5f5" />
          <Area type="monotone" dataKey="amt" fill="#7b7d7d" stroke="#8884d8" />
          <Bar dataKey="Total" barSize={20} fill="#7b7d7d" />
          <Line type="monotone" dataKey="name" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

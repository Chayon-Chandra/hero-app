import { use } from "react";
import Container from "../Container/Container";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Rechart = ({ ratingPromiss }) => {
  const ratingDataRes = use(ratingPromiss);
  const ratingData = ratingDataRes.data;
  const lastRating = ratingData[ratingData.length - 1];

  const ratingChartData = lastRating.ratings
    .map((item) => ({
      name: item.name,
      count: Number(item.count),
    }))
    .reverse();

  return (
    <Container>
      <h3 className="text-lg font-semibold mb-3">Ratings</h3>

      <div className="w-full h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={ratingChartData}
            layout="vertical"
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" />
            <YAxis
              type="category"
              dataKey="name"
              width={70}
            />
            <Tooltip />
            <Bar
              dataKey="count"
              barSize={18}
              fill="#ff8c1a"
              radius={[0, 6, 6, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Container>
  );
};

export default Rechart;

import React, { useMemo } from "react";
import { Chart } from "react-google-charts";

function MyBarChart({ bookings = [] }) {
  const chartData = useMemo(() => {
    const yearMap = {};

    bookings.forEach((booking) => {
      const date = new Date(booking.createdAt).toISOString().split("T")[0];

      if (!yearMap[date]) {
        yearMap[date] = 0;
      }

      yearMap[date] += 1;
    });

    const rows = Object.entries(yearMap).map(([date, count]) => [date, count]);

    return [["Year", "Total Bookings"], ...rows];
  }, [bookings]);

  const options = {
    chart: {
      title: "Bookings Overview",
      subtitle: "Total bookings per year",
    },
    colors: ["#5BBE60"],
  };

  return (
    <Chart
      chartType="Bar"
      width="80%"
      height="350px"
      data={chartData}
      options={options}
    />
  );
}

export default MyBarChart;

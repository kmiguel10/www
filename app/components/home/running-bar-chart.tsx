"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip as RechartTooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

export default function RunningBarChart({
  runMonthData,
}: {
  runMonthData: runMonth[];
}) {
  return (
    <ResponsiveContainer className="mt-2" width="100%" height={350}>
      <BarChart data={runMonthData}>
        <CartesianGrid />
        <XAxis
          dataKey="month"
          axisLine={false}
          padding={{ left: 0, right: 0 }}
          tick={{ fontSize: 12, strokeWidth: 0 }}
          tickLine={false}
          tickSize={4}
        />
        <YAxis
          orientation="right"
          axisLine={false}
          padding={{ top: 0, bottom: 0 }}
          tick={{ fontSize: 12, strokeWidth: 0 }}
          tickCount={3}
          tickLine={false}
          tickSize={4}
        />
        <RechartTooltip />
        <Bar
          dataKey="distance"
          shape={({ x, y, width, height }) => (
            <path
              className="fill-blue-9"
              d={`M${x} ${y + height}V${2 + y}q0-2 2-2h${width - 4}q2 0 2 2v${
                height - 2
              }z`}
            />
          )}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

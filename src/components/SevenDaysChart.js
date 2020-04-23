import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { PRIMARY_COLOR } from "../constants/colors";
import styled from "styled-components";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const ContentWrapper = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function SevenDaysChart({ data }) {
  return (
    <Card variant="outlined" style={{ borderColor: PRIMARY_COLOR }}>
      <ContentWrapper>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" />
            <Tooltip formatter={(value, name) => [`${value}°C`, name]} />
            <Legend verticalAlign="top" height={36} />
            <XAxis dataKey="day" />
            <YAxis tickFormatter={(tick) => `${tick}°C`} />
            <Line
              type="monotone"
              dataKey="Night temperature"
              stroke="#333333"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="Day temperature"
              stroke="#7aa200"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="Day temperature sensed"
              stroke="#fb8f62"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="Night temperature sensed"
              stroke="#40bfed"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </ContentWrapper>
    </Card>
  );
}

export default SevenDaysChart;

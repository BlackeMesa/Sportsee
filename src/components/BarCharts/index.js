import React, { useState, useEffect } from "react";
import { getUserActivity } from "../../service/apiService.js";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./styles.scss";

function Index({ userId }) {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserActivity(userId);
     
      if (data && data.sessions) {
        const transformedData = data.sessions.map((session) => {
          const day = new Date(session.day).getDate();

          return {
            day,
            "Poids (kg)": session.kilogram,
            "Calories brûlées (kCal)": session.calories,
          };
        });
        setActivityData(transformedData);
      }
    };

    fetchData();
  }, [userId]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ backgroundColor: "#E60000", padding: "10px", color: "white" }}>
          <p>{payload[0].value}kg</p>
          <p>{payload[1].value}Kcal</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="barChart">
      <h3>Activité quotidienne</h3>
      <BarChart width={1000} height={300} data={activityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} barGap={10}>
        <CartesianGrid strokeDasharray="3 3" horizontalPoints={[50, 150]} vertical={false} />
        <XAxis dataKey="day" />
        <Tooltip content={<CustomTooltip />} />

        <YAxis yAxisId="Poids (kg)" orientation="right" stroke="#282D30" />
        <YAxis yAxisId="Calories brûlées (kCal)" orientation="left" hide={true} />

        <Legend align="right" verticalAlign="top" layout="horizontal" wrapperStyle={{ top: 0, right: 0 }} iconType="circle" />
        <Bar yAxisId="Poids (kg)" dataKey="Poids (kg)" fill="#282D30" radius={[10, 10, 0, 0]} barSize={15} />
        <Bar yAxisId="Calories brûlées (kCal)" dataKey="Calories brûlées (kCal)" fill="#E60000" radius={[10, 10, 0, 0]} barSize={15} />
      </BarChart>
    </div>
  );
}

export default Index;

import React, { useState, useEffect } from "react";
import { getUserAverageSessions } from "../../service/apiService.js";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./styles.scss";

function Index({ userId }) {
  const [sessionData, setSessionData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [dayData, setDayData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserAverageSessions(userId);
      setDayData(data);
      if (data && data.sessions) {
        const transformedData = data.sessions.map((session) => ({
          ...session,
          dayLabel: data.dayOfWeek[session.day - 1],
        }));

        setSessionData(transformedData);
      }
    };

    fetchData();
  }, [userId]);


  const handleMouseOver = (data, index) => {
    setActiveIndex(dayData.dayOfWeek.indexOf(data.dayLabel));
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "white",
            padding: "10px",
            border: "1px solid #ccc",
            textAlign: "center",
          }}
        >
          {payload[0].value} minutes
        </div>
      );
    }
    return null;
  };

  const overlayStart = activeIndex !== null ? (activeIndex / dayData.dayOfWeek.length) * 100 + 6 : 0;
  const overlayEnd = 100;
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: `${overlayStart}%`,
    right: `${100 - overlayEnd}%`,
    height: "100%",
    backgroundColor: "black",
    opacity: 0.2,
  };

  return (
    <div className="LineChart">
      {activeIndex !== null && <div className="overlay" style={overlayStyle}></div>}
      <h3>Durée moyenne des sessions</h3>
      <ResponsiveContainer>
        <LineChart
          data={sessionData}
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          onMouseMove={(e) => {
            if (e.activePayload && e.activePayload.length) {
              handleMouseOver(e.activePayload[0].payload, e.activeTooltipIndex);
            }
          }}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <XAxis dataKey="dayLabel" />
          <YAxis hide={true} />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Line type="monotone" dataKey="sessionLength" stroke="#fff" opacity="0.7" dot={false} strokeWidth={4} activeDot={{ r: 6, fill: "white" }} margin={{ top: 100, right: 10, left: 10, bottom: 10 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Index;

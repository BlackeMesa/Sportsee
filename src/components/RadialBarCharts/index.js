import React, { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";
import { getUserInfo } from "../../service/apiService.js";
import "./styles.scss";

const Index = ({ userId }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserInfo(userId);
        const userScore = result.todayScore;
        setScore(userScore); 
      } catch (error) {
        console.error("There was an error fetching the user info:", error);
      }
    };
    fetchData();
  }, [userId]);

  const chartData = [
    { score: 100, fill: "rgb(136, 132, 216, 0)" },
    { name: "Score", score: score * 100, fill: "rgba(255, 0, 0, 1)" },
  ]; 

  return (
    <div className="radialBarChart">
      <h3>Score</h3>
      <div className="legend">
          <div className="legend-bloc">
            <div className="legend-text">
              <p>{score*100}%</p>
              <span>de votre <br /> objectif</span>
            </div>
          </div>
        </div>
      <ResponsiveContainer className="chart">
        <RadialBarChart cx="50%" cy="55%" innerRadius="50%" outerRadius="100%" barSize={10} data={chartData} startAngle={-270} endAngle={90}>
          <RadialBar minAngle={15} clockWise dataKey="score" cornerRadius={10} />
          
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Index;

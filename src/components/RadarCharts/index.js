import React, { useEffect, useState } from "react";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import "./styles.scss";
import { getUserPerformance } from "../../service/apiService.js"; 
import { Text } from "recharts";

const Index = ({ userId }) => {
  const [data, setData] = useState([]);
  const typeLegends = ["Intensité", "Vitesse", "Force", "Endurance", "Energie", "Cardio"];

   useEffect(() => {
     // Suppose getUserPerformance is imported from another file
     const fetchData = async () => {
       const result = await getUserPerformance(userId);
       // Adapter vos données en conséquence
       const mappedData = result.data.data.map((item) => ({
         ...item,
         subject: typeLegends[item.kind -1 ],
       }));
       console.log();
       setData(mappedData);
     };

     fetchData();
   }, [userId]);
   
function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
    return (
      <Text
        {...rest}
        verticalAnchor="middle"
        y={y + (y - cy) / 20}
        x={x + (x - cx) / 28}
        fill="white" 
        fontSize="15"
      >
        {payload.value}
      </Text>
    );
}
   return (
     <div style={{ backgroundColor: "rgba(40, 45, 48, 1)" }} className="radarChart">
       <RadarChart cx={150} cy={150} outerRadius={90} width={300} height={300} data={data}>
         <PolarGrid gridType="polygon" stroke="#fff" strokeWidth={1} radialLines={false} />
         <PolarAngleAxis dataKey="subject" tick={(props) => renderPolarAngleAxis(props)} />
         <PolarRadiusAxis angle={30} domain={[0, 250]} tick={false} axisLine={false} tickCount={7} />
         <Radar name="User" dataKey="value" fill="rgba(255, 1, 1, 0.7)"  />
         
       </RadarChart>
     </div>
   );
};

export default Index;

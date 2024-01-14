import React from 'react'
import "./styles.scss";
import { getUserInfo } from "../../service/apiService.js";
import { useEffect, useState } from "react";
import NutrimentsBloc from '../../components/NutrimentsBloc';
import BarCharts from '../../components/BarCharts';
import AverageSessionsChart from '../../components/LineCharts';
import UserPerformance from "../../components/RadarCharts/index.js"
import UserScore from "../../components/RadialBarCharts/index.js"
function Index() {
  
  const [userInfo, setUserInfo] = useState(null);
   const [selectedUserId, setSelectedUserId] = useState("12");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserInfo(selectedUserId);
      setUserInfo(data);
    };

    if (selectedUserId) {
      fetchData();
    }
  }, [selectedUserId]);
  let calorieCount, proteinCount, carbohydrateCount, lipidCount;
 if (userInfo) {

  ({ calorieCount, proteinCount, carbohydrateCount, lipidCount } = userInfo.data.keyData);
 }
  

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Home-bloc">
      <div className="user-select">
        <label htmlFor="user-select">Choisissez un utilisateur :</label>
        <select id="user-select" value={selectedUserId} onChange={(e) => setSelectedUserId(e.target.value)}>
          <option value="12">Karl</option>
          <option value="18">Cecilia</option>
        </select>
      </div>
      <div className="title">
        <h1>
          Bonjour
          <span>{userInfo.data.userInfos.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="main-userInfo">
        <div className="section-graph">
          <BarCharts userId={userInfo.data.id} />
          <div className="container-sub-graph">
            <AverageSessionsChart userId={userInfo.data.id} />
            <UserPerformance userId={userInfo.data.id} />
            <UserScore userId={userInfo.data.id} />
          </div>
        </div>
        <div className="section-nutriment">
          <NutrimentsBloc data={calorieCount} name={"Calories"} units={"Kcal"} imgName={"fire"} />
          <NutrimentsBloc data={proteinCount} name={"Protéines"} units={"g"} imgName={"chicken"} />
          <NutrimentsBloc data={carbohydrateCount} name={"Glucides"} units={"g"} imgName={"apple"} />
          <NutrimentsBloc data={lipidCount} name={"Lipides"} units={"g"} imgName={"cheeseburger"} />
        </div>
      </div>
    </div>
  );
}

export default Index
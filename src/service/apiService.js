import { USER_ACTIVITY, USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../data/data.js";
import { UserModel } from "../models/UserModel.js";
import { UserActivityModel } from "../models/UserActivityModel.js";
import { UserAverageSessionsModel } from "../models/UserAverageSessionsModel.js";
import { UserPerformanceModel } from "../models/UserPerformanceModel.js";


const useMockData = process.env.REACT_APP_USE_MOCK_DATA === "true";

const BASE_URL = "http://localhost:3000/user";

export const getUserInfo = async (userId) => {
  if (useMockData) {
    const mockData = USER_MAIN_DATA.find((user) => user.id === Number(userId));
    if (!mockData) throw new Error("User not found in mock data");
    return new UserModel(mockData);
  } else {
    try {
      const response = await fetch(`${BASE_URL}/${userId}`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      return new UserModel(data.data);
    } catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
      throw error;
    }
  }
};

export const getUserActivity = async (userId) => {
  if (useMockData) {
    const mockData = USER_ACTIVITY.find((activity) => activity.userId === userId);
    if (!mockData) throw new Error("Activity not found in mock data");
    return new UserActivityModel(mockData);
  } else {
    try {
      const response = await fetch(`${BASE_URL}/${userId}/activity`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
     return new UserActivityModel(data.data);
    } catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
      throw error;
    }
  }
};

export const getUserAverageSessions = async (userId) => {
  if (useMockData) {
    const mockData = USER_AVERAGE_SESSIONS.find((session) => session.userId === userId);
    if (!mockData) throw new Error("Average sessions not found in mock data");
    return new UserAverageSessionsModel(mockData);
  } else {
    try {
      const response = await fetch(`${BASE_URL}/${userId}/average-sessions`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      return new UserAverageSessionsModel(data.data);
    } catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
      throw error;
    }
  }
};

export const getUserPerformance = async (userId) => {
  if (useMockData) {
    const mockData = USER_PERFORMANCE.find((performance) => performance.userId === userId);
    if (!mockData) throw new Error("Performance not found in mock data");
    return new UserPerformanceModel(mockData);
  } else {
    try {
      const response = await fetch(`${BASE_URL}/${userId}/performance`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      
      return new UserPerformanceModel(data.data);
    } catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
      throw error;
    }
  }
};







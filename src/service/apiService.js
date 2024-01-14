const BASE_URL = "http://localhost:3000/user";

export const getUserInfo = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/${userId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};

export const getUserActivity = async (userId) => {
  try {
    
    const response = await fetch(`${BASE_URL}/${userId}/activity`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    
    return await response.json();
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};

export const getUserAverageSessions = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/${userId}/average-sessions`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};

export const getUserPerformance = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/${userId}/performance`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};
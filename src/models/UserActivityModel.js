export class UserActivityModel {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
    this.weightName = "Poids (kg)";
    this.caloriesName = "Calories brûlées (kCal)";
  }
}

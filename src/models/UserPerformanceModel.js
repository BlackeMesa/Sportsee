export class UserPerformanceModel {
  constructor(data) {
    this.userId = data.userId;
    this.data = data.data;
    this.typeLegends = ["Intensité", "Vitesse", "Force", "Endurance", "Energie", "Cardio"];
  }
}

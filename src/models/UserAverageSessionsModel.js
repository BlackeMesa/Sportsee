export class UserAverageSessionsModel {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
    this.dayOfWeek = ["L", "Ma", "M", "J", "V", "S", "D"];
  }
}

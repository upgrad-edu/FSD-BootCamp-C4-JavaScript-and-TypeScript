class Planet {
  constructor(name, distance, gravity) {
    this.name = name;
    this.distanceFromSun = distance;
    this.relativeGravity = gravity;
  }
  getName() {
    return this.name;
  }

  getDistance() {
    return this.distanceFromSun;
  }

  getGravity() {
    return this.relativeGravity;
  }
}
const planet = new Planet("Mars", 210 * 1000000, 0.375);
console.log(
  planet.getName() +
    " is " +
    planet.getDistance() +
    " kms away from sun with " +
    planet.getGravity() +
    " as relative gravity when compared to Earth."
);
